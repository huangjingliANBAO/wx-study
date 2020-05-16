// pages/RoutingRp/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listdata: [
      {
        id: 1,
        name: '详情页1'
      },
      {
        id: 2,
        name: '详情页2'
      },
      {
        id: 3,
        name: '详情页3'
      }
    ]
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

  //  点击单个商品跳到商品详情页
  Shopdetail(e){
    let t = e.currentTarget.dataset.item;
     console.log(t)
     console.log(e.detail)
     wx.navigateTo({
       url: '../RoutingRp/test1?item=' + JSON.stringify(t),
     })
   },
})