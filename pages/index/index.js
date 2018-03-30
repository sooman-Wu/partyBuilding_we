var app = getApp();
const url = 'https://dangjian.suitaquba.com/a/ios/';
Page({
  data:{
    winHeight:"",//窗口高度
    currentTab:0, //预设当前项的值
    scrollLeft:0, //tab标题的滚动条位置
    tempId: [{id: "1e2c35813816414dbf7e4bac521d0ee3"},{id: "7937643f5248429bbe80417d67779583"},{id: "339bd70ba3ae4ed98c50cc25556085ba"},{id: "4b330b6b5ce74bfdb5d929168db38b26"},{id: "2c0258d4cc994329bf6a5b27f378c8d8"}]
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
  // 滚动切换标签样式
  switchTab:function(e){
    var that = this;
    this.setData({
      currentTab:e.detail.current
    });
    this.checkCor();
  },
  // 点击标题切换当前页时改变样式
  swichNav:function(e){
    var cur=e.target.dataset.current;
    var that = this;
    if(this.data.currentTaB==cur){return false;}
    else{
      this.setData({
        currentTab:cur
      })
    }
  },
  //判断当前滚动超过一屏时，设置tab标题滚动条。
  checkCor:function(){
   if (this.data.currentTab>2){
    this.setData({
     scrollLeft:300
    })
   }else{
    this.setData({
     scrollLeft:0
    })
   }
  },
  onLoad: function() {
    var that = this;
    wx.request({
      url: url + 'partyHomePage',
      method: 'GET',
      success: function (res) {
        let mapData2 = res.data.data.bannerList.map((item, index, arr) => {
          if (item.img.substring(0, 4) == 'http') {
            return {
              img: item.img,
            }
          } else {
            return {
              img: 'https://dangjian.suitaquba.com' + item.img
            }
          }
        });
        that.setData({
          imgUrls: mapData2,
          function: res.data.data.functionCategoryList,
          indexNews: res.data.data.newsArticle
        })
      },
    });
    wx.request({
      url: url + 'menudetail?parent=339bd70ba3ae4ed98c50cc25556085ba',
      method: 'GET',
      success: function (res) {
        that.setData({
          navSecond: res.data.data
        })
      },
    });
    var tempId=[{id: "1e2c35813816414dbf7e4bac521d0ee3"},{id: "7937643f5248429bbe80417d67779583"},{id: "339bd70ba3ae4ed98c50cc25556085ba"},{id: "4b330b6b5ce74bfdb5d929168db38b26"},{id: "2c0258d4cc994329bf6a5b27f378c8d8"}];
    var id = tempId[1].id;
    wx.request({
      url: url + 'menuPage?parent='+id,
      method: 'GET',
      success: function (res) {
        that.setData({
          news1: res.data.data
        })
      }
    });
    wx.request({
      url: url + 'getCategoryImageByCategoryId?categoryId='+id,
      method: 'GET',
      success: function (res) {
        that.setData({
          banner_1: res.data.data
        })
      },
    });
    var id2 = tempId[2].id;
    wx.request({
      url: url + 'menuPage?parent='+id2,
      method: 'GET',
      success: function (res) {
        that.setData({
          news2: res.data.data
        })
      }
    });
    wx.request({
      url: url + 'getCategoryImageByCategoryId?categoryId='+id2,
      method: 'GET',
      success: function (res) {
        that.setData({
          banner_2: res.data.data
        })
      },
    });
    var id3 = tempId[3].id;
    wx.request({
      url: url + 'menuPage?parent='+id3,
      method: 'GET',
      success: function (res) {
        that.setData({
          news3: res.data.data
        })
      }
    });
    wx.request({
      url: url + 'getCategoryImageByCategoryId?categoryId='+id3,
      method: 'GET',
      success: function (res) {
        that.setData({
          banner_3: res.data.data
        })
      },
    });
    var id4 = tempId[4].id;
    wx.request({
      url: url + 'menuPage?parent='+id4,
      method: 'GET',
      success: function (res) {
        that.setData({
          news4: res.data.data
        })
      }
    });
    wx.request({
      url: url + 'getCategoryImageByCategoryId?categoryId='+id4,
      method: 'GET',
      success: function (res) {
        that.setData({
          banner_4: res.data.data
        })
      },
    });
    wx.request({
      url: url + 'getMenHuCategoryList',
      method: 'GET',
      success: function (res) {
        let tempId = res.data.data.map((item, index, arr) => {
          return {
            id: item.id
          }
        });
        that.setData({
          nav: res.data.data,
          tempId: tempId
        });
      },
    });
    // 高度自适应
    wx.getSystemInfo( {
      success: function( res ) {
        var clientHeight=res.windowHeight,
          clientWidth=res.windowWidth,
          rpxR=750/clientWidth;
       var calc=clientHeight*rpxR;
        that.setData( {
          winHeight: calc
        });
      }
    })
  },
  footerTap:app.footerTap
})
