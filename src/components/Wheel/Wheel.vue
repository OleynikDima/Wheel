<template>
  <div>
    <Popup
      v-if="isShowPopup"
      @click="logger"
      :item="dataPrize"
      class="modal-window"
    />
    <!-- type: canvas -->
    <div class="wheel-box">
      <Wheel
        style="width: 360px"
        :canvas="canvasOptions"
        :prizes="prizes"
        :verify="cavansVerify"
        @rotateStart="onCanvasRotateStart"
        @rotateEnd="onRotateEnd"
        @canvas="str"
      />
    </div>
  </div>
</template>
<script>
import Wheel from 'vue-fortune-wheel';
import Popup from '../Popup/Popup';
import './wheel.scss';
export default {
  components: {
    Wheel,
    Popup,
  },
  data() {
    return {
      isShowPopup: false,
      dataPrize: null,
      cavansVerify: false, // Whether the turntable in canvas mode is enabled for verification
      canvasOptions: {
        borderWidth: 2,
        borderColor: '#584043',
        btnWidth: 60,
        btnHeight: 140,
      },
      prizes: [
        {
          id: 1,
          title: 'Blue', //* The unique id of each prize, an integer greater than 0
          name: '1', // Prize name, display value when type is canvas (this parameter is not needed when type is image)
          value: "Blue's value", //* Prize value, return value after spinning
          bgColor: '#45ace9', // Background color (no need for this parameter when type is image)
          color: '#ffffff', // Font color (this parameter is not required when type is image)
          probability: 15, //* Probability, up to 4 decimal places (the sum of the probabilities of all prizes
          weight: 1, // Weight, if useWeight is true, the probability is calculated by weight (weight must be an integer), so probability is invalid
        },
        {
          id: 2,
          title: 'Eggplant',
          name: '2',
          value: "Red's value",
          bgColor: '#dd3832',
          color: '#ffffff',
          probability: 15,
          weight: 1,
          url: 'src/assets/eggplant.jpeg',
        },
        {
          id: 3,
          name: '3',
          title: 'French fries',
          value: "Yellow's value",
          bgColor: '#fef151',
          color: '#ffffff',
          probability: 20,
          weight: 1,
          url: 'src/assets/french_fries.png',
        },
        {
          id: 4,
          title: 'Donut',
          name: '4',
          value: "Pink's value",
          bgColor: '#ff00ff',
          color: '#ffffff',
          probability: 15,
          weight: 1,
          url: '../../src/assets/donut.png',
        },
        {
          id: 5,
          title: 'Apple',
          name: '5',
          value: "Green's value",
          bgColor: '#7fff00',
          color: '#ffffff',
          probability: 15,
          weight: 1,
          url: '../src/assets/apple-catering.jpeg',
        },
        {
          id: 6,
          title: 'Eggplant',
          name: '6',
          value: "Black's value",
          bgColor: '#000000',
          color: '#ffffff',
          probability: 20,
          weight: 1,
          url: '../src/assets/eggplant.jpeg',
        },
      ],
      hendlers: {
        start: this.onCanvasRotateStart,
      },
    };
  },

  methods: {
    onCanvasRotateStart(rotate) {
      if (this.canvasVerify) {
        const verified = true; // true: the test passed the verification, false: the test failed the verification
        this.DoServiceVerify(verified, 2000).then(verifiedRes => {
          if (verifiedRes) {
            console.log('Verification passed, start to rotate');
            // rotate() // Call the callback, start spinning
            this.canvasVerify = false; // Turn off verification mode
          } else {
            alert('Failed verification');
          }
        });
        return;
      }
      console.log('onCanvasRotateStart');
    },
    logger(event) {
      if (!event) {
        this.isShowPopup = false;
        this.onCanvasRotateStart();
      }
      // console.log(event,'close wthis Wheel');
    },
    onRotateEnd(prize) {
      this.isShowPopup = true;
      this.dataPrize = prize;
    },
    // Simulate the request back-end interface, verified: whether to pass the verification, duration: delay time
    DoServiceVerify(verified, duration) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(verified);
        }, duration);
      });
    },
  },
};
</script>
