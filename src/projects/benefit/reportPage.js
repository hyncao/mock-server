const moment = require('moment');
const Mock = require('mockjs');
const Random = Mock.Random;

module.exports = (req) => ({
  code: 200,
  data: {
    dataList: [],
    dataMap: {
      pageUrl: '/mobileOppo',
      phoneNumber: '13812344321',
      skuReportItem: {
        buttonImg: 'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/marketing/100001/skus/10051/101081/buttonImg.png',
        detailImgs: [
          'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/marketing/100001/skus/10051/101081/ruleImg.png',
        ],
        headerImg: 'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/marketing/100001/skus/10051/101081/headImg.png',
        headerImg: 'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/temporary/100001/skus/12306/23106/headImg.png',
        iconImg: '',
        listImg: 'https://img.temp.im/750x780/ffad66/ffffff',
        logoImg: '',
        pluginBackgroundImg: '',
        pluginProductImg: '',
      },
      smsCode: '123456',
      tradeCreateTime: '2024-12-27 16:12:53',
    },
  },
  msg: '成功',
  success: true,
});
