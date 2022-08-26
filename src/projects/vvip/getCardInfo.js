const MemberTypeMap = {
  vip: 2,
  basic: 1,
};

module.exports = (req) => ({
  code: 1000,
  msg: '响应信息:调用成功',
  response: {
    status: 1,
    msg: '申请开卡成功',
    applyUrl: 'https://www.bing.com',
    enterId: 12345,
    marketingCardTemplateId: '20220314000000003936752000300389',
    memberType: MemberTypeMap.vip,
  },
});
