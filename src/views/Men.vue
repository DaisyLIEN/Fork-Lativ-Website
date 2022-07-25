<template>
  <div class="wrapper">
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="content" v-show=" this.$route.name === 'men' ">
      <div class="photo">
        <img src="https://i.imgur.com/rGRESkF.jpg" alt="" />
      </div>
      <div class="cards">
        <MainCard
          v-for="menAllShirt in menAllShirts"
          :key="menAllShirt.id"
          :initial-cards="menAllShirt"
        />
      </div>
      <router-view :initial-men-all-shirts="menAllShirts" />
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import MainCard from "../components/MainCard.vue";
import { dummyData } from "../assets/dummydata/DummyData.js"

export default {
  components: {
    Sidebar,
    MainCard,
  },
  data() {
    return {
      menAllShirts: [],
    };
  },
  created() {
    this.menAllShirts = dummyData.menAll;
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