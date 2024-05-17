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

  // return {"code":1000,"msg":"响应信息:调用成功","response":{"status":1,"msg":"有商品","phoneNumber":"15990158853","packages":[{"title":"尊享会员","packageId":100001,"operatorCode":1,"templateId":100004,"templateGroupMap":{"default":[{"templateId":100004,"firstMouthDiscountType":3}],"wfyszf":[{"templateId":100008,"firstMouthDiscountType":3}],"exy":[{"templateId":100004,"firstMouthDiscountType":3},{"templateId":100006,"firstMouthDiscountType":1}],"recall":[{"templateId":100010,"firstMouthDiscountType":3}],"clzf":[{"templateId":100009,"firstMouthDiscountType":3}],"zx1gy":[{"templateId":100016,"firstMouthDiscountType":1}],"ycx":[{"templateId":100007,"firstMouthDiscountType":1}]},"ranks":1,"params":{"agreementName":"会员使用须知","agreements":[{"name":"会员使用须知","src":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100001/100001/memberRule_155519887.png"}],"detailImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100001/10/100001/detailImg_162846892.png","headImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100001/10/100001/headImg_151357454.png","headerImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100001/10/100001/headerImg_165852997.png","memberRule":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100001/10/100001/memberRule_181317399.png","navigationBarTitle":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100001/10/100001/navigationBarTitle_105451153.png","submitBtnImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100001/10/100001/submitBtnImg_152550168.png","submitMarketingImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100001/10/100001/submitMarketingImg_152645465.png","tabImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100001/10/100001/tabImg_160234048.png"},"groupTagList":[{"groupTagId":100001,"name":"订购的主商品(隐藏)","ranks":1,"hide":true,"params":{},"itemGroupList":[{"groupId":100001,"groupName":"订购主商品(隐藏)","privilegeType":null,"groupType":1,"groupSort":1,"groupTagId":100001,"hide":true,"equityValue":"","itemList":[{"itemId":100001,"title":"联通VV会员尊享版","showTitle":"联通VV会员尊享版","subtitle":"","operatorCode":1,"isValidatecode":false,"onlineCycle":"","showSort":1,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":1,"takeMode":1,"linkUrl":null,"params":{},"skuList":[{"skuId":100001,"itemId":100001,"title":"联通VV会员尊享版","ranks":1,"parValue":null,"linkUrl":null,"params":{},"detailButton":null}]}],"params":{},"authStatisticType":null}]},{"groupTagId":100002,"name":"通信权益","ranks":2,"hide":false,"params":{"detailHeadImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/goods/%E6%88%91%E7%9A%84%E9%80%9A%E4%BF%A1%E6%9D%83%E7%9B%8A.png","headImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/groupTag/100002/100001/headImg_201524447.png"},"itemGroupList":[{"groupId":100002,"groupName":"5G流量日包","privilegeType":null,"groupType":3,"groupSort":2,"groupTagId":100002,"hide":false,"equityValue":"","itemList":[{"itemId":100002,"title":"联通3GB流量日包","showTitle":"联通3GB流量日包","subtitle":"","operatorCode":1,"isValidatecode":false,"onlineCycle":"","showSort":1,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":2,"linkUrl":null,"params":{},"skuList":[{"skuId":100002,"itemId":100002,"title":"3GB流量日包","ranks":1,"parValue":3.00,"linkUrl":null,"params":{"flowBalance":"3","skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100002/10/100001/skuImg_160039159.png"},"detailButton":null}]},{"itemId":100003,"title":"联通1GB流量日包(1)","showTitle":"联通1GB流量日包","subtitle":"","operatorCode":1,"isValidatecode":false,"onlineCycle":"","showSort":2,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":2,"linkUrl":null,"params":{},"skuList":[{"skuId":100003,"itemId":100003,"title":"1GB流量日包","ranks":1,"parValue":1.00,"linkUrl":null,"params":{"flowBalance":"1","skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100003/10/100001/skuImg_160029914.png"},"detailButton":null}]},{"itemId":100004,"title":"联通1GB流量日包(2)","showTitle":"联通1GB流量日包","subtitle":"","operatorCode":1,"isValidatecode":false,"onlineCycle":"","showSort":3,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":2,"linkUrl":null,"params":{},"skuList":[{"skuId":100004,"itemId":100004,"title":"1GB流量日包","ranks":1,"parValue":1.00,"linkUrl":null,"params":{"flowBalance":"1","skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100004/10/100001/skuImg_160023148.png"},"detailButton":null}]}],"params":{"detailHeadImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/itemGroup/100002/10/100001/detailHeadImg_150439964.png","listImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/itemGroup/100002/10/100001/listImg_111935596.png"},"authStatisticType":1},{"groupId":100003,"groupName":"充值98折","privilegeType":null,"groupType":2,"groupSort":3,"groupTagId":100002,"hide":false,"equityValue":"","itemList":[{"itemId":100005,"title":"充30元送0.6元","showTitle":"充30元送0.6元","subtitle":"","operatorCode":1,"isValidatecode":false,"onlineCycle":"","showSort":1,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":2,"linkUrl":null,"params":{},"skuList":[{"skuId":100005,"itemId":100005,"title":"0.6元话费","ranks":1,"parValue":0.60,"linkUrl":null,"params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100005/10/100001/skuImg_160118284.png"},"detailButton":null}]},{"itemId":100006,"title":"充50元送1元","showTitle":"充50元送1元","subtitle":"","operatorCode":1,"isValidatecode":false,"onlineCycle":"","showSort":2,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":2,"linkUrl":null,"params":{},"skuList":[{"skuId":100006,"itemId":100006,"title":"1元话费","ranks":1,"parValue":1.00,"linkUrl":null,"params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100006/10/100001/skuImg_160109212.png"},"detailButton":null}]}],"params":{"detailHeadImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/itemGroup/100003/10/100001/detailHeadImg_150451741.png","listImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/itemGroup/100003/10/100001/listImg_111912559.png"},"authStatisticType":3}]},{"groupTagId":100003,"name":"生活权益","ranks":3,"hide":false,"params":{"detailHeadImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/test/apsu/goods/%E6%88%91%E7%9A%84%E7%94%9F%E6%B4%BB%E6%9D%83%E7%9B%8A.png","headImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/groupTag/100003/100001/headImg_220231666.png"},"itemGroupList":[{"groupId":100004,"groupName":"生活权益","privilegeType":null,"groupType":3,"groupSort":4,"groupTagId":100003,"hide":false,"equityValue":"","itemList":[{"itemId":100007,"title":"最高3元缴费红包","showTitle":"最高3元缴费红包","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":1,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":2,"linkUrl":"alipays://platformapi/startapp?appId=20000021","params":{"listImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100007/10/100001/listImg_114528848.png"},"skuList":[{"skuId":100007,"itemId":100007,"title":"缴费红包","ranks":1,"parValue":null,"linkUrl":"alipays://platformapi/startapp?appId=20000021","params":{"bigSkuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100007/10/100001/bigSkuImg_145821764.png","skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100007/10/100001/skuImg_145047593.png"},"detailButton":null}]},{"itemId":100016,"title":"最高10元出行红包","showTitle":"最高10元出行红包","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":3,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":3,"linkUrl":"alipays://platformapi/startapp?appId=20000067&url=https%3A%2F%2Frender.alipay.com%2Fp%2Fc%2F180020240000037456%2Fhome.html%3F__webview_options__%3D","params":{"listImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100016/10/100001/listImg_114227299.png"},"skuList":[{"skuId":100016,"itemId":100016,"title":"出行红包","ranks":1,"parValue":null,"linkUrl":"alipays://platformapi/startapp?appId=20000067&url=https%3A%2F%2Frender.alipay.com%2Fp%2Fc%2F180020240000037456%2Fhome.html%3F__webview_options__%3D","params":{"bigSkuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100016/10/100001/bigSkuImg_145853284.png","skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100016/10/100001/skuImg_144959117.png"},"detailButton":null}]},{"itemId":100017,"title":"指定快消品5折起","showTitle":"天猫超市5折起优惠券","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":4,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":2,"linkUrl":"alipays://platformapi/startapp?appId=20000021","params":{"listImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100017/100001/listImg_201720631.png"},"skuList":[{"skuId":100017,"itemId":100017,"title":"天猫超市指定快消品5折起","ranks":1,"parValue":null,"linkUrl":"alipays://platformapi/startapp?appId=20000021","params":{"bigSkuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100017/10/100001/bigSkuImg_150006357.png","skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100017/10/100001/skuImg_145121583.png"},"detailButton":null}]},{"itemId":100013,"title":"喜马拉雅5折月卡","showTitle":"喜马拉雅5折月卡","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":5,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":3,"linkUrl":"/pages/yinge/index?type=ximalaya","params":{"listImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100013/10/100001/listImg_111249674.png"},"skuList":[{"skuId":100013,"itemId":100013,"title":"喜马拉雅月卡5折","ranks":1,"parValue":null,"linkUrl":"/pages/yinge/index?type=ximalaya","params":{"bigSkuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100013/10/100001/bigSkuImg_150044806.png","skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100013/10/100001/skuImg_145133083.png"},"detailButton":null}]},{"itemId":100018,"title":"6折优酷月卡","showTitle":"6折优酷月卡","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":6,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":3,"linkUrl":"https://gkzx.jujienet.com/broadband-web/activity/oilCard?type=cover&cn=oppo&serviceNo=10001176&goodsTrdNo=100098","params":{"listImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100018/10/100001/listImg_165219941.png"},"skuList":[{"skuId":100018,"itemId":100018,"title":"优酷月卡6折","ranks":1,"parValue":null,"linkUrl":"https://gkzx.jujienet.com/broadband-web/activity/oilCard?type=cover&cn=oppo&serviceNo=10001176&goodsTrdNo=100098","params":{"bigSkuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100018/10/100001/bigSkuImg_150112420.png","skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100018/10/100001/skuImg_145144680.png"},"detailButton":null}]},{"itemId":100019,"title":"饿了么最高66元","showTitle":"饿了么最高66元","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":7,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":3,"linkUrl":"http://t.bfr2.top/G1I34Rm","params":{"listImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100019/100001/listImg_201813302.png"},"skuList":[{"skuId":100019,"itemId":100019,"title":"饿了么红包","ranks":1,"parValue":null,"linkUrl":"http://t.bfr2.top/G1I34Rm","params":{"bigSkuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100019/10/100001/bigSkuImg_150148235.png","skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100019/10/100001/skuImg_145021033.png"},"detailButton":null}]},{"itemId":100015,"title":"淘宝心选10包抽纸","showTitle":"淘宝心选10包抽纸","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":8,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":2,"linkUrl":"alipays://platformapi/startapp?appId=20000021","params":{"listImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100015/100001/listImg_201827271.png"},"skuList":[{"skuId":100015,"itemId":100015,"title":"10包抽纸","ranks":1,"parValue":null,"linkUrl":"alipays://platformapi/startapp?appId=20000021","params":{"bigSkuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100015/10/100001/bigSkuImg_150225174.png","skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100015/10/100001/skuImg_145107435.png"},"detailButton":null}]},{"itemId":100028,"title":"芒果TV(普通权益)","showTitle":"芒果TV","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":9,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":3,"linkUrl":"/pages/yinge/index?type=mangguo","params":{"listImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100028/10/100001/listImg_154345440.png"},"skuList":[{"skuId":100028,"itemId":100028,"title":"芒果TV(普通权益)","ranks":1,"parValue":null,"linkUrl":"/pages/yinge/index?type=mangguo","params":{"bigSkuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100028/10/100001/bigSkuImg_150250554.png","skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100028/10/100001/skuImg_145036076.png"},"detailButton":null}]}],"params":{"listImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/itemGroup/100004/10/100001/listImg_105306653.png"},"authStatisticType":2}]}]},{"title":"视频会员5选1","packageId":100003,"operatorCode":1,"templateId":100018,"templateGroupMap":{"mydk":[{"templateId":100011,"firstMouthDiscountType":1}],"default":[{"templateId":100018,"firstMouthDiscountType":1}],"mydknr":[{"templateId":100012,"firstMouthDiscountType":1}]},"ranks":1,"params":{"agreementName":"会员使用须知","agreements":[{"name":"会员使用须知","src":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100001/100001/memberRule_155519887.png"}],"detailImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100003/10/100003/detailImg_103252039.jpg","headImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100001/10/100001/headImg_151357454.png","headerImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100003/10/100003/headerImg_155543554.png","memberRule":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100003/10/100003/memberRule_181102196.png","navigationBarTitle":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100003/10/100003/navigationBarTitle_105501717.png","submitBtnImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100003/10/100003/submitBtnImg_152602142.png","submitMarketingImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100003/10/100003/submitMarketingImg_152653964.png","tabImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100003/10/100003/tabImg_152502243.png"},"groupTagList":[{"groupTagId":100001,"name":"订购的主商品(隐藏)","ranks":1,"hide":true,"params":{},"itemGroupList":[{"groupId":100008,"groupName":"订购主商品(隐藏)","privilegeType":null,"groupType":1,"groupSort":1,"groupTagId":100001,"hide":true,"equityValue":"","itemList":[{"itemId":100001,"title":"联通VV会员尊享版","showTitle":"联通VV会员尊享版","subtitle":"","operatorCode":1,"isValidatecode":false,"onlineCycle":"","showSort":1,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":1,"takeMode":1,"linkUrl":null,"params":{},"skuList":[{"skuId":100001,"itemId":100001,"title":"联通VV会员尊享版","ranks":1,"parValue":null,"linkUrl":null,"params":{},"detailButton":null}]}],"params":{},"authStatisticType":null}]},{"groupTagId":100002,"name":"通信权益","ranks":2,"hide":false,"params":{},"itemGroupList":[{"groupId":100009,"groupName":"5G流量日包","privilegeType":null,"groupType":3,"groupSort":2,"groupTagId":100002,"hide":false,"equityValue":"","itemList":[{"itemId":100002,"title":"联通3GB流量日包","showTitle":"联通3GB流量日包","subtitle":"","operatorCode":1,"isValidatecode":false,"onlineCycle":"","showSort":1,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":2,"linkUrl":null,"params":{},"skuList":[{"skuId":100002,"itemId":100002,"title":"3GB流量日包","ranks":1,"parValue":3.00,"linkUrl":null,"params":{"flowBalance":"3","skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100002/10/100001/skuImg_160039159.png"},"detailButton":null}]},{"itemId":100003,"title":"联通1GB流量日包(1)","showTitle":"联通1GB流量日包","subtitle":"","operatorCode":1,"isValidatecode":false,"onlineCycle":"","showSort":2,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":2,"linkUrl":null,"params":{},"skuList":[{"skuId":100003,"itemId":100003,"title":"1GB流量日包","ranks":1,"parValue":1.00,"linkUrl":null,"params":{"flowBalance":"1","skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100003/10/100001/skuImg_160029914.png"},"detailButton":null}]},{"itemId":100004,"title":"联通1GB流量日包(2)","showTitle":"联通1GB流量日包","subtitle":"","operatorCode":1,"isValidatecode":false,"onlineCycle":"","showSort":3,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":2,"linkUrl":null,"params":{},"skuList":[{"skuId":100004,"itemId":100004,"title":"1GB流量日包","ranks":1,"parValue":1.00,"linkUrl":null,"params":{"flowBalance":"1","skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100004/10/100001/skuImg_160023148.png"},"detailButton":null}]}],"params":{"detailHeadImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/itemGroup/100002/10/100001/detailHeadImg_150439964.png"},"authStatisticType":1},{"groupId":100010,"groupName":"充值98折","privilegeType":null,"groupType":2,"groupSort":3,"groupTagId":100002,"hide":false,"equityValue":"","itemList":[{"itemId":100005,"title":"充30元送0.6元","showTitle":"充30元送0.6元","subtitle":"","operatorCode":1,"isValidatecode":false,"onlineCycle":"","showSort":1,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":2,"linkUrl":null,"params":{},"skuList":[{"skuId":100005,"itemId":100005,"title":"0.6元话费","ranks":1,"parValue":0.60,"linkUrl":null,"params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100005/10/100001/skuImg_160118284.png"},"detailButton":null}]},{"itemId":100006,"title":"充50元送1元","showTitle":"充50元送1元","subtitle":"","operatorCode":1,"isValidatecode":false,"onlineCycle":"","showSort":2,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":2,"linkUrl":null,"params":{},"skuList":[{"skuId":100006,"itemId":100006,"title":"1元话费","ranks":1,"parValue":1.00,"linkUrl":null,"params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100006/10/100001/skuImg_160109212.png"},"detailButton":null}]}],"params":{"detailHeadImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/itemGroup/100003/10/100001/detailHeadImg_150451741.png"},"authStatisticType":3}]},{"groupTagId":100003,"name":"生活权益","ranks":3,"hide":false,"params":{},"itemGroupList":[{"groupId":100011,"groupName":"生活权益","privilegeType":null,"groupType":3,"groupSort":4,"groupTagId":100003,"hide":false,"equityValue":"","itemList":[{"itemId":100007,"title":"最高3元缴费红包","showTitle":"最高3元缴费红包","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":1,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":2,"linkUrl":"alipays://platformapi/startapp?appId=20000021","params":{"listImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100007/10/100001/listImg_114528848.png"},"skuList":[{"skuId":100007,"itemId":100007,"title":"缴费红包","ranks":1,"parValue":null,"linkUrl":"alipays://platformapi/startapp?appId=20000021","params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100007/10/100001/skuImg_144823063.png"},"detailButton":null}]},{"itemId":100016,"title":"最高10元出行红包","showTitle":"最高10元出行红包","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":3,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":3,"linkUrl":"alipays://platformapi/startapp?appId=20000067&url=https%3A%2F%2Frender.alipay.com%2Fp%2Fc%2F180020240000037456%2Fhome.html%3F__webview_options__%3D","params":{"listImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100016/10/100001/listImg_114227299.png"},"skuList":[{"skuId":100016,"itemId":100016,"title":"出行红包","ranks":1,"parValue":null,"linkUrl":"alipays://platformapi/startapp?appId=20000067&url=https%3A%2F%2Frender.alipay.com%2Fp%2Fc%2F180020240000037456%2Fhome.html%3F__webview_options__%3D","params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100016/10/100003/skuImg_164859731.png"},"detailButton":null}]},{"itemId":100017,"title":"指定快消品5折起","showTitle":"天猫超市5折起优惠券","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":4,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":2,"linkUrl":"alipays://platformapi/startapp?appId=20000021","params":{"listImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100017/100001/listImg_201720631.png"},"skuList":[{"skuId":100017,"itemId":100017,"title":"天猫超市指定快消品5折起","ranks":1,"parValue":null,"linkUrl":"alipays://platformapi/startapp?appId=20000021","params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100017/10/100001/skuImg_153657429.png"},"detailButton":null}]},{"itemId":100013,"title":"喜马拉雅5折月卡","showTitle":"喜马拉雅5折月卡","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":5,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":3,"linkUrl":"/pages/yinge/index?type=ximalaya","params":{"listImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100013/10/100001/listImg_111249674.png"},"skuList":[{"skuId":100013,"itemId":100013,"title":"喜马拉雅月卡5折","ranks":1,"parValue":null,"linkUrl":"/pages/yinge/index?type=ximalaya","params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100013/10/100001/skuImg_155438146.png"},"detailButton":null}]},{"itemId":100018,"title":"6折优酷月卡","showTitle":"6折优酷月卡","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":6,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":3,"linkUrl":"https://gkzx.jujienet.com/broadband-web/activity/oilCard?type=cover&cn=oppo&serviceNo=10001176&goodsTrdNo=100098","params":{"listImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100018/10/100001/listImg_165219941.png"},"skuList":[{"skuId":100018,"itemId":100018,"title":"优酷月卡6折","ranks":1,"parValue":null,"linkUrl":"https://gkzx.jujienet.com/broadband-web/activity/oilCard?type=cover&cn=oppo&serviceNo=10001176&goodsTrdNo=100098","params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100018/10/100001/skuImg_165149612.png"},"detailButton":null}]},{"itemId":100019,"title":"饿了么最高66元","showTitle":"饿了么最高66元","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":7,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":3,"linkUrl":"http://t.bfr2.top/G1I34Rm","params":{"listImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100019/100001/listImg_201813302.png"},"skuList":[{"skuId":100019,"itemId":100019,"title":"饿了么红包","ranks":1,"parValue":null,"linkUrl":"http://t.bfr2.top/G1I34Rm","params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100019/10/100001/skuImg_153818100.png"},"detailButton":null}]},{"itemId":100015,"title":"淘宝心选10包抽纸","showTitle":"淘宝心选10包抽纸","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":8,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":2,"linkUrl":"alipays://platformapi/startapp?appId=20000021","params":{"listImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100015/100001/listImg_201827271.png"},"skuList":[{"skuId":100015,"itemId":100015,"title":"10包抽纸","ranks":1,"parValue":null,"linkUrl":"alipays://platformapi/startapp?appId=20000021","params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100015/10/100003/skuImg_153854000.png"},"detailButton":null}]},{"itemId":100028,"title":"芒果TV(普通权益)","showTitle":"芒果TV","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":9,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":3,"linkUrl":"/pages/yinge/index?type=mangguo","params":{"listImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100028/10/100001/listImg_154345440.png"},"skuList":[{"skuId":100028,"itemId":100028,"title":"芒果TV(普通权益)","ranks":1,"parValue":null,"linkUrl":"/pages/yinge/index?type=mangguo","params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100028/10/100001/skuImg_153850833.png"},"detailButton":null}]}],"params":{},"authStatisticType":2}]},{"groupTagId":100005,"name":"视频权益","ranks":4,"hide":false,"params":{},"itemGroupList":[{"groupId":100012,"groupName":"视频会员","privilegeType":null,"groupType":2,"groupSort":5,"groupTagId":100005,"hide":false,"equityValue":"","itemList":[{"itemId":100038,"title":"爱奇艺视频会员","showTitle":"爱奇艺","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":1,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":2,"linkUrl":null,"params":{},"skuList":[{"skuId":100038,"itemId":100038,"title":"爱奇艺视频会员","ranks":1,"parValue":null,"linkUrl":null,"params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100038/10/100003/skuImg_160221073.png"},"detailButton":null}]},{"itemId":100039,"title":"优酷视频会员","showTitle":"优酷","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":2,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":2,"linkUrl":null,"params":{},"skuList":[{"skuId":100039,"itemId":100039,"title":"优酷视频会员","ranks":1,"parValue":null,"linkUrl":null,"params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100039/10/100003/skuImg_160237363.png"},"detailButton":null}]},{"itemId":100040,"title":"腾讯视频会员","showTitle":"腾讯视频","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":3,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":2,"linkUrl":null,"params":{},"skuList":[{"skuId":100040,"itemId":100040,"title":"腾讯视频会员","ranks":1,"parValue":null,"linkUrl":null,"params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100040/10/100003/skuImg_160254130.png"},"detailButton":null}]},{"itemId":100041,"title":"芒果视频会员","showTitle":"芒果视频","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":4,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":2,"linkUrl":null,"params":{},"skuList":[{"skuId":100041,"itemId":100041,"title":"芒果视频会员","ranks":1,"parValue":null,"linkUrl":null,"params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100041/10/100003/skuImg_160308654.png"},"detailButton":null}]},{"itemId":100042,"title":"B站视频会员","showTitle":"B站视频","subtitle":"","operatorCode":0,"isValidatecode":false,"onlineCycle":"","showSort":5,"cycleType":null,"autoCycleOrder":0,"totalCycleNum":6,"takeMode":2,"linkUrl":null,"params":{},"skuList":[{"skuId":100042,"itemId":100042,"title":"B站视频会员","ranks":1,"parValue":null,"linkUrl":null,"params":{"skuImg":"https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100042/10/100003/skuImg_160328189.png"},"detailButton":null}]}],"params":{},"authStatisticType":4}]}]}]}}

  return {
    code: 1000,
    msg: '响应信息:调用成功',
    response: {
      status: 1,
      msg: '有商品',
      phoneNumber: '15990158853',
      packages: [
        {
          title: '尊享会员',
          packageId: 100001,
          operatorCode: 1,
          templateId: 100004,
          templateGroupMap: {
            default: [{ templateId: 100004, firstMouthDiscountType: 3 }],
            wfyszf: [{ templateId: 100008, firstMouthDiscountType: 3 }],
            exy: [
              { templateId: 100004, firstMouthDiscountType: 3 },
              { templateId: 100006, firstMouthDiscountType: 1 },
            ],
            recall: [{ templateId: 100010, firstMouthDiscountType: 3 }],
            clzf: [{ templateId: 100009, firstMouthDiscountType: 3 }],
            ycx: [{ templateId: 100007, firstMouthDiscountType: 1 }],
            xjchzx: [{ templateId: 100009, firstMouthDiscountType: 1 }],
            zx1gy: [{ templateId: 100010, firstMouthDiscountType: 1 }],
          },
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
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100001/10/100001/detailImg_151954571.png',
            headImg:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100001/10/100001/headImg_151357454.png',
            headerImg: 'https://temp.im/750x426/fef2d6/c97d4a',
            memberRule:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100001/10/100001/memberRule_181130371.png',
            navigationBarTitle:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100001/10/100001/navigationBarTitle_111842632.png',
            submitBtnImg:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100001/10/100001/submitBtnImg_141201799.png',
            submitMarketingImg:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100001/10/100001/submitMarketingImg_134125315.png',
            tabImg: 'https://temp.im/682x70/fef6e9/3b3a3a',
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
                          detailButton: null,
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
                            flowBalance: '3',
                            skuImg:
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100002/10/100001/skuImg_160039159.png',
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
                          parValue: 1.0,
                          linkUrl: null,
                          params: {
                            flowBalance: '1',
                            skuImg:
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100003/10/100001/skuImg_160029914.png',
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
                          parValue: 1.0,
                          linkUrl: null,
                          params: {
                            flowBalance: '1',
                            skuImg:
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100004/10/100001/skuImg_160023148.png',
                          },
                          detailButton: null,
                        },
                      ],
                    },
                  ],
                  params: {
                    detailHeadImg:
                      'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/itemGroup/100002/10/100001/detailHeadImg_150439964.png',
                    listImg:
                      'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/itemGroup/100002/10/100001/listImg_111935596.png',
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
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100005/10/100001/skuImg_160118284.png',
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
                          parValue: 1.0,
                          linkUrl: null,
                          params: {
                            skuImg:
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100006/10/100001/skuImg_160109212.png',
                          },
                          detailButton: null,
                        },
                      ],
                    },
                  ],
                  params: {
                    detailHeadImg:
                      'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/itemGroup/100003/10/100001/detailHeadImg_150451741.png',
                    listImg:
                      'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/itemGroup/100003/10/100001/listImg_111912559.png',
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
                        'alipays://platformapi/startapp?appId=20000067&url=https%3A%2F%2Frender.alipay.com%2Fp%2Fc%2F180020570000027938%2Findex.html',
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
                            'alipays://platformapi/startapp?appId=20000067&url=https%3A%2F%2Frender.alipay.com%2Fp%2Fc%2F180020570000027938%2Findex.html',
                          params: {
                            skuImg:
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100016/10/100001/skuImg_165612194.png',
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
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100017/10/100001/skuImg_153657429.png',
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
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100013/10/100001/skuImg_155438146.png',
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
                      takeMode: 3,
                      linkUrl:
                        'https://gkzx.jujienet.com/broadband-web/activity/oilCard?type=cover&cn=oppo&serviceNo=10001176&goodsTrdNo=100098',
                      params: {
                        listImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100018/10/100001/listImg_165219941.png',
                      },
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
                            skuImg:
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100018/10/100001/skuImg_165149612.png',
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
                      linkUrl: 'http://t.bfr2.top/G1I34Rm',
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
                          linkUrl: 'http://t.bfr2.top/G1I34Rm',
                          params: {
                            skuImg:
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100019/10/100001/skuImg_153818100.png',
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
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100015/10/100001/skuImg_183124682.png',
                          },
                          detailButton: null,
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
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100028/10/100001/skuImg_153850833.png',
                          },
                          detailButton: null,
                        },
                      ],
                    },
                  ],
                  params: {
                    listImg:
                      'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/itemGroup/100004/10/100001/listImg_105306653.png',
                  },
                  authStatisticType: 2,
                },
              ],
            },
          ],
        },
        {
          title: '视频会员5选1',
          packageId: 100003,
          operatorCode: 1,
          templateId: 100011,
          templateGroupMap: {
            mydk: [{ templateId: 100011, firstMouthDiscountType: 1 }],
            default: [{ templateId: 100011, firstMouthDiscountType: 1 }],
            mydknr: [{ templateId: 100012, firstMouthDiscountType: 1 }],
          },
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
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100003/10/100003/detailImg_151920474.png',
            headImg:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100001/10/100001/headImg_151357454.png',
            headerImg: 'https://temp.im/750x426/#1e1236/#f2d3ba',
            memberRule:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100003/10/100003/memberRule_181102196.png',
            navigationBarTitle:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100001/10/100001/navigationBarTitle_111842632.png',
            submitBtnImg:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100003/10/100003/submitBtnImg_180920509.png',
            submitMarketingImg:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/package/100003/10/100003/submitMarketingImg_180951584.png',
            tabImg: 'https://temp.im/682x70/fff/3b3a3a',
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
                  groupId: 100008,
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
                          detailButton: null,
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
              params: {},
              itemGroupList: [
                {
                  groupId: 100009,
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
                            flowBalance: '3',
                            skuImg:
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100002/10/100001/skuImg_160039159.png',
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
                          parValue: 1.0,
                          linkUrl: null,
                          params: {
                            flowBalance: '1',
                            skuImg:
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100003/10/100001/skuImg_160029914.png',
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
                          parValue: 1.0,
                          linkUrl: null,
                          params: {
                            flowBalance: '1',
                            skuImg:
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100004/10/100001/skuImg_160023148.png',
                          },
                          detailButton: null,
                        },
                      ],
                    },
                  ],
                  params: {
                    detailHeadImg:
                      'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/itemGroup/100002/10/100001/detailHeadImg_150439964.png',
                  },
                  authStatisticType: 1,
                },
                {
                  groupId: 100010,
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
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100005/10/100001/skuImg_160118284.png',
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
                          parValue: 1.0,
                          linkUrl: null,
                          params: {
                            skuImg:
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100006/10/100001/skuImg_160109212.png',
                          },
                          detailButton: null,
                        },
                      ],
                    },
                  ],
                  params: {
                    detailHeadImg:
                      'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/itemGroup/100003/10/100001/detailHeadImg_150451741.png',
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
                  groupId: 100011,
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
                        'alipays://platformapi/startapp?appId=20000067&url=https%3A%2F%2Frender.alipay.com%2Fp%2Fc%2F180020570000027938%2Findex.html',
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
                            'alipays://platformapi/startapp?appId=20000067&url=https%3A%2F%2Frender.alipay.com%2Fp%2Fc%2F180020570000027938%2Findex.html',
                          params: {
                            skuImg:
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100016/10/100003/skuImg_164859731.png',
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
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100017/10/100001/skuImg_153657429.png',
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
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100013/10/100001/skuImg_155438146.png',
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
                      takeMode: 3,
                      linkUrl:
                        'https://gkzx.jujienet.com/broadband-web/activity/oilCard?type=cover&cn=oppo&serviceNo=10001176&goodsTrdNo=100098',
                      params: {
                        listImg:
                          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100018/10/100001/listImg_165219941.png',
                      },
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
                            skuImg:
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100018/10/100001/skuImg_165149612.png',
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
                      linkUrl: 'http://t.bfr2.top/G1I34Rm',
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
                          linkUrl: 'http://t.bfr2.top/G1I34Rm',
                          params: {
                            skuImg:
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100019/10/100001/skuImg_153818100.png',
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
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100015/10/100003/skuImg_153854000.png',
                          },
                          detailButton: null,
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
                              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/sku/100028/10/100001/skuImg_153850833.png',
                          },
                          detailButton: null,
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
              groupTagId: 100005,
              name: '视频权益',
              ranks: 4,
              hide: false,
              params: {},
              itemGroupList: [
                {
                  groupId: 100012,
                  groupName: '视频会员',
                  privilegeType: null,
                  groupType: 2,
                  groupSort: 5,
                  groupTagId: 100005,
                  hide: false,
                  equityValue: '',
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
                      takeMode: 2,
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
                          detailButton: null,
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
                      takeMode: 2,
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
                          detailButton: null,
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
                      takeMode: 2,
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
                          detailButton: null,
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
                      takeMode: 2,
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
                          detailButton: null,
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
                      takeMode: 2,
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
                          detailButton: null,
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
      ],
    },
  };
};
