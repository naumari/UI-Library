import Message from './message'

export default {
    install (Vue) {
        const constructor = Vue.extend(Message)
        let instance = null
        let initIndex = 0

        function generateInstance (options) {
            let instance = new constructor({
                propsData: options
            }).$mount(document.createElement('div'))
            if (typeof options.onClose === 'function') instance.onClose = options.onClose

            let id = 'message' + initIndex++
            instance.id = id

            instance.$once('messageClose', function () {
                const curInstance = this
                typeof curInstance.onClose === 'function' && curInstance.onClose()
            })
            return instance
        }

        Vue.prototype.$message = (options = {}) => {
            instance && instance.$destroy()
            instance = generateInstance(options)
        }
        Vue.prototype.$closeMessage = () => {
            instance && instance.$destroy()
        }
    }
}
