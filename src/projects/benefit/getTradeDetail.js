const Mock = require('mockjs');

module.exports = (req) => Mock.mock({
  code: 500,
  data: {
    dataList: [],
    dataMap: {
      'payment|1-2.2': 99.0,
      phoneNumber: /1\d{2}\*{4}\d{4}/,
      provinceOperatorName: '@province@pick(["联通", "电信", "移动"])',
      servicePhoneNumber: /\d{9}/,
      skuTitle: '@province@pick(["联通", "电信", "移动"])@cword(3, 5)',
      tradeCreateTime: '@datetime',
      // 'tradeStatus|1': [0, 1, 2, -2],
      tradeStatus: 2,
      'tradeStatusMsg|1': ['受理中', '生效中', '已退款'],
      packageId: 1000967,
      // outBenefitUrl: 'https://www.bing.com'
    },
  },
  msg: '成功',
  success: true,
});
