const Mock = require('mockjs');
const Random = Mock.Random;
const { validate, validToken, validTokenResponse } = require('../../utils');

const statusMap = {
  success: 1,
  fail: -1,
};

module.exports = (req) => {
  if (!validToken(req)) {
    return validTokenResponse;
  }
  const res = validate(req, ['tradeId', 'taskRecordId']);
  if (!res.result) {
    return {
      code: 500,
      msg: res.msg,
    };
  }
  return {
    code: 1000,
    msg: '响应信息:调用成功',
    response: Mock.mock({
      status: statusMap.success,
      msg: '',
    }),
  };
};
