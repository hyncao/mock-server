module.exports = (req) => ({
  code: 200,
  data: {
    dataList: [],
    dataMap: {
      linkeUrl: '',
      msg: '请支付',
      openMode: 'redirect',
      payRequestInfo: '',
      status: 1,
      urlParam:
        'https://oms.flow.wostore.cn/web/qudao/validate/middle.html?appid=30682&appname=null&channelid=91630&kftelnum=null&phone=18600000004&pid=2100187601&price=null&spid=92173&subchannelid=iOS&sporderid=202210252007472270&uppoint=null&redirecturl=https://benefit.jujienet.com/benefit-app/payResult?payChannel=other&phoneNumber=18600000004&payAmount=12.00&servicePhoneNumber=10010&provinceOperatorName=北京联通',
    },
  },
  msg: '成功',
  success: true,
});
