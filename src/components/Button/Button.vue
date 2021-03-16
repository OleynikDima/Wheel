<template>
  <button v-on="$listeners" v-bind:type="type" class="button_style">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'button',
    },
  },
};
</script>

<style lang="scss" scoped>
.button_style {
  background-color: rgba(0, 0, 0, 0.5);
  width: 200px;
  height: 50px;
  color: #fff;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  outline: none;
  transition: 250ms linear;
  &:hover {
    background-color: rgba(0, 0, 0, 0.185);
  }
}
</style>
