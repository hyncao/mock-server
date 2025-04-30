module.exports = () => {
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
