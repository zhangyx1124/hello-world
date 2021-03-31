import EmptyComponent from './Empty.vue'

const Empty = {}

Empty.install = function (Vue) {
  Vue.component('empty', EmptyComponent)
}
export default Empty
