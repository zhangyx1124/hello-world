import Vue from 'vue'

Vue.directive('permission', {
  bind: function () {},

  // 在绑定元素插入父元素生命周期触发
  inserted: function (el, binding, vnode) { // 自定义指令中无法使用this获取vue实例，但是vnode绑定在实例上下文，所以使用vnode.context可以解决这个问题。
    let permissionList = vnode.context.$store.state.permissionList
    // console.log("permisstion", permissionList)
    // binding.value获取到你使用该自定义指令绑定的值
    if (! permissionList.includes(binding.value)) {
      el.remove()
    }
  },
  update: function () {},
  componentUpdated: function () {},
  unbind: function () {}
})
