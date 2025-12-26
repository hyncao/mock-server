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
      status: 1,
      msg: '获取成功',
      messageTemplateMap: {
        memberStatusNotify: { status: 2, msg: '已订阅', platformMessageTemplateId: 'b4dc23c732054d5aa931623252c7cf9a' },
        activityStartReminder: {
          status: 2,
          msg: '已订阅',
          platformMessageTemplateId: 'c3eeb1273fca4cea8f8f3c7404ff52f2',
        },
      },
    },
  };
};
