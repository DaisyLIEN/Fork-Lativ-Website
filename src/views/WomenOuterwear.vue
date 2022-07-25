<template>
  <div class="content">
    <h5>抗UV系列</h5>    
    <div class="cards">
      <MainCard
        v-for="womenOuterwear in womenOuterwears"
        :key="womenOuterwear.id"
        :initial-cards="womenOuterwear"
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
      womenOuterwears: [],
    };
  },
  created() {
    this.filterWomenOuterwears();
  },
  methods: {
    filterWomenOuterwears() {
      this.womenOuterwears = this.initialWomenAllShirts.filter((item) => {
        return item.category[0] === "外套類";
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