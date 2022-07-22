// 1:领取中，2:领取成功，-1:请支付完本月月费后领取，-2:领取失败

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
    msg: '',
    orderId: '12123',
  },
});
