module.exports = (req) => ({
  code: 1000,
  msg: '响应信息:调用成功',
  response: {
    // 1:抽奖成功, -1:抽奖失败
    status: 1,
    msg: '获取成功',
    itemId: 100047,
    params: {
      raffleListImg:
        'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100049/0/0/raffleListImg_161838621.png',
    },
  },
});
