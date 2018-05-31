// 引入组件
import SjDialog from './common/SjDialog'
import SjInputSearch from './common/SjInputSearch'

const commComps = {
  // install 是默认的方法。当外界在 use 这个组件的时候，就会调用本身的 install 方法，同时传一个 Vue 这个类的参数。
  install (Vue) {
    Vue.component('SjDialog', SjDialog)
    Vue.component('SjInputSearch', SjInputSearch)
  }
}

export default commComps
