module.exports = (req) => ({
  code: 1000,
  msg: '响应信息:调用成功',
  response: {
    // 1:抽奖活动开始且显示，2:抽奖活动结束但显示，3:抽奖活动结束并隐藏
    // 1 首页展示弹窗，详情页展示弹窗，抽奖页可抽奖
    // 2 详情页展示弹窗，抽奖页可见但是不可抽奖
    // 3 活动下线，关闭所有入口，抽奖页不可见
    status: 1,
    msg: '获取成功',
    raffleCount: 2, // 剩余抽奖次数
    openOpportunity: 1,
    flowOpportunity: 0,
    welfareInfoList: [
      {
        skuId: 1001,
        title: '免费领限量优酷月卡',
        linkUrl: '',
        detailButton: {
          type: 6,
          style: 1,
          title: '去使用',
        },
        params: { raffleListImg: '' },
      },
      {
        skuId: 1002,
        title: '免费领限量优酷月卡',
        linkUrl: '',
        detailButton: {
          type: 6,
          style: 1,
          title: '去使用',
        },
        params: { raffleListImg: '' },
      },
      {
        skuId: 1003,
        title: '免费领限量优酷月卡',
        linkUrl: '',
        detailButton: {
          type: 6,
          style: 1,
          title: '去使用',
        },
        params: { raffleListImg: '' },
      },
      {
        skuId: 1004,
        title: '免费领限量优酷月卡',
        linkUrl: '',
        detailButton: {
          type: 6,
          style: 1,
          title: '去使用',
        },
        params: { raffleListImg: '' },
      },
    ],
  },
});
