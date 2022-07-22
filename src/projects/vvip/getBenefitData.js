module.exports = (req) => ({
  code: 1000,
  msg: '响应信息:调用成功',
  response: {
    status: 1,
    msg: 'success',
    benefitDataList: [
      {
        title: '主标题',
        subtitle: '副标题',
        url: 'https://www.bing.com',
        cornerMark: '限时',
      },
      {
        title: '主标题',
        subtitle: '副标题',
        url: 'https://www.bing.com',
        cornerMark: '',
      },
      {
        title: '主标题',
        subtitle: '副标题',
        url: 'https://www.bing.com',
        cornerMark: '',
      },
      {
        title: '主标题',
        subtitle: '副标题',
        url: 'https://www.bing.com',
        cornerMark: '限时',
      },
    ],
  },
});
