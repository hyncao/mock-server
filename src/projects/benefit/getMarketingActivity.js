module.exports = (req) => {
  return {
    code: 200,
    data: {
      dataList: [],
      dataMap: {
        goodsList: [
          {
            benefitList: [
                  {
                    activityId: 8,
                    benefitId: 9,
                    benefitTitle: '生活缴费',
                    detailButton: {
                      orderId: '',
                      style: 1,
                      subTitle: '领取',
                      title: '点击领取',
                      type: 3,
                    },
                    getType: 0,
                    iconImg:
                      'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/marketingActivityBenefit/9/20250519/iconImg.png',
                    linkUrl: '',
                  },
                  {
                    activityId: 8,
                    benefitId: 10,
                    benefitTitle: '电费红包券2元',
                    detailButton: {
                      orderId: '',
                      style: 1,
                      subTitle: '领取',
                      title: '点击领取',
                      type: 3,
                    },
                    getType: 0,
                    iconImg:
                      'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/marketingActivityBenefit/10/20250519/iconImg.png',
                    linkUrl: '',
                  },
                  {
                    activityId: 8,
                    benefitId: 11,
                    benefitTitle: '饿了么红包',
                    detailButton: {
                      orderId: '',
                      style: 1,
                      subTitle: '去使用',
                      title: '去使用',
                      type: 6,
                    },
                    getType: 1,
                    iconImg:
                      'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/marketingActivityBenefit/11/20250519/iconImg.png',
                    linkUrl: 'http://www.baidu.com',
                  },
                ],
            packageTitle: '123',
            tradeId: '',
          },
          {
            benefitList: [],
            packageTitle: '123',
            tradeId: '',
          },
          {
            benefitList: [],
            packageTitle: '123',
            tradeId: '',
          },
        ],
        ruleImg: 'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/marketingActivityBenefit/8/20250519/rule.png',
        topImg: 'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/marketingActivityBenefit/8/20250519/top.png',
      },
    },
    msg: '成功',
    noOrderPlace: false,
    success: true,
  };
  if (req.body.version === 2) {
    return {
      code: 200,
      data: {
        dataList: [],
        dataMap: {
          goodsList: [
            {
              benefitList: [],
              groupList: [
                {
                  benefitList: [
                    {
                      activityId: 8,
                      benefitId: 9,
                      benefitTitle: '生活缴费',
                      detailButton: { orderId: '', style: 1, subTitle: '领取', title: '去领取', type: 3 },
                      getType: 0,
                      iconImg: '',
                      linkUrl: '',
                    },
                    {
                      activityId: 8,
                      benefitId: 10,
                      benefitTitle: '话费红包券0.2元',
                      detailButton: { orderId: '', style: 1, subTitle: '领取', title: '去领取', type: 3 },
                      getType: 0,
                      iconImg: '',
                      linkUrl: '',
                    },
                    {
                      activityId: 8,
                      benefitId: 11,
                      benefitTitle: '饿了么红包',
                      detailButton: { orderId: '', style: 1, subTitle: '领取', title: '去领取', type: 3 },
                      getType: 1,
                      iconImg: '',
                      linkUrl: 'http://www.baidu.com',
                    },
                  ],
                  groupId: 0,
                  groupTitle: '',
                },
                {
                  benefitList: [
                    {
                      activityId: 8,
                      benefitId: 12,
                      benefitTitle: '腾讯会员',
                      detailButton: { orderId: '', style: 1, subTitle: '领取', title: '去领取', type: 3 },
                      getType: 0,
                      iconImg: '',
                      linkUrl: '',
                    },
                    {
                      activityId: 8,
                      benefitId: 13,
                      benefitTitle: '优酷会员',
                      detailButton: { orderId: '', style: 1, subTitle: '领取', title: '去领取', type: 3 },
                      getType: 0,
                      iconImg: '',
                      linkUrl: '',
                    },
                    {
                      activityId: 8,
                      benefitId: 14,
                      benefitTitle: '爱奇艺会员',
                      detailButton: { orderId: '', style: 1, subTitle: '领取', title: '去领取', type: 3 },
                      getType: 0,
                      iconImg: '',
                      linkUrl: '',
                    },
                  ],
                  groupId: 0,
                  groupTitle: '',
                },
                {
                  benefitList: [
                    {
                      activityId: 8,
                      benefitId: 15,
                      benefitTitle: '1G流量',
                      detailButton: { orderId: '', style: 1, subTitle: '领取', title: '去领取', type: 3 },
                      getType: 0,
                      iconImg: '',
                      linkUrl: '',
                    },
                    {
                      activityId: 8,
                      benefitId: 16,
                      benefitTitle: '50条短信',
                      detailButton: { orderId: '', style: 1, subTitle: '领取', title: '去领取', type: 3 },
                      getType: 0,
                      iconImg: '',
                      linkUrl: '',
                    },
                    {
                      activityId: 8,
                      benefitId: 17,
                      benefitTitle: '1元话费红包',
                      detailButton: { orderId: '', style: 1, subTitle: '领取', title: '去领取', type: 3 },
                      getType: 0,
                      iconImg: '',
                      linkUrl: '',
                    },
                  ],
                  groupId: 0,
                  groupTitle: '',
                },
              ],
              packageTitle: '',
              tradeId: 0,
            },
          ],
          ruleImg: '',
          topImg: '',
        },
      },
      msg: '成功',
      noOrderPlace: false,
      success: true,
    };
  }
  return {
    code: 200,
    data: {
      dataList: [],
      dataMap: {
        goodsList: [
          {
            benefitList: [
              {
                activityId: 7,
                benefitId: 0,
                benefitTitle: '联通E管家',
                detailButton: { orderId: '', style: 1, subTitle: '领取', title: '去领取', type: 3 },
                getType: 1,
                iconImg:
                  'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/marketingActivityBenefit/3/20250402/iconImg.png',
                linkUrl: 'http://www.baidu.com',
              },
            ],
            packageTitle: '电信分发测试商品',
          },
        ],
        ruleImg: 'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/marketingActivityBenefit/7/20250402/rule.png',
        topImg: 'https://jujie-test.oss-cn-hangzhou.aliyuncs.com/upload/marketingActivityBenefit/7/20250402/top.png',
      },
    },
    msg: '成功',
    success: true,
  };
};
