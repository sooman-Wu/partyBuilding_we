// pages/study/study-detail.js\
const url = 'https://dangjian.suitaquba.com/a/ios/';
function getRandomColor () {
  let rgb = []
  for (let i = 0 ; i < 3; ++i){
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    winWidth: 0,
    winHeight: 0,
    currentTab: 0,
    currentNum: 0
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
          winHeight: res.windowHeight-250
        });
      }
    });
    wx.request({
      url: url + 'getPartyTeachInfo?id='+options.id,
      method: 'GET',
      success: function (res) {
        var currentId = res.data.data.tbPartyTeachDataList[0].id;
        that.setData({
          title: options.title,
          detail: res.data.data,
          videoTitle: res.data.data.tbPartyTeachDataList[0].fileName,
          src: res.data.data.tbPartyTeachDataList[0].fileUrl,
          currentId: res.data.data.tbPartyTeachDataList[0].id
        });
          wx.setNavigationBarTitle({
            title: that.data.title//页面标题为路由参数
          });
          wx.request({
            url: url + 'partyTeachLaudList?id='+currentId,
            method: 'GET',
            success: function (res) {
              that.setData({
                laud: res.data.data
              })
            }
          })
      }
    });

  },
  bindChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });

  },

  changeVideo: function (e) {
    var that = this;
    var currentId = e.currentTarget.dataset.id;
    wx.request({
      url: url + 'partyTeachLaudList?id='+currentId,
      method: 'GET',
      success: function (res) {
        that.setData({
          laud: res.data.data
        })
      }
    });
    that.setData({
       currentNum: e.currentTarget.dataset.num,
       currentId: e.currentTarget.dataset.id,
       src: e.currentTarget.dataset.link
     });
  },

  swichNav: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    };

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
   onReady: function (res) {
     this.videoContext = wx.createVideoContext('myVideo')
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
