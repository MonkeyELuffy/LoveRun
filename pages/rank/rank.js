// pages/rank/rank.js
import { imgUrl } from "../../asset/imgUrl.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rankImg: [imgUrl.num1, imgUrl.num2, imgUrl.num3],
    myRank: {
      rankNum: 21,
      avatar: imgUrl.defaultAvatar,
      step: 11234,
      star: 12,
      area: '武侯区',
      name: 'Kevin',
      isUser: true,
    },
    star0: imgUrl.pink0,
    star1: imgUrl.pink1,
    rankList: [
      {
        rankNum: 1,
        avatar: imgUrl.defaultAvatar,
        step: 31234,
        star: 12,
        area: '武侯区',
        name: 'Kevin',
        userLike: true,
      },
      {
        rankNum: 2,
        avatar: imgUrl.defaultAvatar,
        step: 21234,
        star: 12,
        area: '武侯区',
        name: 'Kevin',
        userLike: true,
      },
      {
        rankNum: 3,
        avatar: imgUrl.defaultAvatar,
        step: 11234,
        star: 12,
        area: '武侯区',
        name: 'Kevin',
        userLike: false,
      },
      {
        rankNum: 4,
        avatar: imgUrl.defaultAvatar,
        step: 110,
        star: 12,
        area: '武侯区',
        name: 'Kevin',
        userLike: false,
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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