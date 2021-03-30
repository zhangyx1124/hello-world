<template>
  <div class="hello">
    <h1 >{{ msg }}</h1>
    <button @click="toast('点击显示提示')">点击显示提示</button>
    <button @click="showLoad">显示/隐藏 加载动画</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      show:false
    }
  },
  methods:{
    toast(str){
      this.$toast(str)
    },
    showLoad(){
      this.show=!this.show
      this.$loading(this.show,'加载中。。。')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
