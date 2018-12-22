> 基于Vue-router实现的面包屑。

#### 具体使用
```html
<!-- 基础用法 -->
<fat-breadcrumb
    separator="/"
    :paths="[
        {name: '首页', to: '/'},
        {name: '面包屑', to: '/Breadcrumb'},
        {name: '标签页', to: '/Tabs'}
    ]"
/>

<!-- 图标分隔符 -->
<fat-breadcrumb
    separator-icon="keyboard_arrow_right"
    :paths="[{ name: '首页', to: '/' }, { name: '面包屑', to: '/Breadcrumb' }, { name: '标签页', to: '/Tabs' }]"
/>
```

#### Attributes 属性

参数 | 说明 | 类型 | 可选值 | 默认值
--- | --- | --- | --- | ---
size | button尺寸类型 | String | mini, small, medium, large | medium
type | button形式类型 | String | primary, success, warning, error, text, normal | normal
disabled | 是否禁用状态	 | boolean | - | false

#### Events 事件

事件名称 | 说明 | 回调函数参数
--- | --- | --- | 
onClick | 当点击button时触发 | -