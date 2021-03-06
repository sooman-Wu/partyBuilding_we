// pages/scene/scene.js
const app = getApp()
const url = 'https://dangjian.suitaquba.com/a/ios/';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winWidth: 0,
    winHeight: 0,
    currentTab: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });
    var header = getApp().globalData.header;
    if (wx.getStorageSync('sessionId') == '') {
      wx.redirectTo({
        url: '../login/login'
      })
    } else {
      wx.request({
        url: url + 'partyTeachHistory?areaId=1111145',
        method: 'GET',
        header: header,
        success: function (res) {
          let mapData2 = res.data.data.map((item, index, arr) => {
            if (item.image.substring(0, 4) == 'http') {
              return {
                image: item.image,
                id: item.id,
                fileName: item.fileName,
                desc: item.desc,
                playCount: item.playCount,
                updateDate: item.updateDate
              }
            } else {
              return {
                image: 'https://dangjian.suitaquba.com' + item.image.replace('|',''),
                id: item.id,
                fileName: item.fileName,
                desc: item.desc,
                playCount: item.playCount,
                updateDate: item.updateDate
              }
            }
          });
          that.setData({
            study: mapData2
          }),
            wx.setNavigationBarTitle({
              title: '学习历史'//页面标题为路由参数
            })
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
