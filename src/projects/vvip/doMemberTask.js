const statusMap = {
  success: 2,
  fail: 1,
};

module.exports = (req) => ({
  code: 1000,
  msg: '响应信息:调用成功',
  response: {
    status: statusMap.fail,
    finish: true,
    msg: '任务完成',
    operation: {
      // messageTemplateId: 'tradeReminder', // 订阅消息
      url: 'https://litevip.jujienet.com/apsu-api/index/100055', // 跳转链接做任务
      // click: 'https://demon.58youtui.com/uri/adv?code=TEST_6231aaf1c509a', // 完成任务后, 跳转
    },
    userStarNum: 4,
  },
});
