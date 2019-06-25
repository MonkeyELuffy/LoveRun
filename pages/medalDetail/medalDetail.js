// pages/medalDetail/medalDetail.js
import { medalDetailList } from "../../asset/medalDetailList.js"
import { saveShareImg, creatShareImg } from "../../utils/util.js"
Page({
  data: {
    medalDetail: {},
    showShareImg: false,
    windowWidth: '',
    windowHeight: '',
  },
  onLoad: function (options) {
    const { index, lock } = options
    const medalDetail = medalDetailList[index]
    wx.setNavigationBarTitle({
      title: medalDetail.title,
    })
    this.setData({
      medalDetail,
      lock,
    })
  },
  creatImg() {
    const { lock } = this.data
    if (lock === 'true') {
      return
    }
    const that = this
    const text1 = '我已经获得'
    const text2 = that.data.medalDetail.title
    creatShareImg(that, text1, text2)
  },
  hiddenImg() {
    this.setData({
      showShareImg: false,
    })
  },
  saveImg() {
    this.setData({
      showShareImg: false,
    })
    const { windowWidth, windowHeight } = this.data
    saveShareImg(windowWidth, windowHeight)
  }

})