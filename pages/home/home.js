// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    remark:'',
  },
  handleClick(event){
    console.log(event.target.dataset.id)
    let id=event.target.dataset.id
    if(id==1){
      wx.navigateTo({
        url: '/pages/eat/eat',
      })
    }

  },
  bindTextAreaBlur: function(e) {
    console.log(e.detail.value)
    this.setData({
      remark:e.detail.value
    })
    let yy = new Date().getFullYear()
    let mm = new Date().getMonth() + 1
    let dd = new Date().getDate()
    wx.setStorageSync('yy', yy)
    wx.setStorageSync('mm', mm)
    wx.setStorageSync('dd',dd)
    wx.setStorageSync('remark', e.detail.value)
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
    
    let yy = new Date().getFullYear()
    let mm = new Date().getMonth() + 1
    let dd = new Date().getDate()
    let oldyy=wx.getStorageSync('yy')
    let oldmm=wx.getStorageSync('mm')
    let olddd=wx.getStorageSync('dd')
     if(oldyy!=yy||oldmm!=mm||olddd!=dd){
      wx.setStorageSync('remark', '')
     } else{
       this.setData({
         remark:wx.getStorageSync('remark')
       })
     }
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