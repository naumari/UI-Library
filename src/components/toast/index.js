import Vue from 'vue';
import Toast from './toast.vue';
/* 
    设计模型：Toast组件的生命周期中包含它本身在页面中的挂载与销毁,在组件外构建一层代理并提供相关方法用于调用 
    其中组件本身dom以及style被封装，只能改变props
*/
/* 定义常量以及获取Toast组件相关的Props */
const types = ['normal', 'warn', 'success', 'error', 'info'];
const ToastConstructor = Vue.extend(Toast);
const verticalOffset = 16;
let toastPlugin = {};
let instances = [];
let initIndex = 0;
let requireProps = Object.keys(Toast.props).filter(
  elem => Toast.props[elem].required
);
/* 初始化每个toast对象在页面中的垂直属性 */
function initVerticalOffset(position) {
  let typeInstances = instances.filter(item => item.position === position);
  return typeInstances.reduce(
    (sum, elem) => elem.$el.offsetHeight + sum + verticalOffset,
    verticalOffset
  );
}
/* 更新每个toast对象在页面中的垂直属性 */
function updateVerticalOffset(removeInstance) {
  let index = 0;
  let removeHeight = removeInstance.verticalOffset;

  for (; index < instances.length; index++) {
    if (instances[index].id === removeInstance.id) break;
  }
  instances.splice(index, 1);

  for (; index < instances.length; ++index) {
    if (instances[index].position === removeInstance.position) {
      [instances[index].verticalOffset, removeHeight] = [
        removeHeight,
        instances[index].verticalOffset,
      ];
    }
  }
}
/* 构造单个toast */
function generateInstance(options) {
  let instance = new ToastConstructor({
    propsData: options,
  }).$mount(document.createElement('div'));
  if (typeof options.onClose === 'function') instance.onClose = options.onClose;
  //计算instance verticalOffset
  let id = 'toast_' + initIndex++;
  instance.id = id;
  instance.verticalOffset = initVerticalOffset(instance.position);

  //监听组件close
  instance.$once('toastClose', function () {
    const curInstance = this;
    updateVerticalOffset(curInstance);
    typeof curInstance.onClose === 'function' && curInstance.onClose();
  });
  return instance;
}

toastPlugin.install = function (Vue) {
  Vue.prototype.$toast = (options = {}) => {
    requireProps.forEach(elem => {
      if (!options[elem]) throw `err: options lack ${elem} prop`;
    });
    if (options.type && !types.some(elem => elem === options.type))
      throw `err: toast not exist ${options.type} type`;

    /* 将单个toast存入队列中 */
    let instance = generateInstance(options);
    instances.push(instance);
  };
};

export default toastPlugin;
