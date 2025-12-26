const moment = require('moment');

module.exports = (req) => {
  // console.log(`enter getToken in ${moment().format('YYYY-MM-DD HH:mm:ss')}`);
  return {
    code: 1000,
    msg: '响应信息:调用成功',
    response: {
      status: null,
      msg: '',
      isNew: false,
      token: 'v3token',
      tokenValidityTime: moment().add(1, 'days').format('x'),
      nickName: '海纳百川',
      avatar: 'https://tfs.alipayobjects.com/images/partner/TB1LH3aXBWiDuNjmeUwXXap2XXa',
    },
  };
};
