const address = require('address');
const { port } = require('../../config');

const FileNameMap = {
  // 头图
  headImg: 'headImg.png',
  // group1 头图
  group1HeadImg: 'group1HeadImg.png',
  // group1 产品图
  group1Item1Img: 'group1Item1Img.png',
  group1Item2Img: 'empty.png',
  // group2 头图
  group2HeadImg: 'group2HeadImg.png',
  // group2 产品图
  group2Item1Img: 'empty.png',
  group2Item2Img: 'group2Item2Img.png',
  group2Item3Img: 'group2Item3Img.png',
  group2Item4Img: 'group2Item4Img.png',
  group2Item5Img: 'group2Item5Img.png',
  group2Item6Img: 'group2Item6Img.png',
  group2Item7Img: 'group2Item7Img.png',
  group2Item8Img: 'group2Item8Img.png',
  submitMarketingImg: 'submitMarketingImg.png',
};

module.exports = (req) => {
  // 如果是开发模式, 则读取public文件夹下的素材
  const isDevelopment = true;
  // const isDevelopment = false;

  const getFileByEnv = (key, defaultPath) => {
    if (isDevelopment) {
      const fileName = FileNameMap[key] || `${key}.png`;
      const url = `http://${address.ip()}:${port}/static/vvip/${fileName}`;
      return url;
    }
    return defaultPath;
  };

  return {
    code: 1000,
    msg: '响应信息:调用成功',
    response: {
      status: 1,
      msg: '有商品',
      phoneNumber: '15990158853',
      packages: [
        {
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
            headImg: getFileByEnv(
              'headImg',
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100001/100001/headImg_164437677.png'
            ),
            memberRule:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100001/100001/memberRule_155519887.png',
            navigationBarTitle: getFileByEnv(
              'navigationBarTitle',
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100001/100001/navigationBarTitle_181536806.png'
            ),
            submitBtnImg: getFileByEnv(
              'submitBtnImg',
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100001/100001/submitBtnImg_150219006.png'
            ),
            submitMarketingImg: getFileByEnv(
              'submitMarketingImg',
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/goods/%E6%AC%A1%E6%9C%88%E8%B5%B71.99%E5%85%83%E6%9C%88.png'
            ),
            memberRule2:
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
                          detailButton: null,
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
                headImg: getFileByEnv(
                  'group1HeadImg',
                  'https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/goods/%E9%80%9A%E4%BF%A1%E6%9D%83%E7%9B%8A%20%E6%AF%8F%E6%9C%88%E5%BF%85%E5%BE%97.png'
                ),
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
                          linkUrl: null,
                          params: {
                            flowBalance: 3,
                            skuImg:
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/th/3GB%E6%B5%81%E9%87%8F%E6%97%A5%E5%8C%85.png',
                          },
                          detailButton: null,
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
                          linkUrl: null,
                          params: {
                            flowBalance: 1,
                            skuImg:
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/goods/1GB%E6%B5%81%E9%87%8F%E6%97%A5%E5%8C%85.png',
                          },
                          detailButton: null,
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
                          linkUrl: null,
                          params: {
                            flowBalance: 1,
                            skuImg:
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/goods/1GB%E6%B5%81%E9%87%8F%E6%97%A5%E5%8C%85.png',
                          },
                          detailButton: null,
                        },
                      ],
                    },
                  ],
                  params: {
                    detailHeadImg:
                      'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/itemGroup/100002/100001/detailHeadImg_193428216.png',
                    listImg: getFileByEnv(
                      'group1Item1Img',
                      'https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/bc/l5.png'
                    ),
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
                          title: '0.6元话费',
                          ranks: 1,
                          linkUrl: null,
                          params: {
                            skuImg:
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100005/100001/skuImg_193613078.png',
                          },
                          detailButton: null,
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
                          linkUrl: null,
                          params: {
                            skuImg:
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100006/100001/skuImg_193629257.png',
                          },
                          detailButton: null,
                        },
                      ],
                    },
                  ],
                  params: {
                    detailHeadImg:
                      'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/itemGroup/100003/100001/detailHeadImg_194306079.png',
                    listImg: getFileByEnv(
                      'group1Item2Img',
                      'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/itemGroup/100003/100001/listImg_183352375.png'
                    ),
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
                headImg: getFileByEnv(
                  'group2HeadImg',
                  'https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/20211106/%E4%BB%98%E8%B4%B9%E7%89%88-%E7%94%9F%E6%B4%BB%E6%9D%83%E7%9B%8A%E4%BB%B7%E5%80%BC.png'
                ),
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
                        listImg: getFileByEnv(
                          'group2Item1Img',
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/goods/%E7%BC%B4%E8%B4%B9%E7%BA%A2%E5%8C%85%E6%9C%80%E9%AB%98%E4%B8%89%E5%85%83.png'
                        ),
                      },
                      skuList: [
                        {
                          skuId: 100007,
                          itemId: 100007,
                          title: '缴费红包',
                          ranks: 1,
                          linkUrl: 'alipays://platformapi/startapp?appId=20000021',
                          params: {
                            skuImg:
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/goods/%E7%BC%B4%E8%B4%B9%E7%BA%A2%E5%8C%85.png',
                          },
                          detailButton: null,
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
                        listImg: getFileByEnv(
                          'group2Item2Img',
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/goods/%E5%8A%A0%E6%B2%B9%E7%BA%A2%E5%8C%85%E6%9C%80%E9%AB%985%E5%85%83.png'
                        ),
                      },
                      skuList: [
                        {
                          skuId: 100008,
                          itemId: 100008,
                          title: '加油红包',
                          ranks: 1,
                          linkUrl: 'alipays://platformapi/startapp?appId=20000021',
                          params: {
                            skuImg:
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/goods/%E5%8A%A0%E6%B2%B9%E7%BA%A2%E5%8C%85.png',
                          },
                          detailButton: null,
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
                        listImg: getFileByEnv(
                          'group2Item3Img',
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/goods/%E5%87%BA%E8%A1%8C%E7%BA%A2%E5%8C%85%E6%9C%80%E9%AB%9810%E5%85%83%20(2).png'
                        ),
                      },
                      skuList: [
                        {
                          skuId: 100016,
                          itemId: 100016,
                          title: '出行红包',
                          ranks: 1,
                          linkUrl:
                            'alipays://platformapi/startapp?appId=20000067&url=https%3A%2F%2Frender.alipay.com%2Fp%2Fc%2F18f1xa6z24ao',
                          params: {
                            skuImg:
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/goods/%E5%87%BA%E8%A1%8C%E7%BA%A2%E5%8C%85%E6%9C%80%E9%AB%9810%E5%85%83.png',
                          },
                          detailButton: null,
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
                        listImg: getFileByEnv(
                          'group2Item4Img',
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/ffb/item/4.png'
                        ),
                      },
                      skuList: [
                        {
                          skuId: 100017,
                          itemId: 100017,
                          title: '天猫超市指定快消品5折起',
                          ranks: 1,
                          linkUrl: 'alipays://platformapi/startapp?appId=20000021',
                          params: {
                            skuImg:
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/goods/%E5%A4%A9%E7%8C%AB%E8%B6%85%E5%B8%82%E4%BA%94%E6%8A%98%E8%B5%B7.png',
                          },
                          detailButton: null,
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
                        listImg: getFileByEnv(
                          'group2Item5Img',
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/th/47%E7%B4%A0%E6%9D%90%E6%9B%BF%E6%8D%A2.png'
                        ),
                      },
                      skuList: [
                        {
                          skuId: 100013,
                          itemId: 100013,
                          title: '喜马拉雅月卡5折',
                          ranks: 1,
                          linkUrl: '/pages/yinge/index?type=ximalaya',
                          params: {
                            skuImg:
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/th/53%E7%B4%A0%E6%9D%90%E6%9B%BF%E6%8D%A2.png',
                          },
                          detailButton: null,
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
                        listImg: getFileByEnv(
                          'group2Item6Img',
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100018/100001/listImg_165120436.png'
                        ),
                      },
                      skuList: [
                        {
                          skuId: 100018,
                          itemId: 100018,
                          title: '优酷月卡6折',
                          ranks: 1,
                          linkUrl: 'alipays://platformapi/startapp?appId=20000021',
                          params: {
                            skuImg:
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100018/100001/skuImg_165346068.png',
                          },
                          detailButton: null,
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
                        listImg: getFileByEnv(
                          'group2Item7Img',
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/th/49%E7%B4%A0%E6%9D%90%E6%9B%BF%E6%8D%A2.png'
                        ),
                      },
                      skuList: [
                        {
                          skuId: 100019,
                          itemId: 100019,
                          title: '饿了么红包',
                          ranks: 1,
                          linkUrl: '/pages/yinge/index?type=eleme',
                          params: {
                            skuImg:
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/th/55%E7%B4%A0%E6%9D%90%E6%9B%BF%E6%8D%A2.png',
                          },
                          detailButton: null,
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
                        listImg: getFileByEnv(
                          'group2Item8Img',
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/ffb/item/8.png'
                        ),
                      },
                      skuList: [
                        {
                          skuId: 100015,
                          itemId: 100015,
                          title: '10包抽纸',
                          ranks: 1,
                          linkUrl: 'alipays://platformapi/startapp?appId=20000021',
                          params: {
                            skuImg:
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/th/%E6%B7%98%E5%AE%9D%E5%BF%83%E9%80%8910%E5%8C%85%E6%8A%BD%E7%BA%B8.png',
                          },
                          detailButton: null,
                        },
                      ],
                    },
                  ],
                  params: {
                    listImg: getFileByEnv(
                      'group2Item1Img',
                      'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/itemGroup/100003/100001/listImg_183352375.png'
                    ),
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  };
};

// module.exports = () => ({
//   code: 1000,
//   msg: '响应信息:调用成功',
//   response: {
//     status: 1,
//     msg: '有商品',
//     phoneNumber: '13621028129',
//     packages: [
//       {
//         title: '联通VV会员尊享版',
//         packageId: 100001,
//         operatorCode: 1,
//         templateId: 100004,
//         ranks: 1,
//         params: {
//           agreementName: '会员使用须知',
//           agreements: [
//             {
//               name: '会员使用须知',
//               src: 'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100001/100001/memberRule_155519887.png',
//             },
//           ],
//           headImg:
//             'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100001/10/100001/headImg_165349942.png',
//           memberRule:
//             'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100001/100001/memberRule_190623143.png',
//           navigationBarTitle:
//             'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100001/10/100001/navigationBarTitle_165421855.png',
//           submitBtnImg:
//             'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100001/10/100001/submitBtnImg_165554420.png',
//           submitMarketingImg:
//             'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100001/10/100001/submitMarketingImg_165613509.png',
//         },
//         groupTagList: [
//           {
//             groupTagId: 100001,
//             name: '订购的主商品(隐藏)',
//             ranks: 1,
//             hide: true,
//             params: {},
//             itemGroupList: [
//               {
//                 groupId: 100001,
//                 groupName: '订购主商品(隐藏)',
//                 privilegeType: null,
//                 groupType: 1,
//                 groupSort: 1,
//                 groupTagId: 100001,
//                 hide: true,
//                 equityValue: '',
//                 itemList: [
//                   {
//                     itemId: 100001,
//                     title: '联通VV会员尊享版',
//                     showTitle: '联通VV会员尊享版',
//                     subtitle: '',
//                     operatorCode: 1,
//                     isValidatecode: false,
//                     onlineCycle: '',
//                     showSort: 1,
//                     cycleType: null,
//                     autoCycleOrder: 0,
//                     totalCycleNum: 1,
//                     takeMode: 1,
//                     linkUrl: null,
//                     params: {},
//                     skuList: [
//                       {
//                         skuId: 100001,
//                         itemId: 100001,
//                         title: '联通VV会员尊享版',
//                         ranks: 1,
//                         linkUrl: null,
//                         params: {},
//                         detailButton: null,
//                       },
//                     ],
//                   },
//                 ],
//                 params: {},
//               },
//             ],
//           },
//           {
//             groupTagId: 100002,
//             name: '通信权益',
//             ranks: 2,
//             hide: false,
//             params: {
//               detailHeadImg:
//                 'https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/goods/%E6%88%91%E7%9A%84%E9%80%9A%E4%BF%A1%E6%9D%83%E7%9B%8A.png',
//               headImg:
//                 'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/groupTag/100002/10/100001/headImg_165643615.png',
//             },
//             itemGroupList: [
//               {
//                 groupId: 100002,
//                 groupName: '5G流量日包',
//                 privilegeType: null,
//                 groupType: 3,
//                 groupSort: 2,
//                 groupTagId: 100002,
//                 hide: false,
//                 equityValue: '',
//                 itemList: [
//                   {
//                     itemId: 100002,
//                     title: '联通3GB流量日包',
//                     showTitle: '联通3GB流量日包',
//                     subtitle: '',
//                     operatorCode: 1,
//                     isValidatecode: false,
//                     onlineCycle: '',
//                     showSort: 1,
//                     cycleType: null,
//                     autoCycleOrder: 0,
//                     totalCycleNum: 6,
//                     takeMode: 2,
//                     linkUrl: null,
//                     params: {},
//                     skuList: [
//                       {
//                         skuId: 100002,
//                         itemId: 100002,
//                         title: '3GB流量日包',
//                         ranks: 1,
//                         linkUrl: null,
//                         params: {
//                           flowBalance: 3,
//                           skuImg:
//                             'https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/th/3GB%E6%B5%81%E9%87%8F%E6%97%A5%E5%8C%85.png',
//                         },
//                         detailButton: null,
//                       },
//                     ],
//                   },
//                   {
//                     itemId: 100003,
//                     title: '联通1GB流量日包(1)',
//                     showTitle: '联通1GB流量日包',
//                     subtitle: '',
//                     operatorCode: 1,
//                     isValidatecode: false,
//                     onlineCycle: '',
//                     showSort: 2,
//                     cycleType: null,
//                     autoCycleOrder: 0,
//                     totalCycleNum: 6,
//                     takeMode: 2,
//                     linkUrl: null,
//                     params: {},
//                     skuList: [
//                       {
//                         skuId: 100003,
//                         itemId: 100003,
//                         title: '1GB流量日包',
//                         ranks: 1,
//                         linkUrl: null,
//                         params: {
//                           flowBalance: 1,
//                           skuImg:
//                             'https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/goods/1GB%E6%B5%81%E9%87%8F%E6%97%A5%E5%8C%85.png',
//                         },
//                         detailButton: null,
//                       },
//                     ],
//                   },
//                   {
//                     itemId: 100004,
//                     title: '联通1GB流量日包(2)',
//                     showTitle: '联通1GB流量日包',
//                     subtitle: '',
//                     operatorCode: 1,
//                     isValidatecode: false,
//                     onlineCycle: '',
//                     showSort: 3,
//                     cycleType: null,
//                     autoCycleOrder: 0,
//                     totalCycleNum: 6,
//                     takeMode: 2,
//                     linkUrl: null,
//                     params: {},
//                     skuList: [
//                       {
//                         skuId: 100004,
//                         itemId: 100004,
//                         title: '1GB流量日包',
//                         ranks: 1,
//                         linkUrl: null,
//                         params: {
//                           flowBalance: 1,
//                           skuImg:
//                             'https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/goods/1GB%E6%B5%81%E9%87%8F%E6%97%A5%E5%8C%85.png',
//                         },
//                         detailButton: null,
//                       },
//                     ],
//                   },
//                 ],
//                 params: {
//                   detailHeadImg:
//                     'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/itemGroup/100002/100001/detailHeadImg_193428216.png',
//                   listImg:
//                     'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/itemGroup/100002/10/100001/listImg_165912507.png',
//                 },
//               },
//               {
//                 groupId: 100003,
//                 groupName: '充值98折',
//                 privilegeType: null,
//                 groupType: 2,
//                 groupSort: 3,
//                 groupTagId: 100002,
//                 hide: false,
//                 equityValue: '',
//                 itemList: [
//                   {
//                     itemId: 100005,
//                     title: '充30元送0.6元',
//                     showTitle: '充30元送0.6元',
//                     subtitle: '',
//                     operatorCode: 1,
//                     isValidatecode: false,
//                     onlineCycle: '',
//                     showSort: 1,
//                     cycleType: null,
//                     autoCycleOrder: 0,
//                     totalCycleNum: 6,
//                     takeMode: 2,
//                     linkUrl: null,
//                     params: {},
//                     skuList: [
//                       {
//                         skuId: 100005,
//                         itemId: 100005,
//                         title: '0.6元话费',
//                         ranks: 1,
//                         linkUrl: null,
//                         params: {
//                           skuImg:
//                             'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100005/100001/skuImg_193613078.png',
//                         },
//                         detailButton: null,
//                       },
//                     ],
//                   },
//                   {
//                     itemId: 100006,
//                     title: '充50元送1元',
//                     showTitle: '充50元送1元',
//                     subtitle: '',
//                     operatorCode: 1,
//                     isValidatecode: false,
//                     onlineCycle: '',
//                     showSort: 2,
//                     cycleType: null,
//                     autoCycleOrder: 0,
//                     totalCycleNum: 6,
//                     takeMode: 2,
//                     linkUrl: null,
//                     params: {},
//                     skuList: [
//                       {
//                         skuId: 100006,
//                         itemId: 100006,
//                         title: '1元话费',
//                         ranks: 1,
//                         linkUrl: null,
//                         params: {
//                           skuImg:
//                             'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100006/100001/skuImg_193629257.png',
//                         },
//                         detailButton: null,
//                       },
//                     ],
//                   },
//                 ],
//                 params: {
//                   detailHeadImg:
//                     'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/itemGroup/100003/100001/detailHeadImg_194306079.png',
//                   listImg:
//                     'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/itemGroup/100003/10/100001/listImg_170105762.png',
//                 },
//               },
//             ],
//           },
//           {
//             groupTagId: 100003,
//             name: '生活权益',
//             ranks: 3,
//             hide: false,
//             params: {
//               detailHeadImg:
//                 'https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/goods/%E6%88%91%E7%9A%84%E7%94%9F%E6%B4%BB%E6%9D%83%E7%9B%8A.png',
//               headImg:
//                 'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/groupTag/100003/100001/headImg_220231666.png',
//             },
//             itemGroupList: [
//               {
//                 groupId: 100004,
//                 groupName: '生活权益',
//                 privilegeType: null,
//                 groupType: 3,
//                 groupSort: 4,
//                 groupTagId: 100003,
//                 hide: false,
//                 equityValue: '',
//                 itemList: [
//                   {
//                     itemId: 100007,
//                     title: '最高3元缴费红包',
//                     showTitle: '最高3元缴费红包',
//                     subtitle: '',
//                     operatorCode: 0,
//                     isValidatecode: false,
//                     onlineCycle: '',
//                     showSort: 1,
//                     cycleType: null,
//                     autoCycleOrder: 0,
//                     totalCycleNum: 6,
//                     takeMode: 2,
//                     linkUrl: 'alipays://platformapi/startapp?appId=20000021',
//                     params: {
//                       listImg:
//                         'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100007/100001/listImg_201541480.png',
//                     },
//                     skuList: [
//                       {
//                         skuId: 100007,
//                         itemId: 100007,
//                         title: '缴费红包',
//                         ranks: 1,
//                         linkUrl: 'alipays://platformapi/startapp?appId=20000021',
//                         params: {
//                           skuImg:
//                             'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100007/100001/skuImg_190250130.png',
//                         },
//                         detailButton: null,
//                       },
//                     ],
//                   },
//                   {
//                     itemId: 100008,
//                     title: '最高5元加油红包',
//                     showTitle: '最高5元加油红包',
//                     subtitle: '',
//                     operatorCode: 0,
//                     isValidatecode: false,
//                     onlineCycle: '',
//                     showSort: 2,
//                     cycleType: null,
//                     autoCycleOrder: 0,
//                     totalCycleNum: 6,
//                     takeMode: 2,
//                     linkUrl: 'alipays://platformapi/startapp?appId=20000021',
//                     params: {
//                       listImg:
//                         'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100008/100001/listImg_201557738.png',
//                     },
//                     skuList: [
//                       {
//                         skuId: 100008,
//                         itemId: 100008,
//                         title: '加油红包',
//                         ranks: 1,
//                         linkUrl: 'alipays://platformapi/startapp?appId=20000021',
//                         params: {
//                           skuImg:
//                             'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100008/100001/skuImg_190325975.png',
//                         },
//                         detailButton: null,
//                       },
//                     ],
//                   },
//                   {
//                     itemId: 100016,
//                     title: '最高10元出行红包',
//                     showTitle: '最高10元出行红包',
//                     subtitle: '',
//                     operatorCode: 0,
//                     isValidatecode: false,
//                     onlineCycle: '',
//                     showSort: 3,
//                     cycleType: null,
//                     autoCycleOrder: 0,
//                     totalCycleNum: 6,
//                     takeMode: 3,
//                     linkUrl:
//                       'alipays://platformapi/startapp?appId=20000067&url=https%3A%2F%2Frender.alipay.com%2Fp%2Fc%2F18f1xa6z24ao&startMultApp=YES&appClearTop=false',
//                     params: {
//                       listImg:
//                         'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100016/100001/listImg_163502706.png',
//                     },
//                     skuList: [
//                       {
//                         skuId: 100016,
//                         itemId: 100016,
//                         title: '出行红包',
//                         ranks: 1,
//                         linkUrl:
//                           'alipays://platformapi/startapp?appId=20000067&url=https%3A%2F%2Frender.alipay.com%2Fp%2Fc%2F18f1xa6z24ao&startMultApp=YES&appClearTop=false',
//                         params: {
//                           skuImg:
//                             'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100016/100001/skuImg_190415617.png',
//                         },
//                         detailButton: null,
//                       },
//                     ],
//                   },
//                   {
//                     itemId: 100017,
//                     title: '指定快消品5折起',
//                     showTitle: '天猫超市5折起优惠券',
//                     subtitle: '',
//                     operatorCode: 0,
//                     isValidatecode: false,
//                     onlineCycle: '',
//                     showSort: 4,
//                     cycleType: null,
//                     autoCycleOrder: 0,
//                     totalCycleNum: 6,
//                     takeMode: 2,
//                     linkUrl: 'alipays://platformapi/startapp?appId=20000021',
//                     params: {
//                       listImg:
//                         'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100017/100001/listImg_201720631.png',
//                     },
//                     skuList: [
//                       {
//                         skuId: 100017,
//                         itemId: 100017,
//                         title: '天猫超市指定快消品5折起',
//                         ranks: 1,
//                         linkUrl: 'alipays://platformapi/startapp?appId=20000021',
//                         params: {
//                           skuImg:
//                             'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100017/100001/skuImg_190431035.png',
//                         },
//                         detailButton: null,
//                       },
//                     ],
//                   },
//                   {
//                     itemId: 100013,
//                     title: '喜马拉雅5折月卡',
//                     showTitle: '喜马拉雅5折月卡',
//                     subtitle: '',
//                     operatorCode: 0,
//                     isValidatecode: false,
//                     onlineCycle: '',
//                     showSort: 5,
//                     cycleType: null,
//                     autoCycleOrder: 0,
//                     totalCycleNum: 6,
//                     takeMode: 3,
//                     linkUrl: '/pages/yinge/index?type=ximalaya',
//                     params: {
//                       listImg:
//                         'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100013/100001/listImg_201732236.png',
//                     },
//                     skuList: [
//                       {
//                         skuId: 100013,
//                         itemId: 100013,
//                         title: '喜马拉雅月卡5折',
//                         ranks: 1,
//                         linkUrl: '/pages/yinge/index?type=ximalaya',
//                         params: {
//                           skuImg:
//                             'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100013/100001/skuImg_190452061.png',
//                         },
//                         detailButton: null,
//                       },
//                     ],
//                   },
//                   {
//                     itemId: 100018,
//                     title: '6折优酷月卡',
//                     showTitle: '6折优酷月卡',
//                     subtitle: '',
//                     operatorCode: 0,
//                     isValidatecode: false,
//                     onlineCycle: '',
//                     showSort: 6,
//                     cycleType: null,
//                     autoCycleOrder: 0,
//                     totalCycleNum: 6,
//                     takeMode: 2,
//                     linkUrl: 'alipays://platformapi/startapp?appId=20000021',
//                     params: {
//                       listImg:
//                         'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100018/100001/listImg_201750890.png',
//                     },
//                     skuList: [
//                       {
//                         skuId: 100018,
//                         itemId: 100018,
//                         title: '优酷月卡6折',
//                         ranks: 1,
//                         linkUrl: 'alipays://platformapi/startapp?appId=20000021',
//                         params: {
//                           skuImg:
//                             'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100018/100001/skuImg_190508456.png',
//                         },
//                         detailButton: null,
//                       },
//                     ],
//                   },
//                   {
//                     itemId: 100019,
//                     title: '饿了么最高66元',
//                     showTitle: '饿了么最高66元',
//                     subtitle: '',
//                     operatorCode: 0,
//                     isValidatecode: false,
//                     onlineCycle: '',
//                     showSort: 7,
//                     cycleType: null,
//                     autoCycleOrder: 0,
//                     totalCycleNum: 6,
//                     takeMode: 3,
//                     linkUrl: '/pages/yinge/index?type=eleme',
//                     params: {
//                       listImg:
//                         'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100019/100001/listImg_201813302.png',
//                     },
//                     skuList: [
//                       {
//                         skuId: 100019,
//                         itemId: 100019,
//                         title: '饿了么红包',
//                         ranks: 1,
//                         linkUrl: '/pages/yinge/index?type=eleme',
//                         params: {
//                           skuImg:
//                             'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100019/100001/skuImg_190523430.png',
//                         },
//                         detailButton: null,
//                       },
//                     ],
//                   },
//                   {
//                     itemId: 100015,
//                     title: '淘宝心选10包抽纸',
//                     showTitle: '淘宝心选10包抽纸',
//                     subtitle: '',
//                     operatorCode: 0,
//                     isValidatecode: false,
//                     onlineCycle: '',
//                     showSort: 8,
//                     cycleType: null,
//                     autoCycleOrder: 0,
//                     totalCycleNum: 6,
//                     takeMode: 2,
//                     linkUrl: 'alipays://platformapi/startapp?appId=20000021',
//                     params: {
//                       listImg:
//                         'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100015/100001/listImg_201827271.png',
//                     },
//                     skuList: [
//                       {
//                         skuId: 100015,
//                         itemId: 100015,
//                         title: '10包抽纸',
//                         ranks: 1,
//                         linkUrl: 'alipays://platformapi/startapp?appId=20000021',
//                         params: {
//                           skuImg:
//                             'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100015/100001/skuImg_190540954.png',
//                         },
//                         detailButton: null,
//                       },
//                     ],
//                   },
//                 ],
//                 params: {},
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
// });
