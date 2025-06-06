const moment = require('moment');
const Mock = require('mockjs');
const Random = Mock.Random;

module.exports = (req) => {
  return {
    "code": 200,
    "data": {
        "dataList": [],
        "dataMap": {
            "pageUrl": "/proxyInvestShowVerify",
            "phoneNumber": "15679371830",
            "skuReportItem": {
                "agreementName": "业务受理协议",
                "agreementNameSuffix": "及页面规则",
                "agreementShowLimit": 1,
                "buttonImg": "https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/temporary/100001/skus/12421/23781/buttonImg.png",
                "channelBrand": "https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/channelSupplier/channelBrand/1000227/6/56.jpg",
                "defaultChoose": 1,
                "detailImgs": [
                    "https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/temporary/100001/skus/12421/23781/ruleImg.png"
                ],
                "headerImg": "https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/temporary/100001/skus/12421/23781/headImg.png",
                "iconImg": "",
                "listImg": "https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/temporary/100001/skus/12421/23781/productImg.png",
                "logoImg": "",
                "pluginBackgroundImg": "",
                "pluginProductImg": "",
                "skuUserAgreements": [
                    {
                        "agreement": "",
                        "agreementName": "业务受理协议",
                        "agreementNameSuffix": "及页面规则",
                        "cnId": 0,
                        "createTime": null,
                        "dateParams": null,
                        "defaultChoose": 0,
                        "delFlag": false,
                        "enable": false,
                        "enterId": 0,
                        "extendData": {},
                        "id": 11245,
                        "isAsc": "",
                        "orderByColumn": "",
                        "searchValue": "",
                        "showLimit": 0,
                        "skuId": 0,
                        "templateType": 0,
                        "timeParams": null,
                        "updateTime": null
                    }
                ],
                "templateType": 0
            },
            "smsCode": "138154",
            "tradeCreateTime": "2025-06-04 15:05:38"
        }
    },
    "msg": "成功",
    "noOrderPlace": false,
    "success": true
}
  return {
    code: 200,
    data: {
      dataList: [],
      dataMap: {
        pageUrl: '/mobileOppo',
        phoneNumber: '13812344321',
        skuReportItem: {
          buttonImg:
            'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/marketing/100001/skus/10051/101081/buttonImg.png',
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
  };
};
