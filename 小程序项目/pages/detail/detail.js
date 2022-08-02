// pages/detail/detail.js
Page({
  data:{
    id:undefined
  },
  onLoad(options) {
    this.setData({
      id:options.id
    })
  }
})