// page/index/index.js
import QQMapWX from '../../plugins/qqmap-wx-jssdk';
const qqmapsdk = new QQMapWX({ key: '申请key'});
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasLocation:false,
    location:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        console.log(res);
        that.setData({
          hasLocation: true,
          location: {
            longitude: res.longitude,
            latitude: res.latitude
          }
        },()=>{

          // wx.chooseLocation({
          //   success:function(res){
          //     console.log(res,"------");
             
          //   }
          //   });
          qqmapsdk.geocoder({
            address: '北京市朝阳区兆维大厦A座',
            success: function (res) {
              console.log(res,"------");
              wx.openLocation({
              name: `${res.result.address_components.province}-${res.result.address_components.district}`,
              address: `${res.result.address_components.province}${res.result.address_components.district}${res.result.title}`,
              latitude: res.result.location.lat,
              longitude: res.result.location.lng
          })
            },
            fail: function (res) {
              console.log(res);
            },
            complete: function (res) {
              //console.log(res,"------77777");
            }
          })
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
    
    
    // qqmapsdk.geocoder({
    //   address: '北京市海淀区彩和坊路海淀西大街74号',
    //   success: function (res) {
    //     console.log(res);
    //   },
    //   fail: function (res) {
    //     console.log(res);
    //   },
    //   complete: function (res) {
    //     console.log(res);
    //   }
    // });
    
     
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