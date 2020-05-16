// pages/request/request.js
Page({
  

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
  onRequestNetData: function(){
    wx.showLoading();
    var t = this;
    wx.request({
      url: 'https://www.wanandroid.com/article/list/0/json',
      method: 'GET',
      header: { 'content-type': 'application/json' },
      success: function(res){
        if (res.statusCode == 200){
          t.setData({
            //把数据传给wanAndroidDatas数据
            wanAndroidDatas: res.data.data.datas
          })
        }
      },
      fail: function (res){
        //错误处理
      },
      complete: function (res){
        wx.hideLoading();
      }
    })
  }
   
})
