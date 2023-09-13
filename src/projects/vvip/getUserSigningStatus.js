const Mock = require('mockjs');

const UserSigningStatusMap = {
  exiting: 0,
  notSign: 1,
  signed: 2,
  signedByOther: 3, // 被其他用户签约
};

const MemberTypeMap = {
  vip: 2,
  basic: 1,
};

module.exports = (req) =>
  Mock.mock({
    code: 1000,
    msg: '响应信息:调用成功',
    response: {
      status: UserSigningStatusMap.notSign,
      msg: '被其他用户签约',
      tradeId: 123,
      memberType: null,
      hasBindUser: true,
      toBindUserUrl: null,
      phoneNumber: '176******14',
      enterPhoneNumber: null,
      signed: false,
    },
  });
