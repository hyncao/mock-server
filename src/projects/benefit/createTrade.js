const moment = require('moment');

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
        status: 1,
        tradeId: '202002180200319748',
      },
    },
    msg: '成功',
  };
};
