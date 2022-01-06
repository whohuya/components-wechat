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
    color:'#000',
    choseFood:[],
    dontChange:false,
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
          id:this.data.foodList[eatFood].value,
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
  handleChoseFood(){
  const that=this
    wx.showModal({
      title: '确认吗',
      content: '确定今天吃'+this.data.food+'吗？',
      success (res) {
        if (res.confirm) {
          let obj={
            value:that.data.id,
            label:that.data.food
        }
          let list=that.data.choseFood
          list.push(obj)
          that.setData({
            dontChange:true,
            choseFood:list
          })
          wx.setStorageSync('choseFood', that.data.choseFood)
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })

  },
  handleClose(event){
    console.log(event.target.dataset.index)
    const that=this
    wx.showModal({
      title: '确认吗',
      content: '确定删掉'+event.target.dataset.item.label+'吗？',
      success (res) {
        if (res.confirm) {
          let arr=that.data.choseFood
          let arr2=that.data.foodList
          arr.splice(event.target.dataset.index,1)
          arr2.push(event.target.dataset.item)
          console.log(arr)
          console.log(arr2)
          that.setData({
            choseFood:arr,
            foodList:arr2
          })
          wx.setStorageSync('choseFood', that.data.choseFood)
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
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
    if(wx.getStorageSync('choseFood')){
      let arr=wx.getStorageSync('choseFood')
      let arr2=foods
      for(let i=0;i<arr.length;i++){
        for(let j=0;j<foods.length;j++){
          if(arr[i].value==arr2[j].value){
            arr2.splice(j,1)
          }else{
          }
        }
      }
      this.setData({
        foodList: arr2,
        choseFood:wx.getStorageSync('choseFood')
      })
    }else{
      this.setData({
        foodList: foods,
        choseFood:wx.getStorageSync('choseFood')?wx.getStorageSync('choseFood'):[]
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