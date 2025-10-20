module.exports = (req) => {
  return {
    code: 200,
    data: {
      dataList: [],
      dataMap: {
        isvTitle: '',
        opCommId: '',
        operatorCode: 0,
        outBenefitUrl: '',
        packageId: 0,
        payment: 0,
        phMiddle: '',
        phoneNumber: '',
        providerOrderId: '111', // HUB 单号
        provinceId: 0,
        provinceOperatorName: '',
        servicePhoneNumber: '',
        skuTitle: '',
        sourceAdvertisingPlatform: '',
        sourceApp: '',
        sourceAppPackage: '',
        tradeCreateTime: null,
        tradeStatus: 0,
        tradeStatusMsg: '',
        unsubscribe: false,
      },
    },
    msg: '成功',
    noOrderPlace: false,
    success: true,
  };
};
