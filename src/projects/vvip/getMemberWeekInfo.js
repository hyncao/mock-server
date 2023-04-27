module.exports = (req) => {
  return {
    code: 1000,
    msg: '响应信息:调用成功',
    response: {
      status: 1,
      msg: '会员周开始',
      welfareInfoList: req.body.tradeId
        ? [
            {
              title: '话费红包券',
              subtitle: '话费红包券',
              groupId: 100004,
              itemId: 100022,
              skuId: 100022,
              detailButton: { type: 3, title: '开始抽奖', style: 1, orderId: null }, // 抽奖前
              // detailButton: { type: 4, title: '抽奖中', style: 2, orderId: null }, // 抽奖中
              // detailButton: { type: 6, title: '去卡包使用', style: 1, orderId: null }, // 中奖后
              takeMode: 2,
              linkUrl: 'alipays://platformapi/startapp?appId=20000021',
              welfareGroup: 1,
              params: {
                luckDraw1:
                  'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100022/0/0/luckDraw1_113738387.png',
                luckDraw2:
                  'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100022/0/0/luckDraw2_113749294.png',
                luckDraw3:
                  'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100022/0/0/luckDraw3_113758470.png',
              },
              prizeAmount: 666,
            },
            {
              title: '加湿器',
              subtitle: '免费领',
              groupId: 100004,
              itemId: 100023,
              skuId: 100023,
              detailButton: { type: 6, title: '去领用', style: 1, orderId: null },
              takeMode: 3,
              linkUrl:
                'alipays://platformapi/startapp?appId=2018103161909533&page=pages%2Fhome%2Findex&query=channel%3Dltvv-jsq',
              welfareGroup: 2,
              params: {
                listImg:
                  'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100023/0/100023/listImg_115036367.png',
              },
            },
            {
              title: '手机支架',
              subtitle: '免费领',
              groupId: 100004,
              itemId: 100024,
              skuId: 100024,
              detailButton: { type: 6, title: '去领用', style: 1, orderId: null },
              takeMode: 3,
              linkUrl:
                'alipays://platformapi/startapp?appId=20000067&url=https%3A%2F%2Fsongzhaopian.com%2F%3Fchannel%3Dkdzxjdsjzj',
              welfareGroup: 2,
              params: {
                listImg:
                  'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100024/0/100024/listImg_115059509.png',
              },
            },
            {
              title: 'T恤',
              subtitle: '免费领',
              groupId: 100004,
              itemId: 100025,
              skuId: 100025,
              detailButton: { type: 6, title: '去领用', style: 1, orderId: null },
              takeMode: 3,
              linkUrl:
                'alipays://platformapi/startapp?appId=2018103161909533&page=pages%2Fhome%2Findex&query=channel%3Dltvv-tx',
              welfareGroup: 2,
              params: {
                listImg:
                  'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100025/0/100025/listImg_115111695.png',
              },
            },
            {
              title: '芒果TV',
              subtitle: '15元优惠券',
              groupId: 100004,
              itemId: 100026,
              skuId: 100026,
              detailButton: { type: 6, title: '去领用', style: 1, orderId: null },
              takeMode: 3,
              linkUrl:
                'https://gkzx.jujienet.com/broadband-web/activity/oilCard?type=cover&cn=oppo&serviceNo=10001176&goodsTrdNo=100077&sourceOrigin=vv',
              welfareGroup: 2,
              params: {
                listImg:
                  'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100026/0/100026/listImg_115127158.png',
              },
            },
            {
              title: '网易云音乐',
              subtitle: '15元优惠券',
              groupId: 100004,
              itemId: 100027,
              skuId: 100027,
              detailButton: { type: 6, title: '去领用', style: 1, orderId: null },
              takeMode: 3,
              linkUrl:
                'https://gkzx.jujienet.com/broadband-web/activity/oilCard?type=cover&cn=oppo&serviceNo=10001176&goodsTrdNo=100042&sourceOrigin=vv',
              welfareGroup: 2,
              params: {
                listImg:
                  'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100027/0/100027/listImg_115140981.png',
              },
            },
          ]
        : [],
      params: {
        activityHeadImg:
          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/activityHeadImg/1001/0/0/activityHeadImg_114142372.png',
        activitySmallImg:
          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/activitySmallImg/1001/0/0/activitySmallImg_114152788.png',
        detailHeadImg:
          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/detailHeadImg/1001/10/100001/detailHeadImg_113924000.png',
        headImg:
          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/memberWeek/1001/10/100001/headImg_113717170.png',
        popupList:
          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/memberWeek/1001/0/0/popupList_175403601.png',
      },
    },
  };
};
