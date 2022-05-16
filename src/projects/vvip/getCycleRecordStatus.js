const statusMap = {
  pending: 1,
  success: 2,
  needPay: -1,
  fail: -2,
};

module.exports = (req) => ({
  code: 1000,
  msg: '响应信息:调用成功',
  response: {
    status: statusMap.success,
    msg: '错误哦',
    prizeAmount: 0.6,
  },
});
