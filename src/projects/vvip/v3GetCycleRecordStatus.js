const { validToken, validTokenResponse } = require('../../utils');

const statusMap = {
  pending: 1,
  success: 2,
  needPay: -1,
  fail: -2,
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
      msg: '这里是可配置文案',
      prizeAmount: 0.6,
    },
  };
};
