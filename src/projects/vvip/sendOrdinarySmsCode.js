const statusMap = {
  success: 1,
  fail: -1,
  often: -2,
};

module.exports = (req) => {
  return {
    code: 1000,
    msg: '响应信息:调用成功',
    response: {
      status: statusMap.success,
      msg: 'ok',
    },
  };
};
