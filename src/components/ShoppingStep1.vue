<template>
  <section class="wrapper-step-one">
    <div class="itemList" v-if="cart.length > 0">
      <div class="allselect-toggle">
        <input
          type="checkbox"
          name="allselect-toggle"
          id="allselect-toggle-input"
          v-model="allSelect"
        />
        <label for="allselect-toggle" class="allselect-toggle-label"
          >全選</label
        >
      </div>
      <div class="item-card" v-for="item in cart" :key="cart.indexOf(item)">
        <div class="item-card-right">
          <label for="select-toggle" class="select-toggle"
            ><input
              type="checkbox"
              name="select-toggle"
              id="select-toggle"
              v-model="item.isSelected"
          /></label>
          <div class="photo">
            <router-link :to="{ name: 'detail', params: { id: item.id } }"
              ><img :src="item.image" alt="shirt-image"
            /></router-link>
          </div>
          <div class="text">
            <div class="title">
              <router-link :to="{ name: 'detail', params: { id: item.id } }">{{
                item.title
              }}</router-link>
            </div>
            <div class="colorsize">
              <label for=""></label>
              <select
                name="colorsize"
                id="colorsize"
                required
                v-model="item.size"
              >
                <option value="S" :selected="item.size === 'S'">
                  {{ item.color }} - S
                </option>
                <option value="M" :selected="item.size === 'M'">
                  {{ item.color }} - M
                </option>
                <option value="L" :selected="item.size === 'L'">
                  {{ item.color }} - L
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="item-card-left">
          <div class="count">
            <div
              class="minus"
              @click.stop.prevent="orderMinus(item, cart.indexOf(item))"
            >
              <font-awesome-icon icon="fa-solid fa-minus" />
            </div>
            <div class="number">{{ item.order }}</div>
            <div
              class="plus"
              @click.stop.prevent="orderPlus(item, cart.indexOf(item))"
            >
              <font-awesome-icon icon="fa-solid fa-plus" />
            </div>
          </div>
          <div class="price">
            <div class="saleprice" v-show="item.onSale">
              $&nbsp;{{ item.nowPrice }}
            </div>
            <div :class="['originprice', { sale: item.onSale }]">
              $&nbsp;{{ item.originalPrice }}
            </div>
          </div>
        </div>
        <div
          class="delete"
          @click.stop.prevent="deleteItem(cart.indexOf(item))"
        >
          <font-awesome-icon icon="fa-solid fa-xmark" />
        </div>
      </div>
      <div class="total">
        <div class="text">
          <p>
            <span
              >共&nbsp;<span>{{ totalOrder }}</span
              >&nbsp;件商品</span
            ><span>&nbsp;</span>
          </p>
          <p>
            <span>商品金額</span><span>活動特惠</span><span>運費</span
            ><span>帳戶折抵</span><span>&nbsp;</span>
          </p>
          <p>
            <span
              >$&nbsp;<span>{{ totalOriginalAmount }}</span></span
            ><span
              >-&nbsp;$&nbsp;<span>{{ eventAccount }}</span></span
            ><span>未選擇</span><span>$&nbsp;<span>0</span></span
            ><span>&nbsp;</span>
          </p>
        </div>
        <div class="amount">
          <p>
            小計<span>NT$&nbsp;</span><span>{{ amount }}</span>
          </p>
        </div>
      </div>
      <div class="button-panel">
        <router-link :to="{ name: 'homePage' }"
          ><button class="button button-primary">繼續購物</button></router-link
        >
        <router-link :to="{ name: 'shopping', params: { step: 2 } }"
          ><button
            class="button button-next"
            @click.stop.prevent="saveBeforeNextStep()"
          >
            下一步
          </button></router-link
        >
      </div>
    </div>
    <div class="no-item" v-else>
      <font-awesome-icon icon="fa-solid fa-cart-arrow-down" class="icon-cart" />
      <p>您的購物車中沒有商品</p>
      <router-link :to="{ name: 'homePage' }"
        ><button class="button button-primary">去購物</button></router-link
      >
    </div>
  </section>
</template>

