const address = require('address');
const { port } = require('../../config');

const FileNameMap = {
  headImg: 'headImg.png',
  listImg: 'listImg.png',
  ruleImg: 'ruleImg.png',
  iconImg: 'iconImg.png',
};

module.exports = (req) => {
  // 如果是开发模式, 则读取public文件夹下的素材
  // const isDevelopment = true;
  const isDevelopment = false;

  const getFileByEnv = (key, defaultPath) => {
    if (isDevelopment) {
      const url = `http://${address.ip()}:${port}/static/benefit/${FileNameMap[key]}`;
      return url;
    }
    return defaultPath;
  };

  // return {"code":200,"data":{"dataList":[],"dataMap":{"categoryPackageList":[],"hasProduct":true,"marketingFlag":true,"msg":"有商品","noProduct":false,"operatorCode":1,"phoneNumber":"156hjdhbi30","provinceId":36,"provinceName":"江西","provinceOperatorName":"江西联通","showPackageInfo":null,"showPackageList":[{"categoryId":1,"detailImg":"","firstPriority":99999999,"frontExtInfo":{"isIframe":1,"excludeProvinces":[12,13,21,22,41,44],"excludeCitys":[130200]},"headerImg":"","mutexGroups":"","packageGroup":"","packageId":1003408,"priority":50,"productAttributes":0,"productEntryId":0,"productId":"","quotaLimit":1,"routeGroup":"","sendSms":false,"showItemList":[{"detailImg":"","formInfo":null,"hideType":0,"indexImg":"","itemId":103238,"listImg":"","maxShowSkuNum":10,"optional":true,"packagerId":0,"skuRanks":0,"skus":[{"agreementName":"","buttonText":"立即办理","category":"","categoryId":0,"channelProductMainTitle":"","channelProductSubTitle":"","cnId":10015,"confInfo":null,"detailImgs":["https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/temporary/100001/skus/10472/19051/ruleImg.png"],"externalLinkUrl":"","failurePrompt":"提交异常，请重试","frontExtInfo":{"tips":""},"headerImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/temporary/100001/skus/10472/19051/headImg.png","iconImg":"","isReadOnly":0,"itemId":103238,"listImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/temporary/100001/skus/10472/19051/productImg.png","logoImg":"","packageItemGroupId":0,"packageItemGroupName":"","payChannelList":[{"browserType":"","channelGroup":"","cnId":10016,"cnName":"存量小程序无需支付","createTime":"2022-11-01 09:44:23","dateParams":null,"delFlag":false,"extendData":{},"iconImg":"","id":77,"payType":0,"searchValue":"","showName":"话费支付","timeParams":null,"updateTime":"2022-11-01 10:33:06"}],"payType":0,"pluginBackgroundImg":"","pluginProductImg":"","pocTitle":"","pocTitleTwo":"","price":30.00,"productAttributes":19,"productAttributesName":"流量充值","productEntryId":28,"productEntryName":"定向包","promoteScore":0.0,"ranks":1,"skuId":10472,"skuImg":"","skuProps":{"合约":"1"},"skuUserAgreements":[],"tabId":0,"taobaoProductId":"","taobaoProducts":[],"templateType":0,"tip":"","tipTemplate":null,"title":"联通-全国30元10GB权益月包-红包"}],"title":"联通-全国30元10GB权益月包-红包"}],"smsLength":6,"success":true,"tabId":1}],"status":1,"tabPackageList":[]}},"msg":"成功","success":true}

  return {
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
            phoneNumber: req.body.phoneNumber.replace(/^(\d{3})\d{6}(\d{2})$/, '$1******$2'),
            provinceId: 34,
            provinceName: '安徽',
            provinceOperatorName: '安徽电信',
            showPackageList: [
              {
                frontExtInfo: {
                  bookUrl: 'https://benefit.jujienet.com/benefit/INDEX/20188',
                  isIframe: 0,
                },
                headerImg: '',
                mutexGroups: '',
                packageGroup: '',
                // packageId: 1002937, // iframe
                // packageId: 1001241, // 电信集团下单按钮文案
                // packageId: 1001129, // 电信集团优酷
                // packageId: 1001470, // 山东电信
                // packageId: 1001166, // 电信集团喜马拉雅
                // packageId: 1001214, // 学军
                packageId: 1003603, // 广西电信
                // packageId: 1000967, // 电信集团增加协议
                // packageId: 1001183, // 河南电信
                // packageId: 1001589, // 湖北电信
                // packageId: 1001737, // 改变按钮文案
                // packageId: 1000967, // 电信优酷
                priority: 2,
                quotaLimit: 0,
                routeGroup: '',
                sendSms: false,
                smsLength: 4,
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
                        buttonText: '下单啊！',
                        productEntryName: '话费',
                        pluginProductImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/temporary/100001/skus/5708/5356/icon.png',
                        // externalLinkUrl: 'https://www.bing.com',
                        agreementName: '',
                        cnId: 10005,
                        // detailImgs: [getFileByEnv('ruleImg', 'https://img.temp.im/750x400/AAA/EEE')],
                        detailImgs: ['https://img.temp.im/750x1500/ff935b/ff935b'],
                        failurePrompt: '如有欠费将不能办理',
                        frontExtInfo: {
                          tips: '',
                          flowName: '当月有效',
                          feeName: '100 话费',
                          equityTitle: '芒果会员',
                          cornerIcon: '啊啊',
                          subTitle: '送视频会员',
                          mainTitle: '15GB',
                          range: '这是什么'
                        },
                        // headerImg: getFileByEnv('headImg', 'https://img.temp.im/750x400/666/EEE'),
                        headerImg: 'https://img.temp.im/750x500/fe5039/fe5039',
                        itemId: 100689,
                        // listImg: getFileByEnv('listImg', 'https://img.temp.im/700x320/888/EEE'),
                        listImg: 'https://img.temp.im/700x460/ffad66/ffad66',
                        payType: 1,
                        payChannelList: [
                          {
                            cnId: 10042,
                            cnName: '微信支付',
                            createTime: '2022-10-28 10:53:16',
                            dateParams: null,
                            delFlag: false,
                            extendData: {},
                            iconImg: 'https://chaac.oss-cn-hangzhou.aliyuncs.com/comm/logo/wechat.png',
                            id: 64,
                            searchValue: '',
                            showName: '微信',
                            timeParams: null,
                            updateTime: '2022-10-28 11:03:46',
                          },
                          {
                            cnId: 10005,
                            cnName: '支付宝话费宝',
                            createTime: '2022-10-28 10:53:16',
                            dateParams: null,
                            delFlag: false,
                            extendData: {},
                            iconImg: 'https://chaac.oss-cn-hangzhou.aliyuncs.com/comm/logo/alipay.png',
                            id: 47,
                            searchValue: '',
                            showName: '支付宝',
                            timeParams: null,
                            updateTime: '2022-10-28 11:03:31',
                          },
                        ],
                        pocTitle: '5折抢10G',
                        pocTitleTwo: '5折抢10G',
                        price: 15,
                        ranks: 1,
                        skuId: 5818,
                        skuImg: '',
                        skuProps: {
                          合约: '合约30',
                        },
                        taobaoProductId: '',
                        taobaoProducts: [],
                        title: '电信-集团10G流量包29元/月升5G，升白金会员（畅享）',
                        tip: '产品资费\r\n名称：20GB国内流量+互联网视听会员N选2\r\n价格：30元/月\r\n国内流量：20GB\r\n有效期：订购立即生效，首月资费全额计扣，次月自动续订。只能抵扣订购成功后使用的流量。\r\n使用规则\r\n变更/退订：退订次月生效\r\n重复订购：不可重复订购\r\n权益说明：权益需每月手动领取，月底前未领取视为放弃当月权益。\r\n领取方式：翼支付APP-权益专区领取。\r\n合约说明\r\n合约期：12个月， 此产品的费用不算在套餐保底消费内\r\n<RED>违约金：合约期12个月，允许退订，退订次月生效。登录"中国电信"APP可自助办理退订（查询办理>基础业务>业务退订）。\r\n协议期内提前退订，需缴纳违约金，即违约金为：30元*已订购月份。</RED>',
                      },
                    ],
                    title: '电信-集团4升5（融升套入口）',
                  },
                ],
                success: true,
              },
              {
                frontExtInfo: {
                  bookUrl: 'https://benefit.jujienet.com/benefit/INDEX/20188',
                },
                headerImg: '',
                mutexGroups: '',
                packageGroup: '',
                packageId: 1001686,
                priority: 2,
                quotaLimit: 0,
                routeGroup: '',
                sendSms: true,
                smsLength: 4,
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
                        productEntryName: '话费1',
                        pluginProductImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/temporary/100001/skus/5708/5356/icon.png',
                        agreementName: '12333',
                        cnId: 10005,
                        detailImgs: [
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5531/3559/rule.png',
                        ],
                        failurePrompt: '如有欠费将不能办理',
                        frontExtInfo: {
                          tips: '',
                          flowName: '当月有效',
                          feeName: '100 话费',
                          equityTitle: '芒果会员',
                          cornerIcon: '啊啊啊啊',
                          subTitle: '送视频会员',
                          mainTitle: '15GB',
                          range: '这是什么'
                        },
                        headerImg: 'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5531/3559/top.png',
                        itemId: 100690,
                        listImg: 'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5531/3559/icon.png',
                        payType: 0,
                        pocTitle: '5折抢10G',
                        pocTitleTwo: '5折抢10G',
                        price: 24,
                        ranks: 30,
                        skuId: 5819,
                        skuImg: '',
                        skuProps: {
                          合约: '合约30',
                        },
                        taobaoProductId: '',
                        taobaoProducts: [],
                        title: '电信-集团10G流量包29元/月升5G，升白金会员（畅享）',
                        tip: '您即将办理 99元10G流量合约包，如需继续办理请仔细阅读以下信息，请点击确认\r\n<RED>1. 30元/月  10GB流</RED>量合约包\r\n2. 协议期：12个月 。\r\n3. 主副卡分享：仅限订购号码使用，套餐不共享。\r\n4. 退订： 合约期内不可退订，第12个月可以退订。若提前退订，需要到本地自有营业厅办理，并按已享受的权益价值缴纳违约金，即30元*已订购月份。',
                        // tip: '您即将办理 99元10G流量合约包，如需继续办理请仔细阅读以下信息，请点击确认\r\n1. 30元/月  10GB流量合约包\r\n2. 协议期：12个月 。\r\n3. 主副卡分享：仅限订购号码使用，套餐不共享。\r\n4. 退订： 合约期内不可退订，第12个月可以退订。若提前退订，需要到本地自有营业厅办理，并按已享受的权益价值缴纳违约金，即30元*已订购月份。',
                      },
                    ],
                    title: '电信-集团4升5（融升套入口）',
                  },
                ],
                success: true,
              },
              {
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
                smsLength: 4,
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
                        productEntryName: '话费2',
                        pluginProductImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/temporary/100001/skus/5708/5356/icon.png',
                        agreementName: '12333飒飒',
                        cnId: 10005,
                        detailImgs: [
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5531/3559/rule.png',
                        ],
                        failurePrompt: '如有欠费将不能办理',
                        frontExtInfo: {
                          tips: '',
                          flowName: '当月有效',
                          feeName: '100 话费',
                          equityTitle: '芒果会员',
                          cornerIcon: '啊啊啊啊啊啊',
                          subTitle: '送视频会员',
                          mainTitle: '15GB',
                          range: '这是什么'
                        },
                        headerImg: 'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5531/3559/top.png',
                        itemId: 100691,
                        listImg: 'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/100001/skus/5531/3559/icon.png',
                        payType: 1,
                        payChannelList: [
                          {
                            cnId: 10042,
                            cnName: '微信支付',
                            createTime: '2022-10-28 10:53:16',
                            dateParams: null,
                            delFlag: false,
                            extendData: {},
                            iconImg: 'https://chaac.oss-cn-hangzhou.aliyuncs.com/comm/logo/wechat.png',
                            id: 64,
                            searchValue: '',
                            showName: '微信',
                            timeParams: null,
                            updateTime: '2022-10-28 11:03:46',
                          },
                          {
                            cnId: 10005,
                            cnName: '支付宝话费宝',
                            createTime: '2022-10-28 10:53:16',
                            dateParams: null,
                            delFlag: false,
                            extendData: {},
                            iconImg: 'https://chaac.oss-cn-hangzhou.aliyuncs.com/comm/logo/alipay.png',
                            id: 47,
                            searchValue: '',
                            showName: '支付宝',
                            timeParams: null,
                            updateTime: '2022-10-28 11:03:31',
                          },
                        ],
                        pocTitle: '5折抢10G',
                        pocTitleTwo: '5折抢10G',
                        price: 34,
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
  };
};
