module.exports = (req) => ({
  code: 1000,
  msg: '响应信息:调用成功',
  response: {
    status: 0,
    msg: '连续包月，已开通1天',
    tradeId: '202111090000000171',
    tradeTime: '1636450582000',
    totalCycleNum: 6,
    rental: 0,
    damages: 1.99,
    currentCycleNum: 1,
    serverTime: '1636454930531',
    memberJoinTitle: '您的会员自2021/11/10日期 已生效2天',
    memberType: 2,
    performanceTimes: 1,
    packageInfo: {
      title: '联通VV会员尊享版',
      packageId: 100001,
      operatorCode: 1,
      templateId: 100004,
      ranks: 1,
      params: {
        agreements: [
          {
            name: '联通在网协议',
            src: 'https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/gz/g1.png',
          },
        ],
        headImg:
          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100001/100001/headImg_164437677.png',
        memberRule:
          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100001/100001/memberRule_165032493.png',
        navigationBarTitle:
          'https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/goods/VV%E4%BC%9A%E5%91%98%E5%B0%8A%E4%BA%AB%E7%89%88.png',
        submitBtnImg:
          'https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/goods/%E4%BB%98%E8%B4%B9%E7%89%88%E8%A1%8C%E5%8A%A8%E6%8C%89%E9%92%AE.png',
        submitMarketingImg:
          'https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/goods/%E6%AC%A1%E6%9C%88%E8%B5%B71.99%E5%85%83%E6%9C%88.png',
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
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/goods/%E9%80%9A%E4%BF%A1%E6%9D%83%E7%9B%8A%20%E6%AF%8F%E6%9C%88%E5%BF%85%E5%BE%97.png',
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
                      title: '联通3GB流量日包',
                      ranks: 1,
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
                      title: '联通1GB流量日包',
                      ranks: 1,
                      linkUrl: null,
                      params: {
                        flowBalance: 1,
                        skuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/goods/1GB%E6%B5%81%E9%87%8F%E6%97%A5%E5%8C%85.png',
                      },
                      detailButton: {
                        type: 5,
                        title: '已发放',
                        style: 2,
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
                      title: '联通1GB流量日包',
                      ranks: 1,
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
                  'https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/goods/5G%E6%B5%81%E9%87%8F%E6%97%A5%E5%8C%85.png',
                listImg: 'https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/bc/l5.png',
              },
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
                      title: '充30元送0.6元',
                      ranks: 1,
                      linkUrl: null,
                      params: {
                        skuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/th/20%E7%B4%A0%E6%9D%90%E6%9B%BF%E6%8D%A2.png',
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
                      title: '充50元送1元',
                      ranks: 1,
                      linkUrl: null,
                      params: {
                        skuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/th/21%E7%B4%A0%E6%9D%90%E6%9B%BF%E6%8D%A2.png',
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
                  'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/itemGroup/100003/100001/detailHeadImg_164939403.png',
                listImg:
                  'https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/th/42%E7%B4%A0%E6%9D%90%E6%9B%BF%E6%8D%A2.png',
              },
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
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/20211106/%E4%BB%98%E8%B4%B9%E7%89%88-%E7%94%9F%E6%B4%BB%E6%9D%83%E7%9B%8A%E4%BB%B7%E5%80%BC.png',
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
                      'https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/goods/%E7%BC%B4%E8%B4%B9%E7%BA%A2%E5%8C%85%E6%9C%80%E9%AB%98%E4%B8%89%E5%85%83.png',
                  },
                  skuList: [
                    {
                      skuId: 100007,
                      itemId: 100007,
                      title: '最高3元缴费红包',
                      ranks: 1,
                      linkUrl: 'alipays://platformapi/startapp?appId=20000021',
                      params: {
                        skuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/goods/%E7%BC%B4%E8%B4%B9%E7%BA%A2%E5%8C%85.png',
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
                  itemId: 100008,
                  title: '最高5元加油红包',
                  showTitle: '最高5元加油红包',
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
                  params: {
                    listImg:
                      'https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/goods/%E5%8A%A0%E6%B2%B9%E7%BA%A2%E5%8C%85%E6%9C%80%E9%AB%985%E5%85%83.png',
                  },
                  skuList: [
                    {
                      skuId: 100008,
                      itemId: 100008,
                      title: '最高5元加油红包',
                      ranks: 1,
                      linkUrl: 'alipays://platformapi/startapp?appId=20000021',
                      params: {
                        skuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/goods/%E5%8A%A0%E6%B2%B9%E7%BA%A2%E5%8C%85.png',
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
                    'alipays://platformapi/startapp?appId=20000067&url=https%3A%2F%2Frender.alipay.com%2Fp%2Fc%2F18f1xa6z24ao',
                  params: {
                    listImg:
                      'https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/goods/%E5%87%BA%E8%A1%8C%E7%BA%A2%E5%8C%85%E6%9C%80%E9%AB%9810%E5%85%83%20(2).png',
                  },
                  skuList: [
                    {
                      skuId: 100016,
                      itemId: 100016,
                      title: '最高10元出行红包',
                      ranks: 1,
                      linkUrl:
                        'alipays://platformapi/startapp?appId=20000067&url=https%3A%2F%2Frender.alipay.com%2Fp%2Fc%2F18f1xa6z24ao',
                      params: {
                        skuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/goods/%E5%87%BA%E8%A1%8C%E7%BA%A2%E5%8C%85%E6%9C%80%E9%AB%9810%E5%85%83.png',
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
                    listImg: 'https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/ffb/item/4.png',
                  },
                  skuList: [
                    {
                      skuId: 100017,
                      itemId: 100017,
                      title: '天猫超市5折起优惠券',
                      ranks: 1,
                      linkUrl: 'alipays://platformapi/startapp?appId=20000021',
                      params: {
                        skuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/goods/%E5%A4%A9%E7%8C%AB%E8%B6%85%E5%B8%82%E4%BA%94%E6%8A%98%E8%B5%B7.png',
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
                      'https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/th/47%E7%B4%A0%E6%9D%90%E6%9B%BF%E6%8D%A2.png',
                  },
                  skuList: [
                    {
                      skuId: 100013,
                      itemId: 100013,
                      title: '喜马拉雅5折月卡',
                      ranks: 1,
                      linkUrl: '/pages/yinge/index?type=ximalaya',
                      params: {
                        skuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/th/53%E7%B4%A0%E6%9D%90%E6%9B%BF%E6%8D%A2.png',
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
                  takeMode: 2,
                  linkUrl: 'alipays://platformapi/startapp?appId=20000021',
                  params: {
                    listImg:
                      'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100018/100001/listImg_165120436.png',
                  },
                  skuList: [
                    {
                      skuId: 100018,
                      itemId: 100018,
                      title: '6折优酷月卡',
                      ranks: 1,
                      linkUrl: 'alipays://platformapi/startapp?appId=20000021',
                      params: {
                        skuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100018/100001/skuImg_165346068.png',
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
                      'https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/th/49%E7%B4%A0%E6%9D%90%E6%9B%BF%E6%8D%A2.png',
                  },
                  skuList: [
                    {
                      skuId: 100019,
                      itemId: 100019,
                      title: '饿了么最高66元',
                      ranks: 1,
                      linkUrl: '/pages/yinge/index?type=eleme',
                      params: {
                        skuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/th/55%E7%B4%A0%E6%9D%90%E6%9B%BF%E6%8D%A2.png',
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
                    listImg: 'https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/ffb/item/8.png',
                  },
                  skuList: [
                    {
                      skuId: 100015,
                      itemId: 100015,
                      title: '淘宝心选10包抽纸',
                      ranks: 1,
                      linkUrl: 'alipays://platformapi/startapp?appId=20000021',
                      params: {
                        skuImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/th/%E6%B7%98%E5%AE%9D%E5%BF%83%E9%80%8910%E5%8C%85%E6%8A%BD%E7%BA%B8.png',
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
              ],
              params: {},
            },
          ],
        },
      ],
    },
    phoneNumber: '17600973914',
    currentDay: 1,
    nickName: '海纳百川',
    avatar: 'https://tfs.alipayobjects.com/images/partner/TB1LH3aXBWiDuNjmeUwXXap2XXa',
    cancelled: false,
    processing: false,
    pending: false,
    upgrading: false,
    degrading: false,
    closing: false,
    expired: false,
    success: true,
    waitPay: false,
    fail: false,
  },
});
