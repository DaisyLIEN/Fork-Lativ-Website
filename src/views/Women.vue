<template>
  <div class="wrapper">
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="content">
      <div class="photo">
        <img src="https://i.imgur.com/ERxKVcY.jpg" alt="" />
      </div>
      <div class="cards">
        <MainCard
          v-for="allShirt in allShirts"
          :key="allShirt.id"
          :initial-all-shirt="allShirt"
        />
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import MainCard from "../components/MainCard.vue";

const dummyData = {
  allShirts: [
    {
      id: 0,
      title: "鬼滅之刃印花T恤-04-女",
      color: "白色",
      originalPrice: 299,
      onsale: true,
      salePrice: 199,
      image: "https://i.imgur.com/Orqb3wM.jpg",
    },
    {
      id: 1,
      title: "鬼滅之刃印花T恤-04-女",
      color: "白色",
      originalPrice: 299,
      onsale: true,
      salePrice: 199,
      image: "https://i.imgur.com/Orqb3wM.jpg",
    },
    {
      id: 2,
      title: "BROWN & FRIENDS竹節棉T恤-女",
      color: "藏青",
      originalPrice: 299,
      onsale: false,
      salePrice: 299,
      image: "https://i.imgur.com/CTWekqT.jpg",
    },
    {
      id: 3,
      title: "BROWN & FRIENDS竹節棉T恤-女",
      color: "淺灰粉",
      originalPrice: 299,
      onsale: false,
      salePrice: 299,
      image: "https://i.imgur.com/B39vPXS.jpg",
    },
    {
      id: 4,
      title: "鬼滅之刃印花T恤-04-女",
      color: "白色",
      originalPrice: 299,
      onsale: true,
      salePrice: 199,
      image: "https://i.imgur.com/Orqb3wM.jpg",
    },
    {
      id: 5,
      title: "BROWN & FRIENDS印花T恤-04-女",
      color: "白色",
      originalPrice: 299,
      onsale: true,
      salePrice: 199,
      image: "https://i.imgur.com/wcA3hDD.jpg",
    },
    {
      id: 6,
      title: "鬼滅之刃印花T恤-04-女",
      color: "白色",
      originalPrice: 299,
      onsale: true,
      salePrice: 199,
      image: "https://i.imgur.com/Orqb3wM.jpg",
    },
    {
      id: 7,
      title: "鬼滅之刃印花T恤-04-女",
      color: "白色",
      originalPrice: 299,
      onsale: true,
      salePrice: 199,
      image: "https://i.imgur.com/Orqb3wM.jpg",
    },
    {
      id: 8,
      title: "鬼滅之刃印花T恤-04-女",
      color: "白色",
      originalPrice: 299,
      onsale: true,
      salePrice: 199,
      image: "https://i.imgur.com/Orqb3wM.jpg",
    },
    {
      id: 9,
      title: "鬼滅之刃印花T恤-04-女",
      color: "白色",
      originalPrice: 299,
      onsale: true,
      salePrice: 199,
      image: "https://i.imgur.com/Orqb3wM.jpg",
    },
  ],
};

export default {
  components: {
    Sidebar,
    MainCard,
  },
  data() {
    return {
      allShirts: [],
    };
  },
  created() {
    this.allShirts = dummyData.allShirts;
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

  .content {    
    flex: 1;    

    .photo {
      width: 100%;
      margin-bottom: 20px;
    }

    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      grid-row-gap: 50px;
      justify-items: center;
    }
  }
}

@media screen and (min-width: 768px) {
  .wrapper {
    padding-top: 10px;
  }
}
</style>