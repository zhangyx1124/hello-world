<template>
  <div class="directive">
    <h1>This is an directive page</h1>
    <div>
      <span>自定义指令：</span>
      <input v-focus />
    </div>
    <div>通过指令设置权限</div>
    <ul>
      <li v-for="(item, index) in dataList" :key="index" v-permission="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "DirectiveDemo",
  data() {
    return {
      dataList: ["one", "twww", "three", "www", "asdad"],
    };
  },
};
</script>
