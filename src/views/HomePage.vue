<template>
  <div class="wrapper">
    <Header />
    <Carousel />
    <section class="section-center-lists">
      <ul class="lists">
        <li v-for="item in centerLists" :key="item.id">
          <router-link to="/"><img :src="item.image" alt="" /></router-link>
        </li>
      </ul>
    </section>
    <section class="waterfall-cards">
      <div
        :class="['card', 'card-' + card.id]"
        v-for="card in waterfallCards"
        :key="card.id"
      >
        <img :src="card.image" alt="" />
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Carousel from "../components/Carousel.vue";

const dummyData = {
  centerLists: [
    {
      id: 0,
      image: "https://i.imgur.com/yPenGi1.gif",
    },
    {
      id: 1,
      image: "https://i.imgur.com/sdZXIul.gif",
    },
    {
      id: 2,
      image: "https://i.imgur.com/kMzqcC9.gif",
    },
    {
      id: 3,
      image: "https://i.imgur.com/m6n2Ve2.gif",
    },
    {
      id: 4,
      image: "https://i.imgur.com/ygpm9GV.gif",
    },
  ],
  waterfallCards: [
    {
      id: 0,
      image: "https://i.imgur.com/TkDAzYh.jpg",
    },
    {
      id: 1,
      image: "https://i.imgur.com/GjpRtzt.jpg",
    },
    {
      id: 2,
      image: "https://i.imgur.com/BpDnM0A.jpg",
    },
    {
      id: 3,
      image: "https://i.imgur.com/AYwLSJl.jpg",
    },
    {
      id: 4,
      image: "https://i.imgur.com/g9SYJIS.jpg",
    },
    {
      id: 5,
      image: "https://i.imgur.com/IBInNB9.jpg",
    },
    {
      id: 6,
      image: "https://i.imgur.com/3rAnK2x.jpg",
    },
    {
      id: 7,
      image: "https://i.imgur.com/woFdLmy.jpg",
    },
    {
      id: 8,
      image: "https://i.imgur.com/M7q03gj.jpg",
    },
    {
      id: 9,
      image: "https://i.imgur.com/qy87O7y.jpg",
    },
    {
      id: 10,
      image: "https://i.imgur.com/jpA96KV.jpg",
    },
    {
      id: 11,
      image: "https://i.imgur.com/4lZhJS4.jpg",
    },
    {
      id: 12,
      image: "https://i.imgur.com/M7q03gj.jpg",
    },
    {
      id: 13,
      image: "https://i.imgur.com/lvAuWy4.jpg",
    },
    {
      id: 14,
      image: "https://i.imgur.com/EAKtHQb.jpg",
    },
    {
      id: 15,
      image: "https://i.imgur.com/iQSjfzN.jpg",
    },
  ],
};

export default {
  components: {
    Header,
    Carousel,
    Footer,
  },
  data() {
    return {
      centerLists: [],
      waterfallCards: [],
    };
  },
  created() {
    this.centerLists = dummyData.centerLists;
    this.waterfallCards = dummyData.waterfallCards;
  },
};
</script>

<style lang="scss" scoped>
.section-center-lists {
  margin: 20px 0;

  .lists {
    position: relative;
    display: flex;
    justify-content: space-between;

    li + li::before {
      content: "";
      width: 1px;
      height: 100%;
      background: #706e6c;
      transform: scale(1, 0.5);
      position: absolute;
    }

    img {
      max-width: 220px;
    }
  }
}

.waterfall-cards {
  display: flex;
  flex-flow: column nowrap;

  .card {
    margin: 10px 0;

    img {
      width: 100%;
    }

    &:nth-child(15),
    :nth-child(16) {
      margin-bottom: 30px;
    }
  }
}

@media screen and (min-width: 768px) {
  .waterfall-cards {
    flex-flow: row wrap;
    justify-content: space-between;
    gap: 12px;

    .card {
      margin: 0;
      width: calc(50% - 6px);

      &:nth-child(4n-3),
      :nth-child(4n) {
        height: 80%;
      }

      &:nth-child(4n-1) {
        margin-top: -12%;
      }

      &:nth-child(4n) {
        align-self: flex-end;
      }
    }
  }
}
</style>