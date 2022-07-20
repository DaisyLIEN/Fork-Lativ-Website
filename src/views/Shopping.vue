<template>
  <div class="wrapper">    
    <Stepper :initial-current-step="currentStep"/>
    <ShoppingStep1 v-show="currentStep === '1'"/>
    <ShoppingStep2 v-show="currentStep === '2'"/>
    <ShoppingStep3 v-show="currentStep === '3'"/> 
    <ShoppingStep4 v-show="currentStep === '4'"/>    
  </div>
</template>

<script>
import Stepper from "../components/Stepper.vue";
import ShoppingStep1 from "../components/ShoppingStep1.vue";
import ShoppingStep2 from "../components/ShoppingStep2.vue";
import ShoppingStep3 from "../components/ShoppingStep3.vue";
import ShoppingStep4 from "../components/ShoppingStep4.vue";

export default {
  components: {
    Stepper,
    ShoppingStep1,
    ShoppingStep2,
    ShoppingStep3,
    ShoppingStep4
  },
  data() {
    return {
      currentStep: '',
    }
  },
  created() {
      this.currentStep = this.$route.params.step
  },
  beforeRouteUpdate(to, from, next) {    
    this.currentStep = to.params.step.toString()   
    window.scrollTo(0, 0) 
    next()    
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  max-width: 850px;
  margin: 0 auto;
}
</style>