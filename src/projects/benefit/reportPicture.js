const moment = require('moment');
const Mock = require('mockjs');
const Random = Mock.Random;

module.exports = (req) => ({
  code: 200,
  data: {
    dataList: [],
    dataMap: 'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/marketing/100001/skus/10051/101081/ruleImg.png',
  },
  msg: '成功',
  success: true,
});
