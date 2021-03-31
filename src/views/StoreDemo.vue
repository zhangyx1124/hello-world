<template>
  <div class="storedemo">
    <CountStore />
  </div>
</template>
<script>
import CountStore from "../components/CountStore.vue";
export default {
  name: "StoreDemo",
  components: { CountStore },
  data() {
    return {};
  },
};
</script>