import { App } from 'vue'
export default {
  install: (app: App, options: any) => {

    //   app.config.globalProperties.$translate = key => {
    //     return key.split('.').reduce((o, i) => {
    //       if (o) return o[i]
    //     }, options)
    //   }

    //   app.provide('i18n', options)

    // app.directive('my-directive', {
    //     mounted (el, binding, vnode, oldVnode) {
    //       // some logic ...
    //     }
    //     ...
    //   })

    //   app.mixin({
    //     created() {
    //       // some logic ...
    //     }
    //     ...
    //   })
  }
}

import Basic from './components/Basic.vue'

export { Basic }