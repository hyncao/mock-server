const Mock = require('mockjs');
const Random = Mock.Random;
const { validate, validToken, validTokenResponse } = require('../../utils');

const statusMap = {
  not: 1,
  pending: 2,
  checkable: 3,
  done: 4,
};

module.exports = (req) => {
  if (!validToken(req)) {
    return validTokenResponse;
  }
  const res = validate(req, ['tradeId']);
  if (!res.result) {
    return {
      code: 500,
      msg: res.msg,
    };
  }
  return {
    code: 1000,
    msg: '响应信息:调用成功',
    response: {
      status: null,
      msg: '',
      aboutToExpireFlow: '0',
      alreadyExchangeFlow: '0',
      currentFlowPool: '4.6',
      flowProgressBar: 50,
      taskList: [
        {
          taskId: 6,
          title: '逛流量权益',
          subtitle: null,
          taskRecordId: '202512050000000338',
          operation: { productCode: '104208320105', providerAppId: '1278100099' },
          status: 3,
          msg: '收取',
          params: {
            flowPool:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/task/6/10/100014/flowPool_150234777.png',
            taskList:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/task/6/10/100014/taskList_214312396.png',
          },
        },
        {
          taskId: 10,
          title: '关注生活号',
          subtitle: null,
          taskRecordId: '202512050000000339',
          operation: { productCode: '104208320109', providerAppId: '1278100099' },
          status: 3,
          msg: '收取',
          params: {
            flowPool:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/task/10/10/100014/flowPool_150309205.png',
            taskList:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/task/10/10/100014/taskList_214351803.png',
          },
        },
        {
          taskId: 9,
          title: '收藏小程序',
          subtitle: null,
          taskRecordId: null,
          operation: { productCode: '104208320108', providerAppId: '1278100099' },
          status: 1,
          msg: '去完成',
          params: {
            flowPool:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/task/9/10/100014/flowPool_150300628.png',
            taskList:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/task/9/10/100014/taskList_214336131.png',
          },
        },
        {
          taskId: 8,
          title: '逛权益特惠',
          subtitle: null,
          taskRecordId: '202512050000000352',
          operation: { productCode: '104208320107', providerAppId: '1278100099' },
          status: 4,
          msg: '已收取',
          params: {
            flowPool:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/task/8/10/100014/flowPool_150253776.png',
            taskList:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/task/8/10/100014/taskList_214328046.png',
          },
        },
        {
          taskId: 11,
          title: '订阅消息',
          subtitle: null,
          taskRecordId: null,
          operation: {
            productCode: '104208320110',
            providerAppId: '1278100099',
            messageTemplateId: 'activityStartReminder',
          },
          status: 1,
          msg: '去完成',
          params: {
            flowPool:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/task/11/10/100014/flowPool_150316072.png',
            taskList:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/task/11/10/100014/taskList_214359886.png',
          },
        },
        {
          taskId: 1,
          title: '去无限暖暖',
          subtitle: null,
          taskRecordId: '202512050000000333',
          operation: { productCode: '104208320100', providerAppId: '1278100099' },
          status: 4,
          msg: '已收取',
          params: {
            flowPool:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/task/1/10/100014/flowPool_150145555.png',
            taskList:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/task/1/10/100014/taskList_214213448.png',
          },
        },
        {
          taskId: 2,
          title: '逛无限暖暖',
          subtitle: null,
          taskRecordId: '202512050000000334',
          operation: { productCode: '104208320101', providerAppId: '1278100099' },
          status: 4,
          msg: '已收取',
          params: {
            flowPool:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/task/2/10/100014/flowPool_150155408.png',
            taskList:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/task/2/10/100014/taskList_214226362.png',
          },
        },
        {
          taskId: 3,
          title: '进入云游戏',
          subtitle: null,
          taskRecordId: '202512050000000335',
          operation: { productCode: '104208320102', providerAppId: '1278100099' },
          status: 4,
          msg: '已收取',
          params: {
            flowPool:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/task/3/10/100014/flowPool_150208138.png',
            taskList:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/task/3/10/100014/taskList_214232471.png',
          },
        },
        {
          taskId: 4,
          title: '浏览云游戏',
          subtitle: null,
          taskRecordId: '202512050000000336',
          operation: { productCode: '104208320103', providerAppId: '1278100099' },
          status: 4,
          msg: '已收取',
          params: {
            flowPool:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/task/4/10/100014/flowPool_150215660.png',
            taskList:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/task/4/10/100014/taskList_214241087.png',
          },
        },
        {
          taskId: 5,
          title: '逛联通宽带',
          subtitle: null,
          taskRecordId: '202512050000000337',
          operation: { productCode: '104208320104', providerAppId: '1278100099' },
          status: 4,
          msg: '已收取',
          params: {
            flowPool:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/task/5/10/100014/flowPool_150225285.png',
            taskList:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/task/5/10/100014/taskList_214252029.png',
          },
        },
        {
          taskId: 7,
          title: '逛联通号卡',
          subtitle: null,
          taskRecordId: '202512050000000351',
          operation: { productCode: '104208320106', providerAppId: '1278100099' },
          status: 4,
          msg: '已收取',
          params: {
            flowPool:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/task/7/10/100014/flowPool_150243821.png',
            taskList:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/task/7/10/100014/taskList_214319661.png',
          },
        },
      ],
    },
  };
};
