const address = require('address');
const { port } = require('../../config');
const getJsonFile = (pageId) => require(`../../../public/vvip/configJson/${pageId}.json`);

module.exports = (req) => ({
  code: 1000,
  msg: '响应信息:调用成功',
  response: {
    status: 1,
    msg: '获取成功',
    config: getJsonFile(req.body.pageId),
  },
});
