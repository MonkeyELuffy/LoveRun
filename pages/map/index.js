import * as echarts from '../../ec-canvas/echarts';
import geoJson from './mapData.js';

const app = getApp();

function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  echarts.registerMap('henan', geoJson);

  const option = {
    tooltip: {
      trigger: 'item'
    },
    visualMap: {
      min: 0,
      max: 10000,
      left: 'left',
      top: 'bottom',
      text: ['高', '低'], // 文本，默认为数值文本
      calculable: true
    },
    series: [{
      scaleLimit: {
        min: 1,
        max: 3,
      },
      center: [103.97, 30.62],
      roam: true,
      label: {
        show: false
      },
      type: 'map',
      mapType: 'henan',
      label: {
        normal: {
          show: true
        },
        emphasis: {
          textStyle: {
            color: '#fff'
          }
        }
      },
      itemStyle: {
        normal: {
          borderColor: '#389BB7',
          areaColor: '#fff',
        },
        emphasis: {
          areaColor: '#389BB7',
          borderWidth: 0
        }
      },
      animation: false,
      data: [
        { name: '武侯区', value: 135 },
        { name: '新都区', value: 1135 },
        { name: '高新区', value: 9135 },
        { name: '简阳市', value: 135 },
        { name: '天府新区', value: 535 },
        { name: '双流', value: 1135 },
        { name: '郫都区', value: 1135 },
        { name: '锦江区', value: 1135 },
        { name: '青羊区', value: 1135 },
        { name: '金牛区', value: 1135 },
        { name: '成华区', value: 1135 },
        { name: '龙泉驿区', value: 1135 },
        { name: '青白江区', value: 1135 },
        { name: '温江区', value: 1135 },
        { name: '金堂县', value: 1135 },
        { name: '大邑县', value: 1135 },
        { name: '新津', value: 1135 },
        { name: '都江堰市', value: 1135 },
        { name: '彭州市', value: 1135 },
        { name: '崇州市', value: 1135 },
        { name: '邛崃市', value: 1135 },
        { name: '蒲江县', value: 1135 },
      ]

    }],

  };

  chart.setOption(option);

  return chart;
}

Page({
  onShareAppMessage: function (res) {
    return {
      title: 'ECharts 可以在微信小程序中使用啦！',
      path: '/pages/index/index',
      success: function () { },
      fail: function () { }
    }
  },
  data: {
    ec: {
      onInit: initChart
    }
  },

  onReady() {
  }
});
