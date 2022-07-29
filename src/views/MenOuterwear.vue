<template>
  <div class="content">
    <h5>抗UV系列</h5>
    <div class="cards">
      <MainCard
        v-for="menOuterwear in menOuterwears"
        :key="menOuterwear.id"
        :initial-cards="menOuterwear"
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
      menOuterwears: [],
    };
  },
  created() {
    this.filterMenOuterwears();
  },
  methods: {
    filterMenOuterwears() {
      this.menOuterwears = this.initialMenAllShirts.filter((item) => {
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
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        grid-column-gap: 10px;
    grid-row-gap: 50px;
    justify-items: center;
  }
}
</style>