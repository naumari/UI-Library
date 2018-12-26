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

<!-- vnode分隔符 -->
<fat-breadcrumb
    :separator-component="separatorComponent"
    :paths="[
        { name: '首页', to: '/' },
        { name: '面包屑', to: '/Breadcrumb' },
        { name: '标签页', to: '/Tabs' }
    ]"
/>
```

#### Attributes 属性

参数 | 说明 | 类型 | 可选值 | 默认值
--- | --- | --- | --- | ---
paths | Breadcrumb的路径 | Array | - | []
separator | Breadcrumb各个路径之间的分隔符 | String | - | /
separatorComponent | Breadcrumb各个路径之间的分割组件 | Object | - | -