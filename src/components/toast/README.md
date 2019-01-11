> 用于提示、通知的空间。

#### 具体使用
```js
this.$toast({
    content: `Content ${selector}`,
    position: `top-right`,
    autoClose: true,
    onClose() {
        ...event handler
    }
});
```

#### Attributes 属性

参数 | 说明 | 类型 | 可选值 | 默认值
--- | --- | --- | --- | ---
type | toast提示类型 | String | normal, info, warn, success, error | normal
title | 弹窗标题 | String | - | *
content | 弹窗内容 | String | - | *
autoClose | 是否允许自动关闭 | Boolean | true / false | true
duration | 允许自动关闭后弹窗停留时长，单位ms | Number | - | 2500
position | 弹窗在页面的位置 | String | top-left, top-right | top-right
showClose | 是否允许用户关闭 | Boolean | true / false | true

#### Events 事件

事件名称 | 说明 | 回调函数参数
--- | --- | --- | 
onClose | 当弹窗关闭时触发 | -
