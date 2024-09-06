const MemberTypeMap = {
  vip: 2,
  basic: 1,
};

const tradeStatusMap = {
  processing: 0,
  success: 1,
  closing: 2,
  upgrading: 3,
  degrading: 4,
  pending: 5,
  expired: 6,
  monthFee: 7,
  renewal: 9,
  timeout: 10,
  fail: -1,
  cancelled: -2,
  exited: -3,
  notFound: -99,
};

const showDeductionTypeMap = {
  no: 1,
  free: 2,
  yes: 3,
  freeFromPrize: 4,
};

const renewalTradeId = '222222222';

const authStatisticTypeMap = {
  // 流量权益
  flow: 1,
  // 生活权益
  life: 2,
  // 话费权益
  fee: 3,
  // 视频会员
  video: 4,
};

const responseVip = {
  code: 1000,
  msg: '响应信息:调用成功',
  response: {
    closeActivitySwitch: true,
    toBindUserUrl: 'https://litevip.jujienet.com/apsu-api-test/index/100078',
    status: tradeStatusMap.pending,
    msg: '本月会员月费未支付',
    tradeId: '202205190000000297',
    renewalTradeId: null,
    damages: 1.99,
    currentCycleNum: 5,
    effectiveTotalCycleNum: 6,
    memberType: 2,
    packageInfo: {
      title: '联通VV会员尊享版',
      packageId: 100001,
      operatorCode: 1,
      templateId: 100004,
      ranks: 1,
      params: {
        agreementName: '会员使用须知',
        agreements: [
          {
            name: '会员使用须知',
            src: 'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100001/100001/memberRule_155519887.png',
          },
        ],
        headImg:
          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100001/100001/headImg_201359900.png',
        memberRule:
          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100001/10/100001/memberRule_134149008.png',
        navigationBarTitle:
          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100001/100001/navigationBarTitle_181536806.png',
        submitBtnImg:
          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100001/10/100001/submitBtnImg_180229494.png',
        submitMarketingImg:
          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100001/10/100001/submitMarketingImg_134125315.png',
      },
      groupTagList: [
        {
          groupTagId: 100001,
          name: '订购的主商品(隐藏)',
          ranks: 1,
          hide: true,
          params: {},
          itemGroupList: [
            {
              groupId: 100001,
              groupName: '订购主商品(隐藏)',
              privilegeType: null,
              groupType: 1,
              groupSort: 1,
              groupTagId: 100001,
              hide: true,
              equityValue: '',
              itemList: [
                {
                  itemId: 100001,
                  title: '联通VV会员尊享版',
                  showTitle: '联通VV会员尊享版',
                  subtitle: '',
                  operatorCode: 1,
                  isValidatecode: false,
                  onlineCycle: '',
                  showSort: 1,
                  cycleType: null,
                  autoCycleOrder: 0,
                  totalCycleNum: 1,
                  takeMode: 1,
                  linkUrl: null,
                  params: {},
                  skuList: [
                    {
                      skuId: 100001,
                      itemId: 100001,
                      title: '联通VV会员尊享版',
                      ranks: 1,
                      parValue: null,
                      linkUrl: null,
                      params: {},
                      detailButton: { type: 1, title: '激活中', style: 2, orderId: null },
                    },
                  ],
                },
              ],
              params: {},
              authStatisticType: null,
            },
          ],
        },
        {
          groupTagId: 100002,
          name: '通信权益',
          ranks: 2,
          hide: false,
          params: {
            detailHeadImg:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/goods/%E6%88%91%E7%9A%84%E9%80%9A%E4%BF%A1%E6%9D%83%E7%9B%8A.png',
            headImg:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/groupTag/100002/100001/headImg_201524447.png',
          },
          itemGroupList: [
            {
              groupId: 100002,
              groupName: '5G流量日包',
              privilegeType: null,
              groupType: 3,
              groupSort: 2,
              groupTagId: 100002,
              hide: false,
              equityValue: '',
              itemList: [
                {
                  itemId: 100002,
                  title: '联通3GB流量日包',
                  showTitle: '联通3GB流量日包',
                  subtitle: '',
                  operatorCode: 1,
                  isValidatecode: false,
                  onlineCycle: '',
                  showSort: 1,
                  cycleType: null,
                  autoCycleOrder: 0,
                  totalCycleNum: 6,
                  takeMode: 2,
                  linkUrl: null,
                  params: {},
                  skuList: [
                    {
                      skuId: 100002,
                      itemId: 100002,
                      title: '3GB流量日包',
                      ranks: 1,
                      parValue: 3.0,
                      linkUrl: null,
                      params: {
                        flowBalance: 3,
                        skuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/th/3GB%E6%B5%81%E9%87%8F%E6%97%A5%E5%8C%85.png',
                      },
                      detailButton: { type: 3, title: '去领取', style: 1, orderId: null },
                    },
                  ],
                },
                {
                  itemId: 100003,
                  title: '联通1GB流量日包(1)',
                  showTitle: '联通1GB流量日包',
                  subtitle: '',
                  operatorCode: 1,
                  isValidatecode: false,
                  onlineCycle: '',
                  showSort: 2,
                  cycleType: null,
                  autoCycleOrder: 0,
                  totalCycleNum: 6,
                  takeMode: 2,
                  linkUrl: null,
                  params: {},
                  skuList: [
                    {
                      skuId: 100003,
                      itemId: 100003,
                      title: '1GB流量日包',
                      ranks: 1,
                      parValue: 1.0,
                      linkUrl: null,
                      params: {
                        flowBalance: 1,
                        skuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/goods/1GB%E6%B5%81%E9%87%8F%E6%97%A5%E5%8C%85.png',
                      },
                      detailButton: { type: 3, title: '去领取', style: 1, orderId: null },
                    },
                  ],
                },
                {
                  itemId: 100004,
                  title: '联通1GB流量日包(2)',
                  showTitle: '联通1GB流量日包',
                  subtitle: '',
                  operatorCode: 1,
                  isValidatecode: false,
                  onlineCycle: '',
                  showSort: 3,
                  cycleType: null,
                  autoCycleOrder: 0,
                  totalCycleNum: 6,
                  takeMode: 2,
                  linkUrl: null,
                  params: {},
                  skuList: [
                    {
                      skuId: 100004,
                      itemId: 100004,
                      title: '1GB流量日包',
                      ranks: 1,
                      parValue: 1.0,
                      linkUrl: null,
                      params: {
                        flowBalance: 1,
                        skuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/goods/1GB%E6%B5%81%E9%87%8F%E6%97%A5%E5%8C%85.png',
                      },
                      detailButton: { type: 3, title: '去领取', style: 1, orderId: null },
                    },
                  ],
                },
              ],
              params: {
                detailHeadImg:
                  'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/itemGroup/100002/10/100001/detailHeadImg_150439964.png',
                listImg:
                  'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/itemGroup/100002/100001/listImg_201453154.png',
              },
              authStatisticType: 1,
            },
            {
              groupId: 100003,
              groupName: '充值98折',
              privilegeType: null,
              groupType: 2,
              groupSort: 3,
              groupTagId: 100002,
              hide: false,
              equityValue: '',
              itemList: [
                {
                  itemId: 100005,
                  title: '充30元送0.6元',
                  showTitle: '充30元送0.6元',
                  subtitle: '',
                  operatorCode: 1,
                  isValidatecode: false,
                  onlineCycle: '',
                  showSort: 1,
                  cycleType: null,
                  autoCycleOrder: 0,
                  totalCycleNum: 6,
                  takeMode: 2,
                  linkUrl: null,
                  params: {},
                  skuList: [
                    {
                      skuId: 100005,
                      itemId: 100005,
                      title: '0.6元话费',
                      ranks: 1,
                      parValue: 0.6,
                      linkUrl: null,
                      params: {
                        skuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100005/100001/skuImg_193613078.png',
                      },
                      detailButton: { type: 3, title: '去领取', style: 1, orderId: null },
                    },
                  ],
                },
                {
                  itemId: 100006,
                  title: '充50元送1元',
                  showTitle: '充50元送1元',
                  subtitle: '',
                  operatorCode: 1,
                  isValidatecode: false,
                  onlineCycle: '',
                  showSort: 2,
                  cycleType: null,
                  autoCycleOrder: 0,
                  totalCycleNum: 6,
                  takeMode: 2,
                  linkUrl: null,
                  params: {},
                  skuList: [
                    {
                      skuId: 100006,
                      itemId: 100006,
                      title: '1元话费',
                      ranks: 1,
                      parValue: 1.0,
                      linkUrl: null,
                      params: {
                        skuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100006/100001/skuImg_193629257.png',
                      },
                      detailButton: { type: 3, title: '去领取', style: 1, orderId: null },
                    },
                  ],
                },
              ],
              params: {
                detailHeadImg:
                  'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/itemGroup/100003/10/100001/detailHeadImg_150451741.png',
                listImg:
                  'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/itemGroup/100003/100001/listImg_201514526.png',
              },
              authStatisticType: 3,
            },
          ],
        },
        {
          groupTagId: 100003,
          name: '生活权益',
          ranks: 3,
          hide: false,
          params: {
            detailHeadImg:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/goods/%E6%88%91%E7%9A%84%E7%94%9F%E6%B4%BB%E6%9D%83%E7%9B%8A.png',
            headImg:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/groupTag/100003/100001/headImg_220231666.png',
          },
          itemGroupList: [
            {
              groupId: 100004,
              groupName: '生活权益',
              privilegeType: null,
              groupType: 3,
              groupSort: 4,
              groupTagId: 100003,
              hide: false,
              equityValue: '',
              itemList: [
                {
                  itemId: 100007,
                  title: '最高3元缴费红包',
                  showTitle: '最高3元缴费红包',
                  subtitle: '',
                  operatorCode: 0,
                  isValidatecode: false,
                  onlineCycle: '',
                  showSort: 1,
                  cycleType: null,
                  autoCycleOrder: 0,
                  totalCycleNum: 6,
                  takeMode: 2,
                  linkUrl: 'alipays://platformapi/startapp?appId=20000021',
                  params: {
                    listImg:
                      'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100007/10/100001/listImg_114528848.png',
                  },
                  skuList: [
                    {
                      skuId: 100007,
                      itemId: 100007,
                      title: '缴费红包',
                      ranks: 1,
                      parValue: null,
                      linkUrl: 'alipays://platformapi/startapp?appId=20000021',
                      params: {
                        skuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100007/10/100001/skuImg_144823063.png',
                      },
                      detailButton: { type: 3, title: '去领取', style: 1, orderId: null },
                    },
                  ],
                },
                {
                  itemId: 100028,
                  title: '芒果TV(普通权益)',
                  showTitle: '芒果TV',
                  subtitle: '',
                  operatorCode: 0,
                  isValidatecode: false,
                  onlineCycle: '',
                  showSort: 9,
                  cycleType: null,
                  autoCycleOrder: 0,
                  totalCycleNum: 6,
                  takeMode: 3,
                  linkUrl: '/pages/yinge/index?type=mangguo',
                  params: {
                    listImg:
                      'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100028/10/100001/listImg_154345440.png',
                  },
                  skuList: [
                    {
                      skuId: 100028,
                      itemId: 100028,
                      title: '芒果TV(普通权益)',
                      ranks: 1,
                      parValue: null,
                      linkUrl: '/pages/yinge/index?type=mangguo',
                      params: {
                        skuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100028/10/100001/skuImg_145205684.png',
                      },
                      detailButton: { type: 3, title: '去领取', style: 1, orderId: null },
                    },
                  ],
                },
                {
                  itemId: 100016,
                  title: '最高10元出行红包',
                  showTitle: '最高10元出行红包',
                  subtitle: '',
                  operatorCode: 0,
                  isValidatecode: false,
                  onlineCycle: '',
                  showSort: 3,
                  cycleType: null,
                  autoCycleOrder: 0,
                  totalCycleNum: 6,
                  takeMode: 3,
                  linkUrl:
                    'alipays://platformapi/startapp?appId=20000067&url=https%3A%2F%2Frender.alipay.com%2Fp%2Fc%2F18f1xa6z24ao&startMultApp=YES&appClearTop=false',
                  params: {
                    listImg:
                      'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100016/10/100001/listImg_114227299.png',
                  },
                  skuList: [
                    {
                      skuId: 100016,
                      itemId: 100016,
                      title: '出行红包',
                      ranks: 1,
                      parValue: null,
                      linkUrl:
                        'alipays://platformapi/startapp?appId=20000067&url=https%3A%2F%2Frender.alipay.com%2Fp%2Fc%2F18f1xa6z24ao&startMultApp=YES&appClearTop=false',
                      params: {
                        skuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100016/10/100001/skuImg_145036082.png',
                      },
                      detailButton: { type: 3, title: '去领取', style: 1, orderId: null },
                    },
                  ],
                },
                {
                  itemId: 100017,
                  title: '指定快消品5折起',
                  showTitle: '天猫超市5折起优惠券',
                  subtitle: '',
                  operatorCode: 0,
                  isValidatecode: false,
                  onlineCycle: '',
                  showSort: 4,
                  cycleType: null,
                  autoCycleOrder: 0,
                  totalCycleNum: 6,
                  takeMode: 2,
                  linkUrl: 'alipays://platformapi/startapp?appId=20000021',
                  params: {
                    listImg:
                      'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100017/100001/listImg_201720631.png',
                  },
                  skuList: [
                    {
                      skuId: 100017,
                      itemId: 100017,
                      title: '天猫超市指定快消品5折起',
                      ranks: 1,
                      parValue: null,
                      linkUrl: 'alipays://platformapi/startapp?appId=20000021',
                      params: {
                        skuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100017/10/100001/skuImg_145054104.png',
                      },
                      detailButton: { type: 3, title: '去领取', style: 1, orderId: null },
                    },
                  ],
                },
                {
                  itemId: 100013,
                  title: '喜马拉雅5折月卡',
                  showTitle: '喜马拉雅5折月卡',
                  subtitle: '',
                  operatorCode: 0,
                  isValidatecode: false,
                  onlineCycle: '',
                  showSort: 5,
                  cycleType: null,
                  autoCycleOrder: 0,
                  totalCycleNum: 6,
                  takeMode: 3,
                  linkUrl: '/pages/yinge/index?type=ximalaya',
                  params: {
                    listImg:
                      'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100013/10/100001/listImg_111249674.png',
                  },
                  skuList: [
                    {
                      skuId: 100013,
                      itemId: 100013,
                      title: '喜马拉雅月卡5折',
                      ranks: 1,
                      parValue: null,
                      linkUrl: '/pages/yinge/index?type=ximalaya',
                      params: {
                        skuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100013/10/100001/skuImg_144946160.png',
                      },
                      detailButton: { type: 3, title: '去领取', style: 1, orderId: null },
                    },
                  ],
                },
                {
                  itemId: 100018,
                  title: '6折优酷月卡',
                  showTitle: '6折优酷月卡',
                  subtitle: '',
                  operatorCode: 0,
                  isValidatecode: false,
                  onlineCycle: '',
                  showSort: 6,
                  cycleType: null,
                  autoCycleOrder: 0,
                  totalCycleNum: 6,
                  takeMode: 3,
                  linkUrl:
                    'alipays://platformapi/startapp?appId=2021002152610059&page=pages%2Fyinge%2Findex%3Ftype%3Dyouku6',
                  params: {
                    listImg:
                      'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100018/10/100001/listImg_110840641.png',
                  },
                  skuList: [
                    {
                      skuId: 100018,
                      itemId: 100018,
                      title: '优酷月卡6折',
                      ranks: 1,
                      parValue: null,
                      linkUrl:
                        'alipays://platformapi/startapp?appId=2021002152610059&page=pages%2Fyinge%2Findex%3Ftype%3Dyouku6',
                      params: {
                        skuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100018/10/100001/skuImg_145116017.png',
                      },
                      detailButton: { type: 3, title: '去领取', style: 1, orderId: null },
                    },
                  ],
                },
                {
                  itemId: 100019,
                  title: '饿了么最高66元',
                  showTitle: '饿了么最高66元',
                  subtitle: '',
                  operatorCode: 0,
                  isValidatecode: false,
                  onlineCycle: '',
                  showSort: 7,
                  cycleType: null,
                  autoCycleOrder: 0,
                  totalCycleNum: 6,
                  takeMode: 3,
                  linkUrl: '/pages/yinge/index?type=eleme',
                  params: {
                    listImg:
                      'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100019/100001/listImg_201813302.png',
                  },
                  skuList: [
                    {
                      skuId: 100019,
                      itemId: 100019,
                      title: '饿了么红包',
                      ranks: 1,
                      parValue: null,
                      linkUrl: '/pages/yinge/index?type=eleme',
                      params: {
                        skuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100019/10/100001/skuImg_145143768.png',
                      },
                      detailButton: { type: 3, title: '去领取', style: 1, orderId: null },
                    },
                  ],
                },
                {
                  itemId: 100015,
                  title: '淘宝心选10包抽纸',
                  showTitle: '淘宝心选10包抽纸',
                  subtitle: '',
                  operatorCode: 0,
                  isValidatecode: false,
                  onlineCycle: '',
                  showSort: 8,
                  cycleType: null,
                  autoCycleOrder: 0,
                  totalCycleNum: 6,
                  takeMode: 2,
                  linkUrl: 'alipays://platformapi/startapp?appId=20000021',
                  params: {
                    listImg:
                      'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100015/100001/listImg_201827271.png',
                  },
                  skuList: [
                    {
                      skuId: 100015,
                      itemId: 100015,
                      title: '10包抽纸',
                      ranks: 1,
                      parValue: null,
                      linkUrl: 'alipays://platformapi/startapp?appId=20000021',
                      params: {
                        skuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100015/10/100001/skuImg_145009560.png',
                      },
                      detailButton: { type: 3, title: '去领取', style: 1, orderId: null },
                    },
                  ],
                },
              ],
              params: {},
              authStatisticType: 2,
            },
          ],
        },
        {
          groupTagId: 100004,
          name: '视频权益',
          ranks: 4,
          hide: false,
          params: {
            detailHeadImg:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/goods/%E6%88%91%E7%9A%84%E7%94%9F%E6%B4%BB%E6%9D%83%E7%9B%8A.png',
            headImg:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/groupTag/100003/100001/headImg_220231666.png',
          },
          itemGroupList: [
            {
              groupId: 100012,
              groupName: '视频会员',
              privilegeType: null,
              groupType: 2,
              groupSort: 5,
              groupTagId: 100004,
              hide: false,
              equityValue: null,
              itemList: [
                {
                  itemId: 100038,
                  title: '爱奇艺视频会员',
                  showTitle: '爱奇艺',
                  subtitle: '',
                  operatorCode: 0,
                  isValidatecode: false,
                  onlineCycle: '',
                  showSort: 1,
                  cycleType: null,
                  autoCycleOrder: 0,
                  totalCycleNum: 6,
                  takeMode: 3,
                  linkUrl: null,
                  params: {},
                  skuList: [
                    {
                      skuId: 100038,
                      itemId: 100038,
                      title: '爱奇艺视频会员',
                      ranks: 1,
                      parValue: null,
                      linkUrl: null,
                      params: {
                        skuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100038/10/100003/skuImg_160221073.png',
                      },
                      detailButton: { type: 1, title: '去使用', style: 1, orderId: null },
                    },
                  ],
                },
                {
                  itemId: 100039,
                  title: '优酷视频会员',
                  showTitle: '优酷',
                  subtitle: '',
                  operatorCode: 0,
                  isValidatecode: false,
                  onlineCycle: '',
                  showSort: 2,
                  cycleType: null,
                  autoCycleOrder: 0,
                  totalCycleNum: 6,
                  takeMode: 3,
                  linkUrl: null,
                  params: {},
                  skuList: [
                    {
                      skuId: 100039,
                      itemId: 100039,
                      title: '优酷视频会员',
                      ranks: 1,
                      parValue: null,
                      linkUrl: null,
                      params: {
                        skuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100039/10/100003/skuImg_160237363.png',
                      },
                      detailButton: { type: 1, title: '去使用', style: 1, orderId: null },
                    },
                  ],
                },
                {
                  itemId: 100040,
                  title: '腾讯视频会员',
                  showTitle: '腾讯视频',
                  subtitle: '',
                  operatorCode: 0,
                  isValidatecode: false,
                  onlineCycle: '',
                  showSort: 3,
                  cycleType: null,
                  autoCycleOrder: 0,
                  totalCycleNum: 6,
                  takeMode: 3,
                  linkUrl: null,
                  params: {},
                  skuList: [
                    {
                      skuId: 100040,
                      itemId: 100040,
                      title: '腾讯视频会员',
                      ranks: 1,
                      parValue: null,
                      linkUrl: null,
                      params: {
                        skuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100040/10/100003/skuImg_160254130.png',
                      },
                      detailButton: { type: 1, title: '去使用', style: 1, orderId: null },
                    },
                  ],
                },
                {
                  itemId: 100041,
                  title: '芒果视频会员',
                  showTitle: '芒果视频',
                  subtitle: '',
                  operatorCode: 0,
                  isValidatecode: false,
                  onlineCycle: '',
                  showSort: 4,
                  cycleType: null,
                  autoCycleOrder: 0,
                  totalCycleNum: 6,
                  takeMode: 3,
                  linkUrl: null,
                  params: {},
                  skuList: [
                    {
                      skuId: 100041,
                      itemId: 100041,
                      title: '芒果视频会员',
                      ranks: 1,
                      parValue: null,
                      linkUrl: null,
                      params: {
                        skuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100041/10/100003/skuImg_160308654.png',
                      },
                      detailButton: { type: 1, title: '去使用', style: 1, orderId: null },
                    },
                  ],
                },
                {
                  itemId: 100042,
                  title: 'B站视频会员',
                  showTitle: 'B站视频',
                  subtitle: '',
                  operatorCode: 0,
                  isValidatecode: false,
                  onlineCycle: '',
                  showSort: 5,
                  cycleType: null,
                  autoCycleOrder: 0,
                  totalCycleNum: 6,
                  takeMode: 3,
                  linkUrl: null,
                  params: {},
                  skuList: [
                    {
                      skuId: 100042,
                      itemId: 100042,
                      title: 'B站视频会员',
                      ranks: 1,
                      parValue: null,
                      linkUrl: null,
                      params: {
                        skuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100042/10/100003/skuImg_160328189.png',
                      },
                      detailButton: { type: 1, title: '去使用', style: 1, orderId: null },
                    },
                  ],
                },
              ],
              params: {},
              authStatisticType: 4,
            },
          ],
        },
      ],
    },
    phoneNumber: '131******11',
    nickName: null,
    avatar: null,
    memberJoinTitle: '2022年05月19日起生效，已享受65天',
    showDeductionType: 2,
    isAllowClose: true,
    isAllowRenewal: true,
  },
};

