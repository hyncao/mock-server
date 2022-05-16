const moment = require('moment');

module.exports = (req) => {
  console.log(`enter getToken in ${moment().format('YYYY-MM-DD HH:mm:ss')}`);
  return {
    code: 1000,
    msg: '响应信息:调用成功',
    response: {
      status: null,
      msg: '',
      token: '231c5dd28437cd1a8ba7cad29fb0911f1000000009',
      isNew: false,
    },
  };
};
