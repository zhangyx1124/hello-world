<template>
  <div>
    <div v-for="item in routeList" :key="item.name">
      <el-menu-item
        :index="item.name"
        v-if="!item.children || item.children.length == 0"
      >
        <i :class="item.icon"></i>
        <span slot="title">{{ item.alias }}</span>
      </el-menu-item>
      <el-submenu :index="item.name" v-else>
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{ item.alias }}</span>
        </template>
        <submenu :routeList="item.children" />
      </el-submenu>
    </div>
  </div>
</template>
<script>
export default {
  name: "Submenu",
  props: {
    routeList: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  created() {
    console.log("router", this.$router.options.routes);
  },
  methods: {},
};
</script>