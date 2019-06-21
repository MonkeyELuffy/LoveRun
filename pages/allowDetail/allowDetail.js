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
        this.userLogin(res.userInfo.avatarUrl)
        if (app.globalData.isExist) {
          wx.switchTab({
            url: '../map/index'
          })
        } else {
          wx.navigateTo({
            url: '../form/form',
          })
        }
        console.log("获取信息", res)
      },
      fail: res => {
        console.log("调用失败")
      }
    })
  },
  //将用户登录信息同步到后台
  userLogin(avatarUrl) {
    const data = {
      avatarUrl,
      openId: app.globalData.openId,
    }
    request('POST', urlList.upUserInfo, data, app.globalData.openId)
  },
})