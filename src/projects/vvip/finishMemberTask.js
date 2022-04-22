const statusMap = {
  success: 2,
  fail: 1,
};

module.exports = (req) => ({
  code: 1000,
  msg: '响应信息:调用成功',
  response: {
    status: statusMap.success,
    msg: '错误信息',
    userStarNum: 0,
  },
});
