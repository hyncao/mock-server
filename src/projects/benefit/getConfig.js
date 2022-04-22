module.exports = (req) => ({
  code: 200,
  data: {
    dataList: [],
    dataMap: {
      confInfo: {
        // channel: '200000000016',
        // channeltype: '1',
        // clienttype: '3',
        // cpid: 'youtu',
        // getTokenUrl: 'https://live.mige.tv/cap/CAP-AUTH.html',
        // servicephone: '',
        // sign: '932432492cc07ea6ff540ab381084e55',
        // spid: '1048',
        // theme: '1',
        // timestamp: '1638844469955',
        // version: '1.0.0',

        getTokenUrl: 'https://m.jf.10010.com/jf-auth/cap/auth',

        appId: 'SHJJ00',
        params:
          '6D3BB92ECEDFD6916ACE44197C928034F195CCF821112EABDE48443F151ACB4AD63E71C82A79633B6744367F57EF51A30023773F3BFF535BD80DD0B8534BBF18',
        serviceCode: 'CAP2021V001',
        sign: 'nEqMtXIE+CTKCcDtr6/Z9cxjyaw=',
        time: '20220303152420',
      },
    },
  },
  msg: '成功',
});
