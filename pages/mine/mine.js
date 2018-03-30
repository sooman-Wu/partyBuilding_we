var app = getApp();
const url = 'https://dangjian.suitaquba.com/a/ios/';
Page({
  data: {
    winHeight: "", //窗口高度
    currentTab: 0, //预设当前项的值
    scrollLeft: 0, //tab标题的滚动条位置
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
  onLoad: function() {
    var that = this;
    var header = getApp().globalData.header;
    if (wx.getStorageSync('sessionId') == '') {
      wx.redirectTo({
        url: '../login/login'
      })
    } else {
      wx.request({
        url: url + 'minePartyBranch',
        method: 'GET',
        header: header,
        success: function(res) {
          that.setData({
            imgUrls: res.data.data.bannerList,
            function: res.data.data.categoryList,
            indexNews: res.data.data.articleList
          })
        },
      })
    }

  },

  footerTap: app.footerTap
})
