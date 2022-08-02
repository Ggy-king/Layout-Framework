Page({
  data:{
    showIcon:true,
    swiperList:[],
    courses:[],
    searchList:null,
    type:'recommend',
    tabs:[
      {name:'推荐',type:'recommend'},
      {name:'路径',type:'path'},
      {name:'实战',type:'project'},
      {name:'活动',type:'activity'},
    ],
    activities:[],
  },
  // onLoad页面挂载时执行
  onLoad() {
    // 请求数据
    wx.request({
      url: 'https://www.fastmock.site/mock/c28efefafcecfed2eb8bd2750d144cea/weixin/api/getDate',
      success:(res) => {
        const {data:{data}} = res;
        // 解构出来
        const {swiperList,courses,activities} = data;
        // 传递数据
        this.setData({
          swiperList,
          courses,
          activities
        })
      }
    })
  },
  handleInputChange(e){
    const value = e.detail.value;
    let searchList = null;
    if(value) {
      // filter过滤
      searchList = this.data.courses.filter(item => item.
        title.indexOf(value) > -1)
    }
    this.setData({
      showIcon : value ? false : true,
      searchList
    })
  },
  changeType(e) {
    const type = e.currentTarget.dataset.type;
    this.setData({ type })
  },
  handleCourseTap(e) {
    const {id} = e.currentTarget.dataset;
    // 跳转到详情页面
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}`,
    })
  }
})


