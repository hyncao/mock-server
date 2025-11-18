const moment = require('moment');

module.exports = (req) => {
  // console.log(`enter getToken in ${moment().format('YYYY-MM-DD HH:mm:ss')}`);
  return {
    code: 1000,
    msg: '响应信息:调用成功',
    response: {
      status: null,
      msg: '',
      groupMutualExclusionInfoList: [
        {
          groupId: 1,
          status: 1,
          params: {
            skuImg: 'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/sku/300126/0/0/skuImg_162926908.png',
          },
        },
        {
          groupId: 2,
          status: -1,
          params: {
            skuImg: 'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/sku/300127/0/0/skuImg_162917902.png',
          },
        },
      ],
    },
  };
};
