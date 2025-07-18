const Mock = require('mockjs');

module.exports = (req) =>
  Mock.mock({
    code: 200,
    data: {
      'dataList|5-10': [
        {
          'payment|1-100.2': 0.01,
          phoneNumber: /1\d{2}\*{4}\d{4}/,
          provinceOperatorName: '@province@pick(["联通", "电信", "移动"])',
          skuTitle: '@province@pick(["联通", "电信", "移动"])@cword(3, 5)',
          tradeId: /\d{10}/,
          'tradeStatus|1': [1, 2],
          'tradeStatusMsg|1': ['受理中', '生效中', '已退款'],
          tradeTime: '@datetime',
        },
      ],
      dataMap: {},
    },
    msg: '成功',
  });
