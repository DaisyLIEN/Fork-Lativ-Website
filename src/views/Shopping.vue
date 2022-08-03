<template>
  <div class="wrapper">
    <Stepper :initial-current-step="currentStep" />
    <ShoppingStep1
      v-show="currentStep === '1'"
      :initial-cart="cart"
      @after-save="handleAfterSaveStep1"
    />
    <ShoppingStep2
      v-show="currentStep === '2'"
      :initial-total-info="totalInfo"
      @after-save="handleAfterSaveStep2"
    />
    <ShoppingStep3
      v-show="currentStep === '3'"
      :initial-payment-method="totalInfo.paymentMethod"
      @after-save="handleAfterSaveStep3"
    />
    <ShoppingStep4 v-show="currentStep === '4'" />
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
    ShoppingStep4,
  },
  data() {
    return {
      currentStep: "",
      cart: [
        {
          id: -1,
          title: "",
          color: "",
          size: "",
          order: 1,
        },
      ],
      totalInfo: {
        totalOrder: 0,
        totalOriginalAmount: 0,
        eventAccount: 0,
        amount: 0,
        paymentMethod: "未選擇",
        shippingFee: 0,
        finalAmount: 0,
      },
      recipientInfo: {},
      creditCard: {},
      invoice: {},
    };
  },
  created() {
    this.currentStep = this.$route.params.step;
    this.getCartFromStorage();
  },
  methods: {
    getCartFromStorage() {
      const STORAGE_KEY = "myCart";
      this.cart = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    },
    handleAfterSaveStep1(payload) {
      const { totalInfo } = payload;
      this.totalInfo = {
        ...this.totalInfo,
        ...totalInfo,
      };

      this.$router.push({ name: "shopping", params: { step: 2 } });
    },
    handleAfterSaveStep2(payload) {
      const { totalInfo } = payload;
      this.totalInfo = {
        ...this.totalInfo,
        ...totalInfo,
      };

      this.$router.push({ name: "shopping", params: { step: 3 } });
    },
    handleAfterSaveStep3(formData) {
      for (const [key, value] of formData) {
        console.log(`key:${key}, value:${value}`);
      }

      this.$router.push({ name: "shopping", params: { step: 4 } });
    },
  },
  beforeRouteUpdate(to, from, next) {
    this.currentStep = to.params.step.toString();
    window.scrollTo(0, 0);
    next();
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  max-width: 850px;
  margin: 0 auto;
}
</style>