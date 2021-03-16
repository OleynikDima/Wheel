<template>
<transition name="modal">
    <div v-show="isShowPopup" class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">
              <div class="modal-header">
                 <button @click="closePopup" class="modal-header__btn-close">
                    X
                  </button>
              </div>
              <div class="modal-body">
                    <div class="modal-color">
                      <img :src="item.url" alt="">
                    </div>
                    <div class="modal-text">
                      <p class="modal-text__id">
                         ID {{item.id}}
                        </p>
                      <p class="modal-text__name">
                         Name:{{item.name}}
                        </p>
                        <p class="modal-text__color">
                        Color: {{item.bgColor}}
                        </p>
                     
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

import Button from './Button'
//style
import './popup-style.scss'
export default {
        name:'Popup',
        components:{
          Button
        },
        data(){
            return {
                isShowPopup:true,
            }
        },
        props:['item'],
        methods:{
            closePopup(){
                this.isShowPopup = false,
                this.$emit('click', false)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>