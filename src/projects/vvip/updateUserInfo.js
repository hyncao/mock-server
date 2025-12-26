const { validToken, validTokenResponse } = require('../../utils');

module.exports = (req) => {
  if (!validToken(req, 'v2')) {
    return validTokenResponse;
  }
  return {
    code: 1000,
    msg: '响应信息:调用成功',
    response: {
      status: 1,
      msg: '获取成功',
    },
  };
};
