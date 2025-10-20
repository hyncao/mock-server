const Mock = require('mockjs');
const Random = Mock.Random;

module.exports = (req) => ({
  code: 200,
  data: {
    dataList: [],
    dataMap: {
      success: Random.boolean(),
      success: true,
      pageUrl: 'http://gx.189.cn/accept/p/1dqGrAuxQov33C',
      smsSerialNum: '111222',
    },
  },
  msg: '成功',
});
