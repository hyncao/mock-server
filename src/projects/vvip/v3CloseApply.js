const { validToken, validTokenResponse } = require('../../utils');

module.exports = (req) => {
  if (!validToken(req)) {
    return validTokenResponse;
  }
  return {
    code: 1000,
    msg: '响应信息:调用成功',
    response: {
      status: 1,
      msg: '解约申请成功',
      isExplicitSettlement: false,
      payInfo: null,
      openMode: null,
    },
  };
};
