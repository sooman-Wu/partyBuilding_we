const url = 'https://dangjian.suitaquba.com/a/ios/';
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */

  data: {
    detail: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;

  },

  formSubmit: function(e) {

    var that = this;
    var header = getApp().globalData.header;
    if (wx.getStorageSync('sessionId') == '') {
      wx.redirectTo({
        url: '../login/login'
      })
    } else {
      var value = e.detail.value.opnion;
      wx.request({
        url: url + 'feedback?areaId=1111145&content=' + value,
        method: 'GET',
        header: header,
        success: function(res) {
          if (res.data.status == '0') {
            wx.reLaunch({
              url: '../index/index'
            })
          }
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})
