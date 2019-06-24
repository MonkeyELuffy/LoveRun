// pages/mySteps/mySteps.js
import { IMG_LIST } from "../../asset/imgList.js"
import { request } from "../../utils/util.js"
import { urlList } from "../../asset/urlList.js"
const app = getApp()
Page({
  data: {
    IMG_LIST,
    userInfo: {},
    myStepsList: []
  },
  onLoad: function (options) {
    const { newSteps, days } = options
    let { userInfo } = this.data
    userInfo.newSteps = newSteps
    userInfo.days = days
    this.setData({
      userInfo,
    })
    this.getUserStepList()
  },
  getUserStepList() {
    request('GET', urlList.getUserStepList, {}, app.globalData.openId, this.getUserRankSuccess, this.getUserRankFail)
  },
  getUserRankSuccess(res) {
    this.setData({
      myStepsList: res.data.result.data
    })
  },
  getUserRankFail() {

  },
})