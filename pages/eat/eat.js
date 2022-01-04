// pages/eat/eat.js
import {
  foods
} from '../../utils/foods'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    food: '',
    foodList: [],
    color:'#000'
  },
  handleChangefood() {
    let time = this.data.foodList.length
    let i = 0
    let timer = setInterval(() => {
      if (i == 20) {
        clearInterval(timer)
        let eatFood=Math.floor(Math.random() * time);
        this.setData({
          food:this.data.foodList[eatFood].label,
          color:this.randomColor()
        })
        
      return
      }
      this.setData({
        food: this.data.foodList[i].label
      })
      i++;
    }, 50)
  },
   randomColor() {
    var col = "#";
    for (var i = 0; i < 6; i++) {
      col+=parseInt(Math.random() * 16).toString(16); 
    }
    return col;
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
    this.setData({
      foodList: foods
    })
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