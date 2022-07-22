const getList = (column) => {
  if (column == 2) {
    return [
      {
        adId: 3,
        adImg: 'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/advertisement/100053/100053-20220721183646.png',
        adUrl: 'https://qr.alipay.com/s6x14261vsmjshrrbto6q07',
        title: '宽带缴费',
      },
      {
        adId: 4,
        adImg: 'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/advertisement/100054/100054-20220721153405.png',
        adUrl: 'https://songzhaopian.com/?channel=kdzxflzxtx',
        title: '0元T恤',
      },
      {
        adId: 5,
        adImg: 'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/advertisement/100055/100055-20220721153504.png',
        adUrl: 'https://songzhaopian.com/?channel=kdzxrmsjzj',
        title: '0元领手机支架',
      },
    ];
  }
  if (column == 3) {
    return [
      {
        adId: 4,
        adImg: 'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/advertisement/100054/100054-20220721183634.png',
        adUrl: 'https://songzhaopian.com/?channel=kdzxflzxtx',
        title: '0元T恤',
      },
    ];
  }
  if (column == 4) {
    return [
      {
        adId: 5,
        adImg: 'https://chaac.oss-cn-hangzhou.aliyuncs.com/upload/advertisement/100055/100055-20220721183616.png',
        adUrl: 'https://songzhaopian.com/?channel=kdzxrmsjzj',
        title: '0元领手机支架',
      },
    ];
  }
  return [
    {
      adId: 2,
      adUrl: 'https://litevip.jujienet.com/2',
      adImg: 'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/itemGroup/100002/100001/listImg_180116879.png',
      title: '测试2',
    },
    {
      adId: 1,
      adUrl: 'https://litevip.jujienet.com/3',
      adImg: 'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/itemGroup/100002/100001/listImg_220304645.png',
      title: '测试3',
    },
  ];
};

module.exports = (req) => ({
  code: 1000,
  msg: '响应信息:调用成功',
  response: {
    status: 0,
    msg: '调用成功',
    columnId: 1,
    showType: null,
    adEntityList: getList(req.body.column),
  },
});
