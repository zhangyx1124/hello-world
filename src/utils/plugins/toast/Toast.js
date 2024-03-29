import ToastComponent from './Toast.vue'

const Toast = {};

// 注册Toast
Toast.install = function (Vue) {
   
    //Vue.extend返回一个Vue的子类，既然是子类，就没有办法直接通过他使用Vue原型上的方法，所以需要new一个实例出来使用
    const ToastConstructor = Vue.extend(ToastComponent)
    
    // 生成一个该子类的实例
    const instance = new ToastConstructor();

    // 将这个实例挂载在我创建的div上
    // 并将此div加入全局挂载点内部
    //instance实例必须挂载在一个节点上才能进行后续操作
    instance.$mount(document.createElement('div'))
    document.body.appendChild(instance.$el)
    
    // 通过Vue的原型注册一个方法
    // 让所有实例共享这个方法 
    Vue.prototype.$toast = (msg, duration = 2000) => {
        instance.message = msg;
        instance.show = true;

        setTimeout(() => {
            instance.show = false;
        }, duration);
    }
}

export default Toast