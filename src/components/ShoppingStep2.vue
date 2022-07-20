<template>
  <section class="wrapper-step-two">
    <div class="shipping-domestic">
      <div class="title">台灣及離島</div>
      <div
        class="payment-card"
        v-for="paymentMethod in paymentMethods"
        :key="paymentMethods.indexOf(paymentMethod)"
      >
        <label
          ><input type="radio" name="select-toggle" />{{ paymentMethod }}</label
        >
        <div class="text" v-if="paymentMethods.indexOf(paymentMethod) < 2">
          滿&nbsp;1000&nbsp;元免運，運費&nbsp;$&nbsp;50
        </div>
        <div class="text" v-else>
          滿&nbsp;1200&nbsp;元免運，運費&nbsp;$&nbsp;60
        </div>
      </div>
    </div>
    <div class="shipping-overseas">
      <div class="title">海外配送 Overseas Shipping</div>
      <div class="delivery-area">
        <label for=""></label>
        <select name="area" id="area" required>
          <option value="" selected disabled>
            請選擇收貨地區 Delivery Area
          </option>
          <option value="">香港 Hong Kong</option>
          <option value="">馬來西亞 Malaysia</option>
          <option value="">新加坡 Singapore</option>
        </select>
      </div>
    </div>
    <div class="total">
      <div class="text">
        <p>
          <span>共&nbsp;<span>4</span>&nbsp;件商品</span><span>&nbsp;</span>
        </p>
        <p>
          <span>商品金額</span><span>活動特惠</span><span>運費</span
          ><span>帳戶折抵</span><span>&nbsp;</span>
        </p>
        <p>
          <span>$&nbsp;<span>1,196</span></span
          ><span>-&nbsp;$&nbsp;<span>300</span></span
          ><span>未選擇</span><span>$&nbsp;<span>0</span></span
          ><span>&nbsp;</span>
        </p>
      </div>
      <div class="amount">
        <p>小計<span>NT$&nbsp;</span><span>896</span></p>
      </div>
    </div>
    <div class="button-panel">
      <router-link :to="{ name: 'shopping', params: { step: 1 } }"
        ><button class="button button-primary">返回購物車</button></router-link
      >
      <router-link :to="{ name: 'shopping', params: { step: 3 } }"
        ><button class="button button-next">下一步</button></router-link
      >
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      paymentMethods: [
        "7-11 取貨付款",
        "全家 取貨付款",
        "信用卡付款",
        "LINE Pay (可用 LINE Points 折抵)",
        "宅配貨到付款 (限台灣本島)",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.shipping-domestic,
.shipping-overseas {
  border: 1px solid #ebebeb;

  > div {
    height: 60px;
    display: flex;
    align-items: center;
    font-size: 15px;
    margin: 0 30px;

    &.title {
      font-size: 18px;
      border-bottom: 1px solid #ebebeb;
      margin: 0;
      padding: 0 30px;
    }

    label {
      margin-bottom: 0;
      display: flex;
      align-items: center;
      cursor: pointer;
    }

    select {
      cursor: pointer;
    }
  }
}

.shipping-domestic {
  margin: 20px 0;

  .payment-card {
    justify-content: space-between;

    &:not(:last-child) {
      border-bottom: 1px solid #ebebeb;
    }

    input[type="radio"] {
      -webkit-appearance: none;
      border: 1px solid #ebebeb;
      border-radius: 50px;
      height: 21px;
      width: 21px;
      position: relative;      
      margin-right: 20px;
      cursor: pointer;

      &:checked {
        background-color: #999;
        box-shadow: inset 0 0 0 4px #ffffff;
      }
    }
  }

  .text {
    font-size: 13px;
    color: #999;
  }
}

.total {
  padding: 30px;
  text-align: end;
  font-size: 15px;
  line-height: 2.5;
  background-color: #fbfbfb;

  .text {
    display: flex;
    justify-content: flex-end;

    p {
      display: flex;
      flex-flow: column wrap;
      margin-left: 30px;

      &:nth-child(1) {
        justify-content: space-between;
      }

      &:nth-child(2),
      &:nth-child(3) {
        :nth-child(2) {
          color: #c14948;
        }
      }
    }
  }

  .amount {
    position: relative;

    &::after {
      content: "";
      height: 1px;
      width: 100%;
      background-color: #ebebeb;
      position: absolute;
      top: -50%;
      left: 0;
    }

    span {
      color: #c14948;

      &:nth-child(1) {
        margin-left: 20px;
      }

      &:nth-child(2) {
        font-size: 20px;
        line-height: 1;
      }
    }
  }
}

/* button-panel */
.button-panel {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;

  .button-primary,
  .button-next {
    width: 180px;
    height: 40px;
    border-radius: 4px;
    font-size: 15px;
    color: #ffffff;
  }

  .button-primary {
    background-color: #c3a789;
  }

  .button-next {
    background-color: #5e3b25;
  }
}
</style>