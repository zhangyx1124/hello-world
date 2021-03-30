import LoadingComponent from './Loading.vue'
const Loading={};

Loading.install=function(Vue){
  const newConstruct=Vue.extend(LoadingComponent)
  const instance2=new newConstruct();
  instance2.$mount(document.createElement('div'))
  document.body.appendChild(instance2.$el)

  Vue.prototype.$loading=(show=true,msg='')=>{
    instance2.show=show;
    instance2.message=msg
   
  }
}
export default Loading;