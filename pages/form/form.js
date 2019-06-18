import { checkPhone, request } from "../../utils/util.js"
import { IMG_LIST } from "../../asset/imgList.js"
import { AREA_LIST } from "../../asset/areaList.js"
import { urlList } from "../../asset/urlList.js"
const app = getApp()

Page({
  data: {
    AREA_LIST,
    index: 0,
    areaCode: 1,
    IMG_LIST,
  },
  bindPickerChange(e) {
    this.setData({
      index: e.detail.value,
      areaCode: AREA_LIST[e.detail.value].code,
    })
  },
  handleSuccess(res) {
    if (res.data.code == 0) {
      wx.switchTab({
        url: '../map/index',
      })
    } else {
      console.log('失败', res.data)
    }
  },
  handleFail(err) {

  },
  formSubmit(e) {
    const { areaCode } = this.data
    let formData = e.detail.value
    if (!formData.name.trim() || !checkPhone(formData.phone.trim())) {
      this.showToast()
      wx.showToast({
        title: '信息不完整',
      })
      return
    }
    const params = {
      username: formData.name.trim(),
      phone: formData.phone.trim(),
      areaId: areaCode,
      openId: app.globalData.openId,
      avatarUrl: app.globalData.userInfo.avatarUrl,
    }
    request('POST', urlList.register, params, app.globalData.openId, this.handleSuccess, this.handleFail)
  },
})