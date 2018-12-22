> 读取本地文件,支持多种上传方式,以及多个上传。

#### 具体使用
```html
<!-- 基础用法 -->
<fat-filereader
    accept=".png, .jpg"
    :size="500 * 1024"
    @success="event => readHandler(event, 'file')"
    @error="errorHandler"
/>

<!-- 自定义上传区域 -->
<fat-filereader @success="event => readHandler(event, 'otherFile')">
    <div slot="clickarea" class="upload-area">
        <fat-icon class="icon" name="cloud_upload" size="24"/>
    </div>
</fat-filereader>

<!-- 拖拽上传 -->
<fat-filereader dragable @success="event => readHandler(event, 'anotherFile')">
    <div slot="clickarea" class="upload-area">
        <fat-icon class="icon" name="cloud_upload" size="24"/>
    </div>

    <span v-if="anotherFile.name">已上传：{{ anotherFile.name }}</span>
</fat-filereader>

<!-- 上传多个文件 -->
<fat-filereader multiple :limit="5" @success="multipleHandler" @error="errorHandler"/>
```

#### Attributes 属性

参数 | 说明 | 类型 | 可选值 | 默认值
--- | --- | --- | --- | ---
size | 上传文件的大小 | Number | - | 0
limit | 上传文件个数的限制 | Number | - | 1
disabled | 是否禁用状态	 | Boolean | true/false | false
dragable | 是否可拖拽上传 | Boolean | true/false | false
accept | 上传文件类型限制 | String | - | -
multiple | 是否允许上传多个文件 | Boolean | true/false | false

#### Events 事件

事件名称 | 说明 | 回调函数参数
--- | --- | --- | 
success | 上传成功时触发 | files data
error | 上传失败时触发 | files error info 