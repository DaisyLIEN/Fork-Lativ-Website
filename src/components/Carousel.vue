<template>
  <div
    id="carouselExampleIndicators"
    class="carousel slide"
    data-ride="carousel"
  >
    <ol class="carousel-indicators">
      <li
        data-target="#carouselExampleIndicators"
        data-slide-to="slide.id"
        :class="{ active: slide.id === 0 }"
        v-for="slide in slides"
        :key="slide.id"
      ></li>
    </ol>
    <div class="carousel-inner">
      <div
        class="carousel-item"
        :class="{ active: slide.id === 0 }"
        v-for="slide in slides"
        :key="slide.id"
      >
        <img class="d-block w-100" :src="slide.image" alt="First slide" />
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
const dummyData = {
  carouselSlides: [
    {
      id: 0,
      image: "https://i.imgur.com/Go22p4E.jpg",
    },
    {
      id: 1,
      image: "https://i.imgur.com/vBKbHMz.jpg",
    },
    {
      id: 2,
      image: "https://i.imgur.com/9iBGdGw.jpg",
    },
    {
      id: 3,
      image: "https://i.imgur.com/LY8nLz2.jpg",
    },
    {
      id: 4,
      image: "https://i.imgur.com/ziuyaNE.jpg",
    },
    {
      id: 5,
      image: "https://i.imgur.com/F7aeOfP.jpg",
    },
    {
      id: 6,
      image: "https://i.imgur.com/Ovzambd.jpg",
    },
  ],
};

export default {
  data() {
    return {
      slides: [],
    };
  },
  created() {
    this.slides = dummyData.carouselSlides;
  },
};
</script>

<style lang="scss">
.carousel {
  padding-top: 105px;

  .carousel-indicators li {
    width: 10px;
    height: 10px;
    border-radius: 50%;

    &.active {
      background-color: #706e6c;
    }
  }

  .carousel-control-prev,
  .carousel-control-next {
    width: 40px;
    padding-top: 105px;
  }
}

@media screen and (min-width: 768px) {
  .carousel {
    padding-top: 0;

    .carousel-control-prev,
    .carousel-control-next {
      padding-top: 0;
    }
  }
}
</style>