module.exports = (req) => ({
  code: 1000,
  msg: '响应信息:调用成功',
  response: {
    status: 1,
    msg: '获取成功',
    openMode: 'noPay',
    payInfo:
      'alipay_sdk%3Dalipay-easysdk-java%26app_id%3D2017072107836791%26biz_content%3D%257B%2522access_params%2522%253A%257B%2522channel%2522%253A%2522ALIPAYAPP%2522%257D%252C%2522external_agreement_no%2522%253A%2522202107010000000030%2522%252C%2522personal_product_code%2522%253A%2522GENERAL_WITHHOLDING_P%2522%252C%2522product_code%2522%253A%2522GENERAL_WITHHOLDING%2522%252C%2522sign_scene%2522%253A%2522INDUSTRY%257CDIGITAL_MEDIA%2522%257D%26charset%3DUTF-8%26format%3Djson%26method%3Dalipay.user.agreement.page.sign%26notify_url%3Dhttp%253A%252F%252Fapsu.jujienet.com%252Fapsu-order%252FopenApi%252Fpay.channel.signing.callback.request%252F1244000004%26sign%3DLw5GQ3jSz8nh3Qtio1GMiYIAPPY7XEkgchQE%252FpNKKJ5v0sN0UTbPd5zWyY4agRmC%252FqZnSIoZ2NS2dB6NCx%252FfAdRmup5SCWWqjlbPjDCmGhDMlo51u415VUT9U%252F5M2t%252BkmQlGsKr%252BtYUMznpRiE6Csh5%252BpaU%252FepMzM8FtL0mnAmEBta5bYKY77pow3fIrZt%252FXrTCknfONR7fe2yhbLZuYQakXFIMN4znRYk5UrjQyUrTOx%252BaQJJwSuBTv529%252B0rfAjjRMON63lwhoAqiMnI7EeAEXeTqNuovYD73m8Mp86eswWaf88ZNNC80QUUlSuedZVcbbJ0c9MFu1hGRfYLSh0A%253D%253D%26sign_type%3DRSA2%26timestamp%3D2021-07-01%2B11%253A17%253A29%26version%3D1.0',

    // 芝麻购
    // openMode: 'zmg_js',
    // payInfo:
    //   'alipay_sdk=alipay-sdk-java-dynamicVersionNo&app_id=2021002152639081&biz_content=%7B%22channel%22%3A%22channel_external%22%2C%22out_request_no%22%3A%22202205110000000264%22%2C%22partner_id%22%3A%222088141725848741%22%2C%22template_id%22%3A%22ZMGO_TPL202205111002000014909%22%2C%22timeout_express%22%3A%2230m%22%7D&charset=UTF-8&format=json&method=zhima.credit.pe.zmgo.sign.apply&sign=hey7%2Fwl%2BdIxQ8P3oxxE4Y0xCc%2BYTXWsbIFtyEU19d4%2BPHnUdkOemktNVksaZgqvLq091zKpbHn7dffMZ2D869jpuM2oOaUFM4F5XDC5c52o2DKrGmkj7HKIiEvJoaCVCuhStN6nxh10HkYOvA85BiBWdSIFNj9ipDNf%2BTdBwIpaaUwv4Lwuiu53VMmL3UdHmsFIW6%2Bfx6ls2yPKjR5%2FZ0xy9vkHnHmWQlWp1Jq1ADcHhOU1iVjSBAzQchqzYTvt%2FRlLxiqsnEHdV%2F7qwgzKqYsS5NCCucGospTkctXW9%2FOb2IWe3ZXD6zQ3z7Jht%2F8trnfD43T044%2FDCwGnHVMfKRA%3D%3D&sign_type=RSA2&timestamp=2022-05-11+16%3A24%3A09&version=1.0',
  },
});
