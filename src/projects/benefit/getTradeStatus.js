module.exports = (req) => {
  if (req.body.tradeId) {
    return {
      code: 200,
      data: {
        msg: '说点什么呢',
        status: 0,
      },
      msg: '成功',
    };
  } else {
    return {
      code: 500,
      data: {},
      msg: '缺少tradeId',
    };
  }
};
