const Mock = require('mockjs');
const { validToken, validTokenResponse } = require('../../utils');

const statusMap = {
  success: 1,
  fail: -1,
};

module.exports = (req) => {
  if (!validToken(req, 'v2')) {
    return validTokenResponse;
  }
  return Mock.mock({
    code: 1000,
    msg: '响应信息:调用成功',
    response: {
      status: statusMap.success,
      msg: '',
      pageCount: 10,
      pageSize: 20,
      'raffleInfoList|20': [
        {
          phoneNumber: '138****1111',
          'raffleItemTitle|1': ['一等奖', '二等奖', '三等奖'],
        },
      ],
    },
  });
};
