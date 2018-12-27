> 易拓展的提示框。

#### 具体使用
```html
<fat-hovertip type="right-center">
    <template slot="hover-part">展示图片</template>
    <template slot="tip-part">
        <img src="http://img5.imgtn.bdimg.com/it/u=2291808233,1250989260&fm=26&gp=0.jpg" alt>
    </template>
</fat-hovertip>
```

#### Attributes 属性

参数 | 说明 | 类型 | 可选值 | 默认值
--- | --- | --- | --- | ---
type | 提示框展示方向 | String | top-center、bottom-center、right-center、left-center | top-center