<template>
  <div class="content">
    <h5>聯名印花短T</h5>    
    <div class="cards">
      <MainCard
        v-for="womenTop in womenTops"
        :key="womenTop.id"
        :initial-cards="womenTop"
      />
    </div>
  </div>
</template>

<script>
import MainCard from "../components/MainCard.vue";

export default {
  components: {
    MainCard,
  },
  props: {
    initialWomenAllShirts: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      womenTops: [],
    };
  },
  created() {
    this.filterWomenTops();
  },
  methods: {
    filterWomenTops() {
      this.womenTops = this.initialWomenAllShirts.filter((item) => {
        return item.category[0] === "上衣類";
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  h5 {
    font-weight: bold;
    color: #555;
    margin-bottom: 45px;
  }
  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    grid-row-gap: 50px;
    justify-items: center;
  }
}
</style>