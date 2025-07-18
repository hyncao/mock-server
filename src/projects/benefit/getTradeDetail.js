const Mock = require('mockjs');

module.exports = (req) =>
  Mock.mock({
    code: 200,
    data: {
      dataList: [],
      dataMap: {
        opCommId: '运营商商品ID', // 运营商商品ID
        operatorCode: 1,
        outBenefitUrl: '',
        packageId: 1004785,
        payment: 0,
        phMiddle: '5663', // 脱敏四位
        phoneNumber: '130****0510',
        providerOrderId: '运营商单号', // 运营商单号
        provinceId: 33,
        provinceOperatorName: '浙江联通',
        servicePhoneNumber: '4000002967',
        skuTitle: '电信权益',
        sourceAdvertisingPlatform: '来源平台', // 来源平台
        sourceApp: 'app名称', // app名称
        sourceAppPackage: '包名', // app包名
        isvTitle: '1111', // 运营商商品名称
        tradeCreateTime: '2023-12-27 15:16:51',
        tradeStatus: -2,
        tradeStatusMsg: '办理成功',
        unsubscribe: false,
      },
    },
    msg: '成功',
    success: true,
  });
