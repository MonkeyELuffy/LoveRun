const urlList = {
    getRankList: '/step/rankList', // 获取当日当区域步数排名
    getOpenId: '/user/login', // 会员接口
    register: '/user/register', // 注册
    upUserInfo: '/user/update', // 上传用户信息
    stepLoad: '/step/upload', // 上传步数
    getUserInfo: '', // 获取用户信息
    getUserStepList: '', // 获取用户30天运动记录
    
}
const baseUrl = 'http://192.168.1.10:9000'

module.exports = {
    urlList,
    baseUrl,
}