const Mock = require('mockjs');
const { validToken, validTokenResponse } = require('../../utils');
const Random = Mock.Random;

module.exports = (req) => {
  if (!validToken(req, 'v2')) {
    return validTokenResponse;
  }
  return {
    code: 1000,
    msg: '响应信息:调用成功',
    response: {
      status: Random.integer(-1, 1),
      msg: '成功',
    },
  };
};
