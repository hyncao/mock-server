const Mock = require('mockjs');
const Random = Mock.Random;
const { validate, validToken, validTokenResponse } = require('../../utils');

const statusMap = {
  not: 1,
  pending: 2,
  done: 3,
};

module.exports = (req) => {
  if (!validToken(req)) {
    return validTokenResponse;
  }
  const res = validate(req, ['tradeId']);
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
      status: 1,
      msg: '',
      aboutToExpireFlow: 10, // 将要过期的流量
      alreadyExchangeFlow: 20, // 已兑换流量
      currentFlowPool: 30, // 当前流量池的流量
      'inFlowRecordList|2-4': [
        {
          parValueStr: '1GB',
          title: '任务标题',
          createTime: '2025-11-19 15:00:00',
        },
      ],
      'outFlowRecordList|4-6': [
        {
          parValueStr: '2GB',
          title: '任务标题',
          createTime: '2025-11-19 15:30:00',
        },
      ],
    }),
  };
};
