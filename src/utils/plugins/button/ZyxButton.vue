<template>
  <div class="zyx-btn" :class="color?color:''" @click="handleClick">
    <slot/>
  </div>
</template>
<script>
export default {
  props:{
    color:{
      type:String,
      default:''
    }
  },
  data(){
    return{

    }
  },
  methods:{
   handleClick:function(){
     this.$emit('zyxclick')
   }
  }
}
</script>\
<style lang="scss" scoped>
.zyx-btn{
  padding:5px 10px;
  display:inline-block;
  border:1px solid #999;
  border-radius: 5px;
}
.red{border:1px solid red;}
.green{border:1px solid green;}
.blue{border:1px solid blue;}
</style>