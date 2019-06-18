import { baseUrl } from "../asset/urlList.js"
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

function request(method, url, data, openId, success, fail, complete) {
  console.log('openId', openId)
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

module.exports = {
  formatTime,
  checkPhone,
  request,
}