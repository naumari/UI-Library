> Tabs组件，支持动态删减以及自定义切换。

#### 具体使用
```html
<!-- 基础用法 -->
<fat-tabs v-model="otherTabActive">
    <fat-tab label="Tab 1" id="tab1">Content of Tab Pane 1</fat-tab>
    <fat-tab label="Tab 2" id="tab2" disabled>Content of Tab Pane 2</fat-tab>
    <fat-tab label="Tab 3" id="tab3">Content of Tab Pane 3</fat-tab>
    <fat-tab label="Tab 4" id="tab4">Content of Tab Pane 4</fat-tab>
</fat-tabs>

<!-- 卡片模式 -->
<fat-tabs v-model="tab" card>
    <fat-tab label="Tab 1" id="tab1">Content of Tab Pane 1</fat-tab>
    <fat-tab label="Tab 2" id="tab2" closable>Content of Tab Pane 2</fat-tab>
    <fat-tab label="Tab 3" id="tab3">Content of Tab Pane 3</fat-tab>
    <fat-tab label="Tab 4" id="tab4">Content of Tab Pane 4</fat-tab>
</fat-tabs>
```

#### Tabs Attributes 属性

参数 | 说明 | 类型 | 可选值 | 默认值
--- | --- | --- | --- | ---
value | 初始化时Tab显示的页 | String | - | -
card | 是否为标签模式 | Boolean | - | false

#### Tab Attributes 属性

参数 | 说明 | 类型 | 可选值 | 默认值
--- | --- | --- | --- | ---
label | Tab页的标题 | String | - | *
id | Tab页的id | String / Number | - | *
disabled | 是否禁用 | Boolean | true / false | false
closable | 是否显示关闭按钮（只在标签页情况下） | Boolean | true / false | false

#### Events 事件

事件名称 | 说明 | 回调函数参数
--- | --- | --- | 
change | Tab切换后触发 | -
select | Tab选中后触发 | -
