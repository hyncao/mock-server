本说明文档仅列举配置大类，详细配置生效规则请根据字段名前往实际代码中查看覆盖关系。

## 基本配置

+ submitBtn: 配置提交按钮

  + covered： boolean
  是否取消默认读取报文图片作为提交按钮background的逻辑，如若设置为true，配置项中的background将会作为提交按钮的背景图

  + background: string
  在`covered`为`true`时，此字段配置作为提交按钮的背景

  + style: React.CSSProperties
  配置样式, 例如可以给按钮增加`animation`, 内置动画名称请查看`app.less`全局样式。

  + 其他 CustomButton 允许接受的 props

+ submitTag: 配置提交按钮营销标签

  + covered: boolean
  是否取消默认读取报文图片显示逻辑，如若设置为true，配置项中的src将会作为营销标签图

  + src: string
  在`covered`为`true`时，此字段配置作为营销标签的图片

  + style: React.CSSProperties
  配置样式

+ broadcast： 配置播报容器，可以调整style

+ broadcastSwiper： 配置播报，可以传入Taro Swiper组件允许的props进行覆盖

+ rule: 配置会员规则的显示
  
  + text： string
  显示文案

  + arrow: boolean
  是否显示右箭头

  + style: React.CSSProperties
  配置容器样式

+ pageStyle：配置页面容器的样式 类型是React.CSSProperties

+ navigationBar： 配置导航栏，可以传入`my.setNavigationBar` api允许的参数

+ appBackgroundColor： 配置webview的后背景，可以传入 `my.setBackgroundColor` api 允许的参数

+ agreements： 配置协议文案

  + text: string
  e.g. `'开通即同意${1}，会员生效后若离网需先退订'` 其中 ${1} 会被替换为接口请求获得的协议

  + extraAgreements: {name,src}[]
  补充协议，显示在接口获得的所有协议之后

+ group：配置`group`的展示方式

  其每一项包括

  + container 配置group容器，可以配置style、className

  + grid 配置group下各个item的展示方式 可以传入 `components/grid` 组件允许的 props

+ reCheck: 配置办理二次确认 暂只支持月末判断并强制关联次月开通 当月生效按钮 按优先级匹配到一项后即展现弹窗，并不会继续匹配剩余项，

```javascript
  {
    // key值仅用于配置合并，配置时同名覆盖（非整个对象替换）、不同名增加
    '1': {
      // 判断优先级 数字越小 优先级越高
      sortOrder: 1,
      // 月末1天   月末3天则是填 3
      lastDay: 1,
      content: '提示内容',
      title: '标题，可选',
    },
  }
```

+ normalRecommendModal: 配置普通会员推荐弹窗（在尊享版取消签约的时候）

{
  src: string 图片地址
  okRectStyle: React.CSSProperties, 确认按钮热点区域样式
  cancelRectStyle: React.CSSProperties, 取消按钮热点区域样式
  closeRectStyle: React.CSSProperties, 关闭按钮热点区域样式
}


## 特殊配置

+ future: array

future 用以指定一系列特殊时间区间内生效的配置，其每一项基本格式为：

```
{
  startTime: '2021-11-11 00:00:00',
  endTime: '2021-11-11 23:59:59',
  ...
  基本配置
  ...
}
```

工作原理：

当存在future字段时，会优先遍历future字段，检测是否满足每一项中声明的时间，如若满足，将这一项的基本配置与默认配置进行合并。
如若都不满足或者不存在future字段，则将第一层中除了future字段外的所有基本配置与默认配置进行合并