> 当数据过多时，使用翻页器来进行数据的展示。

#### Attributes 属性

参数 | 说明 | 类型 | 可选值 | 默认值
--- | --- | --- | --- | ---
`value` | v-model所绑定的值 | Number | - | 1
`total` |  | 总条目数 | Number | -
`pageCount` | 页码按钮的数量，当总页数超过该值时会折叠 | Number | 大于等于 5 且小于等于 21 的奇数 | 7
`pageSize` | 每页显示个数选择器的选项设置 | Number | - | 10
`background` | 是否为分页按钮添加背景色 | Boolean | true/false | false

#### Events 事件

事件名称 | 说明 | 回调函数参数
--- | --- | --- | 
`change` | 在 Pagination 值改变时触发 | current page