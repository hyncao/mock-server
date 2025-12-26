const { validToken, validTokenResponse } = require('../../utils');

module.exports = (req) => {
  if (!validToken(req, 'v2')) {
    return validTokenResponse;
  }
  return {
    code: 1000,
    msg: '响应信息:调用成功',
    response: {
      status: null,
      msg: '',
      benefitGroupDataList: [
        {
          name: '分组1',
          benefitDataList: [
            {
              title: '测试1',
              subtitle: '测试2',
              url: 'alipays://platformapi/startapp?appId=2021002181632074&page=pages%2Findex%2Findex%3FcnEnterId%3D10234%26cnId%3D10015%26cnSimpleName%3Dalipay%26enterId%3D100650%26operatorCode%3D1%26packageId%3D1001470%26pathname%3DsingleItem&query=cnEnterId%3D10234%26cnId%3D10015%26cnSimpleName%3Dalipay%26enterId%3D100650%26operatorCode%3D1%26packageId%3D1001470%26pathname%3DsingleItem',
              cornerMark: '也就这么多了',
            },
            {
              title: '测试1',
              subtitle: '测试2',
              url: 'alipays://platformapi/startapp?appId=2021002181632074&page=pages%2Findex%2Findex%3FcnEnterId%3D10234%26cnId%3D10015%26cnSimpleName%3Dalipay%26enterId%3D100650%26operatorCode%3D1%26packageId%3D1001470%26pathname%3DsingleItem&query=cnEnterId%3D10234%26cnId%3D10015%26cnSimpleName%3Dalipay%26enterId%3D100650%26operatorCode%3D1%26packageId%3D1001470%26pathname%3DsingleItem',
              cornerMark: '也就这么多了',
            },
            {
              title: '测试1',
              subtitle: '测试2',
              url: 'alipays://platformapi/startapp?appId=2021002181632074&page=pages%2Findex%2Findex%3FcnEnterId%3D10234%26cnId%3D10015%26cnSimpleName%3Dalipay%26enterId%3D100650%26operatorCode%3D1%26packageId%3D1001470%26pathname%3DsingleItem&query=cnEnterId%3D10234%26cnId%3D10015%26cnSimpleName%3Dalipay%26enterId%3D100650%26operatorCode%3D1%26packageId%3D1001470%26pathname%3DsingleItem',
              cornerMark: '也就这么多了',
            },
            {
              title: '测试1',
              subtitle: '测试2',
              url: 'alipays://platformapi/startapp?appId=2021002181632074&page=pages%2Findex%2Findex%3FcnEnterId%3D10234%26cnId%3D10015%26cnSimpleName%3Dalipay%26enterId%3D100650%26operatorCode%3D1%26packageId%3D1001470%26pathname%3DsingleItem&query=cnEnterId%3D10234%26cnId%3D10015%26cnSimpleName%3Dalipay%26enterId%3D100650%26operatorCode%3D1%26packageId%3D1001470%26pathname%3DsingleItem',
              cornerMark: '也就这么多了',
            },
            {
              title: '测试1',
              subtitle: '测试2',
              url: 'alipays://platformapi/startapp?appId=2021002181632074&page=pages%2Findex%2Findex%3FcnEnterId%3D10234%26cnId%3D10015%26cnSimpleName%3Dalipay%26enterId%3D100650%26operatorCode%3D1%26packageId%3D1001470%26pathname%3DsingleItem&query=cnEnterId%3D10234%26cnId%3D10015%26cnSimpleName%3Dalipay%26enterId%3D100650%26operatorCode%3D1%26packageId%3D1001470%26pathname%3DsingleItem',
              cornerMark: '也就这么多了',
            },
          ],
        },
        {
          name: '分组2',
          benefitDataList: [
            {
              title: '测试1',
              subtitle: '测试2',
              url: 'alipays://platformapi/startapp?appId=2021002181632074&page=pages%2Findex%2Findex%3FcnEnterId%3D10234%26cnId%3D10015%26cnSimpleName%3Dalipay%26enterId%3D100650%26operatorCode%3D1%26packageId%3D1001470%26pathname%3DsingleItem&query=cnEnterId%3D10234%26cnId%3D10015%26cnSimpleName%3Dalipay%26enterId%3D100650%26operatorCode%3D1%26packageId%3D1001470%26pathname%3DsingleItem',
              cornerMark: '',
            },
            {
              title: '测试1',
              subtitle: '测试2',
              url: 'alipays://platformapi/startapp?appId=2021002181632074&page=pages%2Findex%2Findex%3FcnEnterId%3D10234%26cnId%3D10015%26cnSimpleName%3Dalipay%26enterId%3D100650%26operatorCode%3D1%26packageId%3D1001470%26pathname%3DsingleItem&query=cnEnterId%3D10234%26cnId%3D10015%26cnSimpleName%3Dalipay%26enterId%3D100650%26operatorCode%3D1%26packageId%3D1001470%26pathname%3DsingleItem',
              cornerMark: '',
            },
            {
              title: '测试1',
              subtitle: '测试2',
              url: 'alipays://platformapi/startapp?appId=2021002181632074&page=pages%2Findex%2Findex%3FcnEnterId%3D10234%26cnId%3D10015%26cnSimpleName%3Dalipay%26enterId%3D100650%26operatorCode%3D1%26packageId%3D1001470%26pathname%3DsingleItem&query=cnEnterId%3D10234%26cnId%3D10015%26cnSimpleName%3Dalipay%26enterId%3D100650%26operatorCode%3D1%26packageId%3D1001470%26pathname%3DsingleItem',
              cornerMark: '',
            },
          ],
        },
        {
          name: '分组3',
          benefitDataList: [
            {
              title: '测试1',
              subtitle: '测试2',
              url: 'alipays://platformapi/startapp?appId=2021002181632074&page=pages%2Findex%2Findex%3FcnEnterId%3D10234%26cnId%3D10015%26cnSimpleName%3Dalipay%26enterId%3D100650%26operatorCode%3D1%26packageId%3D1001470%26pathname%3DsingleItem&query=cnEnterId%3D10234%26cnId%3D10015%26cnSimpleName%3Dalipay%26enterId%3D100650%26operatorCode%3D1%26packageId%3D1001470%26pathname%3DsingleItem',
              cornerMark: '',
            },
            {
              title: '测试1',
              subtitle: '测试2',
              url: 'alipays://platformapi/startapp?appId=2021002181632074&page=pages%2Findex%2Findex%3FcnEnterId%3D10234%26cnId%3D10015%26cnSimpleName%3Dalipay%26enterId%3D100650%26operatorCode%3D1%26packageId%3D1001470%26pathname%3DsingleItem&query=cnEnterId%3D10234%26cnId%3D10015%26cnSimpleName%3Dalipay%26enterId%3D100650%26operatorCode%3D1%26packageId%3D1001470%26pathname%3DsingleItem',
              cornerMark: '',
            },
            {
              title: '测试1',
              subtitle: '测试2',
              url: 'alipays://platformapi/startapp?appId=2021002181632074&page=pages%2Findex%2Findex%3FcnEnterId%3D10234%26cnId%3D10015%26cnSimpleName%3Dalipay%26enterId%3D100650%26operatorCode%3D1%26packageId%3D1001470%26pathname%3DsingleItem&query=cnEnterId%3D10234%26cnId%3D10015%26cnSimpleName%3Dalipay%26enterId%3D100650%26operatorCode%3D1%26packageId%3D1001470%26pathname%3DsingleItem',
              cornerMark: '也就这么多了',
            },
          ],
        },
      ],
    },
  };
};
