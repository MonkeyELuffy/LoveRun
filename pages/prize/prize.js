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
        text1: '一等奖（3名）:',
        text2: '价值800元 Urbanears Jakan运动耳机⼀副',
        img: IMG_LIST.prize1,
      },
      {
        text1: '二等奖（15名）:',
        text2: '价值249元 华为3运动手环⼀副',
        img: IMG_LIST.prize2,
      },
      {
        text1: '三等奖（30名）:',
        text2: '价值50元 等额话费充值',
        img: IMG_LIST.prize3,
      },
      {
        text1: '四等奖（50名）:',
        text2: '价值30元 等额话费充值',
        img: IMG_LIST.prize3,
      },
      {
        text1: '五等奖（90名）:',
        text2: '价值10元 等额话费充值',
        img: IMG_LIST.prize3,
      },
      {
        text1: '幸运奖:',
        text2: '每周将从参与者中随机抽取幸运者',
        text3: '价值10元 等额话费充值',
        img: IMG_LIST.prize3,
      },
    ]
  },
})