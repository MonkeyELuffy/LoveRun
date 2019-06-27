import { baseUrl } from "../asset/urlList.js"
import { IMG_LIST } from "../asset/imgList.js"
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const checkPhone = phone => {
  const reg = /^((1[3-8][0-9])+\d{8})$/
  return reg.test(phone)
}

const request = (method, url, data, openId, success, fail, complete) => {
  wx.request({
    url: baseUrl + url,
    header: {
      'content-type': 'application/x-www-form-urlencoded',
      openId,
    },
    data,
    method,
    success: res => {
      success && success(res)
    },
    fail: err => {
      fail && fail()
    },
    complete: () => {
      complete && complete()
    }
  })
}

const saveShareImg = (that, windowWidth, windowHeight) => {
  wx.canvasToTempFilePath({
    x: 50,
    y: 50,
    width: windowWidth - 50 * 2,
    height: windowHeight - 90 * 2,
    destWidth: (windowWidth - 50) * 2,
    destHeight: (windowHeight - 90) * 2,
    canvasId: 'shareCanvas',
    success(res) {
      wx.saveImageToPhotosAlbum({
        filePath: res.tempFilePath,
        success(res) {
          wx.showModal({
            title: '保存成功',
            content: '图片成功保存到相册了，快去分享朋友圈吧',
            showCancel: false,
            confirmText: '好的',
            confirmColor: '#818FFB',
            success(res) {
              if (res.confirm) {
                that.setData({
                  showShareImg: false,
                })
              }
            }
          })
        }
      })
    }
  })
}

const creatShareImg = (that, text1, text2) => {
  wx.showLoading({
    title: '分享图片生成中...',
    icon: 'loading',
    duration: 1000,
    mask: true,
  })
  wx.getSystemInfo({
    success(res) {
      wx.hideLoading()
      const windowWidth = res.windowWidth
      const windowHeight = res.windowHeight
      const ctx = wx.createCanvasContext('shareCanvas')
      ctx.drawImage(IMG_LIST.formBg, 50, 50, windowWidth - 50 * 2, windowHeight - 90 * 2)
      ctx.setTextAlign('center')
      ctx.setFillStyle('#ea5d4f')
      ctx.setFontSize(windowWidth / 20 - 4)
      ctx.fillText(text1, windowWidth / 2, windowHeight / 2 - windowWidth / 20 - 4)
      ctx.setTextAlign('center')
      ctx.setFillStyle('#ea5d4f')
      ctx.setFontSize(windowWidth / 20 - 4)
      ctx.fillText(text2, windowWidth / 2, windowHeight / 2 + 8)
      ctx.setTextAlign('center')
      ctx.setFillStyle('#ea5d4f')
      ctx.setFontSize(windowWidth / 20 - 4)
      ctx.fillText('快来参加“先锋活力跑”', windowWidth / 2, windowHeight / 2 + windowWidth / 20 + 16)
      ctx.drawImage(IMG_LIST.medal1, windowWidth / 3, windowHeight * 5 / 9, windowWidth / 3, windowWidth / 3)
      ctx.draw()
      that.setData({
        showShareImg: true,
        windowWidth,
        windowHeight,
      })
    }
  })
}

module.exports = {
  formatTime,
  checkPhone,
  request,
  saveShareImg,
  creatShareImg,
}