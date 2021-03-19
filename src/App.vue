<template>
  <v-app>
    <v-main>
      <Header />
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
  import Header from '@/components/header/Header.vue'
  import Footer from '@/components/footer/Footer.vue'

  export default {
    name: 'App',

    components: {
      Header,
      Footer
    }
  }
</script>
