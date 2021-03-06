const open = require('open');
const address = require('address');
const express = require('express');
const utils = require('./src/utils');
const { port } = require('./src/config');

const { delay } = utils;

const app = express();

app.get('/', (req, res) => {
  res.send('Mock server is listening! Happy Mocking!');
});

// 解析 application/json
app.use(express.json());
// 解析 application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// 创建静态文件夹
app.use('/static', express.static('public'));

const apiList = require('./src/projects');

apiList.forEach((i) => {
  app[i.method](i.url, async (req, res) => {
    if (i.delay) {
      await delay(i.delay);
    }
    res.send(i.response(req));
  });
});

app.listen(port, () => {
  const url = `http://${address.ip()}:${port}`;
  // open(url);
  console.log('============================================');
  console.log(`Mock server is listening at ${url}`);
});
