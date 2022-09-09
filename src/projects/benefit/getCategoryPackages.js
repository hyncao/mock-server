const moment = require('moment');

const extInfo = {
  // 弹窗中的信息
  mainTitle: '10GB',
  subTitle: '全国通用',

  enableTime: '一个月',
  enableType: '立即生效',
  range: '全国通用',
  exit: '不可退订',
  remarks: '我是一些备注, 而且字数还有点多的, 我是一些备注, 而且字数还有点多的, 我是一些备注, 而且字数还有点多的',
  rechargeType: '自动充值',
  rechargeAccount: '以手机号为准',
  detail:
    '我是详细说明, 字数就跟多了, 我是详细说明, 字数就跟多了, 我是详细说明, 字数就跟多了, 我是详细说明, 字数就跟多了, 我是详细说明, 字数就跟多了',

  cornerIcon: '推荐',

  // feeRechargePrice: 50,
  // feeName: '充50送20',
  // feePrice: '售价 50元',

  flowNum: '2GB',
  flowName: '7天流量包',
  flowPrice: '售价 50元',

  // equityTitle: 'VV移动会员',
  // equityIcon: 'https://chaac.oss-cn-hangzhou.aliyuncs.com/vvip/static/manageIconBasic1.png',
  // equityPrice: '20.88',
  // equityDel: '30',
  // equityTips: '我的字数比较多',
};

