const moment = require('moment');

module.exports = (req) => {
  return {
    code: 200,
    data: {
      dataList: [],
      dataMap: {
        msg: '交易创建成功',
        status: 1,
        agreement: `这个是协议
我啊
好`,
      },
    },
    msg: '成功',
  };
};
