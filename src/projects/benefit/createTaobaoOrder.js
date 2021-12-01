module.exports = (req) => ({
  code: 200,
  data: {
    dataList: [],
    dataMap: {
      msg: '请支付',
      openMode: 'redirect',
      payRequestInfo:
        'http://d.wapa.taobao.com/goAlipay.htm?alipayURL=https%3A%2F%2Fmaliprod.alipay.com%2Fw%2Ftrade_pay.do%3Falipay_trade_no%3D2021063022001130381430564352%26s_id%3D17c8dd27ad94b8d842df028bc046184e%26tcode%3DeyJiaXpPcmRlcklkcyI6IjE5MTEzODU2MjA0MjIzNzIyNDQiLCJidXllcklkIjoiODQ1Mzc0NDIyIiwidHlwZSI6IjMifQ%3D%3D%26pay_order_id%3D1911385620422372244%26refer%3Dtbc%26return_url%3Dhttps%253A%252F%252Fh5.wapa.taobao.com%252Fmlapp%252Fodetail.html%253Farchive%253Dfalse%2526bizOrderId%253D1911385620422372244&orderids=1911385620422372244&signStr=service%3D%22mobile.securitypay.pay%22%26_input_charset%3D%22utf-8%22%26app_name%3D%22tb%22%26appenv%3D%22appid%3Dtaobao%5Esystem%3Dnull%5Eversion%3Dnull%22%26partner%3D%22PARTNER_TAOBAO_ORDER%22%26biz_type%3D%22trade%22%26trade_no%3D%222021063022001130381430564352%22%26sign_date%3D%222021-06-30%2009%3A14%3A08%22%26extern_token%3D%2217c8dd27ad94b8d842df028bc046184e%22%26sign%3D%22_e_s_pp%252F_tx8_w_f_jyxbx2_ux_v_p_zss_mcm%252B_uhea_keb_cr_v_y_a_a_k_h_dh_y2xe4_ki_c%252Fg%253D%253D%22%26sign_type%3D%22DSA%22&backURL=https%3A%2F%2Fh5.wapa.taobao.com%2Fmlapp%2Fodetail.html%3Farchive%3Dfalse%26bizOrderId%3D1911385620422372244&simplepay=1&needpop=0',
      paySuccessResult: {
        phoneNumber: '13621028129',
        payAmount: '0.01',
        provinceOperatorName: '北京移动',
        servicePhoneNumber: '4008700653',
      },
      status: 1,
    },
  },
  msg: '成功',
  success: true,
});
