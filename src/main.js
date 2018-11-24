// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import '@/assets/styles/common.scss'
import 'reset-css'
import 'github-markdown-css'
import 'material-design-icons/iconfont/material-icons.css';
import plugin from './plugin'
import { getFileName } from '@/utils/index'

Vue.config.productionTip = false
Vue.use(plugin)

const context = require.context('@/components/', true, /index\.*$/)
const componentRouters = context.keys().forEach(url => {
  const name = getFileName(url)
  const path = `/${name}`
  const plugins = ['toast']

  if (plugins.some(plugin => plugin === name)) {
    Vue.use(require(`@/components${path}/index`).default)
  } else {
    Vue.component(`fat-${name}`, require(`@/components${path}/index`).default)
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
