<template>
  <v-container>
    <v-row class="-centtexter">
      <v-col class="mb-4">
        <h1 class="title-todo">
          todos
        </h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>
<style lang="less" scoped>
  .title-todo {
    font-family: sans-serif;
    font-size: 130px;
    font-weight: 100;
    text-align: center;
    color: rgba(175, 47, 47, 0.15);
    text-rendering: optimizeLegibility;
  }
</style>
