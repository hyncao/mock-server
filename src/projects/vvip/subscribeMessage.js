const Mock = require('mockjs');
const Random = Mock.Random;

module.exports = (req) => ({
  code: 1000,
  msg: '响应信息:调用成功',
  response: {
    status: Random.integer(-1, 1),
    msg: '成功',
  },
});
