<template>
  <div class="zyx-btn" :class="color ? color : ''" @click="handleClick">
    <button><slot /></button>
  </div>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  methods: {
    handleClick: function () {
      this.$emit("zyxclick");
    },
  },
};
</script>\
<style lang="scss" scoped>
.zyx-btn {
  display: inline-block;
  border: 1px solid #999;
  border-radius: 5px;
  overflow: hidden;
  button {
    padding: 5px 10px;
    border: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    &:focus {
      outline: none;
    }
    &:hover {
      background-color: #ccc;
    }
  }
}
.red {
  border: 1px solid rgb(236, 116, 116);
  button {
    &:hover {
      color: #fff;
      background-color: rgb(236, 116, 116);
    }
  }
}
.green {
  border: 1px solid rgb(74, 175, 74);
  button {
    &:hover {
      color: #fff;
      background-color: rgb(74, 175, 74);
    }
  }
}
.blue {
  border: 1px solid rgb(95, 194, 240);
  button {
    &:hover {
      color: #fff;
      background-color: rgb(95, 194, 240);
    }
  }
}
</style>