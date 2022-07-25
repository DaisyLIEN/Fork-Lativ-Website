<template>
  <div id="fork-lativ-web-vue">
    <Header />    
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import '@/assets/scss/Basic.scss'
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: 'App',
  components: {
    Header,    
    Footer
  },
}
</script>

<style>
/* Reset CSS */
body {
  margin: 0;
  padding: 0;
}
* {
  box-sizing: border-box;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0px;
  padding: 0px;
}
ul,
ol,
li {
  list-style: none;
  margin: 0px;
  padding: 0px;
}
a,
a:hover,
a:focus {
  text-decoration: none;
}
img {
  width: 100%;
  height: 100%;
  display: block;
}
.btn,
button,
button:focus,
input:focus,
textarea:focus,
select,
select:focus,
a:focus {
  outline: 0px !important;
}
button {
  background-color: transparent;
  border: 0;
  cursor: pointer;
}
button[disabled] {
  pointer-events: none;
}
input {
  padding: 0;
}
input:required {
  box-shadow: none;
}
input:invalid {
  box-shadow: none;
}
</style>