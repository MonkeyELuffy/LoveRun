import * as echarts from '../../ec-canvas/echarts'
import geoJson from './mapData.js'
import { request } from "../../utils/util.js"
import { urlList } from "../../asset/urlList.js"
import { IMG_LIST } from "../../asset/imgList.js"
const app = getApp()
let Chart = null
let rankList = []
let splitList = []

Page({
  onShareAppMessage: function (res) {
    return {
      title: '快来参加先锋活力跑',
      path: '/pages/map/index',
    }
  },
  data: {
    IMG_LIST,
    rankListImg: [IMG_LIST.num1, IMG_LIST.num2, IMG_LIST.num3],
    ec: {
      lazyLoad: true, // 延迟加载
    },
    rankList: [],
    nowDate: '',
  },
  handleSuccess(res) {
    if (res.data.code == 0) {
      wx.showToast({
        title: '上传步数成功',
      })
    } else {
      wx.showToast({
        title: '上传步数失败',
      })
    }
  },
  handleFail(err) {

  },
  getRankList() {
    // 请求首页区域步数
    request('GET', urlList.getRankList, {}, app.globalData.openId, this.getRankListSuccess, this.getRankListFail)
  },
  onLoad() {
    this.echartsComponnet = this.selectComponent('#mychart');
    this.setTodayDate()
    this.getRankList()
    this.stepLoad()
  },
  stepLoad() {
    const that = this
    wx.getWeRunData({
      success(res) {
        request('POST', urlList.stepLoad, res, app.globalData.openId, that.handleSuccess, that.handleFail)
      },
      fail() {
        wx.showModal({
          title: '获取步数失败',
          content: '进入小程序设置，开启微信运动步数',
          showCancel: false,
        })
      }
    })
  },
  setTodayDate() {
    const nowDate = new Date()
    const nowDateStr = nowDate.getFullYear() + '.' + (nowDate.getMonth() + 1) + '.' + nowDate.getDate()
    this.setData({
      nowDate: nowDateStr
    })
  },
  getRankListSuccess(res) {
    rankList = []
    res.data.result.rankList.map(item => {
      if (item) {
        rankList.push({name: item.name, value: item.sum})
      }
    })
    splitList = res.data.result.splitList
    this.setData({
      rankList: res.data.result.rankList
    })
    if (!Chart){
      this.initEcharts(); //初始化图表
    }else{
      this.setOption(Chart); //更新数据
    }
  },
  getRankListFail() {
    wx.showModal({
      title: '温馨提示',
      content: '获取排名失败，请稍后重试',
      showCancel: false,
      success(res) {
        if (res.confirm) {
          this.getRankList()
        }
      }
    })
  },
  initEcharts() {
    this.echartsComponnet.init((canvas, width, height) => {
      const Chart = echarts.init(canvas, null, {
        width: width,
        height: height
      })
      canvas.setChart(Chart)
      echarts.registerMap('henan', geoJson)
      Chart.setOption(this.getOption())
      return Chart
    })
  },
  setOption() {
    Chart.clear();  // 清除
    Chart.setOption(this.getOption());
  },
  getOption() {
    let option = {
      dataRange: {
        left: 'right',
        top: 60,
        splitList: splitList, 
        textStyle: {
          color: '#af271d',
          fontSize: 12,
        },
        color: ['#ff271d', '#f5cecd']
      },
      tooltip: {
        formatter: "{b} : {c}",
        position: p => {
          return [p[0] - 50, p[1] - 20]
        },
      },
      series: [{
        scaleLimit: {
          min: 1.3,
          max: 1.3,
        },
        center: [103.97, 30.62],
        roam: false,  //地图拖动
        type: 'map',
        mapType: 'henan',
        label: {
          normal: { //文字未选中状态
            show: true,
            textStyle: {
              color: '#b4403f',
              fontSize: 14,
            }
          },
          emphasis: { //文字选中状态
            textStyle: {
              color: '#fff',
              fontSize: 14,
            }
          }
        },
        itemStyle: {
          normal: { //区域未选中状态
            borderColor: '#fff',
            borderWidth: 2,
          },
          emphasis: { //区域选中状态
            areaColor: '#a5d1db',
          }
        },
        data: rankList,
      }],
    }
    return option
  },
})
