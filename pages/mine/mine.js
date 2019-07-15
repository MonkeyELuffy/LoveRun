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
  onShow: function (options) {
    this.getUserInfo()
  },
  getMyMedalList(userSteps) {
    let steps = parseInt(userSteps / 100000) // 每10w步一个勋章
    steps = steps > 7 ? 7 : steps
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
    let myMedalList = this.getMyMedalList(res.data.result.steps)
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
    const lock = myMedalList[index].lock ? 1 : 0
    wx.navigateTo({
      url: '../medalDetail/medalDetail?index=' + index + '&lock=' + lock,
    })
  },
})