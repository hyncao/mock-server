const URI = '/broadband/';

module.exports = [
  {
    name: 'getToken',
    method: 'get',
    url: `${URI}account/auth/token`,
    response: require('./getToken'),
    description: '获取token',
    delay: 0,
  },
  {
    name: 'getRenewRecord',
    method: 'get',
    url: `${URI}renewalFee/getRenewrecord`,
    response: require('./getRenewRecord'),
    description: '获取续约账号列表',
    delay: 0,
  },
  {
    name: 'broadbandIndex',
    method: 'get',
    url: `${URI}channel/index`,
    response: require('./broadbandIndex'),
    description: '首页数据',
    delay: 0,
  },
  {
    name: 'screen',
    method: 'post',
    url: `${URI}message/screen`,
    response: require('./screen'),
    description: '获取弹屏数据',
    delay: 0,
  },
  {
    name: 'networkEquipmentList',
    method: 'get',
    url: `${URI}networkEquipment/networkEquipmentList`,
    response: require('./networkEquipmentList'),
    description: '优选智家',
    delay: 0,
  },
  {
    name: 'getNetHalls',
    method: 'post',
    url: `${URI}oao/netHall/getNetHalls`,
    response: require('./getNetHalls'),
    description: '获取网厅列表',
    delay: 0,
  },
  {
    name: 'getIconByOperatorCode',
    method: 'get',
    url: `${URI}channel/getIconByOperatorCode`,
    response: require('./getIconByOperatorCode'),
    description: '获取icon列表',
    delay: 0,
  },
  {
    name: 'renewalService',
    method: 'get',
    url: `${URI}renewalFee/service`,
    response: require('./renewalService'),
    description: '获取续约运营商列表',
    delay: 0,
  },
  {
    name: 'renewalFeeDetail',
    method: 'post',
    url: `${URI}renewalFee/detail`,
    response: require('./renewalFeeDetail'),
    description: '获取单个续约账号可续约状态',
    delay: 0,
  },
  {
    name: 'accessLog',
    method: 'post',
    url: `${URI}account/access/log`,
    response: require('./accessLog'),
    description: '埋点',
    delay: 0,
  },
  {
    name: 'oaoList',
    method: 'post',
    url: `${URI}oao/oaoGoods/oaoAuth`,
    response: require('./oaoList'),
    description: 'oao列表',
    delay: 0,
  },
];