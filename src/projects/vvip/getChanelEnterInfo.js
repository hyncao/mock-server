const moment = require('moment');

module.exports = (req) => {
  // console.log(`enter getToken in ${moment().format('YYYY-MM-DD HH:mm:ss')}`);
  return {
    code: 1000,
    msg: '响应信息:调用成功',
    response: {
      status: -1,
      msg: '',
      phoneNumber: '159******11',
      memberType: 2,
    },
  };
};
