import * as echarts from '../../ec-canvas/echarts';

const app = getApp();
const url = 'https://dangjian.suitaquba.com/a/app/';

function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: 300
  });
  canvas.setChart(chart);
  var header = getApp().globalData.header;
  if (wx.getStorageSync('sessionId') == '') {
    wx.redirectTo({
      url: '../login/login'
    })
  } else {
    wx.request({
      url: url + 'getActivityByUserStatistics',
      method: 'GET',
      header: header,
      success: function(res) {
        var tiao = [];
        var num = [];
        for (var i = 0; i < res.data.data.length; i++) {
          tiao.push(res.data.data[i].num);
          num.push(res.data.data[i].name)
        }
        var option = {
          title: {
            text: '党信息发布量',
            x: 'left',
            textStyle: {
              color: '#fff',
              fontSize: 14,
            }
          },
          backgroundColor: "transparent",
          color: ["#f09e10"],
          textStyle: {
            color: '#fff'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['条'],
            textStyle: {
              color: '#fff'
            },
          },
          grid: {
            containLabel: false
          },

          xAxis: {
            type: 'category',
            boundaryGap: false,
            splitLine: {
              show: false
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: '#fff'
              }
            },
            data: num
          },
          yAxis: {
            x: 'center',
            splitLine: {
              show: false
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: '#fff'
              }
            },
            type: 'value'
          },
          series: [{
            name: '条',
            type: 'line',
            normal: {
              textStyle: {
                color: '#ffffff'
              }
            },
            smooth: true,
            data: tiao
          }]
        };

        chart.setOption(option);
        return chart;
      }
    })
  }

}
function initChart1(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: 300
  });
  canvas.setChart(chart);
  var header = getApp().globalData.header;
  if (wx.getStorageSync('sessionId') == '') {
    wx.redirectTo({
      url: '../login/login'
    })
  } else {
    wx.request({
      url: url + 'getActivityInfoStatistics',
      method: 'GET',
      header: header,
      success: function(res) {
        var tiao1 = [];
        var num1 = [];
        for (var i = 0; i < res.data.data.length; i++) {
          tiao1.push(res.data.data[i].num);
          num1.push(res.data.data[i].label)
        }
        var option = {
          title: {
            text: '栏目信息发布量',
            x: 'left',
            textStyle: {
              color: '#fff',
              fontSize: 14,
            }
          },
          backgroundColor: "transparent",
          color: ["#f09e10"],
          textStyle: {
            color: '#fff'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['条'],
            textStyle: {
              color: '#fff'
            },
          },
          grid: {
            containLabel: false
          },

          xAxis: {
            type: 'category',
            boundaryGap: false,
            splitLine: {
              show: false
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: '#fff'
              }
            },
            data: num1
          },
          yAxis: {
            x: 'center',
            splitLine: {
              show: false
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: '#fff'
              }
            },
            type: 'value'
          },
          series: [{
            name: '条',
            type: 'line',
            normal: {
              textStyle: {
                color: '#ffffff'
              }
            },
            smooth: true,
            data: tiao1
          }]
        };

        chart.setOption(option);
        return chart;
      }
    })
  }

}
Page({
  // onShareAppMessage: function (res) {
  //   return {
  //     title: 'ECharts 可以在微信小程序中使用啦！',
  //     path: '/pages/index/index',
  //     success: function () { },
  //     fail: function () { }
  //   }
  // },
  data: {
    ec: {
      onInit: initChart,
    },
    ec1: {
      onInit: initChart1,
    }
  },

  onReady() {}
});
