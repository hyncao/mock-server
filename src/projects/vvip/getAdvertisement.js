module.exports = (req) => ({
  code: 1000,
  msg: '响应信息:调用成功',
  response: {
    status: 0,
    msg: '调用成功',
    columnId: 1,
    showType: null,
    adEntityList: [
      {
        adId: 2,
        adUrl: 'https://litevip.jujienet.com/2',
        adImg:
          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/itemGroup/100002/100001/listImg_180116879.png',
        title: '测试2',
      },
      {
        adId: 1,
        adUrl: 'https://litevip.jujienet.com/3',
        adImg:
          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/itemGroup/100002/100001/listImg_220304645.png',
        title: '测试3',
      },
    ],
  },
});
