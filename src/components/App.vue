<template>
  <div class="app">
    <NavBar></NavBar>
    <router-view></router-view>
    <Footer></Footer>
    <Toast/>
  </div>
</template>

<script>
import Footer from '../components/Template/Footer.vue'
import NavBar from '../components/Template/NavBar.vue'
import Toast from '../components/Common/Toast.vue'

export default {
  components: {
    Footer,
    NavBar,
    Toast,
  },
};
</script>

<style lang="scss">
  body {
    display: flex;
    padding: 0;
    margin: 0;
    width: 100vw;
    height: 100vh;
    font-family: 'roboto';
  }

  .app {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>

