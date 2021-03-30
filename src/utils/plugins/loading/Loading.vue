<template>
<transition name="fade">
  <div v-show="show" class="fixed_style">
    <div class="circle" ></div>
    <div class="load_text">{{message}}</div>
  </div>
  </transition>
</template>
<script>
export default{
  data(){
    return{
      show:false,
      message: ""
    }
  }
}
</script>
<style lang="scss" scoped>
.fixed_style{
position:fixed;
left:calc(50% - 30px);
  top:calc(50% - 30px);
}
.circle{
  
  
border-radius: 50%;
  width: 60px;
  height:60px;
  border:2px solid #ccc;
  border-left-color: rgb(235, 89, 45);
  border-top-color: rgb(235, 89, 45);
  animation-name: kf;
  animation-duration: 600ms;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
.load_text{
  position:relative;
  top:10px
}
@keyframes kf{
 from{transform:rotate(0deg);}
 to{transform:rotate(360deg);}
}
.fade-enter-active,
.fade-leave-active {
  transition: 0.3s ease-out;
}
.fade-enter,.fade-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
</style>
