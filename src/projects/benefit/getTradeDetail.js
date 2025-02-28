const Mock = require('mockjs');

module.exports = (req) =>
  Mock.mock({
    code: 200,
    data: {
      dataList: [],
      dataMap: {
        'operatorCode|1': [1, 2, 3],
        provinceId: 31,
        'payment|1-2.2': 99.0,
        phoneNumber: /1\d{2}\*{4}\d{4}/,
        provinceOperatorName: '@province@pick(["联通", "电信", "移动"])',
        servicePhoneNumber: /\d{9}/,
        skuTitle: '@province@pick(["联通", "电信", "移动"])@cword(3, 5)',
        tradeCreateTime: '@datetime',
        // 'tradeStatus|1': [0, 1, 2, -2],
        tradeStatus: 0,
        // 'tradeStatusMsg|1': ['受理中', '生效中', '已退款'],
        tradeStatusMsg: '受理中',
        packageId: 1004503,
        // outBenefitUrl: 'https://www.bing.com'
        unsubscribe: 'true',
        providerOrderId: '1e994ecf872442f4bc192efc34b91e1f',
      },
    },
    msg: '成功',
    success: true,
  });
