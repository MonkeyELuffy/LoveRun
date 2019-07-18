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
    freshData: false,
    rankType: 0, // 0:area 1: total
    maxPage: 5,
  },
  onLoad: function (options) {
    this.setData({
      canLoad: true,
      rankList: [],
    }, () => {
      this.getUserRank()
      this.loadRank()
    })
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
    const { pageIndex, pageSize, pageCount, canLoad, rankType } = this.data
    if (pageIndex === pageCount || !canLoad) {
      return
    }
    const data = {
      pageIndex: pageIndex+1,
      pageSize,
      type: rankType,
    }
    this.setData({
      freshData: false,
    }, () => {
      this.requestLoadRank(data)
    })
  },
  loadRank() {
    const { pageSize, canLoad, rankType } = this.data
    if (!canLoad) {
      return
    }
    const data = {
      pageIndex: 1,
      pageSize,
      type: rankType,
    }
    this.setData({
      freshData: true,
    }, () => {
      this.requestLoadRank(data)
    })
  },
  requestLoadRank(data) {
    const { pageIndex, rankType, maxPage, freshData }  = this.data

    // 总排行最多请求到第五页，即前一百名
    if (pageIndex === maxPage && rankType === 1 && !freshData) {
      return
    }
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
    let { rankList, freshData, pageIndex } = this.data
    const newRankList = freshData ? res.data.result.data : [...rankList, ...res.data.result.data]
    const newPageIndex = freshData ? 1 : pageIndex + 1
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
  },
  switchToArea() {
    this.switchRankType(0)
  },
  switchToTotal() {
    this.switchRankType(1)
  },
  switchRankType(currentType) {
    const { pageSize, rankType } = this.data
    if (rankType === currentType) {
      return
    }
    const data = {
      pageIndex: 1,
      pageSize,
      type: currentType,
    }
    this.setData({
      pageIndex: 1,
      canLoad: true,
      freshData: true,
      rankType: currentType,
    }, () => {
      this.requestLoadRank(data)
    })
  },
})