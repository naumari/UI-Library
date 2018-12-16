import Vue from 'vue'
import messageBox from './messagebox.vue'
/* 
    设计模型：Toast组件的生命周期中包含它本身在页面中的挂载与销毁,在组件外构建一层代理并提供相关方法用于调用 
    其中组件本身dom以及style被封装，只能改变props
*/
/* 定义常量以及获取Toast组件相关的Props */
const Constructor = Vue.extend(messageBox)

function generateInstance(options, type = 'alert') {
  let instance = new Constructor({
    propsData: Object.assign(options, {
      type
    }),
  }).$mount(document.createElement('div'))

  instance.onConfirm = options.onConfirm
  instance.onCancel = options.onCancel
  instance.onClose = options.onClose

  if (typeof options.onConfirm === 'function') {
    instance.onConfirm = options.onConfirm
    instance.$on('confirm', function () {
      instance.onConfirm()
    })
  }

  if (typeof options.onCancel === 'function') {
    instance.onCancel = options.onCancel
    instance.$on('cancel', function () {
      instance.onCancel()
    })
  }

  if (typeof options.onClose === 'function') {
    instance.onClose = options.onClose
    instance.$on('close', function () {
      instance.onClose()
    })
  }
  
  return instance
}

export default {

  install(Vue) {
    Vue.prototype.$alert = (options = {}) => generateInstance(options)
    Vue.prototype.$confirm = (options = {}) => generateInstance(options, 'confirm')
  }
}
