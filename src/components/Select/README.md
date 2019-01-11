> 基于原生的 HTML 标签进行拓展的 Input 组件

#### Attributes 属性

参数 | 说明 | 类型 | 可选值 | 默认值
--- | --- | --- | --- | ---
placeholder | 占位符 | String | - | 请选择
optionKey | 作为 value 唯一标识的键名，绑定值为对象类型时必填 | String | - | value
disabled | 是否禁用 | Boolean | true/false | true
multiple | 是否多选 | Boolean | true/false | false
collapseTags | 是否缩略已选项 | Boolean | true/false | true

#### Events 事件

事件名称 | 说明 | 回调函数参数
--- | --- | --- | 
change | 在 Input 值改变时触发 | event
focus | 在 Input 获得焦点时触发 | event
blur | 在 Input 失去焦点时触发 | event