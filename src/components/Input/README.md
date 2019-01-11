> 基于原生的 HTML 标签进行拓展的 Input 组件。

#### Attributes 属性

参数 | 说明 | 类型 | 可选值 | 默认值
--- | --- | --- | --- | ---
type | 类型 | String | text，textarea 和其他 原生 input 的 type 值 | text
prefix-icon | 输入框头部图标 | String | - | -
suffix-icon | 输入框尾部图标 | String | - | -

#### Events 事件

事件名称 | 说明 | 回调函数参数
--- | --- | --- | 
change | 在 Input 值改变时触发 | event
focus | 在 Input 获得焦点时触发 | event
blur | 在 Input 失去焦点时触发 | event