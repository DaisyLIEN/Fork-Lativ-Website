<template>
  <div class="content">
    <h5>休閒襯衫</h5>
    <div class="cards">
      <MainCard
        v-for="womenShirt in womenShirts"
        :key="womenShirt.id"
        :initial-cards="womenShirt"
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
      womenShirts: [],
    };
  },
  created() {
    this.filterWomenShirts();
  },
  methods: {
    filterWomenShirts() {
      this.womenShirts = this.initialWomenAllShirts.filter((item) => {
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
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        grid-column-gap: 10px;
    grid-row-gap: 50px;
    justify-items: center;
  }
}
</style>