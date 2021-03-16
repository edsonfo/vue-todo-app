<template>
  <v-container>
    <v-row class="-centtexter">
      <v-col class="mb-4">
        <h1 class="title-todo">
          todos
        </h1>
      </v-col>
    </v-row>
    <TodoFooter />
  </v-container>
</template>

<script>
  import TodoFooter from '@/components/todo-footer/TodoFooter.vue'

  export default {
    name: 'Header',

    components: {
      TodoFooter
    },

    data: () => ({})
  }
</script>
<style lang="sass" scoped>
  .title-todo
    top: -155px
    width: 100%
    font-family: sans-serif
    font-size: 130px
    font-weight: 100
    text-align: center
    color: rgba(175, 47, 47, 0.15)
    text-rendering: optimizeLegibility
</style>
