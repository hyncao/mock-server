const Mock = require('mockjs');
const Random = Mock.Random;
const { validate, validToken, validTokenResponse } = require('../../utils');

const statusMap = {
  not: 1,
  pending: 2,
  checkable: 3,
  done: 4,
};

module.exports = (req) => {
  if (!validToken(req)) {
    return validTokenResponse;
  }
  const res = validate(req, ['tradeId', 'taskId']);
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
      status: statusMap.not,
      msg: '',
    }),
  };
};
