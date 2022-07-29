<template>
  <div class="content">
    <h5>聯名印花短T</h5>
    <div class="cards">
      <MainCard
        v-for="menTop in menTops"
        :key="menTop.id"
        :initial-cards="menTop"
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
    initialMenAllShirts: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      menTops: [],
    };
  },
  created() {
    this.filterMenTops();
  },
  methods: {
    filterMenTops() {
      this.menTops = this.initialMenAllShirts.filter((item) => {
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
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        grid-column-gap: 10px;
    grid-row-gap: 50px;
    justify-items: center;
  }
}
</style>