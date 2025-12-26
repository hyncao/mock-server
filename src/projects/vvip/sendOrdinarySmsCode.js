const { validToken, validTokenResponse } = require('../../utils');

const statusMap = {
  success: 1,
  fail: -1,
  often: -2,
};

module.exports = (req) => {
  if (!validToken(req, 'v2')) {
    return validTokenResponse;
  }
  return {
    code: 1000,
    msg: '响应信息:调用成功',
    response: {
      status: statusMap.success,
      msg: 'ok',
    },
  };
};
