// pages/medalDetail/medalDetail.js
import { medalDetailList } from "../../asset/medalDetailList.js"
Page({
  data: {
    medalDetail: {},
  },
  onLoad: function (options) {
    const { index } = options
    const medalDetail = medalDetailList[index]
    wx.setNavigationBarTitle({
      title: medalDetail.title,
    })
    this.setData({
      medalDetail,
    })
  },

})