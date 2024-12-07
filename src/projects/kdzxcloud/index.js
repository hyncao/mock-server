const URI = '/kdzxcloud/';

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
    name: 'commonProcess',
    method: 'get',
    url: `${URI}renewalFee/getRenewrecord`,
    response: require('./getRenewRecord'),
    description: '获取续约账号列表',
    delay: 0,
  },
];
