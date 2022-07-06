<template>
  <div class="main-card">
    <div class="photo">
      <img :src="initialAllShirt.image" alt="" />
    </div>
    <div class="text">
      <p class="title">{{ initialAllShirt.title }}</p>
      <p class="price">
        <span :class="{ onsale: initialAllShirt.onsale }"
          >NT${{ initialAllShirt.originalPrice }}</span
        >&nbsp;<span v-show="initialAllShirt.onsale"
          >活動價 NT${{ initialAllShirt.salePrice }}</span
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialAllShirt: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.main-card {
  // outline: 1px solid green;
  width: 220px;
  // height: 300px;

  .photo {    
    aspect-ratio: 1;    
    
    img {
      display: block;
      object-fit: cover;            
    }
  }

  .text {
    margin-top: 20px;
    text-align: center;
    line-height: 25px;

    .onsale {
      text-decoration: line-through;
    }
  }
}
</style>