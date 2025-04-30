const Mock = require('mockjs');
const moment = require('moment');

module.exports = (req) => {
  // console.log('=======');
  // console.log(moment().format('YYYY-MM-DD HH:mm:ss'));
  // console.log(req.body);
  // console.log('=======');
  return Mock.mock({
    code: 200,
    data: {
      dataList: [],
      dataMap: {
        'isNew|1': true,
        token: '@word(20)',
        // phoneNumber: "18888888881",
        userId: /\d{5}/,
        userName: '@word(3, 8)',
      },
    },
    msg: '成功',
  });
};
