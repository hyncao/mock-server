# mock-server

没有 ui 的 mock 服务, 不搞花里胡哨的

## 如何使用

```
npm install
npm start
```

## 如何配置

### /index.js

服务启动文件, 可以在这里配置 port, 默认端口 159

### /src/projects

每个项目存放于不同的文件夹, 且由 projects/index.js 统一导出

### /src/projects/myProject

index.js 文件做接口配置, 导出为数组

```javascript
// index.js
const URI = '/benefit/api/'; // 接口前缀URI

module.exports = [
  {
    name: 'getToken', // 接口名
    method: 'post', // 请求方法
    url: `${URI}getToken`, // 请求地址
    response: require('./getToken'), // 获取响应结果
    description: '获取token', // 接口描述
    delay: 0, // 接口延迟(毫秒)
  },
];
```

getToken.js 接口响应结果, 类型为方法, 入参为 request 对象, 可以根据 body 或者 header 进行接口判断

```javascript
// getToken.js
const Mock = require('mockjs');

module.exports = (req) =>
  Mock.mock({
    code: 200,
    data: {
      dataList: [],
      dataMap: {
        'isNew|1': true,
        token: '@word(20)',
        userId: /\d{5}/,
        userName: '@word(3-8)',
      },
    },
    msg: '成功',
  });
```

等同于

```javascript
module.exports = (req) => ({
  code: 200,
  data: {
    dataList: [],
    dataMap: {
      isNew: true,
      token: 'tkopadxedxobjukqbrsg',
      userId: '123212',
      userName: 'hyn',
    },
  },
  msg: '成功',
});
```

## mockjs 文档

[Mockjs 语法](http://mockjs.com/0.1/)
