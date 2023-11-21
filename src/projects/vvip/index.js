const URI = '/vvip/apsu-api/openApi/';

module.exports = [
  {
    name: 'getToken',
    method: 'post',
    url: `${URI}get.token`,
    response: require('./getToken'),
    description: '获取token',
    delay: 0,
  },
  {
    name: 'getPackage',
    method: 'post',
    url: `${URI}get.package`,
    response: require('./getPackage'),
    description: '获取package',
    delay: 0,
  },
  {
    name: 'getUserSigningStatus',
    method: 'post',
    url: `${URI}get.user.signing.status`,
    response: require('./getUserSigningStatus'),
    description: '获取用户开通状态, 查询是否有单子',
    delay: 0,
  },
  {
    name: 'getTradeDetail',
    method: 'post',
    url: `${URI}get.trade.detail`,
    response: require('./getTradeDetail'),
    description: '查询订单详情',
    delay: 3000,
  },
  {
    name: 'createTrade',
    method: 'post',
    url: `${URI}create.trade`,
    response: require('./createTrade'),
    description: '创单',
    delay: 0,
  },
  {
    name: 'getSigningUrl',
    method: 'post',
    url: `${URI}get.signing.url`,
    response: require('./getSigningUrl'),
    description: '获取创单支付方式',
    delay: 0,
  },
  {
    name: 'updateUserInfo',
    method: 'post',
    url: `${URI}update.user.info`,
    response: require('./updateUserInfo'),
    description: '更新用户头像和昵称',
    delay: 0,
  },
  {
    name: 'submitCycleRecord',
    method: 'post',
    url: `${URI}submit.cycle.record`,
    response: require('./submitCycleRecord'),
    description: '领取权益',
    delay: 0,
  },
  {
    name: 'getCycleRecordStatus',
    method: 'post',
    url: `${URI}get.cycle.record.status`,
    response: require('./getCycleRecordStatus'),
    description: '查询权益领取状态',
    delay: 0,
  },
  {
    name: 'getCyclePayUrl',
    method: 'post',
    url: `${URI}get.cycle.pay.url`,
    response: require('./getCyclePayUrl'),
    description: '支付月费',
    delay: 0,
  },
  {
    name: 'closeApply',
    method: 'post',
    url: `${URI}close.apply`,
    response: require('./closeApply'),
    description: '退订',
    delay: 0,
  },
  {
    name: 'strangeInterface',
    method: 'post',
    url: `${URI}strange.interface`,
    response: require('./strangeInterface'),
    description: '埋点',
    delay: 0,
  },
  {
    name: 'getMemberBill',
    method: 'post',
    url: `${URI}get.member.bill`,
    response: require('./getMemberBill'),
    description: '会员账单',
    delay: 0,
  },
  {
    name: 'getConfigJSON',
    method: 'post',
    url: `${URI}get.page.config`,
    response: require('./getConfigJSON'),
    description: '获取前端配置',
    delay: 0,
  },
  {
    name: 'getAdvertisement',
    method: 'post',
    url: `${URI}get.advertisement`,
    response: require('./getAdvertisement'),
    description: '获取广告位',
    delay: 0,
  },
  {
    name: 'getMessageTemplate',
    method: 'post',
    url: `${URI}get.message.template`,
    response: require('./getMessageTemplate'),
    description: '获取订阅消息模板',
    delay: 0,
  },
  {
    name: 'subscribeMessage',
    method: 'post',
    url: `${URI}subscribe.message`,
    response: require('./subscribeMessage'),
    description: '订阅消息',
    delay: 0,
  },
  {
    name: 'getCardInfo',
    method: 'post',
    url: `${URI}get.card.info`,
    response: require('./getCardInfo'),
    description: '获取会员卡开卡地址',
    delay: 0,
  },
  {
    name: 'getMemberTask',
    method: 'post',
    url: `${URI}get.member.task`,
    response: require('./getMemberTask'),
    description: '获取会员任务详情',
    delay: 0,
  },
  {
    name: 'baseMemberRenewal',
    method: 'post',
    url: `${URI}base.member.renewal`,
    response: require('./baseMemberRenewal'),
    description: '获取会员任务详情',
    delay: 0,
  },
  {
    name: 'doMemberTask',
    method: 'post',
    url: `${URI}do.member.task`,
    response: require('./doMemberTask'),
    description: '获取会员任务详情',
    delay: 0,
  },
  {
    name: 'finishMemberTask',
    method: 'post',
    url: `${URI}finish.member.task`,
    response: require('./finishMemberTask'),
    description: '获取会员任务详情',
    delay: 0,
  },
  {
    name: 'getMemberWeekInfo',
    method: 'post',
    url: `${URI}get.member.week.info`,
    response: require('./getMemberWeekInfo'),
    description: '获取会员周详情',
    delay: 1000,
  },
  {
    name: 'getBenefitData',
    method: 'post',
    url: `${URI}get.benefit.data`,
    response: require('./getBenefitData'),
    description: '获取话费宝鉴权',
    delay: 0,
  },
  {
    name: 'openPublicFollow',
    method: 'post',
    url: `${URI}open.public.follow`,
    response: require('./openPublicFollow'),
    description: '获取生活号关注情况',
    delay: 0,
  },
  {
    name: 'sendSmsCode',
    method: 'post',
    url: `${URI}send.sms.code`,
    response: require('./sendSmsCode'),
    description: '获取生活号关注情况',
    delay: 0,
  },
  {
    name: 'verifySmsCode',
    method: 'post',
    url: `${URI}verify.sms.code`,
    response: require('./verifySmsCode'),
    description: '获取生活号关注情况',
    delay: 0,
  },
  {
    name: 'bindUser',
    method: 'post',
    url: `${URI}bind.user`,
    response: require('./bindUser'),
    description: '绑定用户',
    delay: 0,
  },
  {
    name: 'getEnterParams',
    method: 'post',
    url: `${URI}get.enter.params`,
    response: require('./getEnterParams'),
    description: '获取入口参数',
    delay: 0,
  },
  {
    name: 'getRaffleInfo',
    method: 'post',
    url: `${URI}get.raffle.info`,
    response: require('./getRaffleInfo'),
    description: '获取抽奖信息',
    delay: 0,
  },
  {
    name: 'getWinningGoodsList',
    method: 'post',
    url: `${URI}get.winning.goods.list`,
    response: require('./getWinningGoodsList'),
    description: '获取中奖商品列表',
    delay: 0,
  },
  {
    name: 'getRaffleResult',
    method: 'post',
    url: `${URI}get.raffle.result`,
    response: require('./getRaffleResult'),
    description: '获取抽奖结果',
    delay: 0,
  },
  {
    name: 'getMemberList',
    method: 'post',
    url: `${URI}get.member.list`,
    response: require('./getMemberList'),
    description: '获取会员列表',
    delay: 0,
  },
  {
    name: 'sendOrdinarySmsCode',
    method: 'post',
    url: `${URI}send.ordinary.sms.code`,
    response: require('./sendOrdinarySmsCode'),
    description: '发送普通验证码',
    delay: 0,
  },
  {
    name: 'activityShow',
    method: 'post',
    url: `${URI}verify.ordinary.sms.code`,
    response: require('./verifyOrdinarySmsCode'),
    description: '发送普通验证码',
    delay: 0,
  },
  {
    name: 'activityShow',
    method: 'post',
    url: `${URI}activity.show`,
    response: require('./activityShow'),
    description: '根据入口ID查询弹窗信息',
    delay: 0,
  },
  {
    name: 'getH5ToAppletsOrderUrl',
    method: 'post',
    url: `${URI}get.h5.to.applets.order.url`,
    response: require('./getH5ToAppletsOrderUrl'),
    description: '获取H5到小程序下单url',
    delay: 0,
  },
  {
    name: 'joinCloseActivity',
    method: 'post',
    url: `${URI}join.close.activity`,
    response: require('./joinCloseActivity'),
    description: '参加解约活动',
    delay: 0,
  },
  {
    name: 'takeCloseActivityAward',
    method: 'post',
    url: `${URI}take.close.activity.award`,
    response: require('./takeCloseActivityAward'),
    description: '领取解约活动奖品',
    delay: 0,
  },
  {
    name: 'getBenefitGroupData',
    method: 'post',
    url: `${URI}get.benefit.group.data`,
    response: require('./getBenefitGroupData'),
    description: '获取权益分组数据',
    delay: 0,
  },
];
