const Mock = require('mockjs');
const Random = Mock.Random;
const { validate, validToken, validTokenResponse } = require('../../utils');

const statusMap = {
  not: 1,
  pending: 2,
  checkable: 3,
  done: 4,
};

const titleList = ['签到任务', '分享任务', '邀好友任务', '浏览任务', '评论任务'];

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
      raffleCount: null,
      taskList: [
        {
          taskId: 10,
          title: '首次关注生活号',
          subtitle: '完成任务可得流量 ',
          taskRecordId: '202512080000001142',
          operation: { url: 'http://p.alipay.com/P/hlbKfqZG' },
          status: 4,
          msg: '已完成',
          params: {
            flowPool:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/task/10/10/100014/flowPool_150309205.png',
            taskList:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/task/10/10/100014/taskList_214351803.png',
          },
        },
        {
          taskId: 5,
          title: '浏览联通宽带业务页面10秒',
          subtitle: '本月完成任务可得流量',
          taskRecordId: '202512080000001143',
          operation: {
            url: 'https://gkzx.jujienet.com/broadband-web/broadband/unicomBusinessOrder?cn=vv&goodsId=6ebc94f6834c47d0b475252ff64b19f0',
          },
          status: 3,
          msg: '已完成',
          params: {
            flowPool:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/task/5/10/100014/flowPool_150225285.png',
            taskList:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/task/5/10/100014/taskList_214252029.png',
          },
        },
        {
          taskId: 1,
          title: '进入无限暖暖游戏页面',
          subtitle: '本月完成任务可得流量',
          taskRecordId: '202512080000001144',
          operation: {
            xiaoWoDynamicLinking:
              'https://web.wostore.cn/web/flowGame/index.html?channelId=ALIPAY_android&xw_theme=light&pushid=201&route=GAME&gameId=9n8dde4pszx4y4kq_1&cpid=89169&token=',
            url: 'https://web.wostore.cn/web/flowGame/index.html?channelId=ALIPAY_android&xw_theme=light&pushid=201&route=GAME&gameId=9n8dde4pszx4y4kq_1&cpid=89169&token=78d6d30718914eb69fc5d3addeb97ad6',
          },
          status: 4,
          msg: '已完成',
          params: {
            flowPool:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/task/1/10/100014/flowPool_150145555.png',
            taskList:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/task/1/10/100014/taskList_214213448.png',
          },
        },
        {
          taskId: 7,
          title: '浏览指定联通号卡业务页面10秒',
          subtitle: '本月完成任务可得流量',
          taskRecordId: '202512080000001147',
          operation: {
            url: 'https://txwk.10010.com/kcardorder/gotoUid?state=KCARD_WKPEN_COMMOM_ORDERLAND&pageKey=2fadEA788F&channel=02-0555-bqo6-c8mt&ADTAG=02-0555-bqo6-c8mt&commParam2=channelId=vv',
          },
          status: 3,
          msg: '已完成',
          params: {
            flowPool:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/task/7/10/100014/flowPool_150243821.png',
            taskList:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/task/7/10/100014/taskList_214319661.png',
          },
        },
        {
          taskId: 3,
          title: '进入云游戏集合页',
          subtitle: '本月完成任务可得流量',
          taskRecordId: '202512080000001148',
          operation: {
            xiaoWoDynamicLinking:
              'https://web.wostore.cn/web/flowGame/index.html?channelId=ALIPAY_android&xw_theme=light&pushid=201&route=GAME&gameId=9n8dde4pszx4y4kq_1&cpid=89169&token=',
            url: 'https://web.wostore.cn/web/flowGame/index.html?channelId=ALIPAY_android&xw_theme=light&pushid=201&route=GAME&gameId=9n8dde4pszx4y4kq_1&cpid=89169&token=130cebd8809d43cb92eb2528b81657e0',
          },
          status: 2,
          msg: '完成中',
          params: {
            flowPool:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/task/3/10/100014/flowPool_150208138.png',
            taskList:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/task/3/10/100014/taskList_214232471.png',
          },
        },
        {
          taskId: 2,
          title: '浏览无限暖暖游戏页面10秒',
          subtitle: '本月完成任务可得流量',
          taskRecordId: null,
          operation: {
            xiaoWoDynamicLinking:
              'https://web.wostore.cn/web/flowGame/index.html?channelId=ALIPAY_android&xw_theme=light&pushid=201&route=GAME&gameId=9n8dde4pszx4y4kq_1&cpid=89169&token=',
            url: 'https://web.wostore.cn/web/flowGame/index.html?channelId=ALIPAY_android&xw_theme=light&pushid=201&route=GAME&gameId=9n8dde4pszx4y4kq_1&cpid=89169&token=b01a39967ae34d888e15719147a28d8e',
          },
          status: 1,
          msg: '去完成',
          params: {
            flowPool:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/task/2/10/100014/flowPool_150155408.png',
            taskList:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/task/2/10/100014/taskList_214226362.png',
          },
        },
        {
          taskId: 4,
          title: '浏览云游戏集合页10秒',
          subtitle: '本月完成任务可得流量',
          taskRecordId: null,
          operation: {
            xiaoWoDynamicLinking:
              'https://web.wostore.cn/web/flowGame/index.html?channelId=ALIPAY_android&xw_theme=light&pushid=201&route=GAME&gameId=9n8dde4pszx4y4kq_1&cpid=89169&token=',
            url: 'https://web.wostore.cn/web/flowGame/index.html?channelId=ALIPAY_android&xw_theme=light&pushid=201&route=GAME&gameId=9n8dde4pszx4y4kq_1&cpid=89169&token=e2908c33202c48908e936ecf82cb157d',
          },
          status: 1,
          msg: '去完成',
          params: {
            flowPool:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/task/4/10/100014/flowPool_150215660.png',
            taskList:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/task/4/10/100014/taskList_214241087.png',
          },
        },
        {
          taskId: 6,
          title: '浏览指定流量权益业务页面10秒',
          subtitle: '本月完成任务可得流量',
          taskRecordId: null,
          operation: {
            url: 'alipays://platformapi/startapp?appId=2021005116615665&startMultApp=YES&appClearTop=false&page=pages%2Fdetails%2Findex%3FitemId%3D20250812152441000000020000641149',
          },
          status: 1,
          msg: '去完成',
          params: {
            flowPool:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/task/6/10/100014/flowPool_150234777.png',
            taskList:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/task/6/10/100014/taskList_214312396.png',
          },
        },
        {
          taskId: 8,
          title: '浏览权益特惠业务页面10秒',
          subtitle: '本月完成任务可得流量',
          taskRecordId: null,
          operation: {
            url: 'https://benefit.jujienet.com/benefit/indexP/910777/1004887',
          },
          status: 1,
          msg: '去完成',
          params: {
            flowPool:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/task/8/10/100014/flowPool_150253776.png',
            taskList:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/task/8/10/100014/taskList_214328046.png',
          },
        },
      ],
    },
  };

  return {
    code: 1000,
    msg: '响应信息:调用成功',
    response: {
      status: null,
      msg: '',
      raffleCount: null,
      taskList: [
        {
          taskId: 10,
          title: '首次关注生活号',
          subtitle: '关注生活号',
          taskRecordId: '202509090000000061',
          operation: { url: 'http://p.alipay.com/P/hlbKfqZG' },
          status: 3,
          msg: '已完成/收取',
          params: {
            flowPool:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/task/10/10/100014/flowPool_150309205.png',
          },
        },
        {
          taskId: 1,
          title: '进入无限暖暖游戏页面',
          subtitle: '无限暖暖游戏页',
          taskRecordId: null,
          operation: {
            url: 'https://web.wostore.cn/web/flowGame/index.html?channelId=ALIPAY_android&xw_theme=light&pushid=201&route=GAME&gameId=9n8dde4pszx4y4kq_1&cpid=89169&token=',
          },
          status: 2,
          msg: '去完成',
          params: {
            flowPool:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/task/1/10/100014/flowPool_150145555.png',
          },
        },
        {
          taskId: 2,
          title: '浏览无限暖暖游戏页面10s',
          subtitle: '无限暖暖游戏页',
          taskRecordId: null,
          operation: {},
          status: 2,
          msg: '去完成',
          params: {
            flowPool:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/task/2/10/100014/flowPool_150155408.png',
          },
        },
        {
          taskId: 3,
          title: '进入云游戏集合页',
          subtitle: '云游戏页',
          taskRecordId: null,
          operation: {},
          status: 1,
          msg: '去完成',
          params: {
            flowPool:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/task/3/10/100014/flowPool_150208138.png',
          },
        },
        {
          taskId: 4,
          title: '浏览云游戏集合页10s',
          subtitle: '云游戏页',
          taskRecordId: null,
          operation: {},
          status: 1,
          msg: '去完成',
          params: {
            flowPool:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/task/4/10/100014/flowPool_150215660.png',
          },
        },
        {
          taskId: 5,
          title: '浏览联通宽带业务页面10秒',
          subtitle: '浏览联通宽带业务页面10秒',
          taskRecordId: null,
          operation: {
            url: 'https://gkzx.jujienet.com/broadband-web/broadband/unicomBusinessOrder?cn=vv&goodsId=6ebc94f6834c47d0b475252ff64b19f0',
          },
          status: 1,
          msg: '去完成',
          params: {
            flowPool:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/task/5/10/100014/flowPool_150225285.png',
          },
        },
        {
          taskId: 6,
          title: '浏览指定流量权益业务页面10秒',
          subtitle: '指定页面',
          taskRecordId: null,
          operation: {
            url: 'alipays://platformapi/startapp?appId=2021005116615665&startMultApp=YES&appClearTop=false&page=pages%2Fdetails%2Findex%3FitemId%3D20250812152441000000020000641149',
          },
          status: 1,
          msg: '去完成',
          params: {
            flowPool:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/task/6/10/100014/flowPool_150234777.png',
          },
        },
        {
          taskId: 7,
          title: '浏览指定联通号卡业务页面10秒',
          subtitle: '指定页面',
          taskRecordId: null,
          operation: {},
          status: 1,
          msg: '去完成',
          params: {
            flowPool:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/task/7/10/100014/flowPool_150243821.png',
          },
        },
        {
          taskId: 8,
          title: '浏览权益特惠业务页面10秒',
          subtitle: '指定页面',
          taskRecordId: null,
          operation: {},
          status: 1,
          msg: '去完成',
          params: {
            flowPool:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/task/8/10/100014/flowPool_150253776.png',
          },
        },
        {
          taskId: 9,
          title: '首次收藏VV会员小程序',
          subtitle: '收藏小程序',
          taskRecordId: null,
          operation: {},
          status: 1,
          msg: '去完成',
          params: {
            flowPool:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/task/9/10/100014/flowPool_150300628.png',
          },
        },
        {
          taskId: 11,
          title: '首次订阅消息',
          subtitle: '订阅消息',
          taskRecordId: null,
          operation: {},
          status: 1,
          msg: '去完成',
          params: {
            flowPool:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1028/task/11/10/100014/flowPool_150316072.png',
          },
        },
      ],
    },
  };
};
