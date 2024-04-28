module.exports = (req) => ({
  code: 200,
  data: {
    dataList: [],
    dataMap: {
      linkeUrl: '',
      msg: '请支付',
      // openMode: 'js',
      openMode: 'nopay',
      payRequestInfo:
        '<form name="punchout_form" method="post" action="https://openapi.alipay.com/gateway.do?charset=UTF-8&method=alipay.trade.wap.pay&sign=aQ1ERW%2FoypFMwy4RtKbuknj%2BqUVodO2KtLYnAqxDbpunCZgCRUes3xyuavpkrNcllDPsFYaRfrm05dFRL47UE3kUaxv7yNxRBeExmgl0K4JMleInXFu%2FVqFfvq20qJbrt5cI6bPcVyWjYbaxcJtr%2BXh%2FRUkYlmQZ6mOcYvXaQ2uUANaFhJlHQoF8CvMfcrhEfD9vVARzJNGudUt6oxKVZDpIU%2Fi%2FrRq6ZUapB8L43%2Fe7IWwRI3wGWTOyXy5keGcWKK1VRN0lWxkNtPgAv05WkQDMuTVr33KrbZx9%2FQgIpitGQPhc664cA3DR9CEXl3Azj7Jp3VQH7xFvSBzS6qdT2Q%3D%3D&return_url=https%3A%2F%2Fbenefit.jujienet.com%2Fbenefit-app%2FtradeDetail%3FphoneNumber%3D13732285325%26payAmount%3D20.00%26servicePhoneNumber%3D4006660993%26tradeId%3D202306082011544736%26provinceOperatorName%3D%E6%B5%99%E6%B1%9F%E7%A7%BB%E5%8A%A8&notify_url=https%3A%2F%2Fbenefit.jujienet.com%2Fbenefit-async%2Fcallback%2FpayCallback%2F10005&version=1.0&app_id=2021001135687933&sign_type=RSA2&timestamp=2023-06-08+18%3A09%3A24&alipay_sdk=alipay-sdk-java-dynamicVersionNo&format=json&prod_code=QUICK_WAP_WAY">\n<input type="hidden" name="app_auth_token" value="202208BB1e9abf0efee54ffdaf475ddbd76a1F47">\n<input type="hidden" name="biz_content" value="{&quot;out_trade_no&quot;:202306082011544736,&quot;total_amount&quot;:20.00,&quot;quit_url&quot;:&quot;https://benefit.jujienet.com/benefit-app/tradeList&quot;,&quot;subject&quot;:&quot;全国移动流量包&quot;,&quot;timeout_express&quot;:&quot;30m&quot;,&quot;seller_id&quot;:&quot;2088701248729475&quot;}">\n<input type="submit" value="立即支付" style="display:none" >\n</form>\n<script>document.forms[0].submit();</script>',
      // payRequestInfo: 'http://www.bing.com',
      status: 1,
      urlParam: '',
    },
  },
  msg: '成功',
  success: true,
});
