const moment = require('moment');
const Mock = require('mockjs');
const Random = Mock.Random;

module.exports = (req) => ({
  code: 200,
  data: {
    dataList: [],
    dataMap: {
      pageUrl: '/teddybearsteps',
      phoneNumber: '13455568806',
      skuReportItem: {
        buttonImg: 'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/marketing/100001/skus/10051/101081/buttonImg.png',
        detailImgs: [
          'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/marketing/100001/skus/10051/101081/ruleImg.png',
        ],
        headerImg: 'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/marketing/100001/skus/10051/101081/headImg.png',
        iconImg: '',
        listImg: 'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/marketing/100001/skus/10051/101081/productImg.png',
        logoImg: '',
        pluginBackgroundImg: '',
        pluginProductImg: '',
      },
      smsCode: '666665',
      tradeCreateTime: '2024-12-27 16:12:53',
    },
  },
  msg: '成功',
  success: true,
});
