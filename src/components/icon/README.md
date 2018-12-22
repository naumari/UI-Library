> 基于material-design-icons构造的图标组件
> 
> 具体icon类型，参考[material-design-icons-图标库](https://material.io/tools/icons/?icon=important_devices&style=baseline)

#### 具体使用
```html
<!-- 不同类型的图标 -->
<fat-icon name="backup" size="32"/>

<!-- 可调整大小 -->
<fat-icon name="done_all" size="16"/>

<!-- 可调整样式 -->
<fat-icon class="icon" name="done_all" size="16"/>
```

#### Attributes 属性

参数 | 说明 | 类型 | 可选值 | 默认值
--- | --- | --- | --- | ---
name | 指定图标类型 | String | - | *
size | 图标大小 | String/Number | - | *