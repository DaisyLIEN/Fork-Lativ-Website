<template>
  <div class="content">
    <h5>休閒襯衫</h5>
    <div class="cards">
      <MainCard
        v-for="menShirt in menShirts"
        :key="menShirt.id"
        :initial-cards="menShirt"
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
      menShirts: [],
    };
  },
  created() {
    this.filterMenShirts();
  },
  methods: {
    filterMenShirts() {
      this.menShirts = this.initialMenAllShirts.filter((item) => {
        return item.category[0] === "襯衫類";
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