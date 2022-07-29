<template>
  <div class="main-card">
    <div class="photo">
      <router-link :to="{ name: 'detail', params: { id: card.id } }">
        <img :src="card.image.main" alt="" />
      </router-link>
    </div>
    <div class="text">
      <p class="title">{{ card.title }}</p>
      <p class="price">
        <span :class="{ onsale: card.onSale }">NT${{ card.originalPrice }}</span
        >&nbsp;<span v-show="card.onSale">活動價 NT${{ card.nowPrice }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialCards: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      card: this.initialCards,
    };
  },
  watch: {
    initialCards(newValue) {
      this.card = {
        ...this.card,
        ...newValue,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.main-card {
  // outline: 1px solid orange;
  width: 220px;

  .photo {
    height: 330px;

    img {
      display: block;
      object-fit: contain;
    }
  }

  .text {
    margin-top: 25px;
    text-align: center;
    line-height: 25px;

    .onsale {
      text-decoration: line-through;
    }
  }
}
</style>