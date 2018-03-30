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
    guide: [],
    audio: []
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
    wx.request({
      url: url + 'findCategoryWriteList?type=2&isHot=0',
      method: 'GET',
      success: function (res) {
        let mapData2 = res.data.data.map((item, index, arr) => {
          if (item.photo.substring(0, 4) == 'http') {
            return {
              images: 'https://dangjian.suitaquba.com'+item.user.photo,
              name: item.user.name,
              content: item.content,
              photo: item.photo,
              time: item.time
            }
          } else if(item.user.photo.substring(0, 4) == ''){
            return {
              images: 'http://h5.suitaquba.com/party_image/my.png',
              name: item.user.name,
              content: item.content,
              photo: 'https://dangjian.suitaquba.com' + item.photo.replace('|',''),
              time: item.time
            }
          }else {
            return {
              images: 'https://dangjian.suitaquba.com'+item.user.photo,
              name: item.user.name,
              content: item.content,
              photo: 'https://dangjian.suitaquba.com' + item.photo.replace('|',''),
              time: item.time
            }
          }
        });
        that.setData({
          circle: mapData2
        }),
          wx.setNavigationBarTitle({
            title: '圈子'//页面标题为路由参数
          })
      }
    }),
    wx.request({
      url: url + 'findCategoryWriteList?type=2&isHot=1',
      method: 'GET',
      success: function (res) {
        let mapData1 = res.data.data.map((item, index, arr) => {
          if (item.photo.substring(0, 4) == 'http') {
            return {
              images: 'https://dangjian.suitaquba.com'+item.user.photo,
              name: item.user.name,
              content: item.content,
              photo: item.photo,
              time: item.time
            }
          } else if(item.user.photo.substring(0, 4) == ''){
            return {
              images: 'http://h5.suitaquba.com/party_image/my.png',
              name: item.user.name,
              content: item.content,
              photo: 'https://dangjian.suitaquba.com' + item.photo.replace('|',''),
              time: item.time
            }
          }else {
            return {
              images: 'https://dangjian.suitaquba.com'+item.user.photo,
              name: item.user.name,
              content: item.content,
              photo: 'https://dangjian.suitaquba.com' + item.photo.replace('|',''),
              time: item.time
            }
          }
        });
        that.setData({
          circle1: mapData1
        }),
          wx.setNavigationBarTitle({
            title: '圈子'//页面标题为路由参数
          })
      }
    })
  },

  bindChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });

  },

  imgYu: function(event) {
    var src = event.currentTarget.dataset.list; //获取data-src
    var aa = [];
    var imgList = src.split('   '); //获取data-list
    //图片预览
    wx.previewImage({
      current: src, // 当前显示图片的http链接
      urls: imgList // 需要预览的图片http链接列表
    })
  },

  swichNav: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
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
