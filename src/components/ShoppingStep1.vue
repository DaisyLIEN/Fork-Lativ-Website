<template>
  <section class="wrapper-step-one">
    <div class="allselect-toggle">
      <input
        type="checkbox"
        name="allselect-toggle"
        id="allselect-toggle-input"
      />
      <label for="allselect-toggle" class="allselect-toggle-label">全選</label>
    </div>
    <div class="item-card">
      <div class="item-card-right">
        <label for="select-toggle" class="select-toggle"
          ><input type="checkbox" name="select-toggle" id="select-toggle"
        /></label>
        <div class="photo">
          <router-link to="/"
            ><img src="https://i.imgur.com/0Q3casO.jpg" alt=""
          /></router-link>
        </div>
        <div class="text">
          <div class="title">
            <router-link to="/">BROWN & FRIENDS印花T恤-01-女</router-link>
          </div>
          <div class="colorsize">
            <label for=""></label>
            <select name="colorsize" id="colorsize" required>
              <option value="">咖啡 - S</option>
              <option value="">咖啡 - M</option>
              <option value="">咖啡 - L</option>
            </select>
          </div>
        </div>
      </div>
      <div class="item-card-left">
        <div class="count">
          <div class="minus">
            <font-awesome-icon icon="fa-solid fa-minus" />
          </div>
          <div class="number">1</div>
          <div class="plus">
            <font-awesome-icon icon="fa-solid fa-plus" />
          </div>
        </div>
        <div class="price">
          <div class="saleprice">$&nbsp;199</div>
          <div class="originprice">$&nbsp;299</div>
        </div>
      </div>
      <div class="delete">
        <font-awesome-icon icon="fa-solid fa-xmark" />
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
      <router-link :to="{ name: 'homePage' }"
        ><button class="button button-primary">繼續購物</button></router-link
      >
      <router-link :to="{ name: 'shopping', params: { step: 2 } }"
        ><button class="button button-next">下一步</button></router-link
      >
    </div>
  </section>
</template>

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
  border-bottom: none;
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
      }

      .plus {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
        border-left: none;
      }
    }

    .price {
      margin-left: 30px;

      .saleprice {
        color: #cc4948;
      }

      .originprice {
        text-decoration: line-through;
      }
    }
  }

  .delete {
    position: absolute;
    top: 20px;
    right: 30px;
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