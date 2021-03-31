<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <span>插件示例（方法调用）：</span>
      <button @click="toast('点击显示提示')">点击显示提示</button>
      <button @click="showLoad">显示/隐藏 加载动画</button>
    </div>
    <empty />
    <div>
      <span>插件示例（组件调用）：</span>
      <zyx-button @zyxclick="clickBtn" color="green">button</zyx-button>
      <zyx-button @zyxclick="toast('点击显示提示')">点击显示提示</zyx-button>
    </div>
    <empty />
    <div>
      <span>自定义指令：</span>
      <input v-focus />
    </div>

    <count-store />
    <empty />
    <div>通过指令设置权限</div>
    <ul>
      <li v-for="(item, index) in dataList" :key="index" v-permission="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import ZyxButton from "../utils/plugins/button/ZyxButton.vue";
import CountStore from "./CountStore.vue";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: { CountStore, ZyxButton },
  data() {
    return {
      show: false,
      dataList: ["one", "twww", "three", "www", "asdad"],
    };
  },
  methods: {
    toast(str) {
      this.$toast(str);
    },
    showLoad() {
      this.show = !this.show;
      this.$loading(this.show, "加载中。。。");
    },
    clickBtn() {
      console.log("zyxclick");
    },
  },
};
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
