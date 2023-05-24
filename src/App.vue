<template>
  <!-- <top-navbar></top-navbar>
  <login-page></login-page>
  <dash-board msg="Welcome to Your Vue.js App"></dash-board> -->
  <top-navbar></top-navbar>
  <router-view></router-view>
</template>

<script>
//import LoginPage from './views/LoginPage.vue';
//import DashBoard from './views/Dashboard.vue';
//import TopNavbar from './components/TopNavbar.vue';
import TopNavbar from '@/components/TopNavbar.vue';

export default {
  name: 'App',
  components: {
    TopNavbar,
    //DashBoard,
    //LoginPage,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position:absolute;
  height:100%;
  width:100%;
}
</style>
