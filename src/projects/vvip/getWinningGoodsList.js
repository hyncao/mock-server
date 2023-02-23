module.exports = (req) => ({
  code: 1000,
  msg: '响应信息:调用成功',
  response: {
    // 1:抽奖活动开始且显示，2:抽奖活动结束但显示，3:抽奖活动结束并隐藏
    // 1 首页展示弹窗，抽奖页可抽奖
    // 1 || 2 详情页展示弹窗，抽奖页可见但是不可抽奖
    // 3 活动下线，关闭所有入口，抽奖页不可见
    status: 1,
    msg: '获取成功',
    raffleCount: 0, // 剩余抽奖次数
    apsuItemList: [
      {
        itemId: 100030,
        title: '666话费红包',
        showTitle: '666话费红包',
        subtitle: '666话费红包',
        operatorCode: 1,
        isValidatecode: true,
        onlineCycle: 'we212',
        showSort: 1,
        cycleType: '1',
        autoCycleOrder: '283929193',
        totalCycleNum: 1,
        takeMode: 1,
        linkUrl: 'http://www.bing.com',
        params: {},
        skuList: [
          {
            skuId: 3828,
            itemId: 100030,
            title: '666话费红包',
            ranks: 1,
            parValue: 1,
            linkUrl: 'http://www.bing.com',
            params: {},
            detailButton: { type: 3, title: '去领取', style: 1, orderId: null },
          },
        ],
      },
      {
        itemId: 100031,
        title: '66话费红包',
        showTitle: '66话费红包',
        subtitle: '66话费红包',
        operatorCode: 1,
        isValidatecode: true,
        onlineCycle: 'we212',
        showSort: 1,
        cycleType: '1',
        autoCycleOrder: '283929193',
        totalCycleNum: 1,
        takeMode: 1,
        linkUrl: 'http://www.bing.com',
        params: {},
        skuList: [
          {
            skuId: 3828,
            itemId: 100031,
            title: '66话费红包',
            ranks: 1,
            parValue: 1,
            linkUrl: 'http://www.bing.com',
            params: {},
            detailButton: { type: 3, title: '去领取', style: 1, orderId: null },
          },
        ],
      },
    ],
  },
});
