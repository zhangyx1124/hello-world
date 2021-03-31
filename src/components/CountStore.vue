<template>
  <div class="count">
    <h3>{{ count }}</h3>
    <empty />
    <zyx-button @zyxclick="increment" class="btns" color="green">+1</zyx-button>
    <zyx-button @zyxclick="increment(3)" class="btns" color="green"
      >+3</zyx-button
    >
    <zyx-button @zyxclick="decrement" color="blue">-1</zyx-button>
  </div>
</template>
<script>
import ZyxButton from "../utils/plugins/button/ZyxButton.vue";

export default {
  components: { ZyxButton },
  data() {
    return {};
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    increment(num = 1) {
      this.$store.dispatch("increment", { num: num });
    },
    decrement() {
      this.$store.dispatch("decrement");
    },
  },
};
</script>
<style lang="sass" scoped>
.count
.btns
  margin-right: 20px
</style>