const moment = require('moment');
const { validToken, validTokenResponse } = require('../../utils');

const MemberTypeMap = {
  vip: 2,
  basic: 1,
};

module.exports = (req) => {
  if (!validToken(req, 'v2')) {
    return validTokenResponse;
  }
  return {
    code: 1000,
    msg: '响应信息:调用成功',
    response: {
      status: null,
      msg: '',
      memberTradeInfoList: [
        {
          tradeId: '202310260000000596',
          phoneNumber: '132******54',
          joinDays: 1,
          memberTitle: '尊享会员',
          memberType: 2,
        },
      ],
    },
  };
};
