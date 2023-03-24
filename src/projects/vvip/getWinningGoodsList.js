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
    raffleCount: 1, // 剩余抽奖次数
    welfareInfoList: [
      {
        skuId: 3828,
        itemId: 100030,
        prizeAmount: 666,
        title: '666话费红包',
        showTitle: '666话费红包',
        subtitle: '666话费红包',
        takeMode: 1,
        params: {},
        linkUrl: 'http://www.bing.com',
        detailButton: { type: 3, title: '去领取', style: 1, orderId: null },
      },
      {
        skuId: 3828,
        itemId: 100031,
        prizeAmount: 66,
        title: '66话费红包',
        showTitle: '66话费红包',
        subtitle: '66话费红包',
        takeMode: 1,
        params: {},
        linkUrl: 'http://www.bing.com',
        detailButton: { type: 3, title: '去领取', style: 1, orderId: null },
      },
    ],
  },
});
