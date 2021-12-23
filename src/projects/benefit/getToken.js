const Mock = require('mockjs');

module.exports = (req) =>
  Mock.mock({
    code: 200,
    data: {
      dataList: [],
      dataMap: {
        'isNew|1': true,
        token: '@word(20)',
        phoneNumber: "159******53",
        userId: /\d{5}/,
        userName: '@word(3, 8)',
      },
    },
    msg: '成功',
  });
