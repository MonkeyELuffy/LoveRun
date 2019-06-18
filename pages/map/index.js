import * as echarts from '../../ec-canvas/echarts'
import geoJson from './mapData.js'
import { request } from "../../utils/util.js"
import { urlList } from "../../asset/urlList.js"
import { IMG_LIST } from "../../asset/imgList.js"
const app = getApp()

function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  })
  canvas.setChart(chart)
  echarts.registerMap('henan', geoJson)
  const option = {
    dataRange: {
      left: 'right',
      top: 60,
      splitList: [
        { start: 5000, label: '5000w以上' },
        { start: 3000, end: 5000, label: '3000w到5000w' },
        { start: 2000, end: 3000, label: '2000w到3000w' },
        { end: 2000, label: '2000w以下',},
      ], 
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
      data: [
        { name: '武侯区', value: 135 },
        { name: '新都区', value: 1135 },
        { name: '高新区', value: 9135 },
        { name: '简阳市', value: 135 },
        { name: '天府新区', value: 535 },
        { name: '双流区', value: 1135 },
        { name: '郫都区', value: 2135 },
        { name: '锦江区', value: 3135 },
        { name: '青羊区', value: 4135 },
        { name: '金牛区', value: 5135 },
        { name: '成华区', value: 26135 },
        { name: '龙泉驿区', value: 7135 },
        { name: '青白江区', value: 8135 },
        { name: '温江区', value: 9135 },
        { name: '金堂县', value: 40135 },
        { name: '大邑县', value: 11135 },
        { name: '新津县', value: 1235 },
        { name: '都江堰市', value: 13135 },
        { name: '彭州市', value: 1135 },
        { name: '崇州市', value: 1135 },
        { name: '邛崃市', value: 1135 },
        { name: '蒲江县', value: 1135 },
      ]
    }],
  }
  chart.setOption(option)
  return chart
}

Page({
  onShareAppMessage: function (res) {
    return {
      title: '快来参加先锋活力跑',
      path: '/pages/map/index',
    }
  },
  data: {
    IMG_LIST,
    ec: {
      onInit: initChart
    },
    rankList: [
      {
        area: '武侯区',
        total: 2432,
        peoples: 1122,
        img: IMG_LIST.num1,
        rank: 1,
      },
      {
        area: '青羊区',
        total: 2432,
        peoples: 1122,
        img: IMG_LIST.num2,
        rank: 2,
      },
      {
        area: '金牛区',
        total: 1432,
        peoples: 1122,
        img: IMG_LIST.num3,
        rank: 3,
      },
      {
        area: '金牛区',
        total: 1432,
        peoples: 1122,
        img: IMG_LIST.num3,
        rank: 4,
      },
      {
        area: '金牛区',
        total: 1432,
        peoples: 1122,
        img: IMG_LIST.num3,
        rank: 5,
      },
      {
        area: '金牛区',
        total: 1432,
        peoples: 1122,
        img: IMG_LIST.num3,
        rank: 6,
      },
      {
        area: '金牛区',
        total: 1432,
        peoples: 1122,
        img: IMG_LIST.num3,
        rank: 7,
      },
    ],
    nowDate: '2019.05.20',
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
  onLoad() {
    const that = this
    wx.getWeRunData({
      success(res) {
        request('POST', urlList.stepLoad, res, app.globalData.openId, that.handleSuccess, that.handleFail)
      },
      fail() {
        // 提示
        wx.showToast({
          title: '用户拒绝',
        })
      }
    })
  },
})
