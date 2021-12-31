module.exports = (req) => ({
  code: 1000,
  msg: '响应信息:调用成功',
  response: {
    status: 1,
    msg: '',
    memberBillList: [
      {
        status: 2,
        msg: '已支付',
        payOrderTitle: '12月会员费',
        rental: 1.99,
        payTime: '2021-12-01 00:04:04',
      },
      {
        status: 1,
        msg: '待支付',
        payOrderTitle: '11月会员费',
        rental: 1.99,
        payTime: '2021-11-01 00:04:04',
      },
    ],
  },
});
