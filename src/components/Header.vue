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
      <li><router-link to="/women">WOMEN</router-link></li>
      <li><router-link to="/men">MEN</router-link></li>
      <li><router-link to="/">KIDS</router-link></li>
      <li><router-link to="/">BABY</router-link></li>
      <li><router-link to="/">SPORTS</router-link></li>
    </ul>
    <nav class="nav">
      <ul class="nav-list">
        <li><router-link to="/">訂閱電子報</router-link></li>
        <li><router-link to="/">登入/註冊</router-link></li>
        <li><router-link to="/shopping/1">0個商品</router-link></li>
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
  /* 陰影 */
  // -webkit-box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.1);
  // -moz-box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.1);
  // box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 8fr 1fr 1fr;
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
      font-size: 20px;
    }
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
    grid-column: 1 / 4;
    width: 100%;
    position: absolute;
    top: 100%;
    background: #ffffff;
    transform: scale(1, 0);
    transform-origin: top;
    transition: transform 0.3s ease-out;

    .nav-list {
      width: 100%;
      text-align: center;

      li {
        margin: 1.4rem 0;
        opacity: 0;
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
    margin: 0;
  }

  /* 漢堡排 */
  .hamburger {
    position: relative;
    width: 30px;
    height: 3px;
    background: #000000;

    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 30px;
      height: 3px;
      background: #000000;
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
    grid-column: 1 / 4;
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
        background: #706e6c;
        transform: scale(1, 0.5);
        position: absolute;
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
          /* position: relative; */
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
        }
      }
    }
  }
}
</style>