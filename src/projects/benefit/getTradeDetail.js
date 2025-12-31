const Mock = require('mockjs');

module.exports = (req) =>
  Mock.mock({
    code: 200,
    data: {
      dataList: [],
      dataMap: {
        skuExtInfo: "{\"extInfo\":{\"itemid\":\"AP-f82f2249b3d04cb888957e5ea09d3ee2\"},\"returnProduct\":{\"returnProductId\":\"\"}}",
        opCommId: 'GD-eac3012ade26487ba123cbc357bb6e47', // 运营商商品ID
        operatorCode: 1,
        outBenefitUrl: '',
        packageId: 1005467,
        payment: 0,
        phMiddle: '5663', // 脱敏四位
        phoneNumber: '130****0510',
        providerOrderId: '运营商单号', // 运营商单号
        provinceId: 33,
        provinceOperatorName: '浙江联通',
        servicePhoneNumber: '4000002967',
        skuTitle: '湖北生活会员（每天惠）25元月包',
        sourceAdvertisingPlatform: '来源平台', // 来源平台
        sourceApp: 'app名称', // app名称
        sourceAppPackage: '包名', // app包名
        isvTitle: '湖北生活会员（每天惠）25元月包', // 运营商商品名称
        tradeCreateTime: '2023-12-27 15:16:51',
        tradeStatus: 2,
        tradeStatusMsg: '办理成功',
        unsubscribe: false,
      },
    },
    msg: '成功',
    success: true,
  });
