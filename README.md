# Fat ui-library

> 在经历过多个业务场景后，总结出的一套简单、易扩展的组件库。

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# check for finding duplicated code blocks
npm run check
```

<hr/>

> 特性

* 组件容易扩展，可进行二次封装；
* 每个组件包含对应的开发文档，方便debug。

<hr/>

> 开发规范

* Style

  参考<span style="color: #666;">[BEM 命名规范](https://www.w3cplus.com/css/bem-definitions.html)</span>进行的魔改自定义：）。

  * 外层：最外层为组件块（Block），命名规范为（组件名），例如 `button`（一般一到两个单词，利用`-`连接）；

  * 子元素：利用`__`符号连接，例如 `table` 组件存在 `head` 以及 `body`，则表示为 `table__head`，以及 `tabel__body`，如果依次往下还存在着子元素，则利用上层元素的来命名 `body__head`；

  * 状态：利用 vue 动态class 结合 sass 

    `:class="['table', { 'is-stripe': stripe }]"`

    ```scss
    .table {
      // 或 have-..
      &.is-stripe {
        .table__body {
          ...
        }
      }
    }
    ```

* JavaScript

  todo 补充



<hr/>

>开发文档

+ [从零实现Vue的组件库（零）- 基本结构以及构建工具](https://juejin.im/post/5c0b8ece5188254f9e2809fe)
+ [从零实现Vue的组件库（一）- Toast 实现](https://juejin.im/post/5c036e4fe51d451b80257c45)
+ [从零实现Vue的组件库（二）- Slider 实现](https://juejin.im/post/5c19ff516fb9a049cb18b0f8)
+ [从零实现Vue的组件库（三）- Tabs 实现](https://juejin.im/post/5c20430c6fb9a049eb3befaa)
+ [从零实现Vue的组件库（四）- File-Reader 实现](https://juejin.im/editor/posts/5c218af3f265da61570580a1)
+ [从零实现Vue的组件库（五）- Breadcrumb 实现](https://juejin.im/post/5c22df8b5188253ff14792b3)
+ [从零实现Vue的组件库（六）- Hover-Tip 实现](https://juejin.im/post/5c249e396fb9a049b506dfc6)
+ [从零实现Vue的组件库（七）- Message-Box 实现](https://juejin.im/post/5c2593b7e51d4535c926774f)
+ [从零实现Vue的组件库（八）- Input 实现](https://juejin.im/post/5c2b1d1d6fb9a04a07307849)
+ [从零实现Vue的组件库（九）- InputNumber 实现](https://juejin.im/post/5c2d9a49f265da6169175ae7)
+ [从零实现Vue的组件库（十）- Select 实现](https://juejin.im/post/5c47d524e51d457d105d0e80)
+ [从零实现Vue的组件库（十一）- Date-picker 实现](https://juejin.im/post/5c482afc6fb9a04a027ab233)
+ [从零实现Vue的组件库（十二）- Table 实现](https://juejin.im/post/5c4aa685518825254e4d48e8)
+ [从零实现Vue的组件库（十三）- Pagination 实现](https://juejin.im/post/5c53a9d3518825246b1013e4)
+ [从零实现Vue的组件库（十四）- RadioGroup 实现](https://juejin.im/post/5c58d62ee51d457fc440edb7)
+ [从零实现Vue的组件库（十五）- CheckboxGroup 实现](https://juejin.im/post/5c6277975188256284529024)
+ [从零实现Vue的组件库（十六）- Dropdown 实现](https://juejin.im/post/5ca1833a5188256a9e1bf8a7)