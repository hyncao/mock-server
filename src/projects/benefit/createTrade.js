const moment = require('moment');
const Mock = require('mockjs');
const Random = Mock.Random;

module.exports = (req) => {
  console.log(`${moment().format('YYYY-MM-DD HH:mm:ss')} createTrade request:`);
  console.log(JSON.stringify(req.body));
  console.log('=================================');
  return {
    code: 200,
    data: {
      dataList: [],
      dataMap: {
        msg: '交易创建成功',
        status: Random.integer(1, 2),
        status: 1,
        tradeId: '202002180200319748',
      },
    },
    msg: '成功',
  };
};
