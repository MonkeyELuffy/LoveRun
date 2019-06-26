// pages/mine/mine.js
import { IMG_LIST } from "../../asset/imgList.js"
import { medalList } from "../../asset/medalList.js"
import { request } from "../../utils/util.js"
import { urlList } from "../../asset/urlList.js"
const app = getApp()
Page({
  data: {
    userInfo: {},
    IMG_LIST,
    myMedalList: [],
  },
  onLoad: function (options) {
    this.getUserInfo()
  },
  getMyMedalList() {
    let { userInfo } = this.data
    let steps = parseInt(userInfo.steps / 100000) // 每10w步一个勋章
    for (let i = 0; i < steps; i++) {
      medalList[i].lock = false
    }
    return medalList
  },
  getUserInfo() {
    request('GET', urlList.getUserInfo, {}, app.globalData.openId, this.getUserInfoSuccess, this.getUserInfoFail)
  },
  getUserInfoSuccess(res) {
    let userInfo = res.data.result
    let newSteps = (userInfo.steps / 1000).toFixed(1)
    userInfo.newSteps = newSteps
    let myMedalList = this.getMyMedalList()
    this.setData({
      userInfo,
      myMedalList,
    })
  },
  getUserInfoFail() {

  },
  clickMyStep() {
    const { userInfo } = this.data
    wx.navigateTo({
      url: '../mySteps/mySteps?newSteps=' + userInfo.newSteps + '&days=' + userInfo.days,
    })
  },
  clickRule() {
    wx.navigateTo({
      url: '../about/about',
    })
  }, 
  clickPrize() {
    wx.navigateTo({
      url: '../prize/prize',
    })
  }, 
  goMedalDetail(e) {
    const index = e.currentTarget.dataset.index
    const { myMedalList } = this.data
    const lock = myMedalList[index].lock
    wx.navigateTo({
      url: '../medalDetail/medalDetail?index=' + index + '&lock=' + lock,
    })
  },
})