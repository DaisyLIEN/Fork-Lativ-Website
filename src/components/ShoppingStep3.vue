<template>
  <section class="wrapper-step-three">
    <form action="" @submit.stop.prevent="handleSubmit">
      <!-- part-one -->
      <div class="recipient-info part part-one">
        <div class="title">收件人資訊</div>
        <div class="form-row">
          <label for="username">姓名&emsp;&emsp;</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="輸入姓名"
            minlength="2"
            v-model="recipientInfo.username"
            required
          />
        </div>
        <div class="form-row">
          <label for="telephone">手機號碼</label>
          <input
            type="text"
            name="telephone"
            id="telephone"
            placeholder="輸入有效手機號碼"
            minlength="10"
            maxlength="10"
            v-model="recipientInfo.telephone"
            required
          />
        </div>
        <div class="form-row" v-if="initialPaymentMethod.includes('取貨付款')">
          <label for="store">取貨門市</label>
          <select name="area" id="area" v-model="recipientInfo.pickUpStore">
            <option value="none" selected disabled>請選擇取件門市</option>
            <option value="冬念門市">冬念門市</option>
            <option value="耀明門市">耀明門市</option>
            <option value="三重門市">三重門市</option>
          </select>
        </div>
        <div class="form-row" v-else>
          <label for="address">宅配地址</label>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="輸入地址"
            v-model="recipientInfo.address"
          />
        </div>
      </div>
      <!-- part-two -->
      <div
        class="credit-card part part-two"
        v-if="initialPaymentMethod === '信用卡付款'"
      >
        <div class="title">信用卡資訊</div>
        <div class="form-row">
          <label for="cardnumber">信用卡卡號</label>
          <input
            type="text"
            name="cardnumber"
            id="cardnumber"
            placeholder="限使用台灣核發之信用卡"
            minlength="16"
            maxlength="16"
            v-model="creditCard.cardNumber"
          />
        </div>
        <div class="form-row">
          <label for="expdate">有效期限&emsp;</label>
          <input
            type="text"
            name="expdate"
            id="expdate"
            placeholder="MM/YY"
            v-model="creditCard.validDate"
          />
        </div>
        <div class="form-row">
          <label for="cvv">背面末三碼</label>
          <input
            type="text"
            name="cvv"
            id="cvv"
            placeholder="信用卡背面末三碼"
            minlength="3"
            maxlength="3"
            v-model="creditCard.ccv"
          />
        </div>
        <div class="form-row credit-notice">
          <p>
            ※
            提供VISA丶MasterCard丶JCB信用卡交易，全程使用安全加密，信用卡資料將不會儲存於網站，您可以安心使用信用卡付款。
          </p>
        </div>
      </div>
      <!-- part-three -->
      <div class="invoice-type part part-three">
        <div class="title">發票類型</div>
        <div class="form-row">
          <div :class="['form-line', { active: invoiceType === 'personal' }]">
            <input
              type="radio"
              name="type"
              id="personal"
              value="personal"
              v-model="invoiceType"
            />
            <label for="personal">電子發票 - 個人</label>
          </div>
          <div :class="['form-line', { active: invoiceType === 'company' }]">
            <input
              type="radio"
              name="type"
              id="company"
              value="company"
              v-model="invoiceType"
            />
            <label for="company">電子發票 - 公司</label>
          </div>
          <div :class="['form-line', { active: invoiceType === 'donate' }]">
            <input
              type="radio"
              name="type"
              id="donate"
              value="donate"
              minlength="8"
              maxlength="8"
              v-model="invoiceType"
            />
            <label for="donate">捐贈發票</label>
          </div>
          <div :class="['form-line', { active: invoiceType === 'barcode' }]">
            <input
              type="radio"
              name="type"
              id="barcode"
              value="barcode"
              v-model="invoiceType"
            />
            <label for="barcode">個人-手機條碼載具</label>
          </div>
        </div>
        <div class="form-row">
          <div class="text-personal" v-show="invoiceType === 'personal'">
            依財政部規定，發票已託管，無需開立紙本發票。
          </div>
          <div class="text-company" v-show="invoiceType === 'company'">
            <div>
              <label for="company-number">統一編號&emsp;</label>
              <input
                type="text"
                name="company-number"
                id="company-number"
                placeholder="請輸入統一編號"
                minlength="8"
                maxlength="8"
                v-model="invoice.company"
              />
            </div>
            <p>
              根據財政部「電子發票實施作業要點」，於消費開立「三聯電子發票」不主動寄送，lativ亦會將發票號碼上傳至政府平台。
            </p>
          </div>
          <div class="text-donate" v-show="invoiceType === 'donate'">
            <label for="donation">捐贈單位：</label>
            <select name="donation" id="donation" v-model="invoice.donate">
              <option value="none" selected disabled>請選擇捐贈單位</option>
              <option value="財團法人創世社會福利基金會">
                財團法人創世社會福利基金會
              </option>
              <option value="財團法人博幼社會福利基金會">
                財團法人博幼社會福利基金會
              </option>
              <option value="財團法人門諾社會福利慈善事業基金會">
                財團法人門諾社會福利慈善事業基金會
              </option>
            </select>
          </div>
          <div class="text-barcode" v-show="invoiceType === 'barcode'">
            <div>
              <label for="barcode-number"></label>
              <input
                type="text"
                name="barcode-number"
                id="barcode-number"
                placeholder="請輸入手機條碼(限大寫英數字)"
                v-model="invoice.barcode"
              />
            </div>
            <div>
              <label for="barcode-number-confirm"></label>
              <input
                type="text"
                name="barcode-number-confirm"
                id="barcode-number-confirm"
                placeholder="請再次輸入手機條碼(限大寫英數字)"
                v-model="confirmBarcode"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- part-four -->
      <div class="return-notice part part-four">
        <div class="form-row">
          <input
            type="checkbox"
            name="return-notice"
            id="return-notice"
            value="agreeFastRefund"
            v-model="recipientInfo.fastRefund"
          />
          <label for="return-notice"
            >我同意辦理退貨時，由 lativ
            代為處理電子發票及銷貨退回折讓單以加速退款作業。</label
          >
        </div>
      </div>
      <!-- submit-panel -->
      <div class="submit-panel">
        <label class="submit-cart-label">
          <input type="submit" class="submit-cart-input" value="" />
          送出</label
        >
      </div>
    </form>
    <div class="button-panel">
      <router-link :to="{ name: 'shopping', params: { step: 2 } }"
        ><button class="button button-primary">
          重選付款方式
        </button></router-link
      >
    </div>
  </section>
