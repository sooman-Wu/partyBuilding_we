var app = getApp();
const url = 'https://dangjian.suitaquba.com/a/ios/';
Page({
  data: {
    winHeight: "", //窗口高度
    currentTab: 0, //预设当前项的值
    scrollLeft: 0, //tab标题的滚动条位置
    tempId: [{
      id: "1e2c35813816414dbf7e4bac521d0ee3"
    }, {
      id: "7937643f5248429bbe80417d67779583"
    }, {
      id: "339bd70ba3ae4ed98c50cc25556085ba"
    }, {
      id: "4b330b6b5ce74bfdb5d929168db38b26"
    }, {
      id: "2c0258d4cc994329bf6a5b27f378c8d8"
    }]
  },
  // loadnews:function(id) {
  //   wx.request({
  //     url: url + 'menuPage?parent='+id,
  //     method: 'GET',
  //     success: function (res) {
  //       that.setData({
  //         news1: res.data.data
  //       })
  //     }
  //   })
  // },
  // // 滚动切换标签样式
  // switchTab: function(e) {
  //   var that = this;
  //   var tempId = [{
  //     id: "1e2c35813816414dbf7e4bac521d0ee3"
  //   }, {
  //     id: "7937643f5248429bbe80417d67779583"
  //   }, {
  //     id: "339bd70ba3ae4ed98c50cc25556085ba"
  //   }, {
  //     id: "4b330b6b5ce74bfdb5d929168db38b26"
  //   }, {
  //     id: "2c0258d4cc994329bf6a5b27f378c8d8"
  //   }];
  //   this.setData({
  //     currentTab: e.detail.current,
  //     news1: []
  //   });
  //   var index1 = e.detail.current;
  //   var id = tempId[index1].id;
  //   wx.request({
  //     url: url + 'menuPage?parent=' + id,
  //     method: 'GET',
  //     success: function(res) {
  //       that.setData({
  //         news1: res.data.data
  //       })
  //     }
  //   });
  //   this.checkCor();
  // },
  // 点击标题切换当前页时改变样式
  swichNav: function(e) {
    var cur = e.target.dataset.current;
    var id = e.target.dataset.id;
    var that = this;
    that.setData({
      news1: []
    });
    wx.request({
      url: url + 'menuPage?parent=' + id,
      method: 'GET',
      success: function(res) {
        that.setData({
          news1: res.data.data
        })
      }
    });
    if (this.data.currentTaB == cur) {
      return false;
    } else {
      this.setData({
        currentTab: cur
      })
    }
  },
  //判断当前滚动超过一屏时，设置tab标题滚动条。
  // checkCor: function() {
  //   if (this.data.currentTab > 2) {
  //     this.setData({
  //       scrollLeft: 300
  //     })
  //   } else {
  //     this.setData({
  //       scrollLeft: 0
  //     })
  //   }
  // },
  onLoad: function(options) {
    var that = this;
    wx.request({
        url: url + 'getSubjectList',
        method: 'GET',
        success: function(res) {
          for (var i = 0; i < res.data.data.length; i++) {
            if (res.data.data[i].id == options.id) {
              let mapData1 = res.data.data[i];
              wx.request({
                url: url + 'menuPage?parent=' + res.data.data[i].categoryList[0].id,
                method: 'GET',
                success: function(res) {
                  that.setData({
                    news1: res.data.data
                  })
                }
              });
              var bannerLis;
              var banner = [];
              for( var j=0;j<mapData1.imageList.length;j++) {
                if (mapData1.imageList[j].substring(0, 4) == 'http') {
                  bannerLis = mapData1.imageList[j];
                  } else {
                  bannerLis = 'https://dangjian.suitaquba.com' + mapData1.imageList[j];
                  };
                  banner.push(bannerLis);
              };
              // let banner = res.data.data[i].imageList.map((item, index, arr) => {
              //   if (item.substring(0, 4) == 'http') {
              //     return {
              //       item
              //     }
              //   } else {
              //     return {
              //       'https://qianshan.suitaquba.com' + item,
              //     }
              //   }
              // });
              that.setData({
                specialData: mapData1,
                title: options.title,
                banner: banner
              }),
              wx.setNavigationBarTitle({
                title: that.data.title//页面标题为路由参数
              })
            }
          };

        },
      }),
      // 高度自适应
      wx.getSystemInfo({
        success: function(res) {
          var clientHeight = res.windowHeight,
            clientWidth = res.windowWidth,
            rpxR = 750 / clientWidth;
          var calc = clientHeight * rpxR;
          that.setData({
            winHeight: calc
          });
        }
      });
  },

  footerTap: app.footerTap
})