const responseBasic = {
  code: 1000,
  msg: '响应信息:调用成功',
  response: {
    status: tradeStatusMap.timeout,
    // status: tradeStatusMap.monthFee,
    msg: '连续包月，已开通7天',
    tradeId: '202207010000000305',
    renewalTradeId,
    damages: 1.99,
    currentCycleNum: 5,
    effectiveTotalCycleNum: 6,
    memberType: MemberTypeMap.basic,
    packageInfo: {
      title: '联通VV会员尊享版',
      packageId: 100001,
      operatorCode: 1,
      templateId: 100004,
      ranks: 1,
      params: {
        agreementName: '会员使用须知',
        agreements: [
          {
            name: '会员使用须知',
            src: 'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100001/100001/memberRule_155519887.png',
          },
        ],
        headImg:
          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100001/100001/headImg_201359900.png',
        memberRule:
          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100001/10/100001/memberRule_134149008.png',
        navigationBarTitle:
          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100001/100001/navigationBarTitle_181536806.png',
        submitBtnImg:
          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100001/10/100001/submitBtnImg_180229494.png',
        submitMarketingImg:
          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100001/10/100001/submitMarketingImg_134125315.png',
      },
      groupTagList: [
        {
          groupTagId: 100001,
          name: '订购的主商品(隐藏)',
          ranks: 1,
          hide: true,
          params: {},
          itemGroupList: [
            {
              groupId: 100001,
              groupName: '订购主商品(隐藏)',
              privilegeType: null,
              groupType: 1,
              groupSort: 1,
              groupTagId: 100001,
              hide: true,
              equityValue: '',
              itemList: [
                {
                  itemId: 100001,
                  title: '联通VV会员尊享版',
                  showTitle: '联通VV会员尊享版',
                  subtitle: '',
                  operatorCode: 1,
                  isValidatecode: false,
                  onlineCycle: '',
                  showSort: 1,
                  cycleType: null,
                  autoCycleOrder: 0,
                  totalCycleNum: 1,
                  takeMode: 1,
                  linkUrl: null,
                  params: {},
                  skuList: [
                    {
                      skuId: 100001,
                      itemId: 100001,
                      title: '联通VV会员尊享版',
                      ranks: 1,
                      parValue: null,
                      linkUrl: null,
                      params: {},
                      detailButton: {
                        type: 2,
                        title: '已生效',
                        style: 2,
                        orderId: null,
                      },
                    },
                  ],
                },
              ],
              params: {},
              authStatisticType: null,
            },
          ],
        },
        {
          groupTagId: 100002,
          name: '通信权益',
          ranks: 2,
          hide: false,
          params: {
            detailHeadImg:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/goods/%E6%88%91%E7%9A%84%E9%80%9A%E4%BF%A1%E6%9D%83%E7%9B%8A.png',
            headImg:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/groupTag/100002/100001/headImg_201524447.png',
          },
          itemGroupList: [
            {
              groupId: 100002,
              groupName: '5G流量日包',
              privilegeType: null,
              groupType: 3,
              groupSort: 2,
              groupTagId: 100002,
              hide: false,
              equityValue: '',
              itemList: [
                {
                  itemId: 100002,
                  title: '联通3GB流量日包',
                  showTitle: '联通3GB流量日包',
                  subtitle: '',
                  operatorCode: 1,
                  isValidatecode: false,
                  onlineCycle: '',
                  showSort: 1,
                  cycleType: null,
                  autoCycleOrder: 0,
                  totalCycleNum: 6,
                  takeMode: 2,
                  linkUrl: null,
                  params: {},
                  skuList: [
                    {
                      skuId: 100002,
                      itemId: 100002,
                      title: '3GB流量日包',
                      ranks: 1,
                      parValue: 3.0,
                      linkUrl: null,
                      params: {
                        flowBalance: 3,
                        skuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/th/3GB%E6%B5%81%E9%87%8F%E6%97%A5%E5%8C%85.png',
                      },
                      detailButton: {
                        type: 3,
                        title: '去领取',
                        style: 1,
                        orderId: null,
                      },
                    },
                  ],
                },
                {
                  itemId: 100003,
                  title: '联通1GB流量日包(1)',
                  showTitle: '联通1GB流量日包',
                  subtitle: '',
                  operatorCode: 1,
                  isValidatecode: false,
                  onlineCycle: '',
                  showSort: 2,
                  cycleType: null,
                  autoCycleOrder: 0,
                  totalCycleNum: 6,
                  takeMode: 2,
                  linkUrl: null,
                  params: {},
                  skuList: [
                    {
                      skuId: 100003,
                      itemId: 100003,
                      title: '1GB流量日包',
                      ranks: 1,
                      parValue: 1.0,
                      linkUrl: null,
                      params: {
                        flowBalance: 1,
                        skuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/goods/1GB%E6%B5%81%E9%87%8F%E6%97%A5%E5%8C%85.png',
                      },
                      detailButton: {
                        type: 3,
                        title: '去领取',
                        style: 1,
                        orderId: null,
                      },
                    },
                  ],
                },
                {
                  itemId: 100004,
                  title: '联通1GB流量日包(2)',
                  showTitle: '联通1GB流量日包',
                  subtitle: '',
                  operatorCode: 1,
                  isValidatecode: false,
                  onlineCycle: '',
                  showSort: 3,
                  cycleType: null,
                  autoCycleOrder: 0,
                  totalCycleNum: 6,
                  takeMode: 2,
                  linkUrl: null,
                  params: {},
                  skuList: [
                    {
                      skuId: 100004,
                      itemId: 100004,
                      title: '1GB流量日包',
                      ranks: 1,
                      parValue: 1.0,
                      linkUrl: null,
                      params: {
                        flowBalance: 1,
                        skuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/goods/1GB%E6%B5%81%E9%87%8F%E6%97%A5%E5%8C%85.png',
                      },
                      detailButton: {
                        type: 3,
                        title: '去领取',
                        style: 1,
                        orderId: null,
                      },
                    },
                  ],
                },
              ],
              params: {
                detailHeadImg:
                  'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/itemGroup/100002/100001/detailHeadImg_193428216.png',
                listImg:
                  'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/itemGroup/100002/100001/listImg_201453154.png',
              },
              authStatisticType: authStatisticTypeMap.flow,
            },
          ],
        },
        {
          groupTagId: 100003,
          name: '生活权益',
          ranks: 3,
          hide: false,
          params: {
            detailHeadImg:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/goods/%E6%88%91%E7%9A%84%E7%94%9F%E6%B4%BB%E6%9D%83%E7%9B%8A.png',
            headImg:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/groupTag/100003/100001/headImg_220231666.png',
          },
          itemGroupList: [
            {
              groupId: 100004,
              groupName: '生活权益',
              privilegeType: null,
              groupType: 3,
              groupSort: 4,
              groupTagId: 100003,
              hide: false,
              equityValue: '',
              itemList: [
                {
                  itemId: 100007,
                  title: '最高3元缴费红包',
                  showTitle: '最高3元缴费红包',
                  subtitle: '',
                  operatorCode: 0,
                  isValidatecode: false,
                  onlineCycle: '',
                  showSort: 1,
                  cycleType: null,
                  autoCycleOrder: 0,
                  totalCycleNum: 6,
                  takeMode: 2,
                  linkUrl: 'alipays://platformapi/startapp?appId=20000021',
                  params: {
                    listImg:
                      'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100007/10/100001/listImg_114528848.png',
                  },
                  skuList: [
                    {
                      skuId: 100007,
                      itemId: 100007,
                      title: '缴费红包',
                      ranks: 1,
                      parValue: null,
                      linkUrl: 'alipays://platformapi/startapp?appId=20000021',
                      params: {
                        skuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100007/100001/skuImg_190250130.png',
                      },
                      detailButton: {
                        type: 3,
                        title: '去领取',
                        style: 1,
                        orderId: null,
                      },
                    },
                  ],
                },
                {
                  itemId: 100028,
                  title: '芒果TV(普通权益)',
                  showTitle: '芒果TV',
                  subtitle: '',
                  operatorCode: 0,
                  isValidatecode: false,
                  onlineCycle: '',
                  showSort: 9,
                  cycleType: null,
                  autoCycleOrder: 0,
                  totalCycleNum: 6,
                  takeMode: 3,
                  linkUrl: '/pages/yinge/index?type=mangguo',
                  params: {
                    listImg:
                      'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100028/10/100001/listImg_154345440.png',
                  },
                  skuList: [
                    {
                      skuId: 100028,
                      itemId: 100028,
                      title: '芒果TV(普通权益)',
                      ranks: 1,
                      parValue: null,
                      linkUrl: '/pages/yinge/index?type=mangguo',
                      params: {
                        skuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100028/10/100001/skuImg_154555435.png',
                      },
                      detailButton: {
                        type: 6,
                        title: '去使用',
                        style: 1,
                        orderId: null,
                      },
                    },
                  ],
                },
                {
                  itemId: 100016,
                  title: '最高10元出行红包',
                  showTitle: '最高10元出行红包',
                  subtitle: '',
                  operatorCode: 0,
                  isValidatecode: false,
                  onlineCycle: '',
                  showSort: 3,
                  cycleType: null,
                  autoCycleOrder: 0,
                  totalCycleNum: 6,
                  takeMode: 3,
                  linkUrl:
                    'alipays://platformapi/startapp?appId=20000067&url=https%3A%2F%2Frender.alipay.com%2Fp%2Fc%2F18f1xa6z24ao&startMultApp=YES&appClearTop=false',
                  params: {
                    listImg:
                      'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100016/10/100001/listImg_114227299.png',
                  },
                  skuList: [
                    {
                      skuId: 100016,
                      itemId: 100016,
                      title: '出行红包',
                      ranks: 1,
                      parValue: null,
                      linkUrl:
                        'alipays://platformapi/startapp?appId=20000067&url=https%3A%2F%2Frender.alipay.com%2Fp%2Fc%2F18f1xa6z24ao&startMultApp=YES&appClearTop=false',
                      params: {
                        skuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100016/100001/skuImg_190415617.png',
                      },
                      detailButton: {
                        type: 6,
                        title: '去使用',
                        style: 1,
                        orderId: null,
                      },
                    },
                  ],
                },
                {
                  itemId: 100017,
                  title: '指定快消品5折起',
                  showTitle: '天猫超市5折起优惠券',
                  subtitle: '',
                  operatorCode: 0,
                  isValidatecode: false,
                  onlineCycle: '',
                  showSort: 4,
                  cycleType: null,
                  autoCycleOrder: 0,
                  totalCycleNum: 6,
                  takeMode: 2,
                  linkUrl: 'alipays://platformapi/startapp?appId=20000021',
                  params: {
                    listImg:
                      'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100017/100001/listImg_201720631.png',
                  },
                  skuList: [
                    {
                      skuId: 100017,
                      itemId: 100017,
                      title: '天猫超市指定快消品5折起',
                      ranks: 1,
                      parValue: null,
                      linkUrl: 'alipays://platformapi/startapp?appId=20000021',
                      params: {
                        skuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100017/100001/skuImg_190431035.png',
                      },
                      detailButton: {
                        type: 3,
                        title: '去领取',
                        style: 1,
                        orderId: null,
                      },
                    },
                  ],
                },
                {
                  itemId: 100013,
                  title: '喜马拉雅5折月卡',
                  showTitle: '喜马拉雅5折月卡',
                  subtitle: '',
                  operatorCode: 0,
                  isValidatecode: false,
                  onlineCycle: '',
                  showSort: 5,
                  cycleType: null,
                  autoCycleOrder: 0,
                  totalCycleNum: 6,
                  takeMode: 3,
                  linkUrl: '/pages/yinge/index?type=ximalaya',
                  params: {
                    listImg:
                      'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100013/10/100001/listImg_111249674.png',
                  },
                  skuList: [
                    {
                      skuId: 100013,
                      itemId: 100013,
                      title: '喜马拉雅月卡5折',
                      ranks: 1,
                      parValue: null,
                      linkUrl: '/pages/yinge/index?type=ximalaya',
                      params: {
                        skuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100013/10/100001/skuImg_111226171.png',
                      },
                      detailButton: {
                        type: 6,
                        title: '去使用',
                        style: 1,
                        orderId: null,
                      },
                    },
                  ],
                },
                {
                  itemId: 100018,
                  title: '6折优酷月卡',
                  showTitle: '6折优酷月卡',
                  subtitle: '',
                  operatorCode: 0,
                  isValidatecode: false,
                  onlineCycle: '',
                  showSort: 6,
                  cycleType: null,
                  autoCycleOrder: 0,
                  totalCycleNum: 6,
                  takeMode: 3,
                  linkUrl:
                    'alipays://platformapi/startapp?appId=2021002152610059&page=pages%2Fyinge%2Findex%3Ftype%3Dyouku6',
                  params: {
                    listImg:
                      'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100018/10/100001/listImg_110840641.png',
                  },
                  skuList: [
                    {
                      skuId: 100018,
                      itemId: 100018,
                      title: '优酷月卡6折',
                      ranks: 1,
                      parValue: null,
                      linkUrl:
                        'alipays://platformapi/startapp?appId=2021002152610059&page=pages%2Fyinge%2Findex%3Ftype%3Dyouku6',
                      params: {
                        skuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100018/10/100001/skuImg_111759241.png',
                      },
                      detailButton: {
                        type: 6,
                        title: '去使用',
                        style: 1,
                        orderId: null,
                      },
                    },
                  ],
                },
                {
                  itemId: 100019,
                  title: '饿了么最高66元',
                  showTitle: '饿了么最高66元',
                  subtitle: '',
                  operatorCode: 0,
                  isValidatecode: false,
                  onlineCycle: '',
                  showSort: 7,
                  cycleType: null,
                  autoCycleOrder: 0,
                  totalCycleNum: 6,
                  takeMode: 3,
                  linkUrl: '/pages/yinge/index?type=eleme',
                  params: {
                    listImg:
                      'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100019/100001/listImg_201813302.png',
                  },
                  skuList: [
                    {
                      skuId: 100019,
                      itemId: 100019,
                      title: '饿了么红包',
                      ranks: 1,
                      parValue: null,
                      linkUrl: '/pages/yinge/index?type=eleme',
                      params: {
                        skuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100019/100001/skuImg_190523430.png',
                      },
                      detailButton: {
                        type: 6,
                        title: '去使用',
                        style: 1,
                        orderId: null,
                      },
                    },
                  ],
                },
                {
                  itemId: 100015,
                  title: '淘宝心选10包抽纸',
                  showTitle: '淘宝心选10包抽纸',
                  subtitle: '',
                  operatorCode: 0,
                  isValidatecode: false,
                  onlineCycle: '',
                  showSort: 8,
                  cycleType: null,
                  autoCycleOrder: 0,
                  totalCycleNum: 6,
                  takeMode: 2,
                  linkUrl: 'alipays://platformapi/startapp?appId=20000021',
                  params: {
                    listImg:
                      'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100015/100001/listImg_201827271.png',
                  },
                  skuList: [
                    {
                      skuId: 100015,
                      itemId: 100015,
                      title: '10包抽纸',
                      ranks: 1,
                      parValue: null,
                      linkUrl: 'alipays://platformapi/startapp?appId=20000021',
                      params: {
                        skuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100015/100001/skuImg_190540954.png',
                      },
                      detailButton: {
                        type: 3,
                        title: '去领取',
                        style: 1,
                        orderId: null,
                      },
                    },
                  ],
                },
              ],
              params: {},
              authStatisticType: authStatisticTypeMap.life,
            },
          ],
        },
      ],
    },
    phoneNumber: '17600973914',
    nickName: '海纳百川',
    avatar: 'https://tfs.alipayobjects.com/images/partner/TB1LH3aXBWiDuNjmeUwXXap2XXa',
    memberJoinTitle: '2022年07月01日起生效，已享受7天',
    showDeductionType: showDeductionTypeMap.free,
  },
};

