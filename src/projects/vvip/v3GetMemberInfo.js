const { validToken, validTokenResponse } = require('../../utils');

const MemberTypeMap = {
  vip: 2,
  basic: 1,
};

module.exports = (req) => {
  if (!validToken(req)) {
    return validTokenResponse;
  }
  return {
    code: 1000,
    msg: '响应信息:调用成功',
    response: {
      status: 0,
      msg: '连续包月，已开通2天',
      tradeId: '202510130000000056',
      currentCycleNum: 1,
      memberType: MemberTypeMap.vip,
      packageInfo: null,
      phoneNumber: '166******01',
      nickName: null,
      avatar: null,
      memberJoinTitle: '啊？',
      closePlatform: 1,
      closePage:
        'https://oms.flow.wostore.cn/web/qudao/new/unorder.html?spid=XWWYJ&appid=WYJ06&productid=HY0006&singleTemplateId=bLz9VEBJCezwUNXEbUs&phoneNumber=16605711801',
    },
  };
};
