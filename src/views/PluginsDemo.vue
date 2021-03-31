<template>
  <div class="plugins">
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
  </div>
</template>
<script>
import ZyxButton from "@/utils/plugins/button/ZyxButton.vue";
export default {
  name: "Plugins",
  components: { ZyxButton },
  data() {
    return { show: false };
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
