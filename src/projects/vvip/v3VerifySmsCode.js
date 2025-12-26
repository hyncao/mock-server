const moment = require('moment');
const { validToken, validTokenResponse } = require('../../utils');

const statusMap = {
  success: 1,
  fail: -1,
};

module.exports = (req) => {
  if (!validToken(req)) {
    return validTokenResponse;
  }
  return {
    code: 1000,
    msg: '响应信息:调用成功',
    response: {
      status: statusMap.success,
      msg: '错误了',
    },
  };
};
