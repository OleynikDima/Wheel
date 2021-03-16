<template>
    <div class="container">
       <Fortune />
       <!-- <Popup/> -->
    </div>
</template>

<script>
// import Button from './components/Button.vue'
import Fortune from './components/Fourtune'
import Popup from './components/Popup'
import './style/normolize.scss'
export default {
    name:'app',
    components:{
    Fortune, Popup
    },
}
</script>

<style lang="scss" scoped>
   .container {
       /* display: flex;
       justify-content: center;
       align-items: center;
       transform: translateY(25%) */
   }
</style>
