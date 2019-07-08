// pages/mySteps/mySteps.js
import { IMG_LIST } from "../../asset/imgList.js"
import { request, saveShareImg, creatShareImg } from "../../utils/util.js"
import { urlList } from "../../asset/urlList.js"
const app = getApp()
Page({
  data: {
    IMG_LIST,
    userInfo: {},
    myStepsList: [],
    showShareImg: false,
    windowWidth: '',
    windowHeight: '',
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
  creatImg() {
    const { days, newSteps } = this.data.userInfo
    const that = this
    const text1 = '我已经连续运动'
    const text2 = days + '天  ' + newSteps + 'K步'
    creatShareImg(that, text1, text2)
  },
  hiddenImg() {
    this.setData({
      showShareImg: false,
    })
  },
  saveImg() {
    const that = this
    const { windowWidth, windowHeight } = this.data
    saveShareImg(that, windowWidth, windowHeight)
  }
})