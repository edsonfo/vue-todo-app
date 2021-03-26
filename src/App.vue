<template>
  <v-app>
    <v-main>
      <Header />
      <TodoInput />>
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
  import Header from '@/components/header/Header.vue'
  import Footer from '@/components/footer/Footer.vue'
  import TodoInput from '@/components/todo-input/TodoInput.vue'

  export default {
    name: 'App',

    components: {
      Header,
      Footer,
      TodoInput
    }
  }
</script>