const error = {"code":1000,"msg":"响应信息:调用成功","response":{"status":1,"msg":"连续包月，已开通1天","tradeId":"202409040000000931","renewalTradeId":null,"damages":1.99,"currentCycleNum":1,"effectiveTotalCycleNum":6,"memberType":2,"packageInfo":{"title":"尊享会员","packageId":100008,"operatorCode":1,"templateId":100004,"templateGroupMap":{"default":[{"templateId":100004,"firstMouthDiscountType":3}]},"ranks":1,"params":{"agreementName":"会员使用须知","agreements":[{"name":"会员使用须知","src":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100001/100001/memberRule_155519887.png"}],"detailImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100004/10/100004/detailImg_162915667.png","headImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100001/10/100001/headImg_151357454.png","headerImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100001/10/100001/headerImg_181421014.png","memberRule":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100004/10/100004/memberRule_162636319.png","navigationBarTitle":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100001/10/100001/navigationBarTitle_105451153.png","submitBtnImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100004/10/100004/submitBtnImg_155511491.png","submitMarketingImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100001/10/100001/submitMarketingImg_152645465.png","tabImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100001/10/100001/tabImg_160234048.png"},"groupTagList":[{"groupTagId":100001,"name":"订购的主商品(隐藏)","ranks":1,"hide":true,"params":{},"itemGroupList":[{"groupId":100025,"groupName":"订购主商品(隐藏)","privilegeType":null,"groupType":1,"groupSort":1,"groupTagId":100001,"hide":true,"equityValue":"","itemList":[{"itemId":100061,"title":"联通VV会员-虚拟办理成功","showTitle":"联通VV会员","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":1,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":1,"takeMode":1,"linkUrl":null,"params":{},"skuList":[{"skuId":100061,"itemId":100061,"title":"联通VV会员悦享版","ranks":1,"parValue":null,"linkUrl":null,"params":{},"detailButton":{"type":2,"title":"已生效","style":2,"orderId":null}}]}],"params":{},"authStatisticType":null}]},{"groupTagId":100002,"name":"通信权益","ranks":2,"hide":false,"params":{},"itemGroupList":[{"groupId":100026,"groupName":"5G流量日包","privilegeType":null,"groupType":3,"groupSort":2,"groupTagId":100002,"hide":false,"equityValue":"","itemList":[{"itemId":100085,"title":"1GB流量日包(1)_自采","showTitle":"1GB流量日包","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":1,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":2,"linkUrl":null,"params":{},"skuList":[{"skuId":100085,"itemId":100085,"title":"1GB流量日包(1)_自采","ranks":1,"parValue":null,"linkUrl":null,"params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100085/10/100008/skuImg_182512548.png"},"detailButton":{"type":3,"title":"去领取","style":1,"orderId":null}}]},{"itemId":100086,"title":"1GB流量日包(2)_自采","showTitle":"1GB流量日包","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":2,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":2,"linkUrl":null,"params":{},"skuList":[{"skuId":100086,"itemId":100086,"title":"1GB流量日包(2)_自采","ranks":1,"parValue":null,"linkUrl":null,"params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100086/10/100008/skuImg_182553317.png"},"detailButton":{"type":3,"title":"去领取","style":1,"orderId":null}}]},{"itemId":100087,"title":"1GB流量日包(3)_自采","showTitle":"1GB流量日包","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":3,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":2,"linkUrl":null,"params":{},"skuList":[{"skuId":100087,"itemId":100087,"title":"1GB流量日包(3)_自采","ranks":1,"parValue":null,"linkUrl":null,"params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100087/10/100008/skuImg_182506496.png"},"detailButton":{"type":3,"title":"去领取","style":1,"orderId":null}}]},{"itemId":100088,"title":"1GB流量日包(4)_自采","showTitle":"1GB流量日包","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":4,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":2,"linkUrl":null,"params":{},"skuList":[{"skuId":100088,"itemId":100088,"title":"1GB流量日包(4)_自采","ranks":1,"parValue":null,"linkUrl":null,"params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100088/10/100008/skuImg_182453359.png"},"detailButton":{"type":3,"title":"去领取","style":1,"orderId":null}}]},{"itemId":100089,"title":"1GB流量日包(5)_自采","showTitle":"1GB流量日包","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":5,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":2,"linkUrl":null,"params":{},"skuList":[{"skuId":100089,"itemId":100089,"title":"1GB流量日包(5)_自采","ranks":1,"parValue":null,"linkUrl":null,"params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100089/10/100008/skuImg_182447133.png"},"detailButton":{"type":3,"title":"去领取","style":1,"orderId":null}}]}],"params":{"detailHeadImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/itemGroup/100026/10/100008/detailHeadImg_182746776.png"},"authStatisticType":1},{"groupId":100027,"groupName":"话费红包","privilegeType":null,"groupType":2,"groupSort":3,"groupTagId":100002,"hide":false,"equityValue":"","itemList":[{"itemId":100090,"title":"0.2元话费红包(1)_自采","showTitle":"0.2元话费红包","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":1,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":2,"linkUrl":null,"params":{},"skuList":[{"skuId":100090,"itemId":100090,"title":"0.2元话费红包(1)_自采","ranks":1,"parValue":null,"linkUrl":null,"params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100090/10/100008/skuImg_174833870.png"},"detailButton":{"type":3,"title":"去领取","style":1,"orderId":null}}]},{"itemId":100091,"title":"0.2元话费红包(2)_自采","showTitle":"0.2元话费红包","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":2,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":2,"linkUrl":null,"params":{},"skuList":[{"skuId":100091,"itemId":100091,"title":"0.2元话费红包(2)_自采","ranks":1,"parValue":null,"linkUrl":null,"params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100091/10/100008/skuImg_174827130.png"},"detailButton":{"type":3,"title":"去领取","style":1,"orderId":null}}]},{"itemId":100092,"title":"0.2元话费红包(3)_自采","showTitle":"0.2元话费红包","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":3,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":2,"linkUrl":null,"params":{},"skuList":[{"skuId":100092,"itemId":100092,"title":"0.2元话费红包(3)_自采","ranks":1,"parValue":null,"linkUrl":null,"params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100092/10/100008/skuImg_174816230.png"},"detailButton":{"type":3,"title":"去领取","style":1,"orderId":null}}]},{"itemId":100093,"title":"0.2元话费红包(4)_自采","showTitle":"0.2元话费红包","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":4,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":2,"linkUrl":null,"params":{},"skuList":[{"skuId":100093,"itemId":100093,"title":"0.2元话费红包(4)_自采","ranks":1,"parValue":null,"linkUrl":null,"params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100093/10/100008/skuImg_174807480.png"},"detailButton":{"type":3,"title":"去领取","style":1,"orderId":null}}]},{"itemId":100094,"title":"0.2元话费红包(5)_自采","showTitle":"0.2元话费红包","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":5,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":2,"linkUrl":null,"params":{},"skuList":[{"skuId":100094,"itemId":100094,"title":"0.2元话费红包(5)_自采","ranks":1,"parValue":null,"linkUrl":null,"params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100094/10/100008/skuImg_174758421.png"},"detailButton":{"type":3,"title":"去领取","style":1,"orderId":null}}]}],"params":{"detailHeadImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/itemGroup/100027/10/100008/detailHeadImg_182753204.png"},"authStatisticType":3}]},{"groupTagId":100003,"name":"生活权益","ranks":3,"hide":false,"params":{},"itemGroupList":[{"groupId":100028,"groupName":"生活权益","privilegeType":null,"groupType":3,"groupSort":4,"groupTagId":100003,"hide":false,"equityValue":"","itemList":[{"itemId":100028,"title":"芒果TV(普通权益)","showTitle":"芒果TV","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":9,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":3,"linkUrl":"/pages/yinge/index?type=mangguo","params":{},"skuList":[{"skuId":100028,"itemId":100028,"title":"芒果TV(普通权益)","ranks":1,"parValue":null,"linkUrl":"/pages/yinge/index?type=mangguo","params":{"bigSkuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100028/10/100001/bigSkuImg_150250554.png","homePageImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100028/10/100001/homePageImg_183233106.png","skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100028/10/100001/skuImg_153850833.png"},"detailButton":{"type":6,"title":"去使用","style":1,"orderId":null}}]},{"itemId":100016,"title":"最高10元出行红包","showTitle":"最高10元出行红包","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":3,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":3,"linkUrl":"alipays://platformapi/startapp?appId=20000067&url=https%3A%2F%2Frender.alipay.com%2Fp%2Fc%2F180020240000037456%2Fhome.html%3F__webview_options__%3D","params":{},"skuList":[{"skuId":100016,"itemId":100016,"title":"出行红包","ranks":1,"parValue":null,"linkUrl":"alipays://platformapi/startapp?appId=20000067&url=https%3A%2F%2Frender.alipay.com%2Fp%2Fc%2F180020240000037456%2Fhome.html%3F__webview_options__%3D","params":{"bigSkuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100016/10/100001/bigSkuImg_145853284.png","homePageImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100016/10/100001/homePageImg_183334312.png","skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100016/10/100003/skuImg_164859731.png"},"detailButton":{"type":6,"title":"去使用","style":1,"orderId":null}}]},{"itemId":100017,"title":"指定快消品5折起","showTitle":"天猫超市5折起优惠券","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":4,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":2,"linkUrl":"alipays://platformapi/startapp?appId=20000021","params":{},"skuList":[{"skuId":100017,"itemId":100017,"title":"天猫超市指定快消品5折起","ranks":1,"parValue":null,"linkUrl":"alipays://platformapi/startapp?appId=20000021","params":{"bigSkuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100017/10/100001/bigSkuImg_150006357.png","homePageImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100017/10/100001/homePageImg_183300429.png","skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100017/10/100001/skuImg_153657429.png"},"detailButton":{"type":3,"title":"维护中","style":2,"orderId":null}}]},{"itemId":100013,"title":"喜马拉雅5折月卡","showTitle":"喜马拉雅5折月卡","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":5,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":3,"linkUrl":"/pages/yinge/index?type=ximalaya","params":{},"skuList":[{"skuId":100013,"itemId":100013,"title":"喜马拉雅月卡5折","ranks":1,"parValue":null,"linkUrl":"/pages/yinge/index?type=ximalaya","params":{"bigSkuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100013/10/100001/bigSkuImg_150044806.png","homePageImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100013/10/100001/homePageImg_183325797.png","skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100013/10/100001/skuImg_155438146.png"},"detailButton":{"type":6,"title":"去使用","style":1,"orderId":null}}]},{"itemId":100018,"title":"6折优酷月卡","showTitle":"6折优酷月卡","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":6,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":3,"linkUrl":"https://gkzx.jujienet.com/broadband-web/activity/oilCard?type=cover&cn=oppo&serviceNo=10001176&goodsTrdNo=100098","params":{},"skuList":[{"skuId":100018,"itemId":100018,"title":"优酷月卡6折","ranks":1,"parValue":null,"linkUrl":"https://gkzx.jujienet.com/broadband-web/activity/oilCard?type=cover&cn=oppo&serviceNo=10001176&goodsTrdNo=100098","params":{"bigSkuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100018/10/100001/bigSkuImg_150112420.png","homePageImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100018/10/100001/homePageImg_183252252.png","skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100018/10/100001/skuImg_165149612.png"},"detailButton":{"type":6,"title":"去使用","style":1,"orderId":null}}]},{"itemId":100019,"title":"饿了么最高66元","showTitle":"饿了么最高66元","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":7,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":3,"linkUrl":"http://t.bfr2.top/G1I34Rm","params":{},"skuList":[{"skuId":100019,"itemId":100019,"title":"饿了么红包","ranks":1,"parValue":null,"linkUrl":"http://t.bfr2.top/G1I34Rm","params":{"bigSkuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100019/10/100001/bigSkuImg_150148235.png","homePageImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100019/10/100001/homePageImg_183243949.png","skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100019/10/100001/skuImg_153818100.png"},"detailButton":{"type":6,"title":"去使用","style":1,"orderId":null}}]},{"itemId":100015,"title":"淘宝心选10包抽纸","showTitle":"淘宝心选10包抽纸","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":8,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":2,"linkUrl":"alipays://platformapi/startapp?appId=20000021","params":{},"skuList":[{"skuId":100015,"itemId":100015,"title":"10包抽纸","ranks":1,"parValue":null,"linkUrl":"alipays://platformapi/startapp?appId=20000021","params":{"bigSkuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100015/10/100001/bigSkuImg_150225174.png","homePageImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100015/10/100001/homePageImg_183311998.png","skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100015/10/100003/skuImg_153854000.png"},"detailButton":{"type":3,"title":"去领取","style":1,"orderId":null}}]}],"params":{},"authStatisticType":2}]}]},"phoneNumber":"159******53","nickName":"崇晗","avatar":"https://tfs.alipayobjects.com/images/partner/T1.1BeXaXdXXXXXXXX","memberJoinTitle":"2024年09月04日起生效，已享受1天","showDeductionType":2,"toBindUserUrl":"https://litevip.jujienet.com/apsu-api-test/index/100078","closeActivitySwitch":false,"isAllowClose":true,"isAllowRenewal":false}}

module.exports = (req) => {
  // 如果是开发模式, 则读取public文件夹下的素材
  const isDevelopment = true;
  // const isDevelopment = false;

  // 在这里切换尊享版还是免费版
  const memberType = MemberTypeMap.basic;
  // return memberType === MemberTypeMap.vip ? responseVip : responseBasic;
  return error;
};
