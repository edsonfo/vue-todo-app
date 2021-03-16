<template>
  <div class="home-page">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Header msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
  // @ is an alias to /src
  import Header from '@/components/header/Header.vue'

  export default {
    name: 'Home',
    components: {
      Header
    }
  }
</script>