<script>
export default {
  props: {
    initialCart: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      cart: [],
    };
  },
  created() {
    this.addIsSelected();
  },
  methods: {
    addIsSelected() {
      this.cart = this.initialCart.map((item) => {
        return {
          ...item,
          isSelected: true,
        };
      });
    },
    orderMinus(item, itemIndex) {
      if (item.order === 1) return;

      this.cart = this.cart.map((_item, index) => {
        if (index === itemIndex) {
          _item.order--;
        }
        return _item;
      });
    },
    orderPlus(item, itemIndex) {
      if (item.order === 99) return;

      this.cart = this.cart.map((_item, index) => {
        if (index === itemIndex) {
          _item.order++;
        }
        return _item;
      });
    },
    deleteItem(itemIndex) {
      this.cart = this.cart.filter((_item, index) => index !== itemIndex);
    },
    saveStorage() {
      const STORAGE_KEY = "myCart";
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.cart));
    },
    saveBeforeNextStep() {
      this.$emit("after-save", {
        totalInfo: {
          totalOrder: this.totalOrder,
          totalOriginalAmount: this.totalOriginalAmount,
          eventAccount: this.eventAccount,
          amount: this.amount,
        },
      });
    },
  },
  computed: {
    allSelect: {
      get() {
        return this.cart.every((item) => item.isSelected === true);
      },
      set(value) {
        this.cart = this.cart.map((item) => ({
          ...item,
          isSelected: value,
        }));
      },
    },
    totalOrder() {
      return this.cart
        .map((item) => {
          if (item.isSelected) {
            return item.order;
          }
          return 0;
        })
        .reduce((prev, next) => prev + next, 0);
    },
    totalOriginalAmount() {
      return this.cart
        .map((item) => {
          if (item.isSelected) {
            return item.originalPrice * item.order;
          }
          return 0;
        })
        .reduce((prev, next) => prev + next, 0);
    },
    eventAccount() {
      return this.cart
        .map((item) => {
          if (item.isSelected) {
            return (item.originalPrice - item.nowPrice) * item.order;
          }
          return 0;
        })
        .reduce((prev, next) => prev + next, 0);
    },
    amount() {
      return this.totalOriginalAmount - this.eventAccount;
    },
  },
  watch: {
    cart: {
      handler: function () {
        this.saveStorage();
        console.log("changed");
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped>
/* toggle */
input[type="checkbox"] {
  -webkit-appearance: none;
  border: 1px solid #ebebeb;
  border-radius: 50px;
  height: 21px;
  width: 21px;
  cursor: pointer;
  position: relative;

  &:checked {
    background-color: #5e3b25;

    &::after {
      content: "\2713";
      font-size: 8px;
      font-weight: 600;
      color: #ffffff;
      position: absolute;
      top: 0;
      left: 4px;
    }
  }
}

.allselect-toggle {
  height: 50px;
  font-size: 15px;
  padding-left: 30px;
  border: 1px solid #ebebeb;
  display: flex;
  align-items: center;
  label {
    margin: 0 0 0 20px;
  }
}

.item-card {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 190px;
  border: 1px solid #ebebeb;
  border-top: none;
  padding: 30px;
  font-size: 15px;

  .item-card-right {
    display: flex;

    .select-toggle {
      margin-right: 9px;
      margin-bottom: 0;
      align-self: center;
    }

    .photo img {
      width: 80px;
      height: 80px;
    }

    .text {
      margin-left: 30px;
      line-height: 2;
    }
  }

  .item-card-left {
    display: flex;

    .count {
      display: flex;
      align-items: center;

      div {
        width: 30px;
        height: 30px;
        border: 1px solid #f5f5f5;
        text-align: center;
        line-height: 28px;
      }

      .minus {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
        border-right: none;
        cursor: pointer;
      }

      .plus {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
        border-left: none;
        cursor: pointer;
      }
    }

    .price {
      margin-left: 30px;

      .saleprice {
        color: #cc4948;
      }

      .originprice.sale {
        margin-top: 10px;
        text-decoration: line-through;
      }
    }
  }

  .delete {
    position: absolute;
    top: 20px;
    right: 30px;
    cursor: pointer;
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

.no-item {
  text-align: center;

  .icon-cart {
    font-size: 100px;
  }

  p {
    margin: 20px 0 30px;
    font-size: 15px;
  }

  button {
    width: 180px;
    height: 40px;
    border-radius: 4px;
    font-size: 15px;
    color: #ffffff;
    background-color: #c3a789;
  }
}
</style>