const moment = require('moment');

const MemberTypeMap = {
  vip: 2,
  basic: 1,
};

module.exports = (req) => {
  return {
    code: 1000,
    msg: '响应信息:调用成功',
    response: {
      status: null,
      msg: '',
      memberTradeInfoList: [
        {
          tradeId: '10001',
          phoneNumber: '131******11',
          joinDays: '1',
          memberTitle: '尊享会员',
          memberType: MemberTypeMap.vip,
        },
        {
          tradeId: '10002',
          phoneNumber: '159******89',
          joinDays: '2',
          memberTitle: '视频版',
          memberType: MemberTypeMap.basic,
        },
        {
          tradeId: '10003',
          phoneNumber: '159******53',
          joinDays: '3',
          memberTitle: '基础版',
        },
      ],
    },
  };
};
