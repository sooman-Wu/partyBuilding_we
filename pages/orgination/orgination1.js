const url = 'https://dangjian.suitaquba.com/a/ios/';
Page({

  /**
   * 页面的初始数据
   */

  data: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    var header = getApp().globalData.header;
    if (header.sessionId == '') {
      wx.redirectTo({
        url: '../login/login'
      })
    } else {
      wx.request({
        url: url + 'getOfficeByParent?parentId='+options.id+'&type=0',
        method: 'GET',
        header: header,
        success: function(res) {
          that.setData({
            orgination1: res.data.data
          })
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  // onReady: function() {
  //   wx.request({
  //     url: url + 'info',
  //     method: 'get',
  //     success: function(res) {
  //       if (res.data.status == '-1') {
  //         console.log('请登录')
  //         wx.redirectTo({
  //           url: '../login/login'
  //         })
  //       }else {
  //         console.log(res.data);
  //       }
  //     }
  //   });
  // },

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
