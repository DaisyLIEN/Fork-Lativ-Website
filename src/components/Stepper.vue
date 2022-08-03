<template>
  <div class="stepper-panel">
    <div class="steps" v-for="step in steps" :key="step.number">
      <div
        class="step"
        :class="[
          step.stepName,
          { active: step.active },
          { checked: step.checked },
        ]"
      >
        <div class="circle-container"></div>
        <div class="label-container">{{ step.title }}</div>
      </div>
      <div class="connect-line" :class="step.lineName"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialCurrentStep: {
      Type: String,
      required: true,
    },
  },
  data() {
    return {
      steps: [
        {
          stepName: "step-one",
          lineName: "line-one",
          title: "確認購物車",
          number: 1,
          active: true,
          checked: false,
        },
        {
          stepName: "step-two",
          lineName: "line-two",
          title: "付款與運送方式",
          number: 2,
          active: false,
          checked: false,
        },
        {
          stepName: "step-three",
          lineName: "line-three",
          title: "填寫資料",
          number: 3,
          active: false,
          checked: false,
        },
        {
          stepName: "step-four",
          lineName: "line-four",
          title: "完成訂購",
          number: 4,
          active: false,
          checked: false,
        },
      ],
    };
  },
  created() {
    this.renderStepper(this.initialCurrentStep);
    console.log("stepper:", this.initialCurrentStep);
  },
  methods: {
    renderStepper(currentStep) {
      // step 1
      if (currentStep === "1") {
        this.steps = this.steps.map((step) => {
          if (step.number === 1) {
            return {
              ...step,
              active: true,
              checked: false,
            };
          }
          return {
            ...step,
            active: false,
            checked: false,
          };
        });
        // step 2
      } else if (currentStep === "2") {
        this.steps = this.steps.map((step) => {
          if (step.number === 1) {
            return {
              ...step,
              active: false,
              checked: true,
            };
          } else if (step.number === 2) {
            return {
              ...step,
              active: true,
              checked: false,
            };
          }
          return {
            ...step,
            active: false,
            checked: false,
          };
        });
        // step 3
      } else if (currentStep === "3") {
        this.steps = this.steps.map((step) => {
          if (step.number === 1) {
            return {
              ...step,
              active: false,
              checked: true,
            };
          } else if (step.number === 2) {
            return {
              ...step,
              active: false,
              checked: true,
            };
          } else if (step.number === 3) {
            return {
              ...step,
              active: true,
              checked: false,
            };
          }
          return {
            ...step,
            active: false,
            checked: false,
          };
        });
        // step 4
      } else {
        this.steps = this.steps.map((step) => {
          if (step.number === 4) {
            return {
              ...step,
              active: true,
              checked: false,
            };
          }
          return {
            ...step,
            active: false,
            checked: true,
          };
        });
      }
    },
  },
  watch: {
    initialCurrentStep() {
      this.renderStepper(this.initialCurrentStep);      
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin getStepNums($num) {
  @for $i from 1 through $num {
    &:nth-child(#{$i}) .circle-container::after {
      content: "#{$i}";
      font-size: 1.3rem;
      font-weight: 300;
    }
  }
}

/* Stepper panel */
.stepper-panel {
  height: 130px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .steps {
    flex: 1;
    position: relative;
    @include getStepNums(4);

    .step {
      position: relative;
      text-align: center;
      font-size: 15px;
      line-height: 32px;

      .circle-container {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background-color: #eeeeee;
        color: #bebebe;
        margin: 0 auto;
      }

      + .connect-line {
        position: absolute;
        top: 25%;
        right: -50%;
        left: 50%;
        transform: scaleX(0.6);
        width: 100%;
        height: 3px;
        background-color: #eeeeee;

        &.line-four {
          display: none;
        }
      }

      &.active {
        .circle-container {
          background-color: #d8cabb;
          color: #ffffff;
        }
      }

      &.checked {
        .circle-container,
        + .connect-line {
          background-color: #d8cabb;
        }

        .circle-container {
          color: #ffffff;
        }
      }
    }
  }
}
</style>