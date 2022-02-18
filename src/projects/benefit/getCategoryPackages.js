const moment = require('moment');

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
        categoryPackageList: [
          {
            categoryName: '限时特惠',
            id: 1,
            packageInfoList: [
              {
                categoryId: 1,
                detailImg: '',
                firstPriority: 99999999,
                frontExtInfo: {},
                headerImg: '',
                mutexGroups: '',
                packageGroup: '',
                packageId: 1000750,
                priority: 1,
                quotaLimit: 1,
                routeGroup: '',
                sendSms: true,
                showItemList: [
                  {
                    detailImg: '',
                    formInfo: null,
                    hideType: 0,
                    indexImg: '',
                    itemId: 100768,
                    listImg: '',
                    maxShowSkuNum: 10,
                    optional: true,
                    packagerId: 0,
                    skus: [
                      {
                        categoryId: 1,
                        cnId: 10015,
                        detailImgs: [
                          'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/rule.png',
                        ],
                        failurePrompt: '请仔细核对下单号码',
                        frontExtInfo: { tips: '' },
                        headerImg:
                          'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/top.png',
                        iconImg:
                          'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/iconImg.png',
                        itemId: 100767,
                        listImg:
                          'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/icon.png',
                        pocTitle: '',
                        pocTitleTwo: '',
                        price: 10.0,
                        ranks: 2,
                        skuId: 5770,
                        skuImg: '',
                        skuProps: { 合约: '1' },
                        taobaoProductId: '',
                        taobaoProducts: [],
                        title: '测试',
                      },
                      {
                        categoryId: 1,
                        cnId: 10015,
                        detailImgs: [
                          'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/rule.png',
                        ],
                        failurePrompt: '请仔细核对下单号码',
                        frontExtInfo: { tips: '' },
                        headerImg:
                          'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/top.png',
                        iconImg:
                          'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/iconImg.png',
                        itemId: 100768,
                        listImg:
                          'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/icon.png',
                        pocTitle: '',
                        pocTitleTwo: '',
                        price: 10.0,
                        ranks: 3,
                        skuId: 5771,
                        skuImg: '',
                        skuProps: { 合约: '1' },
                        taobaoProductId: '',
                        taobaoProducts: [],
                        title: '测试',
                      },
                      {
                        categoryId: 1,
                        cnId: 10015,
                        detailImgs: [
                          'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/rule.png',
                        ],
                        failurePrompt: '请仔细核对下单号码',
                        frontExtInfo: { tips: '' },
                        headerImg:
                          'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/top.png',
                        iconImg:
                          'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/iconImg.png',
                        itemId: 100769,
                        listImg:
                          'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/icon.png',
                        pocTitle: '',
                        pocTitleTwo: '',
                        price: 10.0,
                        ranks: 4,
                        skuId: 5772,
                        skuImg: '',
                        skuProps: { 合约: '1' },
                        taobaoProductId: '',
                        taobaoProducts: [],
                        title: '测试',
                      },
                      {
                        categoryId: 1,
                        cnId: 10015,
                        detailImgs: [
                          'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/rule.png',
                        ],
                        failurePrompt: '请仔细核对下单号码',
                        frontExtInfo: { tips: '' },
                        headerImg:
                          'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/top.png',
                        iconImg:
                          'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/iconImg.png',
                        itemId: 100770,
                        listImg:
                          'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/icon.png',
                        pocTitle: '',
                        pocTitleTwo: '',
                        price: 10.0,
                        ranks: 4,
                        skuId: 5772,
                        skuImg: '',
                        skuProps: { 合约: '1' },
                        taobaoProductId: '',
                        taobaoProducts: [],
                        title: '测试',
                      },
                      {
                        categoryId: 1,
                        cnId: 10015,
                        detailImgs: [
                          'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/rule.png',
                        ],
                        failurePrompt: '请仔细核对下单号码',
                        frontExtInfo: { tips: '' },
                        headerImg:
                          'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/top.png',
                        iconImg:
                          'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/iconImg.png',
                        itemId: 100771,
                        listImg:
                          'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/icon.png',
                        pocTitle: '',
                        pocTitleTwo: '',
                        price: 10.0,
                        ranks: 4,
                        skuId: 5772,
                        skuImg: '',
                        skuProps: { 合约: '1' },
                        taobaoProductId: '',
                        taobaoProducts: [],
                        title: '测试',
                      },
                    ],
                    title: '小程序测试2-copy',
                  },
                ],
                success: true,
              },
            ],
            sort: 1,
          },
          {
            categoryName: '流量短期包',
            id: 2,
            packageInfoList: [
              {
                categoryId: 2,
                detailImg: '',
                firstPriority: 99999999,
                frontExtInfo: {},
                headerImg: '',
                mutexGroups: '',
                packageGroup: '',
                packageId: 1000749,
                priority: 1,
                quotaLimit: 1,
                routeGroup: '',
                sendSms: false,
                showItemList: [
                  {
                    detailImg: '',
                    formInfo: null,
                    hideType: 0,
                    indexImg: '',
                    itemId: 100767,
                    listImg: '',
                    maxShowSkuNum: 10,
                    optional: true,
                    packagerId: 0,
                    skus: [
                      {
                        cnId: 10015,
                        detailImgs: [
                          'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/rule.png',
                        ],
                        failurePrompt: '请仔细核对下单号码',
                        frontExtInfo: { tips: '' },
                        headerImg:
                          'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/top.png',
                        iconImg:
                          'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/iconImg.png',
                        itemId: 100767,
                        listImg:
                          'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/icon.png',
                        pocTitle: '',
                        pocTitleTwo: '',
                        price: 10.0,
                        ranks: 1,
                        skuId: 5770,
                        skuImg: '',
                        skuProps: { 合约: '1' },
                        taobaoProductId: '',
                        taobaoProducts: [],
                        title: '测试',
                      },
                    ],
                    title: '小程序测试-copy',
                  },
                ],
                success: true,
              },
            ],
            sort: 2,
          },
          {
            categoryName: '流量月包',
            id: 3,
            packageInfoList: [
              {
                categoryId: 3,
                detailImg: '',
                firstPriority: 99999999,
                frontExtInfo: {},
                headerImg: '',
                mutexGroups: '',
                packageGroup: '',
                packageId: 1000751,
                priority: 1,
                quotaLimit: 1,
                routeGroup: '',
                sendSms: false,
                showItemList: [
                  {
                    detailImg: '',
                    formInfo: null,
                    hideType: 0,
                    indexImg: '',
                    itemId: 100769,
                    listImg: '',
                    maxShowSkuNum: 10,
                    optional: true,
                    packagerId: 0,
                    skus: [
                      {
                        cnId: 10015,
                        detailImgs: [
                          'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/rule.png',
                        ],
                        failurePrompt: '请仔细核对下单号码',
                        frontExtInfo: { tips: '' },
                        headerImg:
                          'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/top.png',
                        iconImg:
                          'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/iconImg.png',
                        itemId: 100769,
                        listImg:
                          'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/icon.png',
                        pocTitle: '',
                        pocTitleTwo: '',
                        price: 10.0,
                        ranks: 1,
                        skuId: 5772,
                        skuImg: '',
                        skuProps: { 合约: '1' },
                        taobaoProductId: '',
                        taobaoProducts: [],
                        title: '测试',
                      },
                    ],
                    title: '小程序测试3-copy',
                  },
                ],
                success: true,
              },
            ],
            sort: 3,
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
          packageId: 1001129, // 协议
          // packageId: 1001214, // 学军
          priority: 1,
          quotaLimit: 1,
          routeGroup: '',
          sendSms: true,
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
                },
              ],
              title: '小程序测试',
            },
          ],
          success: true,
        },
        showPackageList: [],
        status: 1,
      },
    },
    msg: '成功',
    success: true,
  };
};
