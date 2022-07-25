<template>
  <nav class="wrapper-sidebar">
    <p>&nbsp;&nbsp;{{ currentGroup === "women" ? "女" : "男" }}裝新品 & 熱銷</p>
    <ul class="onsale">
      <li><router-link to="/">&nbsp;超值限定．任選350元</router-link></li>
      <li><router-link to="/">&nbsp;驚喜特惠．任選3件399</router-link></li>
      <li><router-link to="/">&nbsp;夏日特賣．任選99起</router-link></li>
      <li><router-link to="/">&nbsp;精選特惠．任2件298起</router-link></li>
    </ul>
    <hr />
    <p>&nbsp;&nbsp;上衣類</p>
    <ul class="tops">
      <li>
        <router-link
          :to="{ name: currentGroup === 'women' ? 'women-tops' : 'men-tops' }"
          >&nbsp;聯名印花短T</router-link
        >
      </li>
      <!-- <li><router-link to="/">&nbsp;聯名印花長T</router-link></li> -->
      <!-- <li><router-link to="/">&nbsp;短袖上衣</router-link></li> -->
    </ul>
    <p>&nbsp;&nbsp;襯衫類</p>
    <ul class="shirts">
      <li>
        <router-link
          :to="{
            name: currentGroup === 'women' ? 'women-shirts' : 'men-shirts',
          }"
          >&nbsp;休閒襯衫</router-link
        >
      </li>
      <!-- <li><router-link to="/">&nbsp;嫘縈/雪紡</router-link></li> -->
      <!-- <li><router-link to="/">&nbsp;商務襯衫</router-link></li> -->
    </ul>
    <p>&nbsp;&nbsp;外套類</p>
    <ul class="outerwear">
      <li>
        <router-link
          :to="{
            name:
              currentGroup === 'women' ? 'women-outerwear' : 'men-outerwear',
          }"
          >&nbsp;抗UV系列</router-link
        >
      </li>
      <!-- <li><router-link to="/">&nbsp;機能風衣</router-link></li> -->
      <!-- <li><router-link to="/">&nbsp;休閒外套</router-link></li> -->
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      currentGroup: "", // women or men
    };
  },
  created() {
    this.currentGroup = this.$route.name;
  },
};
</script>

<style lang="scss" scoped>
.wrapper-sidebar {
  width: 100%;

  hr {
    transform: scale(0.75);
    transform-origin: left;
  }

  p {
    font-weight: bold;
    margin-bottom: 0.5rem;

    &::before {
      content: "\25AA";
    }

    &:not(:first-child) {
      margin-top: 1rem;
    }
  }

  li {
    margin: 0.4rem 0;

    &::before {
      content: "\003E";
      font-size: 0.4rem;
    }
  }
}
</style>



