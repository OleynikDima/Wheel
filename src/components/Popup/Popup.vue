<template>
     <transition name="modal">
      <div v-show="isShowPopup" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <button
              @click="closePopup"
              class="modal-header__btn-close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="modal-color">
              <img :src="item.url" class="modal-color__img" alt="" />
            </div>
            <div class="modal-text">
              <p class="modal-text__id">ID {{ item.id }}</p>
              <p class="modal-text__name">Name:{{ item.title }}</p>
              <p class="modal-text__color">Color: {{ item.value }}</p>
            </div>
          </div>
          <div class="modal-footer">
            <slot name="footer">
              <Button @click="closePopup">
                OK
              </Button>
            </slot>
          </div>
        </div>
      </div>
    </div>
     </transition>
</template>

<script>
//components
import Button from '../Button/Button';
//style
import './popup-style.scss';
export default {
  name: 'Popup',
  components: {
    Button,
  },
  data() {
    return {
      show: true,
      isShowPopup: true,
    };
  },
  props: ['item'],
  methods: {
    closePopup() {
      (this.isShowPopup = false), this.$emit('click', false);
    },
  },
};
</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
