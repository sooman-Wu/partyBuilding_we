const url = 'https://dangjian.suitaquba.com/a/ios/';
Page({

  /**
   * 页面的初始数据
   */

  data: {
    news: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: url + 'menuPage?parent='+options.id,
      method: 'GET',
      success: function (res) {
        that.setData({
          title: options.title,
          news: res.data.data
        }),
          wx.setNavigationBarTitle({
            title: that.data.title//页面标题为路由参数
          })
      }
    })
    // var queryBean = JSON.parse(options.queryBean);
    // that.setData({
    //   queryBean: queryBean
    // })
    // console.log(queryBean);
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
