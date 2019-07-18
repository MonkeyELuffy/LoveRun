// pages/allowDetail/allowDetail.js
import { urlList } from "../../asset/urlList.js"
import { request } from "../../utils/util.js"
import { IMG_LIST } from "../../asset/imgList.js"
const app = getApp()

Page({
  data: {
    IMG_LIST,
  },
  getUserInfo() {
    wx.getUserInfo({ //获取用户的授权信息
      success: res => {
        app.globalData.userInfo = res.userInfo
        wx.login({
          success: res => {
            this.getOpenid(res.code)
          }
        })
        console.log("获取信息", res)
      },
      fail: res => {
        console.log("调用失败")
      }
    })
  },
  // 获取Openid
  getOpenid(code) {
    request('POST', urlList.getOpenId, { code }, app.globalData.openId, this.handleSuccess, this.handleFail)
  },
  handleSuccess(res) {
    if (res.data.code == 0) {
      app.globalData.openId = res.data.result.openId
      app.globalData.isExist = res.data.result.isExist
      if (res.data.result.isExist) {
        wx.switchTab({
          url: '../map/index'
        })
      } else {
        wx.navigateTo({
          url: '../form/form',
        })
      }
    } else {
      console.log('get openid失败', res.data)
    }
  },
  handleFail(err) {
    console.log('getOpenid err')
  },
})