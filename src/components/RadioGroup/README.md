> Radio的单选框，互斥选项。

#### 具体使用
```html
<!-- 基础用法 -->
<fat-slider v-model="value" :min="20" :max="40" step="5"/>

<!-- 自定义初始值 -->
<fat-slider v-model="initValue"/>

<!-- 隐藏Tooltip -->
<fat-slider v-model="value" :show-tooltip="false"/>

<!-- Disabled -->
<fat-slider disabled/>
```

#### Attributes 属性

参数 | 说明 | 类型 | 可选值 | 默认值
--- | --- | --- | --- | ---
showTooltip | 是否显示 tooltip | Boolean | - | false
disabled | 是否禁用 | Boolean | - | false
min | 最小值 | Number | - | *
max | 最大值 | Number | - | *
step | 步长 | Number | - | 1

#### Events 事件

事件名称 | 说明 | 回调函数参数
--- | --- | --- | 
change | 滑动后触发 | -
input | 滑动时触发 | -
