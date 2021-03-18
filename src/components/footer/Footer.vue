<template>
  <v-container>
    <v-card-text class="footer-text">
      Double-click to edit a todo<br />
      Credits: Edson Fernandez<br />
      TodoVueApp © {{ new Date().getFullYear() }}
    </v-card-text>
  </v-container>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>
<style lang="less" scoped>
  .footer-text {
    text-align: center;
    color: #bfbfbf;
  }
</style>
