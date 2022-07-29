<template>
  <div class="wrapper">
    <section class="sidebar">
      <Sidebar :initial-group="shirt.group" />
    </section>
    <section class="main">
      <div class="content">
        <!-- left-content -->
        <div class="left-content">
          <div class="photo">
            <img
              :src="
                currentShirtImage === ''
                  ? shirt.color[0].image
                  : currentShirtImage
              "
              alt="shirt-image"
            />
          </div>
          <div class="magnifying">
            <font-awesome-icon
              icon="fa-solid fa-magnifying-glass-plus"
              class="icon"
            />
          </div>
        </div>
        <!-- right-content -->
        <div class="right-content">
          <div class="part part-one">
            <div class="title">
              {{ shirt.title }}&nbsp;(&nbsp;{{ selectedColor }}&nbsp;-&nbsp;{{
                selectedSize
              }}&nbsp;)
            </div>
            <div class="prices">
              <div class="origin-price">{{ shirt.originalPrice }}</div>
              <div class="now-price"><span>NT$</span>{{ shirt.nowPrice }}</div>
              <div class="sale-event">夏日特賣．任選99起</div>
            </div>
          </div>
          <div class="part part-two">
            <div class="color">
              <div
                class="color-card"
                v-for="card in shirt.color"
                :key="shirt.color.indexOf(card)"
              >
                <input
                  type="radio"
                  name="color"
                  :id="card.ename"
                  :value="card.cname"
                  v-model="selectedColor"
                  @click="renderShirtImage(card.cname)"
                /><label
                  :for="card.ename"
                  :class="{ active: selectedColor === card.cname }"
                  :style="{ backgroundColor: card.colorCode }"
                ></label>
              </div>
            </div>
            <div class="size">
              <input
                type="radio"
                name="size"
                id="S"
                value="S"
                v-model="selectedSize"
              /><label for="S" :class="{ active: selectedSize === 'S' }"
                >S</label
              >
              <input
                type="radio"
                name="size"
                id="M"
                value="M"
                v-model="selectedSize"
              /><label for="M" :class="{ active: selectedSize === 'M' }"
                >M</label
              >
              <input
                type="radio"
                name="size"
                id="L"
                value="L"
                v-model="selectedSize"
              /><label for="L" :class="{ active: selectedSize === 'L' }"
                >L</label
              >
            </div>
            <div class="lists">
              <div class="comment">
                <font-awesome-icon
                  icon="fa-solid fa-message"
                  class="icon"
                />評價 (428)
              </div>
              <div class="product-info">
                <font-awesome-icon
                  icon="fa-solid fa-ruler-horizontal"
                  class="icon"
                />產品說明與尺寸表
              </div>
              <div class="favorite">
                <font-awesome-icon
                  icon="fa-solid fa-star"
                  class="icon"
                />收藏商品
              </div>
            </div>
          </div>
          <div class="part part-three">
            <div class="count-cart">
              <span>數量</span>
              <div class="count">
                <div class="minus" @click="orderMinus()">-</div>
                <div class="number">
                  <input
                    type="text"
                    name="order"
                    id="order"
                    minlength="1"
                    maxlength="2"
                    v-model="order"
                    @change="controlMinMaxOrder()"
                  /><label for=""></label>
                </div>
                <div class="plus" @click="orderPlus()">+</div>
              </div>
              <button class="add-to-cart" @click="saveStorage()">
                加入購物車
              </button>
            </div>
            <p>APP獨享！超取滿680免運費</p>
            <p>※不提供海外配送。</p>
          </div>
        </div>
      </div>
      <div class="images">
        <img
          v-for="image in shirt.image.detail"
          :key="shirt.image.detail.indexOf(image)"
          :src="image"
          alt=""
        />
      </div>
    </section>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import { dummyData } from "../assets/dummydata/DummyData.js";