</template>

<script>
export default {
  props: {
    initialPaymentMethod: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      invoiceType: "",
      recipientInfo: {
        username: "",
        telephone: "",
        pickUpStore: "",
        address: "",
        fastRefund: false,
      },
      creditCard: {
        cardNumber: "",
        validDate: "",
        ccv: "",
      },
      invoice: {
        company: "", // 統一編號
        donate: "",
        barcode: "",
      },
      confirmBarcode: "",
    };
  },
  methods: {
    handleSubmit(e) {
      // 表單驗證
      const method = this.initialPaymentMethod;

      if (this.recipientInfo.username === "") {
        alert("請確認收件人姓名");
        return;
      } else if (this.recipientInfo.telephone === "") {
        alert("請確認手機號碼");
        return;
      }

      // -- 超商取貨
      if (method.includes("取貨付款")) {
        if (this.recipientInfo.pickUpStore === "") {
          alert("請確認收件門市");
          return;
        }
        // -- 宅配
      } else {
        if (this.recipientInfo.address === "") {
          alert("請確認收件地址");
          return;
        }

        if (method === "信用卡付款") {
          for (let key in this.creditCard) {
            if (this.creditCard[key] === "") {
              alert("請確認信用卡資訊");
              return;
            }
          }
        }
      }

      // -- 發票類型
      if (this.invoiceType === "") {
        alert("請選擇發票方式");
        return;
      } else {
        if (this.invoiceType === "company") {
          if (this.invoice.company === "") {
            alert("請確認公司之統一編號");
            return;
          }
        } else if (this.invoiceType === "donate") {
          if (this.invoice.donate === "") {
            alert("請確認捐贈單位");
            return;
          }
        } else if (this.invoiceType === "barcode") {
          if (this.invoice.barcode === "") {
            alert("請確認載具號碼");
            return;
          }
          if (this.invoice.barcode !== this.confirmBarcode) {
            alert("請確認手機載具是否相同");
            return;
          }
        }
      }
      
      const form = e.target;
      const formData = new FormData(form);
      this.$emit('after-save', formData)
    },
  },
};
</script>

