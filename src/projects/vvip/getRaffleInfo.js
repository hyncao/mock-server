const { validToken, validTokenResponse } = require('../../utils');

const raffleGroupType = {
  end: 0, // 月末活动
  middle: 1, // 月中活动
};

module.exports = (req) => {
  if (!validToken(req, 'v2')) {
    return validTokenResponse;
  }
  // 大转盘
  // return {
  //   code: 1000,
  //   msg: '响应信息:调用成功',
  //   response: {
  //     status: 1,
  //     msg: '抽奖活动开始且显示',
  //     raffleGroup: 1,
  //     params: {
  //       arrowImg:
  //         'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/newMemberWeek/1002/0/1/arrowImg_160533795.png',
  //       banner: 'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/newMemberWeek/1002/0/1/banner_105953437.png',
  //       banner1:
  //         'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/newMemberWeek/1002/0/1/banner1_105946049.png',
  //       beltImg:
  //         'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/newMemberWeek/1002/0/1/beltImg_160508498.png',
  //       bg: 'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/newMemberWeek/1002/0/1/bg_145147159.png',
  //       bigImg: 'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/newMemberWeek/1002/0/1/bigImg_164612383.png',
  //       bigImg1:
  //         'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/newMemberWeek/1002/0/1/bigImg1_164643397.png',
  //       btn: 'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/newMemberWeek/1002/0/1/btn_160458157.png',
  //       lightImg:
  //         'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/newMemberWeek/1002/0/1/lightImg_160624787.png',
  //       myPrizeImg:
  //         'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/newMemberWeek/1002/0/1/myPrizeImg_160737954.png',
  //       plateImg:
  //         'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/newMemberWeek/1002/0/1/plateImg_160637006.png',
  //       pointImg:
  //         'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/newMemberWeek/1002/0/1/pointImg_143014550.png',
  //       resultFailImg:
  //         'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/newMemberWeek/1002/0/1/resultFailImg_160807605.png',
  //       ruleBgImg:
  //         'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/newMemberWeek/1002/0/1/ruleBgImg_160726489.png',
  //       ruleBtnImg:
  //         'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/newMemberWeek/1002/0/1/ruleBtnImg_160648190.png',
  //       smallImg:
  //         'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/newMemberWeek/1002/0/1/smallImg_163138343.png',
  //       smallImg1:
  //         'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/newMemberWeek/1002/0/1/smallImg1_163125602.png',
  //       success:
  //         'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/newMemberWeek/1002/0/1/success_160450282.png',
  //       turnImg:
  //         'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/newMemberWeek/1002/0/1/turnImg_142454393.png',
  //     },
  //     raffleItemList: [
  //       {
  //         itemId: 100035,
  //         title: '免费领电动牙刷（送3个刷头）',
  //         subTitle: '魔哒熊电动牙刷1个（送3个刷头）',
  //         params: {
  //           raffleTurntableImg:
  //             'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100035/0/1/raffleTurntableImg_173625030.png',
  //         },
  //       },
  //       {
  //         itemId: 100052,
  //         title: '免费领鼠标垫',
  //         subTitle: '可DIY定制大号鼠标垫',
  //         params: {
  //           raffleTurntableImg:
  //             'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100052/0/1/raffleTurntableImg_173512932.png',
  //         },
  //       },
  //       {
  //         itemId: 100057,
  //         title: '优酷月卡4.6折',
  //         subTitle: '优酷月卡4.6折',
  //         params: {
  //           raffleTurntableImg:
  //             'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100057/0/1/raffleTurntableImg_173726146.png',
  //         },
  //       },
  //       {
  //         itemId: 100049,
  //         title: '免费领手机支架',
  //         subTitle: '可伸缩折叠手机支架1个',
  //         params: {
  //           raffleTurntableImg:
  //             'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100049/0/1/raffleTurntableImg_173448658.png',
  //         },
  //       },
  //       {
  //         itemId: 100038,
  //         title: '免费领爱奇艺会员月卡',
  //         subTitle: '爱奇艺会员',
  //         params: {
  //           raffleTurntableImg:
  //             'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100038/0/1/raffleTurntableImg_173402517.png',
  //         },
  //       },
  //       {
  //         itemId: 100039,
  //         title: '免费领优酷会员月卡',
  //         subTitle: '优酷月卡',
  //         params: {
  //           raffleTurntableImg:
  //             'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100039/0/1/raffleTurntableImg_173700874.png',
  //         },
  //       },
  //       {
  //         itemId: 100040,
  //         title: '免费领腾讯会员月卡',
  //         subTitle: '腾讯视频月卡',
  //         params: {
  //           raffleTurntableImg:
  //             'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100040/0/1/raffleTurntableImg_173542281.png',
  //         },
  //       },
  //       {
  //         itemId: 100042,
  //         title: '免费领哔哩哔哩会员月卡',
  //         subTitle: 'B站大会员',
  //         params: {
  //           raffleTurntableImg:
  //             'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100042/0/1/raffleTurntableImg_173314350.png',
  //         },
  //       },
  //     ],
  //     rule: '一、活动玩法\\n1.活动时间: 2024.5.10 10:00-2024.5.16 23:59;\\n2.参与用户: 开通了VV会员的联通用户；\\n3.活动期间，保持VV会员开通状态可得1次抽奖机会；或完成任务列表中的任务，可得相应的抽奖机会，目前每人活动期间至多可得4次抽奖机会。\\n二、活动注意事项：\\n1.同一用户在活动期间最多可获得4次抽奖机会，同一身份证号、同一支付宝账号、同一手机号码、同一设备终端，满足以上任一条件均视为同一用户；\\n2.如出现不可抗力或情势变更的情况，如自然灾害等，活动承办方可免于承担责任;\\n3.本活动承办方为上海聚杰网络科技有限公司，如对本活动有疑问，可联系客服电话：4006660993。\\n三、奖品内容及说明\\n1.视频会员月卡：\\n（1）视频会员分为爱奇艺、腾讯、优酷、哔哩哔哩4种类型。\\n（2）共计666份，限时7天，活动期间每日均有机会抽中。\\n（3）若已开通所抽中的视频会员，权益有效期自动延长1个月。\\n（4）仅支持手机号作为账号办理，一旦提交无法修改，请在办理前再次确认无误。\\n2.实物奖品：\\n（1)有效期3天，领取后请至抽奖活动页底部-我的奖品查看并使用;\\n（2)奖品使用规则可在奖品详情页查看，若有疑问可咨询页面-在线客服咨询。\\n请用户务必慎审阅读以上规则条款，请在确保已经清楚了解并认可相关活动规则定义、内容以及法律后果后自行决定是否参与本活动。如你不同意本规则的任意内容，或无法准确理解规则条款，请勿参加规则对应页面的活动。如用户实际参与了活动，则视为同意并认可本规则。',
  //   },
  // };

  // 九宫格
  return {
    code: 1000,
    msg: '响应信息:调用成功',
    response: {
      status: 1,
      msg: '抽奖活动开始且显示',
      raffleGroup: raffleGroupType.end,
      params: {
        banner: 'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/newMemberWeek/1002/0/0/banner_181003832.png',
        bg: 'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/newMemberWeek/1002/0/0/bg_153951221.png',
        bigImg: 'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/newMemberWeek/1002/0/0/bigImg_154829795.png',
        bigImg1:
          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/newMemberWeek/1002/0/0/bigImg_154829795.png',
        bottom: 'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/newMemberWeek/1002/0/0/bottom_154022532.png',
        btn: 'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/newMemberWeek/1002/0/0/btn_154034647.png',
        center: 'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/newMemberWeek/1002/0/0/center_154053834.png',
        detailBigImg:
          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/newMemberWeek/1002/0/0/detailBigImg_154754451.png',
        gif: 'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/newMemberWeek/1002/0/0/gif_161637067.gif',
        icon1: 'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/newMemberWeek/1002/0/0/icon1_161650461.png',
        icon2: 'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/newMemberWeek/1002/0/0/icon2_161705789.png',
        picked: 'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/newMemberWeek/1002/0/0/picked_161756422.png',
        'prize-title':
          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/newMemberWeek/1002/0/0/prize-title_161807958.png',
        'rule-title':
          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/newMemberWeek/1002/0/0/rule-title_161828474.png',
        smallImg: 'https://chaac.oss-cn-hangzhou.aliyuncs.com/vvip/static/2024-05/banner-end.png',
        smallImg1: 'https://chaac.oss-cn-hangzhou.aliyuncs.com/vvip/static/2024-05/banner-middle.png',
        success:
          'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/newMemberWeek/1002/0/0/success_161836349.png',
      },
      raffleItemList: [
        {
          itemId: 100035,
          title: '免费领电动牙刷（送3个刷头）',
          subTitle: '魔哒熊电动牙刷1个（送3个刷头）',
          params: {
            raffleListImg:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100035/0/0/raffleListImg_162410150.png',
            raffleTurntableImg:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100035/0/0/raffleTurntableImg_184340692.png',
          },
        },
        {
          itemId: -1,
          title: 'iphone15',
          subTitle: 'iphone15',
          params: {
            raffleTurntableImg:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/-1/0/0/raffleTurntableImg_102936619.png',
          },
        },
        {
          itemId: 100054,
          title: '免费暖手宝',
          subTitle: '恒温猫爪暖手宝（粉色白色任选）',
          params: {
            raffleListImg:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100054/0/0/raffleListImg_162942402.png',
            raffleTurntableImg:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100054/0/0/raffleTurntableImg_104948078.png',
          },
        },
        {
          itemId: 100045,
          title: 'VV会员免单权益',
          subTitle: '下个月免会费，领取后无需操作',
          params: {
            raffleListImg:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100045/0/0/raffleListImg_162808588.png',
            raffleTurntableImg:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100045/0/0/raffleTurntableImg_182838090.png',
          },
        },
        {
          itemId: 100052,
          title: '免费领鼠标垫',
          subTitle: '可DIY定制大号鼠标垫',
          params: {
            raffleListImg:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100052/0/0/raffleListImg_163017368.png',
            raffleTurntableImg:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100052/0/0/raffleTurntableImg_184422504.png',
          },
        },
        {
          itemId: 100057,
          title: '优酷月卡4.6折',
          subTitle: '优酷月卡4.6折',
          params: {
            raffleListImg:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1020/item/100057/0/0/raffleListImg_191647445.png',
            raffleTurntableImg:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100057/0/0/raffleTurntableImg_184355538.png',
          },
        },
        {
          itemId: 100049,
          title: '免费领手机支架',
          subTitle: '可伸缩折叠手机支架1个',
          params: {
            raffleListImg:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100049/0/0/raffleListImg_104853466.png',
            raffleTurntableImg:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100049/0/0/raffleTurntableImg_104921881.png',
          },
        },
        {
          itemId: 100046,
          title: '88元话费红包',
          subTitle: '88元话费红包',
          params: {
            raffleListImg:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100046/0/0/raffleListImg_162501095.png',
            raffleTurntableImg:
              'https://chaac.oss-cn-hangzhou.aliyuncs.com/metaValue/1021/item/100046/0/0/raffleTurntableImg_183123005.png',
          },
        },
      ],
      rule: '一、活动玩法\\n1.活动时间: 2024.3.26 00:00-2024.3.31 23:59;\\n2.参与用户: 开通了VV会员的联通用户；\\n3.活动期间，保持VV会员开通状态可得1次抽奖机会；或完成任务列表中的任务，可得相应的抽奖机会，目前每人活动期间至多可得4次抽奖机会。\\n二、活动注意事项：\\n1.同一用户在活动期间最多可获得4次抽奖机会，同一身份证号、同一支付宝账号、同一手机号码、同一设备终端，满足以上任一条件均视为同一用户；\\n2.如出现不可抗力或情势变更的情况，如自然灾害等，活动承办方可免于承担责任;\\n3.本活动承办方为上海聚杰网络科技有限公司，如对本活动有疑问，可联系客服电话：4006660993。\\n三、奖品内容及说明\\n1.iPhone 15：\\n（1）手机型号：黑色，256GB\\n（2）抽中权益后，用户请在3日内根据页面指示填写相关信息（如地址、联系人、电话号码等，具体以页面展示为准），领奖信息一旦提交后无法修改。若中奖后超过3日用户未在相关页面提交领奖信息将导致无法领取。\\n（3）奖品将在活动结束后的【15】个工作日内安排发货，寄送地址为用户填写地址，同时请确保电话号码畅通有效。\\n（4）奖品相关领取、使用疑问，请联系客服咨询，电话：4006660993。\\n2.VV会员免单：\\n（1）抽中免单权益下月会员费自动免去（1个月会员费），用户无需操作；\\n（2）若用户当月发起退订，抽中的免单权益将无法使用；\\n（3）若因用户套餐变更导致VV会员续订失败，抽中的免单权益将无法使用；\\n（4）权益不可转让，如有疑问，可联系客服咨询，电话：4006660993。\\n3.话费红包：\\n（1）有效期3天，领取后请至你的支付宝卡包查看并使用;\\n（2）红包仅限在支付宝客户端充值中心充话费时使用；\\n（3）若使用的红包交易发生退款，红包将退回到原支付宝账号，使用有效期不变，退还红包在原有效期内可继续使用；如在原有效期外，则红包失效，不再支持继续使用；\\n（4）红包相关领取、使用疑问，请联系客服咨询，电话：4006660993。\\n4.实物奖品：\\n（1)有效期3天，领取后请至抽奖活动页底部-我的奖品查看并使用;\\n（2)奖品使用规则可在奖品详情页查看，若有疑问可咨询页面-在线客服咨询。\\n请用户务必慎审阅读以上规则条款，请在确保已经清楚了解并认可相关活动规则定义、内容以及法律后果后自行决定是否参与本活动。如你不同意本规则的任意内容，或无法准确理解规则条款，请勿参加规则对应页面的活动。如用户实际参与了活动，则视为同意并认可本规则。',
    },
  };
  return {
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
  };
};
