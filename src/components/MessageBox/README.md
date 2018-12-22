> 用于提示用户，完成确认的任务

#### 具体使用
```js
this.$confirm({
    title: "自定义提示",
    content: `<h1 style="color: red;">自定义HTML</h1>`,
    onConfirm: () => this.$message({
        content: "确定"
    }),
    onCancel: () => this.$message({
        type: "warn",
        content: "取消"
    })
});

this.$alert({
    title: "标题名称",
    content: "这是一段内容",
    onConfirm: () =>
    this.$message({
        content: "确定"
    })
});
```

#### Attributes 属性

参数 | 说明 | 类型 | 可选值 | 默认值
--- | --- | --- | --- | ---
title | MessageBox 标题 | String | - | 提示
content | MessageBox 内容 | String / HTML | - | *
confirmButtonText | 确认按钮 文字 | String | - | 确定
cancelButtonText | 取消按钮 文字 | String | - | 取消
cancelClose | 取消确认、取消、关闭点击后的关闭 | Boolean | true / false | false

#### Events 事件

事件名称 | 说明 | 回调函数参数
--- | --- | --- | 
onClose | 当弹窗关闭时触发 | -
onConfirm | 当点击确认按钮时触发 | -
onCancel | 当点击取消按钮时触发 | -
