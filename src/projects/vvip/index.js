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
    delay: 0,
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
];
