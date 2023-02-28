module.exports = (req) => ({
  code: 200,
  data: {
    dataList: [],
    dataMap: {
      msg: '请支付',
      openMode: 'nopay',
      payRequestInfo:
        '{"totalAmount":100,"dealId":"1812344665","tpOrderId":"202104150200000209","dealTitle":"联通-广东存费送费(小瀑)百度测试","appKey":"MMUR4V","rsaSign":"Cks4A7rNH1xqkAbJo/f8MF9zzj4lcSK0Ytv0UuARIj4zR108mGvp+wRdYwrHmHRGgch0U6AVjsqeC94ko/9/ofHbEUEXgMPvmwH7trfU0JBq3VBHqtyH5RnnWrQLul0ob+2rxesOB/kaGt+8ai8TY54J63Vq48bVZd0Fv06fSqk=","signFieldsRange":"1"}',
      // 2 3: '订单不存在',
      // 4': '不符合办理条件',
      status: 1,
    },
  },
  msg: '成功',
});
