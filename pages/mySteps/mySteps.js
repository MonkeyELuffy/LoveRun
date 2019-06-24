// pages/mySteps/mySteps.js
import { IMG_LIST } from "../../asset/imgList.js"
import { request } from "../../utils/util.js"
import { urlList } from "../../asset/urlList.js"
const app = getApp()
Page({
  data: {
    IMG_LIST,
    userInfo: {
      name: 'Kevin',
      area: '高新区',
      avatar: IMG_LIST.defaultAvatar,
      stars: 334,
      steps: 2292539,
      days: 23,
    },
    myStepsList: [
      {
        num: 12344,
        date: '2019.06.06'
      },
      {
        num: 12344,
        date: '2019.06.06'
      },
      {
        num: 12344,
        date: '2019.06.06'
      },
      {
        num: 12344,
        date: '2019.06.06'
      },
      {
        num: 12344,
        date: '2019.06.06'
      },
      {
        num: 12344,
        date: '2019.06.06'
      },
      {
        num: 12344,
        date: '2019.06.06'
      },
      {
        num: 12344,
        date: '2019.06.06'
      },
      {
        num: 12344,
        date: '2019.06.06'
      },
      {
        num: 12344,
        date: '2019.06.06'
      },
      {
        num: 12344,
        date: '2019.06.06'
      },
      {
        num: 12344,
        date: '2019.06.06'
      },
      {
        num: 12344,
        date: '2019.06.06'
      },
      {
        num: 12344,
        date: '2019.06.06'
      },
      {
        num: 12344,
        date: '2019.06.06'
      },
      {
        num: 12344,
        date: '2019.06.06'
      },
    ]
  },
  onLoad: function (options) {
    let { userInfo } = this.data
    let newSteps = (userInfo.steps / 1000).toFixed(1)
    userInfo.newSteps = newSteps
    this.setData({
      userInfo,
    })
  },
  getUserRank() {
    request('GET', urlList.getUserRank, {}, app.globalData.openId, this.getUserRankSuccess, this.getUserRankFail)
  },
  getUserRankSuccess(res) {
    console.log(res.data)
    this.setData({
      myStepsList: res.date.result
    })
  },
  getUserRankFail() {

  },
})