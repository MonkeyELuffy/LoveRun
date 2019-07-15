// pages/rank/rank.js
import { IMG_LIST } from "../../asset/imgList.js"
import { request, getAreaName } from "../../utils/util.js"
import { urlList } from "../../asset/urlList.js"
const app = getApp()

Page({
  data: {
    rankImg: [IMG_LIST.num1, IMG_LIST.num2, IMG_LIST.num3],
    star0: IMG_LIST.pink0,
    star1: IMG_LIST.pink1,
    defaultAvatar: IMG_LIST.defaultAvatar,
    myRank: {
      areaName: '区域',
      name: '姓名',
      steps: 0,
      likes: 0,
      rank: 0,
    },
    rankList: [],
    pageIndex: 1,
    pageSize: 20,
    pageCount: 1,
    fresh: false,
  },
  onLoad: function (options) {
    this.setData({
      canLoad: true,
      rankList: [],
    })
    this.getUserRank()
    this.loadRank()
  },
  getUserRank() {
    request('GET', urlList.getUserRank, {}, app.globalData.openId, this.getUserRankSuccess, this.getUserRankFail)
  },
  getUserRankSuccess(res) {
    this.setData({
      myRank: res.data.result
    })
  },
  getUserRankFail() {

  },
  loadMoreRank() {
    const { pageIndex, pageSize, pageCount, canLoad } = this.data
    if (pageIndex === pageCount || !canLoad) {
      return
    }
    const data = {
      pageIndex: pageIndex+1,
      pageSize,
    }
    this.setData({
      fresh: false,
    })
    this.requestLoadRank(data)
  },
  loadRank() {
    const { pageSize, canLoad } = this.data
    if (!canLoad) {
      return
    }
    const data = {
      pageIndex: 1,
      pageSize,
    }
    this.setData({
      fresh: true,
    })
    this.requestLoadRank(data)
  },
  requestLoadRank(data) {
    const that =  this
    that.setData({
      canLoad: false
    })
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 600)
    request('POST', urlList.getPersonRankList, data, app.globalData.openId, this.getPersonRankSuccess, this.getPersonRankFail)
    // 1000ms之后才可以继续加载，防止加载请求过多
    setTimeout(function () {
      that.setData({
        canLoad: true
      })
    }, 1000)
  },
  getPersonRankSuccess(res) {
    let { rankList, fresh, pageIndex } = this.data
    const newRankList = fresh ? res.data.result.data : [...rankList, ...res.data.result.data]
    const newPageIndex = fresh ? 1 : pageIndex + 1
    this.setData({
      rankList: newRankList,
      pageCount: res.data.result.pageCount,
      pageIndex: newPageIndex,
    })
  },
  getPersonRankFail() {

  },
  likeStep(e) {
    if (!e.currentTarget.dataset.isMyLike) {
      request('POST', urlList.likeStep, {stepId: e.currentTarget.dataset.stepId}, app.globalData.openId, this.getLikeStepSuccess(e.currentTarget.dataset.index))
    }
  },
  getLikeStepSuccess(index, res) {
    let { rankList } = this.data
    rankList[index].isMyLike = true
    rankList[index].likes += 1
    this.setData({
      rankList,
    })
  }
})