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

        getTokenUrl: 'http://demo.mall.10010.com:8104/jf-auth/cap/auth',
        // 不可用的
        // appId: 'HNYueChgame',
        // params:
        //   'EF803F0DB64722CFFE81A60C6B51C9B1F662E0D27D5FE4DF70D0299F6E3AA5ACCAFE7A2050959423AE1AA933499201CA4EC2A026003F33C3D2A266748ECFA565',
        // serviceCode: 'CAP2021V001',
        // sign: 'X8XAlicCf8sVmoGfkuhqeKdTlNM=',
        // time: '20220301101059',

        // 可用的
        appId: 'HNYueChgame',
        params:
          'F0BF483D56F40073DAFBEA8948402481062C71F3FF6C6DE7D5873855AA416016B294D5DD8F4D0A112C74A7E1B6E1D7898FD43ED2AF8527D2594D716294B09918',
        serviceCode: 'CAP2021V001',
        time: '20220112110935',
        sign: 'oDgl9HjGKF8qMZfLh8HkAX06/uk=',
      },
    },
  },
  msg: '成功',
});
