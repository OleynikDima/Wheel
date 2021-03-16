<template>
  <div class="container">
    <Wheel />
    <!-- <Popup/> -->
  </div>
</template>

<script>
// import Button from './components/Button.vue'
import Wheel from './components/Wheel/Wheel';
import Popup from './components/Popup/Popup';
import './style/main.scss';
export default {
  name: 'app',
  components: {
    Wheel,
    Popup,
  },
};
</script>

<style lang="scss" scoped>
.container {
}
</style>
