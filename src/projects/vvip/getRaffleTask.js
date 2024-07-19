module.exports = (req) => ({
  code: 1000,
  msg: '响应信息:调用成功',
  response: {
    status: null,
    msg: '',
    raffleCount: 4,
    raffleTaskList: [
      {
        taskId: 10007,
        title: '保持在约',
        operation: {},
        status: 2,
        msg: '任务完成',
      },
      {
        taskId: 10002,
        title: '关注VV会员生活号',
        operation: { url: 'http://p.alipay.com/P/hlbKfqZG' },
        status: 1,
        msg: '未完成',
      },
      {
        taskId: 10003,
        title: '领取流量权益1G-1',
        operation: { url: '/pages/detail/index' },
        status: 1,
        msg: '未完成',
      },
      {
        taskId: 10004,
        title: '领取流量权益1G-2',
        operation: { url: '/pages/detail/index' },
        status: 1,
        msg: '未完成',
      },
      {
        taskId: 10005,
        title: '领取流量权益3G',
        operation: { url: '/pages/detail/index' },
        status: 1,
        msg: '未完成',
      },
      {
        taskId: 10006,
        title: '收藏VV会员小程序',
        operation: { url: '/pages/collect/index' },
        status: 1,
        msg: '未完成',
      },
    ],
  },
});
