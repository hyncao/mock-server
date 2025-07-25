const moment = require('moment');

const extInfo = {
  cornerIcon: '推荐',

  feeRechargePrice: 50,
  feeName: '充50送20',
  feePrice: '售价 50元',

  // flowNum: '2GB',
  // flowName: '7天流量包',
  // flowPrice: '售价 50元',

  // equityTitle: 'VV移动会员',
  // equityIcon: 'https://chaac.oss-cn-hangzhou.aliyuncs.com/vvip/static/manageIconBasic1.png',
  // equityPrice: '20.88',
  // equityDel: '30',
  // equityTips: '我的字数比较多',
};

module.exports = (req) => {
  // return {
  //   code: 200,
  //   data: {
  //     dataList: [],
  //     dataMap: {},
  //   },
  //   msg: '成功',
  // };
  return {
    code: 200,
    data: {
      dataList: [],
      dataMap: {
        tabPackageList: [
          {
            id: 18,
            sort: 1,
            tabName: '话费充值',
            categoryPackageList: [
              {
                categoryName: '爆款流量',
                id: 1,
                backgroundColor: 1,
                packageInfoList: [],
                skuItemList: [
                  {
                    categoryId: 1,
                    cnId: 10015,
                    detailImgs: [
                      'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/rule.png',
                    ],
                    failurePrompt: '请仔细核对下单号码',
                    frontExtInfo: { tips: '', ...extInfo },
                    headerImg: 'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/top.png',
                    iconImg: 'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/iconImg.png',
                    itemId: 100767,
                    listImg: 'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/icon.png',
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
                    headerImg: 'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/top.png',
                    iconImg: 'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/iconImg.png',
                    itemId: 100768,
                    listImg: 'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/icon.png',
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
                    headerImg: 'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/top.png',
                    iconImg: 'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/iconImg.png',
                    itemId: 100769,
                    listImg: 'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/icon.png',
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
                sort: 1,
              },
            ],
          },
          {
            id: 19,
            sort: 1,
            tabName: '流量充值',
            categoryPackageList: [
              {
                categoryName: '流量充值',
                id: 2,
                backgroundColor: 2,
                packageInfoList: [],
                skuItemList: [
                  {
                    categoryId: 3,
                    cnId: 10015,
                    detailImgs: [
                      'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/rule.png',
                    ],
                    failurePrompt: '请仔细核对下单号码',
                    frontExtInfo: { tips: '', ...extInfo },
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
                sort: 3,
              },
            ],
          },
          {
            id: 20,
            sort: 1,
            tabName: '会员权益',
            categoryPackageList: [
              {
                categoryName: '会员权益',
                id: 3,
                backgroundColor: 1,
                packageInfoList: [],
                skuItemList: [
                  {
                    categoryId: 3,
                    cnId: 10015,
                    detailImgs: [
                      'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/rule.png',
                    ],
                    failurePrompt: '请仔细核对下单号码',
                    frontExtInfo: { tips: '', ...extInfo },
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
                sort: 3,
              },
            ],
          },
        ],
        headImg: 'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/marketing/100186/head_img.png',
        holderImg: 'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/marketing/100186/holder_img.png',
        marketingTitle: '小程序测试',
        msg: '获取成功',
        ruleImg: 'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/marketing/100186/rule_img.png',
        skuItem: {},
        skuItemList: [
          {
            categoryId: 3,
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
          {
            categoryId: 1,
            cnId: 10015,
            detailImgs: ['https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/rule.png'],
            failurePrompt: '请仔细核对下单号码',
            frontExtInfo: { tips: '' },
            headerImg: 'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/top.png',
            iconImg: 'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/iconImg.png',
            itemId: 100767,
            listImg: 'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/icon.png',
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
            detailImgs: ['https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/rule.png'],
            failurePrompt: '请仔细核对下单号码',
            frontExtInfo: { tips: '' },
            headerImg: 'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/top.png',
            iconImg: 'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/iconImg.png',
            itemId: 100768,
            listImg: 'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/icon.png',
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
            detailImgs: ['https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/rule.png'],
            failurePrompt: '请仔细核对下单号码',
            frontExtInfo: { tips: '' },
            headerImg: 'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/top.png',
            iconImg: 'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/iconImg.png',
            itemId: 100769,
            listImg: 'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5769/3789/icon.png',
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
        status: 1,
      },
    },
    msg: '成功',
    success: true,
  };
};
