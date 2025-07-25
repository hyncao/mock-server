module.exports = (req) => ({
  code: 200,
  data: {
    dataList: [],
    dataMap: {
      msg: '领取中',
      status: 2,
      // cardNumber: '1'
    },
  },
  msg: '成功',
  success: true,
});