<style lang="scss" scoped>
/* input */
input {
  &[type="text"] {
    border: none;
    margin-left: 20px;

    &::placeholder {
      color: #cccccc;
    }

    &:focus::placeholder {
      color: transparent;
    }
  }
}

label {
  margin-bottom: 0;
}

select {
  border-color: #cccccc;
  margin-left: 20px;

  &:invalid {
    color: #cccccc;
  }
}

.wrapper-step-three {
  font-size: 15px;
  background-color: #fbfbfb;
  position: relative;

  form {
    .part {
      &:not(:last-child) {
        border: 1px solid #ebebeb;
        margin: 20px 0;
        background-color: #ffffff;
      }

      .title,
      .form-row {
        height: 60px;
        display: flex;
        align-items: center;

        &.credit-notice {
          height: 80px;
        }
      }

      .title {
        font-size: 18px;
        border-bottom: 1px solid #ebebeb;
        margin: 0;
        padding: 0 30px;
      }
    }

    .part-one,
    .part-two {
      .form-row {
        margin: 0 30px;

        &:not(:last-child) {
          border-bottom: 1px solid #ebebeb;
        }
      }
    }

    .part-three {
      .form-row {
        margin: 0 30px;
        gap: 10px;

        &:nth-child(2) {
          height: 140px;
        }

        &:nth-child(3) {
          height: 100%;
          padding: 20px 0;
        }

        .text-personal {
          color: #cccccc;
        }

        .text-company,
        .text-barcode {
          width: 100%;
          height: 100%;
          display: flex;
          flex-flow: column wrap;
          justify-content: space-evenly;

          div {
            margin-bottom: 10px;
          }

          p {
            color: #c14948;
          }
        }

        .text-barcode {
          input {
            width: 100%;
            border-bottom: 1px solid #cccccc;
            margin: 0;
            line-height: 30px;
          }
        }
      }

      .form-line {
        border: 1px solid #cccccc;
        border-radius: 4px;
        color: #cccccc;
        width: 170px;
        height: 50px;
        text-align: center;
        line-height: calc(50 / 15);
        flex-grow: 1;

        &.active {
          border-color: #5e3b25;
          color: #5e3b25;
        }

        input[type="radio"] {
          -webkit-appearance: none;
        }

        label {
          width: 100%;
          height: 100%;
          cursor: pointer;
        }
      }
    }

    .part-four {
      .form-row {
        margin: 0 30px;
        height: 60px;
        font-size: 13px;
        color: #a8a8a8;
        flex-wrap: nowrap;

        input {
          -webkit-appearance: none;
          border: 1px solid #cccccc;
          width: 16px;
          height: 16px;
          margin-right: 10px;
          flex-shrink: 0;
          position: relative;

          &:checked::after {
            content: "";
            width: 6px;
            height: 8px;
            border: solid #676767;
            border-width: 0 2px 2px 0;
            transform: rotate(45deg);
            position: absolute;
            top: 2px;
            left: 4px;
          }
        }
      }
    }

    .submit-panel {
      order: 5;
      position: absolute;
      bottom: 0;
      right: 0;
      text-align: center;

      label {
        width: 180px;
        height: 40px;
        background-color: #5e3b25;
        border-radius: 4px;
        font-size: 15px;
        line-height: 22px;
        color: #ffffff;
        cursor: pointer;
      }

      input {
        visibility: hidden;
      }
    }
  }
}

/* button-panel */
.button-panel {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;

  .button-primary {
    width: 180px;
    height: 40px;
    border-radius: 4px;
    font-size: 15px;
    color: #ffffff;
    background-color: #c3a789;
  }
}

@media screen and (min-width: 768px) {
  .wrapper-step-three {
    form {
      .part-three {
        .form-row:nth-child(2) {
          height: 70px;
        }
      }
    }
  }
}
</style>