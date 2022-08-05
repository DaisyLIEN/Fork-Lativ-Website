<template>
  <header>
    <div class="brand">
      <router-link to="/"
        ><img
          class="logo"
          src="https://i.imgur.com/ieLi3bO.png"
          alt="image-logo"
      /></router-link>
    </div>
    <div class="search-bar">
      <form action="" id="search">
        <label for="search-text" class="search-text-label"></label>
        <input type="text" class="search-text" placeholder="SEARCH" />
        <font-awesome-icon
          class="icon-search"
          icon="fa-solid fa-magnifying-glass"
        />
      </form>
    </div>
    <div class="cart">
      <router-link to="/shopping/1"
        ><font-awesome-icon
          class="icon-cart"
          icon="fa-solid fa-cart-arrow-down"
      /></router-link>
    </div>
    <input
      type="checkbox"
      name="navbar-toggle"
      id="navbar-toggle"
      class="navbar-toggle"
    />
    <label for="navbar-toggle" class="navbar-toggle-label">
      <span class="hamburger"></span>
    </label>
    <ul class="list-category">
      <li :class="{ active: this.$route.name === 'women' }">
        <router-link to="/women">WOMEN</router-link>
      </li>
      <li :class="{ active: this.$route.name === 'men' }">
        <router-link to="/men">MEN</router-link>
      </li>
      <li><router-link to="/">KIDS</router-link></li>
      <li><router-link to="/">BABY</router-link></li>
      <li><router-link to="/">SPORTS</router-link></li>
    </ul>
    <nav class="nav">
      <ul class="nav-list">
        <li><router-link to="/">訂閱電子報</router-link></li>
        <li><router-link to="/">登入/註冊</router-link></li>
        <li class="nav-cart">
          <router-link to="/shopping/1"
            ><font-awesome-icon
              icon="fa-solid fa-cart-arrow-down"
              bounce
            />&nbsp;&nbsp;<span>查看購物車</span></router-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
/* Header */
header {
  font-size: 14px;
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 105px;
  background: #ffffff;  
  display: grid;
  grid-template-columns: 8fr 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;

  .brand {
    min-width: 122px;
    height: 48px;
  }

  .search-bar {
    .search-text {
      display: none;
    }

    .icon-search {
      font-size: 18px;
    }
  }

  .icon-cart {
    font-size: 18px;
  }

  li {
    color: #706e6c;
    position: relative;

    a {
      display: inline-block;
      width: 100%;
    }
  }

  /* Navbar */
  .nav {
    grid-column: 1 / 5;
    width: 100%;
    position: absolute;
    top: 100%;
    background: #ffffff;
    transform: scale(1, 0);
    transform-origin: top;
    transition: transform 0.3s ease-out;

    &.clicked {
      display: none;
    }

    .nav-list {
      width: 100%;
      text-align: center;

      li {
        margin: 1.4rem 0;
        opacity: 0;

        &.nav-cart {
          display: none;
        }
      }
    }
  }

  /* Navbar-toggle */
  .navbar-toggle {
    visibility: hidden;
    position: absolute;

    &:checked ~ .nav {
      transform: scale(1, 1);

      li {
        opacity: 1;
        transition: opacity 0.2s ease-out 0.15s;
      }
    }
  }

  .navbar-toggle-label {
    display: flex;
    align-items: center;
    margin: 0;
    /* 把 label 空間撐大 */
    position: absolute;
    top: 0;
    bottom: 42px;
    right: 2%;
    cursor: pointer;
  }

  /* 漢堡排 */
  .hamburger {
    position: relative;
    width: 28px;
    height: 3px;
    background: #706e6c;

    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 28px;
      height: 3px;
      background: #706e6c;
    }

    &::before {
      top: 8px;
    }

    &::after {
      bottom: 8px;
    }
  }

  /* List-category */
  .list-category {
    grid-column: 1 / 5;
    grid-row: 2 / 3;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      max-width: 132px;
      text-align: center;
      flex: auto;

      + li::before {
        content: "";
        width: 1px;
        height: 100%;
        background-color: #706e6c;
        transform: scale(1, 0.5);
        position: absolute;
      }

      &.active {
        background-color: #f0ede5;
      }
    }
  }
}

@media screen and (min-width: 768px) {
  header {
    display: flex;
    justify-content: space-between;
    position: relative;
    padding-top: 50px;

    .search-bar {
      position: absolute;
      top: 0;
      right: 0;

      .search-text {
        display: block;
        padding-left: 5px;
      }

      .icon-search {
        position: absolute;
        right: 6%;
        top: 50%;
        transform: translateY(calc(50% - 2px));
        font-size: 12px;
      }
    }

    .icon-cart {
      display: none;
    }

    .navbar-toggle-label {
      display: none;
    }

    /* Navbar */
    .nav {
      all: unset;

      .nav-list {
        display: flex;
        width: 240px;
        font-size: 10px;

        li {
          flex: auto;
          margin: 0;
          opacity: 1;

          + li::before {
            content: "";
            width: 1px;
            height: 100%;
            background: #706e6c;
            transform: scale(1, 0.5);
            position: absolute;
          }

          a {
            color: #4d3126;
            &:hover {
              text-decoration: underline;
            }
          }

          &.nav-cart {
            display: initial;
          }
        }
      }
    }

    .list-category {
      li {
        height: 28px;
        line-height: 28px;
      }
    }
  }
}
</style>