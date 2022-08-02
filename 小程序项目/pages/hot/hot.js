Page({
  data: {
    rankType:'project',
    rankTypes: [{
      title:'实战排行',
      type: "project"
    },{
      title:'路径排行',
      type: "path"
    }],
    rankPeriod:'week',
    rankPeriods:[{
      title:"周", 
      value:"week"
    },{
      title:"月",
      value:"month"
    }],
    currentList:[]
  },
  listData:{},
  onLoad() {
    wx.request({
      url: 'https://www.fastmock.site/mock/c28efefafcecfed2eb8bd2750d144cea/weixin/api/getDate',
      success:(res) => {
        const {data:{listData}} = res;
        this.listData = listData;  
        // const rankPeriod = wx.getStorageInfoSync('rankPeriod') ||
        // 'week';
        // const rankType = wx.getStorageInfoSync('rankType') ||
        // 'project';
        // this.setData({rankPeriod,rankType});
        const {rankPeriod ,rankType } = this.data;
        this.changeCurrentList(rankType,rankPeriod);
      }
    })
  },
  changeCurrentList(rankType,rankPeriod){
    let currentList = [];
    if(rankType === 'project' && rankPeriod === 'week'){
      currentList = this.listData.projectWeek;
    }else if(rankType === 'project' && rankPeriod === 'month'){
      currentList = this.listData.projectMonth;
    }else if(rankType === 'path' && rankPeriod === 'week'){
      currentList = this.listData.pathWeek;
    }else {
      currentList = this.listData.pathMonth;
    }
    this.setData({currentList});
  },
  handleTopChange(e) {
    const rankType = e.currentTarget.dataset.type;
    const {rankPeriod} = this.data;
    this.setData({rankType});
    // 保存本地存储 下次默认位置值
    // wx.setStorage({
    //   data:rankType,
    //   key:'rankType'
    // });
    this.changeCurrentList(rankType,rankPeriod);
  },
  handlePeriodChange(e) {
    const rankPeriod = e.currentTarget.dataset.type;
    const {rankType}  =this.data;
    this.setData({rankPeriod});
    // wx.setStorage({
    //   data:rankPeriod,
    //   key:'rankPeriod'
    // });
    this.changeCurrentList(rankType,rankPeriod);
  }
})