export default {
  components: {
    Sidebar,
  },
  data() {
    return {
      currentId: "",
      AllShirts: [],
      shirt: {
        id: 1,
        title: "",
        color: [
          {
            cname: "",
            ename: "",
            image: "",
            colorCode: "",
          },
        ],
        image: {
          main: "",
          detail: [],
        },
        originalPrice: 0,
        nowPrice: 0,
        onSale: true,
        group: "",
        category: [],
      },
      currentShirtImage: "",
      selectedColor: "",
      selectedSize: "S",
      order: 1,
    };
  },
  created() {
    window.scrollTo(0, 0);
    this.renderOneShirt();
  },
  methods: {
    renderOneShirt() {
      this.AllShirts = dummyData.allShirts;
      this.currentId = this.$route.params.id;
      this.shirt = this.AllShirts.find((item) => {
        return item.id === Number(this.currentId);
      });
      this.selectedColor = this.shirt.color[0].cname;
    },
    renderShirtImage(color) {
      const colorArray = this.shirt.color;
      colorArray.find((item) => {
        if (item.cname === color) {
          this.currentShirtImage = item.image;
        }
      });
    },
    orderMinus() {
      if (this.order === 1) return;
      this.order--;
    },
    orderPlus() {
      if (this.order === 99) return;
      this.order++;
    },
    controlMinMaxOrder() {
      if (this.order < 1) {
        this.order = 1;
      }
      return;
    },
    saveStorage() {
      // 要加入購物車的商品
      const orderInfo = {
        id: this.shirt.id,
        title: this.shirt.title,
        color: this.selectedColor,
        size: this.selectedSize,
        order: this.order,
      };

      // 取出目前購物車有的商品 ( localStorage )
      const STORAGE_KEY = "myCart";
      const orderList = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

      // 把商品加入購物車
      let isOnlyAddOrderNumber = false;

      // -- 首次加入時，購物車為空
      if (orderList.length === 0) {
        orderList.push({ ...orderInfo });
      } else {
        // -- 購物車已有商品時，先找是否有同樣商品
        // ---- 是，增加訂購數量
        orderList.forEach((item) => {
          if (
            item.id === orderInfo.id &&
            item.color === orderInfo.color &&
            item.size === orderInfo.size
          ) {
            item.order += orderInfo.order;
            isOnlyAddOrderNumber = true;
          }
        });

        // ---- 否，把新商品加入
        if (isOnlyAddOrderNumber === false) {
          orderList.push({ ...orderInfo });
        }
      }

      localStorage.setItem(STORAGE_KEY, JSON.stringify(orderList));
    },
  },
  watch: {
    // shirt(newValue) {
    //   this.shirt = {
    //     ...this.shirt,
    //     ...newValue,
    //   };
    // },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  height: 100%;
  padding-top: 125px;

  .sidebar {
    width: 20%;
  }

  .main {
    flex: 1;

    .content {
      display: flex;
      flex-flow: column wrap;

      .icon {
        font-size: 1rem;
      }

      .left-content {
        position: relative;

        img {
          margin: 0 auto;
          max-width: 500px;
          max-height: 500px;
        }

        .magnifying {
          position: absolute;
          bottom: 15px;
          right: 15px;
        }
      }

      .right-content {
        .part:not(:last-child) {
          border-bottom: 1px solid #eee;
        }

        .part-one {
          padding-bottom: 30px;
          font-weight: bolder;

          .title {
            font-size: 15px;
            color: #666;
          }

          .prices {
            display: flex;
            flex-flow: column wrap;
            align-items: flex-end;

            .origin-price {
              font-size: 20px;
              color: #444;
              text-decoration: line-through;
            }

            .now-price {
              position: relative;
              font-size: 60px;
              line-height: 1;
              color: #ea0000;

              span {
                position: absolute;
                top: 0;
                left: -27px;
                font-size: 14px;
              }
            }

            .sale-event {
              height: 25px;
              margin-top: 5px;
              padding: 5px 7px 5px 7px;
              background-color: #ea0000;
              line-height: 15px;
              color: #ffffff;

              &::after {
                content: "\00BB";
                font-size: 15px;
                margin-left: 7px;
              }
            }
          }
        }
        .part-two {
          padding: 30px 0 20px;

          input[type="radio"] {
            -webkit-appearance: none;
          }

          .color {
            display: flex;

            label {
              width: 30px;
              height: 30px;
              margin-right: 10px;
              padding: 2px;
              -webkit-box-shadow: inset 0 0 0 2px #ffffff;
              box-shadow: inset 0 0 0 2px #ffffff;

              &.active {
                border: 1px solid #333;
              }
            }
          }

          .size {
            label {
              width: 55px;
              height: 30px;
              margin-right: 18px;
              background-color: #eeeeee;
              line-height: 28px;
              text-align: center;

              &.active {
                border: 1px solid #333;
              }
            }
          }

          .lists {
            display: flex;
            justify-content: flex-end;
            margin-top: 5px;

            div {
              display: flex;
              align-items: center;
              margin-left: 15px;

              .icon {
                margin-right: 5px;
              }
            }
          }
        }

        .part-three {
          margin-top: 30px;

          .count-cart {
            display: flex;
            align-items: center;
            margin-bottom: 20px;

            .count {
              display: flex;
              text-align: center;
              font-size: 14px;
              line-height: 28px;
              margin: 0 30px 0 10px;

              .minus,
              .plus {
                width: 20px;
                height: 30px;
                border: 1px solid #cccccc;
                background-color: #eeeeee;
                cursor: pointer;

                &:hover {
                  background-color: transparent;
                }
              }

              .number {
                width: 30px;
                height: 30px;
                border-top: 1px solid #cccccc;
                border-bottom: 1px solid #cccccc;

                input {
                  width: 30px;
                  border: none;
                  text-align: center;
                }
              }
            }

            .add-to-cart {
              width: 185px;
              height: 30px;
              background-color: #5d3b24;
              border-radius: 3px;
              font-size: 15px;
              color: #ffffff;
            }
          }

          p {
            margin-bottom: 15px;
            color: #c14948;
          }
        }
      }
    }

    .images {
      margin-top: 15px;

      img {
        margin-bottom: 10px;
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .wrapper {
    padding-top: 10px;

    .main {
      .content {
        flex-flow: row wrap;
        justify-content: space-between;

        .left-content {
          flex: 1 1 350px;
        }

        .right-content {
          flex: auto;
          margin-left: 20px;

          .one-part {
            display: flex;
          }
        }
      }

      .images {
        margin-top: 50px;
        img {
          max-width: 760px;
          margin: 0 auto 30px auto;
        }
      }
    }
  }
}
</style>