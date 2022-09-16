const moment = require('moment');

const statusMap = {
  success: 1,
  fail: -1,
  tooClose: -2,
};

module.exports = (req) => {
  return {
    code: 1000,
    msg: '响应信息:调用成功',
    response: {
      status: statusMap.fail,
      msg: '2',
    },
  };
};
