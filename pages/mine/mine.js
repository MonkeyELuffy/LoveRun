// pages/mine/mine.js
import { IMG_LIST } from "../../asset/imgList.js"
import { medalList } from "../../asset/medalList.js"
Page({

  /**
   * 页面的初始数据
   */
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let { userInfo } = this.data
    let newSteps = (userInfo.steps / 1000).toFixed(1)
    userInfo.newSteps = newSteps
    let myMedalList = this.getMyMedalList()
    this.setData({
      userInfo,
      myMedalList,
    })
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

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})