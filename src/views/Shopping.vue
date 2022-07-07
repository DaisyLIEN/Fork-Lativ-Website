<template>
  <div class="wrapper">    
    <Stepper :initial-current-step="currentStep"/>
    <ShoppingStep1 />
    <ShoppingStep2 />
    <ShoppingStep3 />
    <button>
      <router-link :to="{ name: 'homePage' }">繼續購物</router-link></button>
    <button><router-link to="/">下一步</router-link></button>
  </div>
</template>

<script>
import Stepper from "../components/Stepper.vue";
import ShoppingStep1 from "../components/ShoppingStep1.vue";
import ShoppingStep2 from "../components/ShoppingStep2.vue";
import ShoppingStep3 from "../components/ShoppingStep3.vue";

export default {
  components: {
    Stepper,
    ShoppingStep1,
    ShoppingStep2,
    ShoppingStep3,
  },
  data() {
    return {
      currentStep: -1,
    }
  },
  created() {
      this.currentStep = this.$route.params.step
      console.log(this.currentStep)
      console.log(typeof this.currentStep)
  }
};
</script>