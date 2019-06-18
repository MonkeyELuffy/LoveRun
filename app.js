import { urlList } from "asset/urlList.js"
import { request } from "utils/util.js"

App({
  onLaunch () {
    wx.login({
      success: res => {
        // 利用code获取唯一标示openid
        this.getOpenid(res.code)
      }
    })
  },
  handleSuccess(res) {
    if (res.data.code == 0) {
      this.globalData.openId = res.data.result.openId
      this.globalData.isExist = res.data.result.isExist
      if (res.data.result.isExist) {
        wx.switchTab({
          url: '../map/index'
        })
      }
    } else {
      console.log('get openid失败', res.data)
    }
  },
  handleFail(err) {
    console.log('getOpenid err')
  },
  // 获取Openid
  getOpenid(code) {
    request('POST', urlList.getOpenId, { code }, this.globalData.openId, this.handleSuccess, this.handleFail)
  },
  globalData: {
    userInfo: {},
    openId: '',
    isExist: false,
  }
})