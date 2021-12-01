module.exports = (req) => ({
  code: 200,
  data: {
    dataList: [],
    dataMap: (() => {
      if (
        req.body.phoneNumber === '18888888888' ||
        req.body.phoneNumber === '18900000000' ||
        req.body.direction === true
      ) {
        return {
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
        };
      } else {
        return {
          hasProduct: true,
          marketingFlag: true,
          msg: '有商品',
          noProduct: false,
          operatorCode: 3,
          phoneNumber: '18956562528',
          provinceId: 34,
          provinceName: '安徽',
          provinceOperatorName: '安徽电信',
          showPackageList: [
            {
              detailImg: '',
              frontExtInfo: {
                bookUrl: 'https://benefit.jujienet.com/benefit/INDEX/20188',
              },
              headerImg: '',
              mutexGroups: '',
              packageGroup: '',
              packageId: 1001214,
              priority: 2,
              quotaLimit: 0,
              routeGroup: '',
              sendSms: true,
              showItemList: [
                {
                  detailImg: '',
                  formInfo: null,
                  hideType: 0,
                  indexImg: '',
                  itemId: 100689,
                  listImg: '',
                  maxShowSkuNum: 10,
                  optional: true,
                  packagerId: 0,
                  skus: [
                    {
                      cnId: 10005,
                      detailImgs: ['https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5531/3559/rule.png'],
                      failurePrompt: '如有欠费将不能办理',
                      frontExtInfo: {
                        tips: '',
                      },
                      headerImg: 'http://placehold.it/750x640/',
                      itemId: 100689,
                      listImg: 'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5884/3890/icon.png',
                      pocTitle: '5折抢10G',
                      pocTitleTwo: '5折抢10G',
                      price: 0.0,
                      ranks: 30,
                      skuId: 5818,
                      skuImg: '',
                      skuProps: {
                        合约: '合约30',
                      },
                      taobaoProductId: '',
                      taobaoProducts: [],
                      title: '电信-集团10G流量包29元/月升5G，升白金会员（畅享）',
                    },
                  ],
                  title: '电信-集团4升5（融升套入口）',
                },
              ],
              success: true,
            },
            {
              detailImg: '',
              frontExtInfo: {
                bookUrl: 'https://benefit.jujienet.com/benefit/INDEX/20188',
              },
              headerImg: '',
              mutexGroups: '',
              packageGroup: '',
              packageId: 1000774,
              priority: 2,
              quotaLimit: 0,
              routeGroup: '',
              sendSms: false,
              showItemList: [
                {
                  detailImg: '',
                  formInfo: null,
                  hideType: 0,
                  indexImg: '',
                  itemId: 100690,
                  listImg: '',
                  maxShowSkuNum: 10,
                  optional: true,
                  packagerId: 0,
                  skus: [
                    {
                      cnId: 10005,
                      detailImgs: ['https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5531/3559/rule.png'],
                      failurePrompt: '如有欠费将不能办理',
                      frontExtInfo: {
                        tips: '',
                      },
                      headerImg: 'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5531/3559/top.png',
                      itemId: 100690,
                      listImg: 'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5531/3559/icon.png',
                      pocTitle: '5折抢10G',
                      pocTitleTwo: '5折抢10G',
                      price: 0.0,
                      ranks: 30,
                      skuId: 5819,
                      skuImg: '',
                      skuProps: {
                        合约: '合约30',
                      },
                      taobaoProductId: '',
                      taobaoProducts: [],
                      title: '电信-集团10G流量包29元/月升5G，升白金会员（畅享）',
                    },
                  ],
                  title: '电信-集团4升5（融升套入口）',
                },
              ],
              success: true,
            },
            {
              detailImg: '',
              frontExtInfo: {
                bookUrl: 'https://benefit.jujienet.com/benefit/INDEX/20188',
              },
              headerImg: '',
              mutexGroups: '',
              packageGroup: '',
              packageId: 1000775,
              priority: 2,
              quotaLimit: 0,
              routeGroup: '',
              sendSms: true,
              showItemList: [
                {
                  detailImg: '',
                  formInfo: null,
                  hideType: 0,
                  indexImg: '',
                  itemId: 100691,
                  listImg: '',
                  maxShowSkuNum: 10,
                  optional: true,
                  packagerId: 0,
                  skus: [
                    {
                      cnId: 10005,
                      detailImgs: ['https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5531/3559/rule.png'],
                      failurePrompt: '如有欠费将不能办理',
                      frontExtInfo: {
                        tips: '',
                      },
                      headerImg: 'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5531/3559/top.png',
                      itemId: 100691,
                      listImg: 'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5531/3559/icon.png',
                      pocTitle: '5折抢10G',
                      pocTitleTwo: '5折抢10G',
                      price: 0.0,
                      ranks: 30,
                      skuId: 5820,
                      skuImg: '',
                      skuProps: {
                        合约: '合约30',
                      },
                      taobaoProductId: '',
                      taobaoProducts: [],
                      title: '电信-集团10G流量包29元/月升5G，升白金会员（畅享）',
                    },
                  ],
                  title: '电信-集团4升5（融升套入口）',
                },
              ],
              success: true,
            },
          ],
          status: 1,
        };
      }
    })(),
  },
  msg: '成功',
  success: true,
});