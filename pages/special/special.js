// pages/hotel/hotel.js
const app = getApp()
const url = 'https://dangjian.suitaquba.com/a/ios/';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    special: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: url + 'getSubjectList',
      method: 'GET',
      success: function (res) {
        let mapData2 = res.data.data.map((item, index, arr) => {
          if (item.images.substring(0, 4) == 'http') {
            return {
              images: item.images,
              id: item.id,
              title: item.title,
              updateData: item.updateData
            }
          } else {
            return {
              images: 'https://dangjian.suitaquba.com' + item.images.replace('|',''),
              id: item.id,
              title: item.title,
              updateData: item.updateData
            }
          }
        });
        that.setData({
          special: mapData2
        }),
          wx.setNavigationBarTitle({
            title: '专题'//页面标题为路由参数
          })
      }
    })
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
