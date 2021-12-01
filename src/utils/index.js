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
      msg = emptyList.reduce((prev, next) => `${prev}${next}, `, `${path} 接口缺少参数: `);
    }
    return { result, msg };
  },
};

module.exports = utils;
