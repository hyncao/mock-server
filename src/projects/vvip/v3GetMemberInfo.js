const MemberTypeMap = {
  vip: 2,
  basic: 1,
};

module.exports = (req) => ({
  code: 1000,
  msg: '响应信息:调用成功',
  response: {
    status: 1,
    msg: '连续包月，已开通2天',
    tradeId: '202510130000000056',
    currentCycleNum: 1,
    memberType: MemberTypeMap.vip,
    packageInfo: null,
    phoneNumber: '166******01',
    nickName: null,
    avatar: null,
    memberJoinTitle: '2025年10月13日起生效，已享受2天',
    closePlatform: 2,
    closePage:
      'https://oms.flow.wostore.cn/web/qudao/new/unorder.html?spid=XWWYJ&appid=WYJ06&productid=HY0006&singleTemplateId=bLz9VEBJCezwUNXEbUs&phoneNumber=16605711801',
  },
});
