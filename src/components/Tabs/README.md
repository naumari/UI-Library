> Tabs组件，支持动态删减以及自定义切换。

## Tabs Attributes 属性

参数 | 说明 | 类型 | 可选值 | 默认值
--- | --- | --- | --- | ---
value | 初始化时Tab显示的页 | String | - | -
card | 是否为标签模式 | Boolean | - | false

## Tab Attributes 属性

参数 | 说明 | 类型 | 可选值 | 默认值
--- | --- | --- | --- | ---
label | Tab页的标题 | String | - | *
id | Tab页的id | String / Number | - | *
disabled | 是否禁用 | Boolean | true / false | false
closable | 是否显示关闭按钮（只在标签页情况下） | Boolean | true / false | false

## Events 事件

事件名称 | 说明 | 回调函数参数
--- | --- | --- | 
change | Tab切换后触发 | -
select | Tab选中后触发 | -
