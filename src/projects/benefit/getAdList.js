const Mock = require('mockjs');

module.exports = (req) =>
  Mock.mock({
    code: 200,
    data: {
      dataList: [],
      dataMap: {},
    },
    msg: '成功',
  });
