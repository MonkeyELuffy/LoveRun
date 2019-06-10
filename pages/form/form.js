import { checkPhone } from "../../utils/util.js"
import { imgUrl } from "../../asset/imgUrl.js"
Page({
  data: {
    area: ['武侯区', '金牛区', '锦江区', '双流区'],
    index: 0,
    bg: imgUrl.formBg
  },
  onLoad: function (options) {

  },
  onShow: function () {

  },
  bindPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  formSubmit(e) {
    let formData = e.detail.value
    // if (!formData.name.trim()) {
    //   console.log('name is wrong')
    //   return
    // }
    // if (!checkPhone(formData.phone.trim())) {
    //   console.log('phone is wrong')
    //   return
    // }
    formData.name = formData.name.trim()
    formData.phone = formData.phone.trim()
    console.log('form发生了submit事件，携带数据为：', formData)
    wx.switchTab({
      url: '../map/index',
    })
  },
})