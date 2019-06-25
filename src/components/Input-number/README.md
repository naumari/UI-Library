> 基于 Input 组件进行拓展的 InputNumber 组件。

#### Attributes 属性

参数 | 说明 | 类型 | 可选值 | 默认值
--- | --- | --- | --- | ---
`value` | 绑定值 | Number | - | -
`min` | 设置计数器允许的最小值 | Number | - | -Infinity
`max` | 设置计数器允许的最大值 | Number | - | Infinity
`disabled` | 是否禁用计数器 | Boolean | - | false
`step` | 计数器步长 | Number | - | 1

#### Events 事件

事件名称 | 说明 | 回调函数参数
--- | --- | --- | 
`change` | 在 Input 值改变时触发 | InputNumber的值
`focus` | 在 Input 获得焦点时触发 | event
`blur` | 在 Input 失去焦点时触发 | event