// pages/prize/prize.js
import { IMG_LIST } from "../../asset/imgList.js"
Page({
  data: {
    levelList: [
      '勋章⼀: 10万步',
      '勋章⼆: 20万步',
      '勋章三: 30万步',
      '勋章四: 40万步',
      '勋章五: 50万步',
      '勋章六: 60万步',
      '勋章七: 70万步',
    ],
    prizeList: [
      {
        text1: '一等奖:',
        text2: '价值1000元 Urbanears Jakan运动耳机⼀副',
        text3: '第1-3名完成七枚勋章收集的参与者，将获得价值1,000元的Urbanears Jakan运动⽿机⼀副。',
        img: IMG_LIST.prize1,
      },
      {
        text1: '二等奖:',
        text2: '价值300元 华为3运动手环⼀副',
        text3: '第4-20名完成七枚勋章收集的参与者，将获得价值300元的华为3运动手环一副。',
        img: IMG_LIST.prize2,
      },
      {
        text1: '三等奖:',
        text2: '价值100元 全运营商充值话费卡',
        text3: '第21-25名完成七枚勋章收集的参与者，将获得价值100元，全运营商话费充值卡⼀张。',
        img: IMG_LIST.prize3,
      },
      {
        text1: '四等奖:',
        text2: '价值50元 全运营商充值话费卡',
        text3: '第26-40名完成七枚勋章收集的参与者，将获得价值50元，全运营商话费充值卡⼀张。',
        img: IMG_LIST.prize3,
      },
      {
        text1: '五等奖:',
        text2: '价值10元 全运营商充值话费卡',
        text3: '第41-60名完成七枚勋章收集的参与者，将获得价值10元，全运营商话费充值卡一张',
        img: IMG_LIST.prize3,
      },
      {
        text1: '六等奖:',
        text2: '价值5元 全运营商充值话费卡',
        text3: '第61-100名完成七枚勋章收集的参与者，将获得价值5元，全运营商话费充值卡⼀一张。',
        img: IMG_LIST.prize3,
      },
    ]
  },
})