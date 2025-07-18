const moment = require('moment');

module.exports = (req) => {
  return {
    code: req.body.id ? 200 : 500,
    data: {
      dataList: [],
      dataMap: {},
    },
    msg: '成功',
    noOrderPlace: false,
    success: true,
  };
};
