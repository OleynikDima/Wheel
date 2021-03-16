<template>
  <div >
    <Popup  
    v-if='isShowPopup' 
    @click="logger" 
    :item="dataPrize"
    class="modal-window"/>
        <!-- type: canvas -->
      <div class="wheel-box">
        <Wheel
          style="width: 400px"
          :canvas="canvasOptions"
          :prizes="prizes"
          :verify="cavansVerify"
          @rotateStart="onCanvasRotateStart"
          @rotateEnd="onRotateEnd"
        />
      </div>
  </div>
</template>
<script>
import Wheel from 'vue-fortune-wheel'
// import 'vue-fortune-wheel/lib/vue-fortune-wheel.css'
import Popup from './Popup'
import '../style/fortume.scss'


export default {
  components: {
    Wheel,
    Popup
  },
  data() {
    return {
      isShowPopup:false,
      dataPrize:null,
      cavansVerify: false, // Whether the turntable in canvas mode is enabled for verification
      canvasOptions: {
        borderWidth: 2,
        borderColor: '#584b43'
      },
      prizes: [
        {
          id: 1, //* The unique id of each prize, an integer greater than 0
          name: 'Blue', // Prize name, display value when type is canvas (this parameter is not needed when type is image)
          value: 'Blue\'s value', //* Prize value, return value after spinning
          bgColor: '#45ace9', // Background color (no need for this parameter when type is image)
          color: '#ffffff', // Font color (this parameter is not required when type is image)
          probability: 15, //* Probability, up to 4 decimal places (the sum of the probabilities of all prizes
          weight: 1 // Weight, if useWeight is true, the probability is calculated by weight (weight must be an integer), so probability is invalid
        },
        {
          id: 2,
          name: 'Red',
          value: 'Red\'s value',
          bgColor: '#dd3832',
          color: '#ffffff',
          probability: 15,
          weight: 1,
          url:'src/assets/eggplant.jpeg',

        },
        {
          id: 3,
          name: 'Yellow',
          value: 'Yellow\'s value',
          bgColor: '#fef151',
          color: '#ffffff',
          probability: 20,
          weight: 1,
          url:'src/assets/french_fries.png',

        },
        {
          id: 4, 
          name: 'Pink', 
          value: 'Pink\'s value',
          bgColor: '#ff00ff', 
          color: '#ffffff', 
          probability: 15, 
          weight: 1 ,
          url:'../../src/assets/donut.png',
        },
        {
          id: 5,
          name: 'Green',
          value: 'Green\'s value',
          bgColor: '#7fff00',
          color: '#ffffff',
          probability: 15,
          weight: 1,
          url:'../src/assets/apple-catering.jpeg',
        },
        {
          id: 6,
          name: 'Black',
          value: 'Black\'s value',
          bgColor: '#000000',
          color: '#ffffff',
          probability: 20,
          weight: 1,
          url:'../src/assets/eggplant.jpeg',
        }
      ],
hendlers:{
  start:this.onCanvasRotateStart,
}
    }
    
  },

  methods: {
    str(){
      console.log('click');
    },
    onCanvasRotateStart(rotate) {
      if (this.canvasVerify) {
        const verified = true // true: the test passed the verification, false: the test failed the verification
        this.DoServiceVerify(verified, 2000).then((verifiedRes) => {
          if (verifiedRes) {
            console.log('Verification passed, start to rotate')
            // rotate() // Call the callback, start spinning
            this.canvasVerify = false // Turn off verification mode
          } else {
            alert('Failed verification')
          }
        })
        return
      }
      console.log('onCanvasRotateStart')
    },
    logger(event){
      if(!event){
        this.isShowPopup = false
        this.onCanvasRotateStart()
        // @rotateStart="satrtWhell"
      }
      // console.log(event,'close wthis Wheel');
    },
    onRotateEnd(prize) {
      this.isShowPopup= true;
      this.dataPrize = prize
    },
    // Simulate the request back-end interface, verified: whether to pass the verification, duration: delay time
    DoServiceVerify(verified, duration) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(verified)
        }, duration)
      })
    }
  }
}
</script>