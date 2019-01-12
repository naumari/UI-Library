

# ui-library

> ui components library

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
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

> css standard

```css
基本样式类
/* char style 以照 c-style-size 或 c-style为规范， 例如字体大小 */
.c-size-s {
    font-size: $font-size-s;
}
.c-size-m {
    font-size: $font-size-m;
}
.c-bold {
    font-weight: 600;
}

z-index规范

/* 基础布局 */
1 -> 100
/* popup box */
101 -> 200

message-box => 101
Toast => 102
message => 103
```