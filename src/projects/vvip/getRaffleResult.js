const { validToken, validTokenResponse } = require('../../utils');

module.exports = (req) => {
  if (!validToken(req, 'v2')) {
    return validTokenResponse;
  }
  return {
    code: 1000,
    msg: '响应信息:调用成功',
    response: {
      // 1:抽奖成功, -1:抽奖失败
      status: 1,
      msg: '获取成功',
      itemId: 100035,
      params: {
        raffleListImg:
          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100035/0/0/raffleTurntableImg_184340692.png',
      },
    },
  };
};
