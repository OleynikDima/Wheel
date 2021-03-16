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
   }
</style>
