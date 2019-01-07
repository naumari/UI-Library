> 基于原生的 HTML 标签进行拓展的 Input 组件

#### 具体使用
```html
<!-- 基础用法 -->
<fat-input placeholder="请输入内容" v-model="inputValue" />

<!-- 复合型输入框 -->
<fat-input placeholder="请输入内容">
    <template slot="prepend">
        <div class="prepend-part c-size-s">Http://</div>
    </template>

    <template slot="append">
        <div class="append-part c-size-s">.com</div>
    </template>
</fat-input>
```

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