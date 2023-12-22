module.exports = (req) => ({
  code: 1000,
  msg: '响应信息:调用成功',
  response: {
    // 1:抽奖活动开始且显示，2:抽奖活动结束但显示，3:抽奖活动结束并隐藏
    // 1 首页展示弹窗，详情页展示弹窗，抽奖页可抽奖
    // 2 详情页展示弹窗，抽奖页可见但是不可抽奖
    // 3 活动下线，关闭所有入口，抽奖页不可见
    status: 1,
    msg: '获取成功',
    params: {
      banner: 'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/newMemberWeek/1002/0/0/banner_181003832.png',
      bigImg: 'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/newMemberWeek/1002/0/0/bigImg_163222491.png',
      detailBigImg:
        'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/newMemberWeek/1002/0/0/detailBigImg_163243946.png',
      smallImg:
        'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/newMemberWeek/1002/0/0/smallImg_163302435.gif',
    },
  },
});
