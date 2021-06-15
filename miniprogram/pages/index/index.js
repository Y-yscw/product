//index.js
const app = getApp()
import * as echarts from '../../ec-canvas/echarts';
function initChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // 像素
  });
  canvas.setChart(chart);
  var option1={
    series : [
      {
        name: '访问来源',
        type: 'pie',    // 设置图表类型为饼图
        radius: '55%',  // 饼图的半径，外半径为可视区尺寸（容器高宽中较小一项）的 55% 长度。
        data: [          // 数据数组，name 为数据项名称，value 为数据项值
          {value: 240, name: '产品B'},
          {value: 230, name: '产品C'},
          {value: 250, name: '产品D'},
          {value: 180, name: '产品E'},
          {value: 100, name: '产品A'}
        ],
      }
    ],
    label:{
      show: true,
      formatter: '{b}:{c}({d}%)'
}
  }
  chart.setOption(option1);
  return chart;
}

Page({
  data: {
    ec: {
      onInit: initChart
    },
  }
});

