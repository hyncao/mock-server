module.exports = (req) => ({
  code: 200,
  data: {
    dataList: [],
    dataMap: {
      data: { needConfirm: false, message: '你能不能接受下个月会员才生效啊，能就继续办理' },
      msg: '里面错误',
      status: true,
    },
  },
  msg: '外面错误',
  success: true,
});
