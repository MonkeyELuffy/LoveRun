// pages/rank/rank.js
import { IMG_LIST } from "../../asset/imgList.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rankImg: [IMG_LIST.num1, IMG_LIST.num2, IMG_LIST.num3],
    myRank: {
      rankNum: 21,
      avatar: IMG_LIST.defaultAvatar,
      step: 11234,
      star: 12,
      area: '武侯区',
      name: 'Kevin',
      isUser: true,
    },
    star0: IMG_LIST.pink0,
    star1: IMG_LIST.pink1,
    rankList: [
      {
        rankNum: 1,
        avatar: IMG_LIST.defaultAvatar,
        step: 31234,
        star: 12,
        area: '武侯区',
        name: 'Kevin',
        userLike: true,
      },
      {
        rankNum: 2,
        avatar: IMG_LIST.defaultAvatar,
        step: 21234,
        star: 12,
        area: '武侯区',
        name: 'Kevin',
        userLike: true,
      },
      {
        rankNum: 3,
        avatar: IMG_LIST.defaultAvatar,
        step: 11234,
        star: 12,
        area: '武侯区',
        name: 'Kevin',
        userLike: false,
      },
      {
        rankNum: 4,
        avatar: IMG_LIST.defaultAvatar,
        step: 110,
        star: 12,
        area: '武侯区',
        name: 'Kevin',
        userLike: false,
      },
      {
        rankNum: 5,
        avatar: IMG_LIST.defaultAvatar,
        step: 110,
        star: 12,
        area: '武侯区',
        name: 'Kevin',
        userLike: false,
      },
      {
        rankNum: 6,
        avatar: IMG_LIST.defaultAvatar,
        step: 110,
        star: 12,
        area: '武侯区',
        name: 'Kevin',
        userLike: false,
      },
      {
        rankNum: 7,
        avatar: IMG_LIST.defaultAvatar,
        step: 110,
        star: 12,
        area: '武侯区',
        name: 'Kevin',
        userLike: false,
      },
      {
        rankNum: 8,
        avatar: IMG_LIST.defaultAvatar,
        step: 110,
        star: 12,
        area: '武侯区',
        name: 'Kevin',
        userLike: false,
      },
      {
        rankNum: 9,
        avatar: IMG_LIST.defaultAvatar,
        step: 110,
        star: 12,
        area: '武侯区',
        name: 'Kevin',
        userLike: false,
      },
      {
        rankNum: 10,
        avatar: IMG_LIST.defaultAvatar,
        step: 110,
        star: 12,
        area: '武侯区',
        name: 'Kevin',
        userLike: false,
      },
      {
        rankNum: 11,
        avatar: IMG_LIST.defaultAvatar,
        step: 110,
        star: 12,
        area: '武侯区',
        name: 'Kevin',
        userLike: false,
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  loadMoreRank() {
    let { rankList } = this.data
    this.setData({
      rankList: [...rankList, ...rankList]
    })
  },
  reloadRank() {
    const rankList = [
      {
        rankNum: 1,
        avatar: IMG_LIST.defaultAvatar,
        step: 31234,
        star: 12,
        area: '武侯区',
        name: 'Kevin',
        userLike: true,
      },
      {
        rankNum: 2,
        avatar: IMG_LIST.defaultAvatar,
        step: 21234,
        star: 12,
        area: '武侯区',
        name: 'Kevin',
        userLike: true,
      },
      {
        rankNum: 3,
        avatar: IMG_LIST.defaultAvatar,
        step: 11234,
        star: 12,
        area: '武侯区',
        name: 'Kevin',
        userLike: false,
      },
      {
        rankNum: 4,
        avatar: IMG_LIST.defaultAvatar,
        step: 110,
        star: 12,
        area: '武侯区',
        name: 'Kevin',
        userLike: false,
      },
      {
        rankNum: 5,
        avatar: IMG_LIST.defaultAvatar,
        step: 110,
        star: 12,
        area: '武侯区',
        name: 'Kevin',
        userLike: false,
      },
      {
        rankNum: 6,
        avatar: IMG_LIST.defaultAvatar,
        step: 110,
        star: 12,
        area: '武侯区',
        name: 'Kevin',
        userLike: false,
      },
      {
        rankNum: 7,
        avatar: IMG_LIST.defaultAvatar,
        step: 110,
        star: 12,
        area: '武侯区',
        name: 'Kevin',
        userLike: false,
      },
      {
        rankNum: 8,
        avatar: IMG_LIST.defaultAvatar,
        step: 110,
        star: 12,
        area: '武侯区',
        name: 'Kevin',
        userLike: false,
      },
      {
        rankNum: 9,
        avatar: IMG_LIST.defaultAvatar,
        step: 110,
        star: 12,
        area: '武侯区',
        name: 'Kevin',
        userLike: false,
      },
      {
        rankNum: 10,
        avatar: IMG_LIST.defaultAvatar,
        step: 110,
        star: 12,
        area: '武侯区',
        name: 'Kevin',
        userLike: false,
      },
      {
        rankNum: 11,
        avatar: IMG_LIST.defaultAvatar,
        step: 110,
        star: 12,
        area: '武侯区',
        name: 'Kevin',
        userLike: false,
      },
    ]
    console.log('reloadRank')
    this.setData({
      rankList,
    })
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