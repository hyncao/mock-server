const moment = require('moment');

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
          memberTitle: '尊享版',
        },
        {
          tradeId: '10002',
          phoneNumber: '159******88',
          joinDays: '2',
          memberTitle: '视频版',
        },
        // {
        //   tradeId: '10003',
        //   phoneNumber: '159******53',
        //   joinDays: '3',
        //   memberTitle: '基础版',
        // },
      ],
    },
  };
};
