import { checkPhone, request } from "../../utils/util.js"
import { IMG_LIST } from "../../asset/imgList.js"
import { AREA_LIST } from "../../asset/areaList.js"
import { urlList } from "../../asset/urlList.js"
const app = getApp()

Page({
  data: {
    AREA_LIST,
    index: 0,
    areaCode: 0,
    IMG_LIST,
  },
  bindPickerChange(e) {
    this.setData({
      index: e.detail.value,
      areaCode: AREA_LIST[e.detail.value].code,
    })
  },
  goRules() {
    wx.navigateTo({
      url: '../about/about',
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
    if (!formData.name.trim()) {
      wx.showToast({
        title: '请输入用户名',
        icon: 'none',
      })
      return
    }
    if (!checkPhone(formData.phone.trim())) {
      wx.showToast({
        title: '请输入电话',
        icon: 'none',
      })
      return
    }
    if (areaCode === 0) {
      wx.showToast({
        title: '请选择所在区域',
        icon: 'none',
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