module.exports = (req) => {
  if (req.body.phoneNumber === '18888888888' || req.body.phoneNumber === '18900000000' || req.body.direction === true) {
    return {
      code: 200,
      data: {
        dataList: [],
        dataMap: {
          hasProduct: false,
          msg: '不可办理',
          noProduct: true,
          operatorCode: 0,
          phoneNumber: '',
          provinceId: 0,
          provinceName: '',
          provinceOperatorName: '',
          showPackageList: [],
          status: 3,
        },
      },
    };
  }
  return {
    code: 200,
    data: {
      dataList: [],
      dataMap: {
        tabPackageList: [
          {
            categoryPackageList: [
              {
                categoryName: '充值送的',
                id: 1,
                backgroundColor: 1,
                packageInfoList: [
                  {
                    categoryId: 4,
                    detailImg: '',
                    firstPriority: 99999999,
                    frontExtInfo: {
                      authSubMsg: '',
                      showCountBox: true,
                      baseProduct: false,
                      customService: '',
                      bookUrl: '',
                    },
                    headerImg: '',
                    mutexGroups: '',
                    packageGroup: '',
                    packageId: 1000661,
                    priority: 11,
                    quotaLimit: 0,
                    routeGroup: '',
                    sendSms: true,
                    smsLength: 4,
                    showItemList: [
                      {
                        detailImg: '',
                        formInfo: null,
                        hideType: 0,
                        indexImg: '',
                        itemId: 100661,
                        listImg: '',
                        maxShowSkuNum: 10,
                        optional: true,
                        packagerId: 0,
                        skus: [
                          {
                            agreementName: '123',
                            categoryId: 0,
                            cnId: 10015,
                            detailImgs: [
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/temporary/100001/skus/5772/5363/rule.png',
                            ],
                            failurePrompt: '请仔细核对下单号码',
                            frontExtInfo: { tips: '', ...extInfo },
                            headerImg:
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/temporary/100001/skus/5772/5363/top.png',
                            iconImg:
                              'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/iconImg.png',
                            itemId: 100661,
                            listImg:
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/temporary/100001/skus/5772/5363/icon.png',
                            pocTitle: '20元14G',
                            pocTitleTwo: '再送会员周卡',
                            price: 0.0,
                            ranks: 1,
                            skuId: 5761,
                            skuImg: '',
                            skuProps: { 合约: '合约1' },
                            tabId: 0,
                            taobaoProductId: '',
                            taobaoProducts: [],
                            title: '联通-福建20元14G7天包',
                            tip: '您即将办理 30元10G流量合约包，如需继续办理请仔细阅读以下信息，请点击确认\r\n1. 30元/月  10GB流量合约包\r\n2. 协议期：12个月 。\r\n3. 主副卡分享：仅限订购号码使用，套餐不共享。\r\n4. 退订： 合约期内不可退订，第12个月可以退订。若提前退订，需要到本地自有营业厅办理，并按已享受的权益价值缴纳违约金，即30元*已订购月份。',
                          },
                        ],
                        title: '联通-福建20元14G7天包',
                      },
                    ],
                    success: true,
                    tabId: 7,
                  },
                  {
                    categoryId: 1,
                    detailImg: '',
                    firstPriority: 99999999,
                    frontExtInfo: {
                      authSubMsg: '',
                      showCountBox: true,
                      baseProduct: false,
                      customService: '',
                      bookUrl: '',
                    },
                    headerImg: '',
                    mutexGroups: '',
                    packageGroup: '',
                    packageId: 1000662,
                    priority: 11,
                    quotaLimit: 0,
                    routeGroup: '',
                    sendSms: false,
                    showItemList: [
                      {
                        detailImg: '',
                        formInfo: null,
                        hideType: 0,
                        indexImg: '',
                        itemId: 100662,
                        listImg: '',
                        maxShowSkuNum: 10,
                        optional: true,
                        packagerId: 0,
                        skus: [
                          {
                            agreementName: '12344',
                            categoryId: 0,
                            cnId: 10015,
                            detailImgs: [
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/temporary/100001/skus/5772/5363/rule.png',
                            ],
                            failurePrompt: '请仔细核对下单号码',
                            frontExtInfo: { tips: '' },
                            headerImg:
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/temporary/100001/skus/5772/5363/top.png',
                            iconImg:
                              'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/iconImg.png',
                            itemId: 100662,
                            listImg:
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/temporary/100001/skus/5772/5363/icon.png',
                            pocTitle: '20元14G',
                            pocTitleTwo: '再送会员周卡',
                            price: 0.0,
                            ranks: 1,
                            skuId: 5762,
                            skuImg: '',
                            skuProps: { 合约: '合约1' },
                            tabId: 0,
                            taobaoProductId: '',
                            taobaoProducts: [],
                            title: '啊啊啊?',
                          },
                        ],
                        title: '联通-福建20元14G7天包',
                      },
                    ],
                    success: true,
                    tabId: 7,
                  },
                ],
                skuItemList: [],
                sort: 4,
              },
            ],
            id: 6,
            sort: 2,
            tabName: '充值送',
          },
          {
            categoryPackageList: [
              {
                categoryName: '流量的',
                id: 2,
                backgroundColor: 2,
                packageInfoList: [
                  {
                    categoryId: 4,
                    detailImg: '',
                    firstPriority: 99999999,
                    frontExtInfo: {
                      authSubMsg: '',
                      showCountBox: true,
                      baseProduct: false,
                      customService: '',
                      bookUrl: '',
                    },
                    headerImg: '',
                    mutexGroups: '',
                    packageGroup: '',
                    // packageId: 1001129, // 电信集团优酷
                    // packageId: 1001166, // 电信集团喜马拉雅
                    packageId: 1001471, // 广西电信
                    priority: 11,
                    quotaLimit: 0,
                    routeGroup: '',
                    sendSms: true,
                    showItemList: [
                      {
                        detailImg: '',
                        formInfo: null,
                        hideType: 0,
                        indexImg: '',
                        itemId: 100771,
                        listImg: '',
                        maxShowSkuNum: 10,
                        optional: true,
                        packagerId: 0,
                        skus: [
                          {
                            categoryId: 0,
                            cnId: 10015,
                            detailImgs: [
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/temporary/100001/skus/5772/5363/rule.png',
                            ],
                            failurePrompt: '请仔细核对下单号码',
                            frontExtInfo: { tips: '' },
                            headerImg:
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/temporary/100001/skus/5772/5363/top.png',
                            iconImg:
                              'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/iconImg.png',
                            itemId: 100767,
                            listImg:
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/temporary/100001/skus/5772/5363/icon.png',
                            pocTitle: '20元14G',
                            pocTitleTwo: '再送会员周卡',
                            price: 0.0,
                            ranks: 1,
                            skuId: 5771,
                            skuImg: '',
                            skuProps: { 合约: '合约1' },
                            tabId: 0,
                            taobaoProductId: '',
                            taobaoProducts: [],
                            title: '联通-福建20元14G7天包',
                          },
                          {
                            categoryId: 0,
                            cnId: 10015,
                            detailImgs: [
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/temporary/100001/skus/5772/5363/rule.png',
                            ],
                            failurePrompt: '请仔细核对下单号码',
                            frontExtInfo: { tips: '' },
                            headerImg:
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/temporary/100001/skus/5772/5363/top.png',
                            iconImg:
                              'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/iconImg.png',
                            itemId: 100767,
                            listImg:
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/temporary/100001/skus/5772/5363/icon.png',
                            pocTitle: '20元14G',
                            pocTitleTwo: '再送会员周卡',
                            price: 0.0,
                            ranks: 1,
                            skuId: 5772,
                            skuImg: '',
                            skuProps: { 合约: '合约1' },
                            tabId: 0,
                            taobaoProductId: '',
                            taobaoProducts: [],
                            title: '联通-福建20元14G7天包',
                          },
                          {
                            categoryId: 0,
                            cnId: 10015,
                            detailImgs: [
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/temporary/100001/skus/5772/5363/rule.png',
                            ],
                            failurePrompt: '请仔细核对下单号码',
                            frontExtInfo: { tips: '' },
                            headerImg:
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/temporary/100001/skus/5772/5363/top.png',
                            iconImg:
                              'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/iconImg.png',
                            itemId: 100767,
                            listImg:
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/temporary/100001/skus/5772/5363/icon.png',
                            pocTitle: '20元14G',
                            pocTitleTwo: '再送会员周卡',
                            price: 0.0,
                            ranks: 1,
                            skuId: 5773,
                            skuImg: '',
                            skuProps: { 合约: '合约1' },
                            tabId: 0,
                            taobaoProductId: '',
                            taobaoProducts: [],
                            title: '联通-福建20元14G7天包',
                          },
                          {
                            categoryId: 0,
                            cnId: 10015,
                            detailImgs: [
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/temporary/100001/skus/5772/5363/rule.png',
                            ],
                            failurePrompt: '请仔细核对下单号码',
                            frontExtInfo: { tips: '' },
                            headerImg:
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/temporary/100001/skus/5772/5363/top.png',
                            iconImg:
                              'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/iconImg.png',
                            itemId: 100767,
                            listImg:
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/temporary/100001/skus/5772/5363/icon.png',
                            pocTitle: '20元14G',
                            pocTitleTwo: '再送会员周卡',
                            price: 0.0,
                            ranks: 1,
                            skuId: 5774,
                            skuImg: '',
                            skuProps: { 合约: '合约1' },
                            tabId: 0,
                            taobaoProductId: '',
                            taobaoProducts: [],
                            title: '联通-福建20元14G7天包',
                          },
                        ],
                        title: '联通-福建20元14G7天包',
                      },
                    ],
                    success: true,
                    tabId: 7,
                  },
                  {
                    categoryId: 1,
                    detailImg: '',
                    firstPriority: 99999999,
                    frontExtInfo: {
                      authSubMsg: '',
                      showCountBox: true,
                      baseProduct: false,
                      customService: '',
                      bookUrl: '',
                    },
                    headerImg: '',
                    mutexGroups: '',
                    packageGroup: '',
                    packageId: 1000772,
                    priority: 11,
                    quotaLimit: 0,
                    routeGroup: '',
                    sendSms: false,
                    showItemList: [
                      {
                        detailImg: '',
                        formInfo: null,
                        hideType: 0,
                        indexImg: '',
                        itemId: 100772,
                        listImg: '',
                        maxShowSkuNum: 10,
                        optional: true,
                        packagerId: 0,
                        skus: [
                          {
                            categoryId: 0,
                            cnId: 10015,
                            detailImgs: [
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/temporary/100001/skus/5772/5363/rule.png',
                            ],
                            failurePrompt: '请仔细核对下单号码',
                            frontExtInfo: { tips: '' },
                            headerImg:
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/temporary/100001/skus/5772/5363/top.png',
                            iconImg:
                              'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/iconImg.png',
                            itemId: 100772,
                            listImg:
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/temporary/100001/skus/5772/5363/icon.png',
                            pocTitle: '20元14G',
                            pocTitleTwo: '再送会员周卡',
                            price: 0.0,
                            ranks: 1,
                            skuId: 5775,
                            skuImg: '',
                            skuProps: { 合约: '合约1' },
                            tabId: 0,
                            taobaoProductId: '',
                            taobaoProducts: [],
                            title: '啊啊啊?',
                          },
                        ],
                        title: '联通-福建20元14G7天包',
                      },
                    ],
                    success: true,
                    tabId: 7,
                  },
                ],
                skuItemList: [],
                sort: 4,
              },
            ],
            id: 7,
            sort: 2,
            tabName: '流量',
          },
          {
            categoryPackageList: [
              {
                categoryName: '增值的',
                id: 3,
                packageInfoList: [
                  {
                    categoryId: 4,
                    detailImg: '',
                    firstPriority: 99999999,
                    frontExtInfo: {
                      authSubMsg: '',
                      showCountBox: true,
                      baseProduct: false,
                      customService: '',
                      bookUrl: '',
                    },
                    headerImg: '',
                    mutexGroups: '',
                    packageGroup: '',
                    packageId: 1000991,
                    priority: 11,
                    quotaLimit: 0,
                    routeGroup: '',
                    sendSms: true,
                    showItemList: [
                      {
                        detailImg: '',
                        formInfo: null,
                        hideType: 0,
                        indexImg: '',
                        itemId: 100991,
                        listImg: '',
                        maxShowSkuNum: 10,
                        optional: true,
                        packagerId: 0,
                        skus: [
                          {
                            categoryId: 0,
                            cnId: 10015,
                            detailImgs: [
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/temporary/100001/skus/5772/5363/rule.png',
                            ],
                            failurePrompt: '请仔细核对下单号码',
                            frontExtInfo: { tips: '' },
                            headerImg:
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/temporary/100001/skus/5772/5363/top.png',
                            iconImg:
                              'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/iconImg.png',
                            itemId: 100991,
                            listImg:
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/temporary/100001/skus/5772/5363/icon.png',
                            pocTitle: '20元14G',
                            pocTitleTwo: '再送会员周卡',
                            price: 0.0,
                            ranks: 1,
                            skuId: 5991,
                            skuImg: '',
                            skuProps: { 合约: '合约1' },
                            tabId: 0,
                            taobaoProductId: '',
                            taobaoProducts: [],
                            title: '联通-福建20元14G7天包',
                          },
                          {
                            categoryId: 0,
                            cnId: 10015,
                            detailImgs: [
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/temporary/100001/skus/5772/5363/rule.png',
                            ],
                            failurePrompt: '请仔细核对下单号码',
                            frontExtInfo: { tips: '' },
                            headerImg:
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/temporary/100001/skus/5772/5363/top.png',
                            iconImg:
                              'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/iconImg.png',
                            itemId: 100991,
                            listImg:
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/temporary/100001/skus/5772/5363/icon.png',
                            pocTitle: '20元14G',
                            pocTitleTwo: '再送会员周卡',
                            price: 0.0,
                            ranks: 1,
                            skuId: 5992,
                            skuImg: '',
                            skuProps: { 合约: '合约1' },
                            tabId: 0,
                            taobaoProductId: '',
                            taobaoProducts: [],
                            title: '联通-福建20元14G7天包',
                          },
                          {
                            categoryId: 0,
                            cnId: 10015,
                            detailImgs: [
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/temporary/100001/skus/5772/5363/rule.png',
                            ],
                            failurePrompt: '请仔细核对下单号码',
                            frontExtInfo: { tips: '' },
                            headerImg:
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/temporary/100001/skus/5772/5363/top.png',
                            iconImg:
                              'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/iconImg.png',
                            itemId: 100991,
                            listImg:
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/temporary/100001/skus/5772/5363/icon.png',
                            pocTitle: '20元14G',
                            pocTitleTwo: '再送会员周卡',
                            price: 0.0,
                            ranks: 1,
                            skuId: 5993,
                            skuImg: '',
                            skuProps: { 合约: '合约1' },
                            tabId: 0,
                            taobaoProductId: '',
                            taobaoProducts: [],
                            title: '联通-福建20元14G7天包',
                          },
                          {
                            categoryId: 0,
                            cnId: 10015,
                            detailImgs: [
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/temporary/100001/skus/5772/5363/rule.png',
                            ],
                            failurePrompt: '请仔细核对下单号码',
                            frontExtInfo: { tips: '' },
                            headerImg:
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/temporary/100001/skus/5772/5363/top.png',
                            iconImg:
                              'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/iconImg.png',
                            itemId: 100991,
                            listImg:
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/temporary/100001/skus/5772/5363/icon.png',
                            pocTitle: '20元14G',
                            pocTitleTwo: '再送会员周卡',
                            price: 0.0,
                            ranks: 1,
                            skuId: 5994,
                            skuImg: '',
                            skuProps: { 合约: '合约1' },
                            tabId: 0,
                            taobaoProductId: '',
                            taobaoProducts: [],
                            title: '联通-福建20元14G7天包',
                          },
                        ],
                        title: '联通-福建20元14G7天包',
                      },
                    ],
                    success: true,
                    tabId: 7,
                  },
                  {
                    categoryId: 1,
                    detailImg: '',
                    firstPriority: 99999999,
                    frontExtInfo: {
                      authSubMsg: '',
                      showCountBox: true,
                      baseProduct: false,
                      customService: '',
                      bookUrl: '',
                    },
                    headerImg: '',
                    mutexGroups: '',
                    packageGroup: '',
                    packageId: 1000992,
                    priority: 11,
                    quotaLimit: 0,
                    routeGroup: '',
                    sendSms: false,
                    showItemList: [
                      {
                        detailImg: '',
                        formInfo: null,
                        hideType: 0,
                        indexImg: '',
                        itemId: 100992,
                        listImg: '',
                        maxShowSkuNum: 10,
                        optional: true,
                        packagerId: 0,
                        skus: [
                          {
                            categoryId: 0,
                            cnId: 10015,
                            detailImgs: [
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/temporary/100001/skus/5772/5363/rule.png',
                            ],
                            failurePrompt: '请仔细核对下单号码',
                            frontExtInfo: { tips: '' },
                            headerImg:
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/temporary/100001/skus/5772/5363/top.png',
                            iconImg:
                              'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/iconImg.png',
                            itemId: 100992,
                            listImg:
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/temporary/100001/skus/5772/5363/icon.png',
                            pocTitle: '20元14G',
                            pocTitleTwo: '再送会员周卡',
                            price: 0.0,
                            ranks: 1,
                            skuId: 5995,
                            skuImg: '',
                            skuProps: { 合约: '合约1' },
                            tabId: 0,
                            taobaoProductId: '',
                            taobaoProducts: [],
                            title: '啊啊啊?',
                          },
                        ],
                        title: '联通-福建20元14G7天包',
                      },
                    ],
                    success: true,
                    tabId: 7,
                  },
                ],
                skuItemList: [],
                sort: 4,
              },
            ],
            id: 9,
            sort: 2,
            tabName: '增值',
          },
        ],
        hasProduct: true,
        marketingFlag: true,
        msg: '有商品',
        noProduct: false,
        operatorCode: 1,
        phoneNumber: '131******33',
        provinceId: 14,
        provinceName: '山西',
        provinceOperatorName: '山西',
        showPackageInfo: {
          categoryId: 3,
          detailImg: '',
          firstPriority: 99999999,
          frontExtInfo: {},
          headerImg: '',
          mutexGroups: '',
          packageGroup: '',
          // packageId: 1001111, // 正经的商品
          // packageId: 1001129, // 电信集团优酷
          // packageId: 1001166, // 电信集团喜马拉雅
          // packageId: 1001129, // 协议
          // packageId: 1001214, // 学军
          packageId: 1000712, // 河南电信
          priority: 1,
          quotaLimit: 1,
          routeGroup: '',
          sendSms: true,
          smsLength: 6,
          showItemList: [
            {
              detailImg: '',
              formInfo: null,
              hideType: 0,
              indexImg: '',
              itemId: 100766,
              listImg: '',
              maxShowSkuNum: 10,
              optional: true,
              packagerId: 0,
              skus: [
                {
                  cnId: 10015,
                  detailImgs: ['https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/rule.png'],
                  failurePrompt: '请仔细核对下单号码',
                  frontExtInfo: { tips: '' },
                  headerImg: 'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/top.png',
                  iconImg: 'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/iconImg.png',
                  itemId: 100766,
                  listImg: 'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/icon.png',
                  pocTitle: '',
                  pocTitleTwo: '',
                  price: 10.0,
                  ranks: 1,
                  skuId: 5769,
                  skuImg: '',
                  skuProps: { 合约: '1' },
                  taobaoProductId: '',
                  taobaoProducts: [],
                  title: '测试',
                  tip: '您即将办理 30元10G流量合约包，如需继续办理请仔细阅读以下信息，请点击确认\r\n1. 30元/月  10GB流量合约包\r\n2. 协议期：12个月 。\r\n3. 主副卡分享：仅限订购号码使用，套餐不共享。\r\n4. 退订： 合约期内不可退订，第12个月可以退订。若提前退订，需要到本地自有营业厅办理，并按已享受的权益价值缴纳违约金，即30元*已订购月份。',
                },
              ],
              title: '小程序测试',
            },
          ],
          success: true,
        },
        categoryPackageList: [
          {
            categoryName: '充值送的',
            id: 1,
            packageInfoList: [
              {
                categoryId: 4,
                detailImg: '',
                firstPriority: 99999999,
                frontExtInfo: {
                  authSubMsg: '',
                  showCountBox: true,
                  baseProduct: false,
                  customService: '',
                  bookUrl: '',
                },
                headerImg: '',
                mutexGroups: '',
                packageGroup: '',
                packageId: 1000661,
                priority: 11,
                quotaLimit: 0,
                routeGroup: '',
                sendSms: true,
                smsLength: 4,
                showItemList: [
                  {
                    detailImg: '',
                    formInfo: null,
                    hideType: 0,
                    indexImg: '',
                    itemId: 100661,
                    listImg: '',
                    maxShowSkuNum: 10,
                    optional: true,
                    packagerId: 0,
                    skus: [
                      {
                        categoryId: 0,
                        cnId: 10015,
                        detailImgs: [
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/temporary/100001/skus/5772/5363/rule.png',
                        ],
                        failurePrompt: '请仔细核对下单号码',
                        frontExtInfo: { tips: '' },
                        headerImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/temporary/100001/skus/5772/5363/top.png',
                        iconImg:
                          'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/iconImg.png',
                        itemId: 100661,
                        listImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/temporary/100001/skus/5772/5363/icon.png',
                        pocTitle: '20元14G',
                        pocTitleTwo: '再送会员周卡',
                        price: 0.0,
                        ranks: 1,
                        skuId: 5761,
                        skuImg: '',
                        skuProps: { 合约: '合约1' },
                        tabId: 0,
                        taobaoProductId: '',
                        taobaoProducts: [],
                        title: '联通-福建20元14G7天包',
                      },
                    ],
                    title: '联通-福建20元14G7天包',
                  },
                ],
                success: true,
                tabId: 7,
              },
              {
                categoryId: 1,
                detailImg: '',
                firstPriority: 99999999,
                frontExtInfo: {
                  authSubMsg: '',
                  showCountBox: true,
                  baseProduct: false,
                  customService: '',
                  bookUrl: '',
                },
                headerImg: '',
                mutexGroups: '',
                packageGroup: '',
                packageId: 1000662,
                priority: 11,
                quotaLimit: 0,
                routeGroup: '',
                sendSms: false,
                showItemList: [
                  {
                    detailImg: '',
                    formInfo: null,
                    hideType: 0,
                    indexImg: '',
                    itemId: 100662,
                    listImg: '',
                    maxShowSkuNum: 10,
                    optional: true,
                    packagerId: 0,
                    skus: [
                      {
                        categoryId: 0,
                        cnId: 10015,
                        detailImgs: [
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/temporary/100001/skus/5772/5363/rule.png',
                        ],
                        failurePrompt: '请仔细核对下单号码',
                        frontExtInfo: { tips: '' },
                        headerImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/temporary/100001/skus/5772/5363/top.png',
                        iconImg:
                          'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/iconImg.png',
                        itemId: 100662,
                        listImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/temporary/100001/skus/5772/5363/icon.png',
                        pocTitle: '20元14G',
                        pocTitleTwo: '再送会员周卡',
                        price: 0.0,
                        ranks: 1,
                        skuId: 5762,
                        skuImg: '',
                        skuProps: { 合约: '合约1' },
                        tabId: 0,
                        taobaoProductId: '',
                        taobaoProducts: [],
                        title: '啊啊啊?',
                      },
                    ],
                    title: '联通-福建20元14G7天包',
                  },
                ],
                success: true,
                tabId: 7,
              },
            ],
            skuItemList: [],
            sort: 4,
          },
        ],
        status: 1,
      },
    },
    msg: '成功',
    success: true,
  };
};
