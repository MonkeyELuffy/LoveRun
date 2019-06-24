// pages/mine/mine.js
import { IMG_LIST } from "../../asset/imgList.js"
import { medalList } from "../../asset/medalList.js"
import { request } from "../../utils/util.js"
import { urlList } from "../../asset/urlList.js"
const app = getApp()
Page({
  data: {
    userInfo: {
      name: 'Kevin',
      area: '高新区',
      avatar: IMG_LIST.defaultAvatar,
      stars: 334,
      steps: 2292539,
      days: 23,
    },
    IMG_LIST,
    myMedalList: []
  },
  onLoad: function (options) {
    let { userInfo } = this.data
    let newSteps = (userInfo.steps / 1000).toFixed(1)
    userInfo.newSteps = newSteps
    userInfo.avatarUrl = app.globalData.userInfo.avatarUrl || IMG_LIST.defaultAvatar
    let myMedalList = this.getMyMedalList()
    this.setData({
      userInfo,
      myMedalList,
    })
    this.getUserInfo()
  },
  getMyMedalList() {
    let { userInfo, myMedalList } = this.data
    let steps = parseInt((userInfo.steps / 1000).toFixed(1) / 1000)
    for (let i = 0; i < steps; i++) {
      myMedalList.push(medalList[i])
    }
    for (let i = 0; i < 7 - steps; i++) {
      myMedalList.push(medalList[7])
    }
    return myMedalList
  },
  getUserInfo() {
    request('GET', urlList.getUserInfo, {}, app.globalData.openId, this.getUserInfoSuccess, this.getUserInfoFail)
  },
  getUserInfoSuccess(res) {
    console.log('res', res.data)
  },
  getUserInfoFail() {

  },
  clickMyStep() {
    wx.navigateTo({
      url: '../mySteps/mySteps',
    })
  },
  goMedalDetail() {
    wx.navigateTo({
      url: '../medalDetail/medalDetail',
    })
  },
})