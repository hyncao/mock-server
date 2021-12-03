const Mock = require('mockjs');

const UserSigningStatusMap = {
  exiting: 0,
  notSign: 1,
  signed: 2,
  upgrading: 3,
  degrading: 4, // 降级中, 退订了尊享版, 办理了免费版
};

module.exports = (req) => Mock.mock({
  code: 1000,
  msg: '响应信息:调用成功',
  response: {
    status: 2,
    msg: '',
    memberType: 2,
    tradeId: '@integer(10000000, 30000000)',
  },
});
