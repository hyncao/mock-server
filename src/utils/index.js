const utils = {
  delay: (t) => new Promise((res) => setTimeout(res, t)),

  /**
   * 校验是否缺少参数
   * @param {*} req request 对象
   * @param {*} required 必传的参数数组
   * @returns {*} { result: Boolean, msg: String }
   */
  validate: (req, required) => {
    let result = true;
    let msg = '';
    const { path, body } = req;
    const emptyList = required.filter((i) => !body[i]);
    if (emptyList.length) {
      result = false;
      msg = emptyList.reduce((prev, next) => `${prev}${next}, `, `接口缺少参数: `);
    }
    return { result, msg };
  },

  validToken: (req, version = 'v3') => {
    const { token } = req.body;
    if (token && token === `${version}token`) return true;
    return false;
  },

  validTokenResponse: {
    code: 500,
    msg: 'token 无效',
  },
};

module.exports = utils;
