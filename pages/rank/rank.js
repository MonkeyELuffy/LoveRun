// pages/rank/rank.js
import { IMG_LIST } from "../../asset/imgList.js"
import { request } from "../../utils/util.js"
import { urlList } from "../../asset/urlList.js"
const app = getApp()

Page({
  data: {
    rankImg: [IMG_LIST.num1, IMG_LIST.num2, IMG_LIST.num3],
    star0: IMG_LIST.pink0,
    star1: IMG_LIST.pink1,
    myRank: {},
    rankList: [],
  },
  onLoad: function (options) {
    this.reloadRank()
    this.getUserRank()
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
    let { rankList } = this.data
    this.setData({
      rankList: [...rankList, ...rankList]
    })
  },
  reloadRank() {
    const data = {
      pageIndex: 1,
      pageSize: 20,
    }
    request('POST', urlList.getPersonRankList, data, app.globalData.openId, this.getPersonRankSuccess, this.getPersonRankFail)

  },
  getPersonRankSuccess(res) {
    this.setData({
      rankList: res.data.result.data
    })
  },
  getPersonRankFail() {

  },
  likeStep(e) {
    console.log(e.currentTarget.dataset.stepId)
    console.log(e.currentTarget.dataset.index)
    console.log(e.currentTarget.dataset.item)
    console.log(this.rankList)
    if (!e.currentTarget.dataset.item.isMyLike) {
      request('POST', urlList.likeStep, {stepId: e.currentTarget.dataset.stepId}, app.globalData.openId, this.getLikeStepSuccess)
    }
    let { rankList } = this.data
    rankList[index].isMyLike = true
    this.setData({
      rankList,
    })
  },
  getLikeStepSuccess(res) {
    console.log('getLikeStepSuccess', res)
  }
})