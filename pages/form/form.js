import { checkPhone } from "../../utils/util.js"
import { IMG_LIST } from "../../asset/imgList.js"
import { AREA_LIST } from "../../asset/areaList.js"
Page({
  data: {
    AREA_LIST,
    index: 0,
    areaCode: 0,
    IMG_LIST,
  },
  onLoad: function (options) {

  },
  onShow: function () {

  },
  bindPickerChange(e) {
    
    this.setData({
      index: e.detail.value,
      areaCode: AREA_LIST[e.detail.value].code,
    })
  },
  formSubmit(e) {
    const { areaCode } = this.data
    let formData = e.detail.value
    if (!formData.name.trim()) {
      console.log('name is wrong')
      return
    }
    if (!checkPhone(formData.phone.trim())) {
      console.log('phone is wrong')
      return
    }
    formData.name = formData.name.trim()
    formData.phone = formData.phone.trim()
    formData.areaCode = areaCode
    console.log('form发生了submit事件，携带数据为：', formData)
    wx.switchTab({
      url: '../map/index',
    })
  },
})