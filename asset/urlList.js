const urlList = {
  register: '/user/register', // 注册
  getOpenId: '/user/login', // 会员接口
  upUserInfo: '/user/update', // 上传用户信息
  getUserInfo: '/user/info', // 获取用户信息
  stepLoad: '/step/upload', // 上传步数
  getRankList: '/step/todayAreaRank', // 获取区域步数排名
  getUserStepList: '/step/personHisSteps', // 获取用户30天运动记录
  getUserRank: '/step/myTodaySteps', //获取用户当日排名
  getPersonRankList: '/step/personRank', // 获取区域个人排行列表
  likeStep: '/step/likeStep', //点赞
}
const baseUrl = 'https://lr.cdstwlkj.com'
module.exports = {
  urlList,
  baseUrl,
}