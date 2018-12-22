> 与 Toast 的区别是后者更多用于系统级通知的被动提醒，常用于后台报错等情景。

#### 具体使用
```js
this.$message({
    type,
    content,
    verticalOffset,
    onClose() {
        console.log("close");
    }
});
```

#### Attributes 属性

参数 | 说明 | 类型 | 可选值 | 默认值
--- | --- | --- | --- | ---
type | Message 类型 | "info" / "success" / "warn" / "error" | "info"
content | Message 内容 | String / HTML | - | *
duration | Message 持续时间 | Number | - | 2000
verticalOffset | Message 垂直偏移量 | Number | - | 32

#### Events 事件

事件名称 | 说明 | 回调函数参数
--- | --- | --- | 
onClose | 当Message关闭时触发 | -