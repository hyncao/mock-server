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

const responseVip = {"code":1000,"msg":"响应信息:调用成功","response":{"status":1,"msg":"连续包月，已开通4天","tradeId":"202509250000000031","currentCycleNum":1,"memberType":1,"packageInfo":{"title":"轻享版","packageId":100014,"operatorCode":1,"ranks":1,"params":{"arrow":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/package/100014/10/100014/arrow_120015483.png","coProduction":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/package/100014/10/100014/coProduction_115338996.png","findVVImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/package/100014/10/100014/findVVImg_144734112.png","goodsImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/package/100014/10/100014/goodsImg_112947472.png","headImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/package/100014/10/100014/headImg_163733980.png","memberRule":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/package/100014/10/100014/memberRule_163757835.png","submitBtnImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/package/100014/10/100014/submitBtnImg_163747684.png","taskDisplayImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/package/100014/10/100014/taskDisplayImg_114815226.png"},"groupTagList":[{"groupTagId":500007,"name":"订购的主商品(隐藏)","ranks":1,"hide":true,"params":{},"itemGroupList":[]},{"groupTagId":500008,"name":"运营商权益","ranks":2,"hide":false,"params":{"headImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/groupTag/500008/10/100014/headImg_162859513.png"},"itemGroupList":[{"groupId":400048,"groupName":"新奇权益","privilegeType":null,"groupType":3,"groupSort":2,"groupTagId":500008,"hide":false,"equityValue":null,"itemList":[{"itemId":200123,"showTitle":"云游戏体验包5小时","subtitle":"","operatorCode":0,"isValidateCode":false,"onlineCycle":"","showSort":1,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":1200,"takeMode":2,"linkUrl":null,"params":{},"skuList":[{"skuId":300123,"itemId":200123,"title":"云游戏体验包5小时","ranks":1,"parValue":null,"linkUrl":null,"params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/sku/300123/0/0/skuImg_154102703.png"},"detailButton":{"type":3,"title":"去领取","style":1,"orderId":null,"tip":null}}]}],"params":{},"authStatisticType":null}]},{"groupTagId":500009,"name":"互联网权益","ranks":3,"hide":false,"params":{"headImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/groupTag/500009/10/100014/headImg_162849840.png"},"itemGroupList":[{"groupId":400049,"groupName":"红包权益","privilegeType":null,"groupType":3,"groupSort":3,"groupTagId":500009,"hide":false,"equityValue":null,"itemList":[{"itemId":200124,"showTitle":"0.4元支付宝话费","subtitle":"","operatorCode":0,"isValidateCode":false,"onlineCycle":"","showSort":1,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":1200,"takeMode":2,"linkUrl":null,"params":{},"skuList":[{"skuId":300124,"itemId":200124,"title":"0.4元支付宝话费","ranks":1,"parValue":null,"linkUrl":null,"params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/sku/300124/0/0/skuImg_140415764.png"},"detailButton":{"type":3,"title":"去领取","style":1,"orderId":null,"tip":null}}]},{"itemId":200125,"showTitle":"0.6元支付宝水费","subtitle":"","operatorCode":0,"isValidateCode":false,"onlineCycle":"","showSort":2,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":1200,"takeMode":2,"linkUrl":null,"params":{},"skuList":[{"skuId":300125,"itemId":200125,"title":"0.6元支付宝水费","ranks":1,"parValue":null,"linkUrl":null,"params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/sku/300125/0/0/skuImg_140426177.png"},"detailButton":{"type":3,"title":"去领取","style":1,"orderId":null,"tip":null}}]}],"params":{},"authStatisticType":null},{"groupId":400050,"groupName":"生活权益","privilegeType":null,"groupType":3,"groupSort":4,"groupTagId":500009,"hide":false,"equityValue":null,"itemList":[{"itemId":200126,"showTitle":"5.2折优酷会员月卡","subtitle":"","operatorCode":0,"isValidateCode":false,"onlineCycle":"","showSort":1,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":1200,"takeMode":2,"linkUrl":null,"params":{},"skuList":[{"skuId":300126,"itemId":200126,"title":"5.2折优酷会员月卡","ranks":1,"parValue":null,"linkUrl":null,"params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/sku/300126/0/0/skuImg_162926908.png"},"detailButton":{"type":3,"title":"去领取","style":1,"orderId":null,"tip":null}}]},{"itemId":200127,"showTitle":"5~18.8元饿了么随机红包","subtitle":"","operatorCode":0,"isValidateCode":false,"onlineCycle":"","showSort":2,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":1200,"takeMode":2,"linkUrl":null,"params":{},"skuList":[{"skuId":300127,"itemId":200127,"title":"5~18.8元饿了么随机红包","ranks":1,"parValue":null,"linkUrl":null,"params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/sku/300127/0/0/skuImg_162917902.png"},"detailButton":{"type":3,"title":"去领取","style":1,"orderId":null,"tip":null}}]}],"params":{},"authStatisticType":null}]}]},"phoneNumber":"159******53","nickName":null,"avatar":null,"memberJoinTitle":"2025年09月25日起生效，已享受4天"}}

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

