const Mock = require('mockjs');

module.exports = (req) =>
  Mock.mock({
    code: 200,
    data: {
      tradeIds: [202111102003777200],
    },
    msg: '成功',
  });
