
<template>
  <div class="layout">
    <div class="header">header</div>
    <div class="content">
      <el-menu default-active="Home" class="menu" @select="handleSelect">
        <Submenu :routeList="routeList" />
      </el-menu>
      <!-- 子路由出口 -->
      <div class="contener">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import Submenu from "./Submenu.vue";
export default {
  name: "Layout",
  components: { Submenu },
  data() {
    return {
      routeList: this.$router.options.routes[0].children,
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log("menu----", key, keyPath);
      console.log("router", this.$route);
      if (this.$route.name != key) {
        this.$router.push({ name: key });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
  .header {
    height: 60px;
    line-height: 60px;
    font-size: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: rgb(143, 134, 134);
  }
  .content {
    height: calc(100% - 60px);
    display: flex;
    flex-direction: row;
    .contener {
      width: calc(100% - 300px);
    }
    .menu {
      width: 300px;
    }
  }
}
</style>