// const error = {"code":1000,"msg":"响应信息:调用成功","response":{"status":1,"msg":"连续包月，已开通1天","tradeId":"202410120000000958","renewalTradeId":null,"damages":0,"currentCycleNum":1,"effectiveTotalCycleNum":6,"memberType":2,"packageInfo":{"title":"权益会员尊享版PLUS","packageId":100009,"operatorCode":1,"templateId":100020,"templateGroupMap":{"default":[{"templateId":100020,"firstMouthDiscountType":1}]},"ranks":1,"params":{},"groupTagList":[{"groupTagId":100001,"name":"订购的主商品(隐藏)","ranks":1,"hide":true,"params":{},"itemGroupList":[]},{"groupTagId":100002,"name":"通信权益","ranks":2,"hide":false,"params":{"headImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/groupTag/100002/10/100009/headImg_153625208.png"},"itemGroupList":[{"groupId":100030,"groupName":"5G流量日包","privilegeType":null,"groupType":3,"groupSort":2,"groupTagId":100002,"hide":false,"equityValue":"","itemList":[{"itemId":100085,"title":"1GB流量日包(1)_自采","showTitle":"1GB流量日包","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":1,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":2,"linkUrl":null,"params":{},"skuList":[{"skuId":100085,"itemId":100085,"title":"1GB流量日包(1)","ranks":1,"parValue":1.00,"linkUrl":null,"params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100085/10/100008/skuImg_182512548.png"},"detailButton":{"type":3,"title":"去领取","style":1,"orderId":null}}]},{"itemId":100086,"title":"1GB流量日包(2)_自采","showTitle":"1GB流量日包","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":2,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":2,"linkUrl":null,"params":{},"skuList":[{"skuId":100086,"itemId":100086,"title":"1GB流量日包(2)","ranks":1,"parValue":1.00,"linkUrl":null,"params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100086/10/100008/skuImg_182553317.png"},"detailButton":{"type":1,"title":"待生效","style":2,"orderId":null}}]},{"itemId":100087,"title":"1GB流量日包(3)_自采","showTitle":"1GB流量日包","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":3,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":2,"linkUrl":null,"params":{},"skuList":[{"skuId":100087,"itemId":100087,"title":"1GB流量日包(3)","ranks":1,"parValue":1.00,"linkUrl":null,"params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100087/10/100008/skuImg_182506496.png"},"detailButton":{"type":1,"title":"待生效","style":2,"orderId":null}}]},{"itemId":100088,"title":"1GB流量日包(4)_自采","showTitle":"1GB流量日包","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":4,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":2,"linkUrl":null,"params":{},"skuList":[{"skuId":100088,"itemId":100088,"title":"1GB流量日包(4)","ranks":1,"parValue":1.00,"linkUrl":null,"params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100088/10/100008/skuImg_182453359.png"},"detailButton":{"type":1,"title":"待生效","style":2,"orderId":null}}]},{"itemId":100089,"title":"1GB流量日包(5)_自采","showTitle":"1GB流量日包","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":5,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":2,"linkUrl":null,"params":{},"skuList":[{"skuId":100089,"itemId":100089,"title":"1GB流量日包(5)","ranks":1,"parValue":1.00,"linkUrl":null,"params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100089/10/100008/skuImg_182447133.png"},"detailButton":{"type":1,"title":"待生效","style":2,"orderId":null}}]}],"params":{"detailHeadImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/itemGroup/100030/10/100009/detailHeadImg_153103198.png"},"authStatisticType":1},{"groupId":100031,"groupName":"话费红包","privilegeType":null,"groupType":3,"groupSort":3,"groupTagId":100002,"hide":false,"equityValue":"","itemList":[{"itemId":100090,"title":"0.2元话费红包(1)_自采","showTitle":"0.2元话费红包","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":1,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":2,"linkUrl":"alipays://platformapi/startapp?appId=20000021","params":{},"skuList":[{"skuId":100090,"itemId":100090,"title":"0.2元话费红包(1)","ranks":1,"parValue":0.20,"linkUrl":"alipays://platformapi/startapp?appId=20000021","params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100090/10/100008/skuImg_174833870.png"},"detailButton":{"type":3,"title":"去领取","style":1,"orderId":null}}]},{"itemId":100091,"title":"0.2元话费红包(2)_自采","showTitle":"0.2元话费红包","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":2,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":2,"linkUrl":"alipays://platformapi/startapp?appId=20000021","params":{},"skuList":[{"skuId":100091,"itemId":100091,"title":"0.2元话费红包(2)","ranks":1,"parValue":0.20,"linkUrl":"alipays://platformapi/startapp?appId=20000021","params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100091/10/100008/skuImg_174827130.png"},"detailButton":{"type":1,"title":"待生效","style":2,"orderId":null}}]},{"itemId":100092,"title":"0.2元话费红包(3)_自采","showTitle":"0.2元话费红包","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":3,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":2,"linkUrl":"alipays://platformapi/startapp?appId=20000021","params":{},"skuList":[{"skuId":100092,"itemId":100092,"title":"0.2元话费红包(3)","ranks":1,"parValue":0.20,"linkUrl":"alipays://platformapi/startapp?appId=20000021","params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100092/10/100008/skuImg_174816230.png"},"detailButton":{"type":1,"title":"待生效","style":2,"orderId":null}}]},{"itemId":100093,"title":"0.2元话费红包(4)_自采","showTitle":"0.2元话费红包","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":4,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":2,"linkUrl":"alipays://platformapi/startapp?appId=20000021","params":{},"skuList":[{"skuId":100093,"itemId":100093,"title":"0.2元话费红包(4)","ranks":1,"parValue":0.20,"linkUrl":"alipays://platformapi/startapp?appId=20000021","params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100093/10/100008/skuImg_174807480.png"},"detailButton":{"type":1,"title":"待生效","style":2,"orderId":null}}]},{"itemId":100094,"title":"0.2元话费红包(5)_自采","showTitle":"0.2元话费红包","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":5,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":2,"linkUrl":"alipays://platformapi/startapp?appId=20000021","params":{},"skuList":[{"skuId":100094,"itemId":100094,"title":"0.2元话费红包(5)","ranks":1,"parValue":0.20,"linkUrl":"alipays://platformapi/startapp?appId=20000021","params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100094/10/100008/skuImg_174758421.png"},"detailButton":{"type":1,"title":"待生效","style":2,"orderId":null}}]}],"params":{"detailHeadImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/itemGroup/100031/10/100009/detailHeadImg_153112026.png"},"authStatisticType":3}]},{"groupTagId":100003,"name":"生活权益","ranks":3,"hide":false,"params":{"headImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/groupTag/100003/10/100009/headImg_153635032.png"},"itemGroupList":[{"groupId":100032,"groupName":"生活权益","privilegeType":null,"groupType":3,"groupSort":4,"groupTagId":100003,"hide":false,"equityValue":"","itemList":[{"itemId":100007,"title":"最高3元缴费红包","showTitle":"最高3元缴费红包","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":1,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":2,"linkUrl":"alipays://platformapi/startapp?appId=20000021","params":{},"skuList":[{"skuId":100007,"itemId":100007,"title":"缴费红包","ranks":1,"parValue":null,"linkUrl":"alipays://platformapi/startapp?appId=20000021","params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100007/10/100001/skuImg_144823063.png"},"detailButton":{"type":6,"title":"去使用","style":1,"orderId":null}}]},{"itemId":100028,"title":"芒果TV(普通权益)","showTitle":"芒果TV","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":2,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":3,"linkUrl":"/pages/yinge/index?type=mangguo","params":{},"skuList":[{"skuId":100028,"itemId":100028,"title":"芒果TV(普通权益)","ranks":1,"parValue":null,"linkUrl":"/pages/yinge/index?type=mangguo","params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100028/10/100001/skuImg_153850833.png"},"detailButton":{"type":6,"title":"去使用","style":1,"orderId":null}}]},{"itemId":100016,"title":"最高10元出行红包","showTitle":"最高10元出行红包","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":3,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":3,"linkUrl":"alipays://platformapi/startapp?appId=20000067&url=https%3A%2F%2Frender.alipay.com%2Fp%2Fc%2F180020240000037456%2Fhome.html%3F__webview_options__%3D","params":{},"skuList":[{"skuId":100016,"itemId":100016,"title":"出行红包","ranks":1,"parValue":null,"linkUrl":"alipays://platformapi/startapp?appId=20000067&url=https%3A%2F%2Frender.alipay.com%2Fp%2Fc%2F180020240000037456%2Fhome.html%3F__webview_options__%3D","params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100016/10/100003/skuImg_164859731.png"},"detailButton":{"type":6,"title":"去使用","style":1,"orderId":null}}]},{"itemId":100017,"title":"指定快消品5折起","showTitle":"天猫超市5折起优惠券","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":4,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":2,"linkUrl":"alipays://platformapi/startapp?appId=20000021","params":{},"skuList":[{"skuId":100017,"itemId":100017,"title":"天猫超市指定快消品5折起","ranks":1,"parValue":null,"linkUrl":"alipays://platformapi/startapp?appId=20000021","params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100017/10/100001/skuImg_153657429.png"},"detailButton":{"type":3,"title":"维护中","style":2,"orderId":null}}]},{"itemId":100013,"title":"喜马拉雅5折月卡","showTitle":"喜马拉雅5折月卡","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":5,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":3,"linkUrl":"/pages/yinge/index?type=ximalaya","params":{},"skuList":[{"skuId":100013,"itemId":100013,"title":"喜马拉雅月卡5折","ranks":1,"parValue":null,"linkUrl":"/pages/yinge/index?type=ximalaya","params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100013/10/100001/skuImg_155438146.png"},"detailButton":{"type":6,"title":"去使用","style":1,"orderId":null}}]},{"itemId":100018,"title":"6折优酷月卡","showTitle":"6折优酷月卡","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":6,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":3,"linkUrl":"https://gkzx.jujienet.com/broadband-web/activity/oilCard?type=cover&cn=oppo&serviceNo=10001176&goodsTrdNo=100098","params":{},"skuList":[{"skuId":100018,"itemId":100018,"title":"优酷月卡6折","ranks":1,"parValue":null,"linkUrl":"https://gkzx.jujienet.com/broadband-web/activity/oilCard?type=cover&cn=oppo&serviceNo=10001176&goodsTrdNo=100098","params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100018/10/100001/skuImg_165149612.png"},"detailButton":{"type":6,"title":"去使用","style":1,"orderId":null}}]},{"itemId":100019,"title":"饿了么最高66元","showTitle":"饿了么最高66元","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":7,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":3,"linkUrl":"http://t.bfr2.top/G1I34Rm","params":{},"skuList":[{"skuId":100019,"itemId":100019,"title":"饿了么红包","ranks":1,"parValue":null,"linkUrl":"http://t.bfr2.top/G1I34Rm","params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100019/10/100001/skuImg_153818100.png"},"detailButton":{"type":6,"title":"去使用","style":1,"orderId":null}}]},{"itemId":100015,"title":"淘宝心选10包抽纸","showTitle":"淘宝心选10包抽纸","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":8,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":2,"linkUrl":"alipays://platformapi/startapp?appId=20000021","params":{},"skuList":[{"skuId":100015,"itemId":100015,"title":"10包抽纸","ranks":1,"parValue":null,"linkUrl":"alipays://platformapi/startapp?appId=20000021","params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100015/10/100003/skuImg_153854000.png"},"detailButton":{"type":3,"title":"去领取","style":1,"orderId":null}}]}],"params":{},"authStatisticType":2}]},{"groupTagId":100005,"name":"视频权益","ranks":4,"hide":false,"params":{"headImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/groupTag/100005/10/100009/headImg_153647875.png"},"itemGroupList":[{"groupId":100033,"groupName":"视频权益","privilegeType":null,"groupType":2,"groupSort":5,"groupTagId":100005,"hide":false,"equityValue":"","itemList":[{"itemId":100095,"title":"爱奇艺黄金VIP会员月卡_兑吧","showTitle":"爱奇艺黄金VIP会员月卡","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":1,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":2,"linkUrl":"","params":{},"skuList":[{"skuId":100095,"itemId":100095,"title":"爱奇艺黄金VIP会员月卡","ranks":1,"parValue":null,"linkUrl":"","params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100095/0/0/skuImg_112336310.png"},"detailButton":{"type":3,"title":"去领取","style":1,"orderId":null}}]},{"itemId":100096,"title":"腾讯视频会员月卡_兑吧","showTitle":"腾讯视频会员月卡","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":2,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":2,"linkUrl":"","params":{},"skuList":[{"skuId":100096,"itemId":100096,"title":"腾讯视频会员月卡","ranks":1,"parValue":null,"linkUrl":"","params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100096/0/0/skuImg_112353663.png"},"detailButton":{"type":3,"title":"去领取","style":1,"orderId":null}}]},{"itemId":100097,"title":"哔哩哔哩大月卡_兑吧","showTitle":"哔哩哔哩大月卡","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":3,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":2,"linkUrl":"","params":{},"skuList":[{"skuId":100097,"itemId":100097,"title":"哔哩哔哩大月卡","ranks":1,"parValue":null,"linkUrl":"","params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100097/0/0/skuImg_112404414.png"},"detailButton":{"type":3,"title":"去领取","style":1,"orderId":null}}]},{"itemId":100098,"title":"芒果影视会员月卡_兑吧","showTitle":"芒果影视会员月卡","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":4,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":2,"linkUrl":"","params":{},"skuList":[{"skuId":100098,"itemId":100098,"title":"芒果影视会员月卡","ranks":1,"parValue":null,"linkUrl":"","params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100098/0/0/skuImg_112416000.png"},"detailButton":{"type":3,"title":"去领取","style":1,"orderId":null}}]},{"itemId":100099,"title":"优酷黄金会员月卡_兑吧","showTitle":"优酷黄金会员月卡","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":5,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":2,"linkUrl":"","params":{},"skuList":[{"skuId":100099,"itemId":100099,"title":"优酷黄金会员月卡","ranks":1,"parValue":null,"linkUrl":"","params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100099/0/0/skuImg_112433450.png"},"detailButton":{"type":3,"title":"去领取","style":1,"orderId":null}}]},{"itemId":100062,"title":"腾讯体育会员月卡_兑吧","showTitle":"腾讯体育会员月卡","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":6,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":2,"linkUrl":null,"params":{},"skuList":[{"skuId":100062,"itemId":100062,"title":"腾讯体育会员月卡","ranks":1,"parValue":null,"linkUrl":null,"params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100062/0/0/skuImg_112012197.png"},"detailButton":{"type":3,"title":"去领取","style":1,"orderId":null}}]},{"itemId":100063,"title":"咪咕视频钻石会员月卡_兑吧","showTitle":"咪咕视频钻石会员月卡","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":7,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":2,"linkUrl":null,"params":{},"skuList":[{"skuId":100063,"itemId":100063,"title":"咪咕视频钻石会员月卡","ranks":1,"parValue":null,"linkUrl":null,"params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100063/0/0/skuImg_112021847.png"},"detailButton":{"type":3,"title":"去领取","style":1,"orderId":null}}]}],"params":{},"authStatisticType":4}]},{"groupTagId":100006,"name":"缴费权益","ranks":5,"hide":false,"params":{"headImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/groupTag/100006/10/100009/headImg_153655244.png"},"itemGroupList":[{"groupId":100034,"groupName":"缴费权益","privilegeType":null,"groupType":3,"groupSort":6,"groupTagId":100006,"hide":false,"equityValue":"","itemList":[{"itemId":100064,"title":"5元话费红包(1)","showTitle":"5元话费红包","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":1,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":2,"linkUrl":"alipays://platformapi/startapp?appId=20000021","params":{},"skuList":[{"skuId":100064,"itemId":100064,"title":"5元话费红包(1)","ranks":1,"parValue":null,"linkUrl":"alipays://platformapi/startapp?appId=20000021","params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100064/0/0/skuImg_112036953.png"},"detailButton":{"type":3,"title":"去领取","style":1,"orderId":null}}]},{"itemId":100066,"title":"5元缴费红包(1)","showTitle":"5元缴费红包","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":2,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":2,"linkUrl":"alipays://platformapi/startapp?appId=20000021","params":{},"skuList":[{"skuId":100066,"itemId":100066,"title":"5元缴费红包(1)","ranks":1,"parValue":null,"linkUrl":"alipays://platformapi/startapp?appId=20000021","params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100066/0/0/skuImg_112059770.png"},"detailButton":{"type":3,"title":"去领取","style":1,"orderId":null}}]}],"params":{},"authStatisticType":2}]}]},"phoneNumber":"159******53","nickName":"崇晗","avatar":"https://tfs.alipayobjects.com/images/partner/T1.1BeXaXdXXXXXXXX","memberJoinTitle":"2024年10月12日起生效，已享受1天","showDeductionType":1,"toBindUserUrl":"https://litevip.jujienet.com/apsu-api-test/index/100078","closeActivitySwitch":false,"isAllowClose":true,"isAllowRenewal":false}}
// const error = {"code":1000,"msg":"响应信息:调用成功","response":{"status":2,"msg":"连续包月，已开通1天","tradeId":"202410140000000963","renewalTradeId":null,"damages":0,"currentCycleNum":1,"effectiveTotalCycleNum":6,"memberType":3,"packageInfo":{"title":"权益会员尊享版PRO","packageId":100010,"operatorCode":2,"templateId":100021,"templateGroupMap":{"default":[{"templateId":100021,"firstMouthDiscountType":1}]},"ranks":1,"params":{},"groupTagList":[{"groupTagId":100001,"name":"订购的主商品(隐藏)","ranks":1,"hide":true,"params":{},"itemGroupList":[]},{"groupTagId":100005,"name":"视频权益","ranks":4,"hide":false,"params":{},"itemGroupList":[{"groupId":100036,"groupName":"视频权益","privilegeType":null,"groupType":2,"groupSort":5,"groupTagId":100005,"hide":false,"equityValue":"","itemList":[{"itemId":100095,"title":"爱奇艺黄金VIP会员月卡_兑吧","showTitle":"爱奇艺黄金VIP会员月卡","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":1,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":2,"linkUrl":"","params":{},"skuList":[{"skuId":100095,"itemId":100095,"title":"爱奇艺黄金VIP会员月卡","ranks":1,"parValue":null,"linkUrl":"","params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100095/0/0/skuImg_112336310.png"},"detailButton":{"type":3,"title":"去领取","style":1,"orderId":null}}]},{"itemId":100096,"title":"腾讯视频会员月卡_兑吧","showTitle":"腾讯视频会员月卡","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":2,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":2,"linkUrl":"","params":{},"skuList":[{"skuId":100096,"itemId":100096,"title":"腾讯视频会员月卡","ranks":1,"parValue":null,"linkUrl":"","params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100096/0/0/skuImg_112353663.png"},"detailButton":{"type":3,"title":"去领取","style":1,"orderId":null}}]},{"itemId":100097,"title":"哔哩哔哩大月卡_兑吧","showTitle":"哔哩哔哩大月卡","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":3,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":2,"linkUrl":"","params":{},"skuList":[{"skuId":100097,"itemId":100097,"title":"哔哩哔哩大月卡","ranks":1,"parValue":null,"linkUrl":"","params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100097/0/0/skuImg_112404414.png"},"detailButton":{"type":3,"title":"去领取","style":1,"orderId":null}}]},{"itemId":100098,"title":"芒果影视会员月卡_兑吧","showTitle":"芒果影视会员月卡","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":4,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":2,"linkUrl":"","params":{},"skuList":[{"skuId":100098,"itemId":100098,"title":"芒果影视会员月卡","ranks":1,"parValue":null,"linkUrl":"","params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100098/0/0/skuImg_112416000.png"},"detailButton":{"type":3,"title":"去领取","style":1,"orderId":null}}]},{"itemId":100099,"title":"优酷黄金会员月卡_兑吧","showTitle":"优酷黄金会员月卡","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":5,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":2,"linkUrl":"","params":{},"skuList":[{"skuId":100099,"itemId":100099,"title":"优酷黄金会员月卡","ranks":1,"parValue":null,"linkUrl":"","params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100099/0/0/skuImg_112433450.png"},"detailButton":{"type":3,"title":"去领取","style":1,"orderId":null}}]},{"itemId":100062,"title":"腾讯体育会员月卡_兑吧","showTitle":"腾讯体育会员月卡","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":6,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":2,"linkUrl":null,"params":{},"skuList":[{"skuId":100062,"itemId":100062,"title":"腾讯体育会员月卡","ranks":1,"parValue":null,"linkUrl":null,"params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100062/0/0/skuImg_112012197.png"},"detailButton":{"type":3,"title":"去领取","style":1,"orderId":null}}]},{"itemId":100063,"title":"咪咕视频钻石会员月卡_兑吧","showTitle":"咪咕视频钻石会员月卡","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":7,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":2,"linkUrl":null,"params":{},"skuList":[{"skuId":100063,"itemId":100063,"title":"咪咕视频钻石会员月卡","ranks":1,"parValue":null,"linkUrl":null,"params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100063/0/0/skuImg_112021847.png"},"detailButton":{"type":3,"title":"去领取","style":1,"orderId":null}}]}],"params":{},"authStatisticType":4}]},{"groupTagId":100006,"name":"缴费权益","ranks":5,"hide":false,"params":{},"itemGroupList":[{"groupId":100037,"groupName":"缴费权益","privilegeType":null,"groupType":3,"groupSort":6,"groupTagId":100006,"hide":false,"equityValue":"","itemList":[{"itemId":100064,"title":"5元话费红包(1)","showTitle":"5元话费红包","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":1,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":2,"linkUrl":"alipays://platformapi/startapp?appId=20000021","params":{},"skuList":[{"skuId":100064,"itemId":100064,"title":"5元话费红包(1)","ranks":1,"parValue":null,"linkUrl":"alipays://platformapi/startapp?appId=20000021","params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100064/0/0/skuImg_112036953.png"},"detailButton":{"type":3,"title":"去领取","style":1,"orderId":null}}]}],"params":{},"authStatisticType":2}]}]},"phoneNumber":"136******29","nickName":"海纳百川","avatar":"https://tfs.alipayobjects.com/images/partner/TB1Dz4fXNem.eJjmgfSXXbYYXXa","memberJoinTitle":"2024年10月14日起生效，已享受1天","showDeductionType":1,"toBindUserUrl":"https://litevip.jujienet.com/apsu-api-test/index/100078","closeActivitySwitch":false,"isAllowClose":true,"isAllowRenewal":false}}
const error = {
  code: 1000,
  msg: '响应信息:调用成功',
  response: {
    status: 1,
    msg: '连续包月，已开通1天',
    tradeId: '202411260000001036',
    renewalTradeId: null,
    damages: 0,
    currentCycleNum: 1,
    effectiveTotalCycleNum: 6,
    memberType: 2,
    packageInfo: {
      title: '尊享会员',
      packageId: 100008,
      operatorCode: 1,
      templateId: 100006,
      templateGroupMap: { default: [{ templateId: 100006, firstMouthDiscountType: 1 }] },
      ranks: 1,
      params: {
        agreementName: '会员使用须知',
        agreements: [
          {
            name: '会员使用须知',
            src: 'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100001/100001/memberRule_155519887.png',
          },
        ],
        detailImg:
          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100008/10/100008/detailImg_160101686.png',
        headImg:
          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100001/10/100001/headImg_151357454.png',
        headerImg:
          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100001/10/100001/headerImg_094446920.png',
        memberRule:
          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100008/10/100008/memberRule_111709058.png',
        navigationBarTitle:
          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100001/10/100001/navigationBarTitle_105451153.png',
        strategyGuide:
          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100008/10/100008/strategyGuide_112349127.png',
        submitBtnImg:
          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100004/10/100004/submitBtnImg_155511491.png',
        submitMarketingImg:
          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100001/10/100001/submitMarketingImg_152645465.png',
        tabImg:
          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100001/10/100001/tabImg_160234048.png',
      },
      groupTagList: [
        { groupTagId: 100001, name: '订购的主商品(隐藏)', ranks: 1, hide: true, params: {}, itemGroupList: [] },
        {
          groupTagId: 100002,
          name: '通信权益',
          ranks: 2,
          hide: false,
          params: {},
          itemGroupList: [
            {
              groupId: 100026,
              groupName: '5G流量日包',
              privilegeType: null,
              groupType: 3,
              groupSort: 2,
              groupTagId: 100002,
              hide: false,
              equityValue: '',
              itemList: [
                {
                  itemId: 100085,
                  title: '1GB流量日包(1)_自采',
                  showTitle: '1GB流量日包',
                  subtitle: '',
                  operatorCode: 0,
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
                      skuId: 100085,
                      itemId: 100085,
                      title: '1GB流量日包(1)',
                      ranks: 1,
                      parValue: 1.0,
                      linkUrl: null,
                      params: {
                        skuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100085/10/100008/skuImg_182512548.png',
                      },
                      detailButton: {
                        type: 3,
                        title: '去领取',
                        style: 2,
                        orderId: null,
                        tip: '流量权益于{22:00}至{次日12:00}维护，请避开该时段领取，谢谢。',
                      },
                    },
                  ],
                },
                {
                  itemId: 100086,
                  title: '1GB流量日包(2)_自采',
                  showTitle: '1GB流量日包',
                  subtitle: '',
                  operatorCode: 0,
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
                      skuId: 100086,
                      itemId: 100086,
                      title: '1GB流量日包(2)',
                      ranks: 1,
                      parValue: 1.0,
                      linkUrl: null,
                      params: {
                        skuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100086/10/100008/skuImg_182553317.png',
                      },
                      detailButton: { type: 1, title: '待生效', style: 2, orderId: null, tip: null },
                    },
                  ],
                },
                {
                  itemId: 100087,
                  title: '1GB流量日包(3)_自采',
                  showTitle: '1GB流量日包',
                  subtitle: '',
                  operatorCode: 0,
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
                      skuId: 100087,
                      itemId: 100087,
                      title: '1GB流量日包(3)',
                      ranks: 1,
                      parValue: 1.0,
                      linkUrl: null,
                      params: {
                        skuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100087/10/100008/skuImg_182506496.png',
                      },
                      detailButton: { type: 1, title: '待生效', style: 2, orderId: null, tip: null },
                    },
                  ],
                },
                {
                  itemId: 100088,
                  title: '1GB流量日包(4)_自采',
                  showTitle: '1GB流量日包',
                  subtitle: '',
                  operatorCode: 0,
                  isValidatecode: false,
                  onlineCycle: '',
                  showSort: 4,
                  cycleType: null,
                  autoCycleOrder: 0,
                  totalCycleNum: 6,
                  takeMode: 2,
                  linkUrl: null,
                  params: {},
                  skuList: [
                    {
                      skuId: 100088,
                      itemId: 100088,
                      title: '1GB流量日包(4)',
                      ranks: 1,
                      parValue: 1.0,
                      linkUrl: null,
                      params: {
                        skuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100088/10/100008/skuImg_182453359.png',
                      },
                      detailButton: { type: 1, title: '待生效', style: 2, orderId: null, tip: null },
                    },
                  ],
                },
                {
                  itemId: 100089,
                  title: '1GB流量日包(5)_自采',
                  showTitle: '1GB流量日包',
                  subtitle: '',
                  operatorCode: 0,
                  isValidatecode: false,
                  onlineCycle: '',
                  showSort: 5,
                  cycleType: null,
                  autoCycleOrder: 0,
                  totalCycleNum: 6,
                  takeMode: 2,
                  linkUrl: null,
                  params: {},
                  skuList: [
                    {
                      skuId: 100089,
                      itemId: 100089,
                      title: '1GB流量日包(5)',
                      ranks: 1,
                      parValue: 1.0,
                      linkUrl: null,
                      params: {
                        skuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100089/10/100008/skuImg_182447133.png',
                      },
                      detailButton: { type: 1, title: '待生效', style: 2, orderId: null, tip: null },
                    },
                  ],
                },
              ],
              params: {
                detailHeadImg:
                  'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/itemGroup/100026/10/100008/detailHeadImg_164429199.png',
              },
              authStatisticType: 1,
            },
            {
              groupId: 100027,
              groupName: '话费红包',
              privilegeType: null,
              groupType: 3,
              groupSort: 3,
              groupTagId: 100002,
              hide: false,
              equityValue: '',
              itemList: [
                {
                  itemId: 100090,
                  title: '0.2元话费红包(1)_自采',
                  showTitle: '0.2元话费红包',
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
                  params: {},
                  skuList: [
                    {
                      skuId: 100090,
                      itemId: 100090,
                      title: '0.2元话费红包(1)',
                      ranks: 1,
                      parValue: 0.2,
                      linkUrl: 'alipays://platformapi/startapp?appId=20000021',
                      params: {
                        skuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100090/10/100008/skuImg_174833870.png',
                      },
                      detailButton: { type: 3, title: '去领取', style: 1, orderId: null, tip: null },
                    },
                  ],
                },
                {
                  itemId: 100091,
                  title: '0.2元话费红包(2)_自采',
                  showTitle: '0.2元话费红包',
                  subtitle: '',
                  operatorCode: 0,
                  isValidatecode: false,
                  onlineCycle: '',
                  showSort: 2,
                  cycleType: null,
                  autoCycleOrder: 0,
                  totalCycleNum: 6,
                  takeMode: 2,
                  linkUrl: 'alipays://platformapi/startapp?appId=20000021',
                  params: {},
                  skuList: [
                    {
                      skuId: 100091,
                      itemId: 100091,
                      title: '0.2元话费红包(2)',
                      ranks: 1,
                      parValue: 0.2,
                      linkUrl: 'alipays://platformapi/startapp?appId=20000021',
                      params: {
                        skuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100091/10/100008/skuImg_174827130.png',
                      },
                      detailButton: { type: 1, title: '待生效', style: 2, orderId: null, tip: null },
                    },
                  ],
                },
                {
                  itemId: 100092,
                  title: '0.2元话费红包(3)_自采',
                  showTitle: '0.2元话费红包',
                  subtitle: '',
                  operatorCode: 0,
                  isValidatecode: false,
                  onlineCycle: '',
                  showSort: 3,
                  cycleType: null,
                  autoCycleOrder: 0,
                  totalCycleNum: 6,
                  takeMode: 2,
                  linkUrl: 'alipays://platformapi/startapp?appId=20000021',
                  params: {},
                  skuList: [
                    {
                      skuId: 100092,
                      itemId: 100092,
                      title: '0.2元话费红包(3)',
                      ranks: 1,
                      parValue: 0.2,
                      linkUrl: 'alipays://platformapi/startapp?appId=20000021',
                      params: {
                        skuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100092/10/100008/skuImg_174816230.png',
                      },
                      detailButton: { type: 1, title: '待生效', style: 2, orderId: null, tip: null },
                    },
                  ],
                },
                {
                  itemId: 100093,
                  title: '0.2元话费红包(4)_自采',
                  showTitle: '0.2元话费红包',
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
                  params: {},
                  skuList: [
                    {
                      skuId: 100093,
                      itemId: 100093,
                      title: '0.2元话费红包(4)',
                      ranks: 1,
                      parValue: 0.2,
                      linkUrl: 'alipays://platformapi/startapp?appId=20000021',
                      params: {
                        skuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100093/10/100008/skuImg_174807480.png',
                      },
                      detailButton: { type: 1, title: '待生效', style: 2, orderId: null, tip: null },
                    },
                  ],
                },
                {
                  itemId: 100094,
                  title: '0.2元话费红包(5)_自采',
                  showTitle: '0.2元话费红包',
                  subtitle: '',
                  operatorCode: 0,
                  isValidatecode: false,
                  onlineCycle: '',
                  showSort: 5,
                  cycleType: null,
                  autoCycleOrder: 0,
                  totalCycleNum: 6,
                  takeMode: 2,
                  linkUrl: 'alipays://platformapi/startapp?appId=20000021',
                  params: {},
                  skuList: [
                    {
                      skuId: 100094,
                      itemId: 100094,
                      title: '0.2元话费红包(5)',
                      ranks: 1,
                      parValue: 0.2,
                      linkUrl: 'alipays://platformapi/startapp?appId=20000021',
                      params: {
                        skuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100094/10/100008/skuImg_174758421.png',
                      },
                      detailButton: { type: 1, title: '待生效', style: 2, orderId: null, tip: null },
                    },
                  ],
                },
              ],
              params: {
                detailHeadImg:
                  'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/itemGroup/100027/10/100008/detailHeadImg_164419895.png',
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
          params: {},
          itemGroupList: [
            {
              groupId: 100028,
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
                  params: {},
                  skuList: [
                    {
                      skuId: 100007,
                      itemId: 100007,
                      title: '缴费红包',
                      ranks: 1,
                      parValue: null,
                      linkUrl: 'alipays://platformapi/startapp?appId=20000021',
                      params: {
                        bigSkuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100007/10/100001/bigSkuImg_145821764.png',
                        homePageImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100007/10/100001/homePageImg_183341996.png',
                        skuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100007/10/100001/skuImg_144823063.png',
                      },
                      detailButton: { type: 3, title: '去领取', style: 1, orderId: null, tip: null },
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
                  params: {},
                  skuList: [
                    {
                      skuId: 100028,
                      itemId: 100028,
                      title: '芒果TV(普通权益)',
                      ranks: 1,
                      parValue: null,
                      linkUrl: '/pages/yinge/index?type=mangguo',
                      params: {
                        bigSkuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100028/10/100001/bigSkuImg_150250554.png',
                        homePageImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100028/10/100001/homePageImg_183233106.png',
                        skuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100028/10/100001/skuImg_153850833.png',
                      },
                      detailButton: { type: 6, title: '去使用', style: 1, orderId: null, tip: null },
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
                    'alipays://platformapi/startapp?appId=20000067&url=https%3A%2F%2Frender.alipay.com%2Fp%2Fc%2F180020240000037456%2Fhome.html%3F__webview_options__%3D',
                  params: {},
                  skuList: [
                    {
                      skuId: 100016,
                      itemId: 100016,
                      title: '出行红包',
                      ranks: 1,
                      parValue: null,
                      linkUrl:
                        'alipays://platformapi/startapp?appId=20000067&url=https%3A%2F%2Frender.alipay.com%2Fp%2Fc%2F180020240000037456%2Fhome.html%3F__webview_options__%3D',
                      params: {
                        bigSkuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100016/10/100001/bigSkuImg_145853284.png',
                        homePageImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100016/10/100001/homePageImg_183334312.png',
                        skuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100016/10/100003/skuImg_164859731.png',
                      },
                      detailButton: { type: 6, title: '去使用', style: 1, orderId: null, tip: null },
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
                  params: {},
                  skuList: [
                    {
                      skuId: 100017,
                      itemId: 100017,
                      title: '天猫超市指定快消品5折起',
                      ranks: 1,
                      parValue: null,
                      linkUrl: 'alipays://platformapi/startapp?appId=20000021',
                      params: {
                        bigSkuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100017/10/100001/bigSkuImg_150006357.png',
                        homePageImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100017/10/100001/homePageImg_183300429.png',
                        skuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100017/10/100001/skuImg_153657429.png',
                      },
                      detailButton: { type: 3, title: '维护中', style: 2, orderId: null, tip: null },
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
                  params: {},
                  skuList: [
                    {
                      skuId: 100013,
                      itemId: 100013,
                      title: '喜马拉雅月卡5折',
                      ranks: 1,
                      parValue: null,
                      linkUrl: '/pages/yinge/index?type=ximalaya',
                      params: {
                        bigSkuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100013/10/100001/bigSkuImg_150044806.png',
                        homePageImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100013/10/100001/homePageImg_183325797.png',
                        skuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100013/10/100001/skuImg_155438146.png',
                      },
                      detailButton: { type: 6, title: '去使用', style: 1, orderId: null, tip: null },
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
                    'https://gkzx.jujienet.com/broadband-web/activity/oilCard?type=cover&cn=oppo&serviceNo=10001176&goodsTrdNo=100098',
                  params: {},
                  skuList: [
                    {
                      skuId: 100018,
                      itemId: 100018,
                      title: '优酷月卡6折',
                      ranks: 1,
                      parValue: null,
                      linkUrl:
                        'https://gkzx.jujienet.com/broadband-web/activity/oilCard?type=cover&cn=oppo&serviceNo=10001176&goodsTrdNo=100098',
                      params: {
                        bigSkuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100018/10/100001/bigSkuImg_150112420.png',
                        homePageImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100018/10/100001/homePageImg_183252252.png',
                        skuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100018/10/100001/skuImg_165149612.png',
                      },
                      detailButton: { type: 6, title: '去使用', style: 1, orderId: null, tip: null },
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
                  linkUrl: 'http://t.bfr2.top/G1I34Rm',
                  params: {},
                  skuList: [
                    {
                      skuId: 100019,
                      itemId: 100019,
                      title: '饿了么红包',
                      ranks: 1,
                      parValue: null,
                      linkUrl: 'http://t.bfr2.top/G1I34Rm',
                      params: {
                        bigSkuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100019/10/100001/bigSkuImg_150148235.png',
                        homePageImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100019/10/100001/homePageImg_183243949.png',
                        skuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100019/10/100001/skuImg_153818100.png',
                      },
                      detailButton: { type: 6, title: '去使用', style: 1, orderId: null, tip: null },
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
                  params: {},
                  skuList: [
                    {
                      skuId: 100015,
                      itemId: 100015,
                      title: '10包抽纸',
                      ranks: 1,
                      parValue: null,
                      linkUrl: 'alipays://platformapi/startapp?appId=20000021',
                      params: {
                        bigSkuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100015/10/100001/bigSkuImg_150225174.png',
                        homePageImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100015/10/100001/homePageImg_183311998.png',
                        skuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100015/10/100003/skuImg_153854000.png',
                      },
                      detailButton: { type: 3, title: '去领取', style: 1, orderId: null, tip: null },
                    },
                  ],
                },
              ],
              params: {},
              authStatisticType: 2,
            },
          ],
        },
      ],
    },
    phoneNumber: '136******29',
    nickName: '海纳百川',
    avatar: 'https://tfs.alipayobjects.com/images/partner/TB1Dz4fXNem.eJjmgfSXXbYYXXa',
    memberJoinTitle: '2024年11月26日起生效，已享受1天',
    showDeductionType: 1,
    toBindUserUrl: 'https://litevip.jujienet.com/apsu-api-test/index/100078',
    closeActivitySwitch: false,
    isAllowClose: true,
    isAllowRenewal: false,
  },
};

module.exports = (req) => {
  // 如果是开发模式, 则读取public文件夹下的素材
  const isDevelopment = true;
  // const isDevelopment = false;

  // 在这里切换尊享版还是免费版
  const memberType = MemberTypeMap.vip;
  return memberType === MemberTypeMap.vip ? responseVip : responseBasic;
  // return error;
};
