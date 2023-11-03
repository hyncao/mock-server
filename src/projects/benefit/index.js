const URI = '/benefit/api/';

module.exports = [
  {
    name: 'getToken',
    method: 'post',
    url: `${URI}getToken`,
    response: require('./getToken'),
    description: '获取token',
    delay: 0,
  },
  {
    name: 'getMarketingInfo',
    method: 'post',
    url: `${URI}getMarketingInfo`,
    response: require('./getMarketingInfo'),
    description: '获取营销配置',
    delay: 1000,
  },
  {
    name: 'getPackages',
    method: 'post',
    url: `${URI}getPackages`,
    response: require('./getPackages'),
    description: '鉴权接口',
    delay: 0,
  },
  {
    name: 'sendSkuSmsCode',
    method: 'post',
    url: `${URI}sendSkuSmsCode`,
    response: require('./sendSkuSmsCode'),
    description: '发送验证码',
    delay: 0,
  },
  {
    name: 'createTrade',
    method: 'post',
    url: `${URI}createTrade`,
    response: require('./createTrade'),
    description: '创单',
    delay: 0,
  },
  {
    name: 'getPayInfo',
    method: 'post',
    url: `${URI}getPayInfo`,
    response: require('./getPayInfo'),
    description: '获取支付信息',
    delay: 0,
  },
  {
    name: 'createTaobaoOrder',
    method: 'post',
    url: `${URI}createTaobaoOrder`,
    response: require('./createTaobaoOrder'),
    description: '创建淘宝单子',
    delay: 0,
  },
  {
    name: 'getConfig',
    method: 'post',
    url: `${URI}getConfig`,
    response: require('./getConfig'),
    description: '获取优酷一分钱拉起iframe的配置',
    delay: 0,
  },
  {
    name: 'getTradeList',
    method: 'post',
    url: `${URI}getTradeList`,
    response: require('./getTradeList'),
    description: '订单列表',
    delay: 0,
  },
  {
    name: 'getTradeDetail',
    method: 'post',
    url: `${URI}getTradeDetail`,
    response: require('./getTradeDetail'),
    description: '订单详情',
    delay: 0,
  },
  {
    name: 'receiveCycleRights',
    method: 'post',
    url: `${URI}receiveCycleRights`,
    response: require('./receiveCycleRights'),
    description: '领取权益-创建权益订单',
    delay: 0,
  },
  {
    name: 'getUserRights',
    method: 'post',
    url: `${URI}getUserRights`,
    response: require('./getUserRights'),
    description: '获取我的权益列表',
    delay: 0,
  },
  {
    name: 'getCycleOrderStatus',
    method: 'post',
    url: `${URI}getCycleOrderStatus`,
    response: require('./getCycleOrderStatus'),
    description: '领取权益-查询权益领取状态',
    delay: 0,
  },
  {
    name: 'decryptUserInfo',
    method: 'post',
    url: `${URI}decryptUserInfo`,
    response: require('./decryptUserInfo'),
    description: '获取手机号授权',
    delay: 0,
  },
  {
    name: 'getCategoryPackages',
    method: 'post',
    url: `${URI}getCategoryPackages`,
    response: require('./getCategoryPackages'),
    description: '主推/更多产品鉴权接口',
    delay: 0,
  },
  {
    name: 'getCategoryMarketingInfo',
    method: 'post',
    url: `${URI}getCategoryMarketingInfo`,
    response: require('./getCategoryMarketingInfo'),
    description: '主推/更多产品营销配置接口',
    delay: 0,
  },
  {
    name: 'strangeInterface',
    method: 'post',
    url: `${URI}strangeInterface`,
    response: require('./strangeInterface'),
    description: '埋点接口',
    delay: 0,
  },
  {
    name: 'getAgreement',
    method: 'post',
    url: `${URI}getAgreement`,
    response: require('./getAgreement'),
    description: '获取协议接口',
    delay: 0,
  },
  {
    name: 'getAdList',
    method: 'post',
    url: `${URI}getAdList`,
    response: require('./getAdList'),
    description: '获取广告接口',
    delay: 0,
  },
  {
    name: 'getUserTradeIds',
    method: 'post',
    url: `${URI}getUserTradeIds`,
    response: require('./getUserTradeIds'),
    description: '根据packageId查单子',
    delay: 0,
  },
  {
    name: 'getProductMarketingInfo',
    method: 'post',
    url: `${URI}getProductMarketingInfo`,
    response: require('./getProductMarketingInfo'),
    description: '',
    delay: 0,
  },
  {
    name: 'getProduct',
    method: 'post',
    url: `${URI}getProduct`,
    response: require('./getProduct'),
    description: '',
    delay: 0,
  },
  {
    name: 'getTradeStatus',
    method: 'post',
    url: `${URI}getTradeStatus`,
    response: require('./getTradeStatus'),
    description: '',
    delay: 0,
  },
  {
    name: 'getLotteryResult',
    method: 'post',
    url: `${URI}getLotteryResult`,
    response: require('./getLotteryResult'),
    description: '',
    delay: 0,
  },
  {
    name: 'getTradeListByPhone',
    method: 'post',
    url: `${URI}getTradeListByPhone`,
    response: require('./getTradeListByPhone'),
    description: '',
    delay: 0,
  },
  {
    name: 'getTradeDetailByPhoneNumber',
    method: 'post',
    url: `${URI}getTradeDetailByPhoneNumber`,
    response: require('./getTradeDetailByPhoneNumber'),
    description: '',
    delay: 0,
  },
  {
    name: 'getUserCardsAndVouchers',
    method: 'post',
    url: `${URI}getUserCardsAndVouchers`,
    response: require('./getUserCardsAndVouchers'),
    description: '',
    delay: 0,
  },
  {
    name: 'encryptPhoneNumber',
    method: 'post',
    url: `${URI}encryptPhoneNumber`,
    response: require('./encryptPhoneNumber'),
    description: '',
    delay: 0,
  },
  {
    name: 'sync',
    method: 'post',
    url: `${URI}sync`,
    response: require('./sync'),
    description: '新埋点接口',
    delay: 0,
  },
  {
    name: 'loginSms',
    method: 'post',
    url: `${URI}loginSms`,
    response: require('./loginSms'),
    description: '登录发验证码',
    delay: 0,
  },
  {
    name: 'checkSms',
    method: 'post',
    url: `${URI}checkSms`,
    response: require('./checkSms'),
    description: '登录',
    delay: 0,
  },
  {
    name: 'checkSmsCode',
    method: 'post',
    url: `${URI}checkSmsCode`,
    response: require('./checkSmsCode'),
    description: '登录',
    delay: 0,
  },
  {
    name: 'getUserConfirmInfo',
    method: 'post',
    url: `${URI}getUserConfirmInfo`,
    response: require('./getUserConfirmInfo'),
    description: '查询该商品是否显示确认弹窗',
    delay: 0,
  },
  {
    name: 'getMarketingInfoBy',
    method: 'post',
    url: `${URI}getMarketingInfoBy`,
    response: require('./getMarketingInfoBy'),
    description: '获取营销配置',
    delay: 0,
  },
  {
    name: 'closeTrade',
    method: 'post',
    url: `${URI}closeTrade`,
    response: require('./closeTrade'),
    description: '退订订单',
    delay: 0,
  },
];
