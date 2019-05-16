<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <MainPage></MainPage> -->
    <!-- <router-link to="/home/layout">layout</router-link> -->
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import MainPage from '@/components/MainPage.vue'
export default {
  name: 'home',
  components: {
    MainPage
  }
}
</script>
