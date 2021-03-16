<template>
    <header class="header">
        <nav>
            <h2>HEADER</h2>
            <Button @click="closePopup" class="close__btn" > X </Button>
        </nav>
    </header>
</template>

<script>
import Button from './Button'
    export default {
        name:'Header',
        components:{
            Button
        },
    methods:{
        closePopup(){
            console.log('this');
        }
    }
}
</script>

<style lang="scss" scoped>
.header{
    margin: 0;
    padding: 0;
    max-width: 1920px;
    background-color: grey;
    height: 50px;
    position: relative;
   
    };
.close__btn{
    position: absolute;
    top: 0;
    right: 0;
     color: #fff;
     font-weight: 900;
     font-size: 28px;
     background-color: inherit;
}
</style>