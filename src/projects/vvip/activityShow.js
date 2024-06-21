const statusMap = {
  show: 1,
  hide: -1,
};

module.exports = (req) => ({
  code: 1000,
  msg: '响应信息:调用成功',
  response: {
    status: statusMap.hide,
    msg: '成功',
    showImage: 'https://chaac.oss-cn-hangzhou.aliyuncs.com/vvip/static/pop-1.18.png',
    keywords: '1.18弹窗',
  },
});
