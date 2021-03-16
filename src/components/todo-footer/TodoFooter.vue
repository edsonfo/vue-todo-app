<template>
  <v-container>
    <v-card-text class="footer-text">
      Double-click to edit a todo<br />
      Credits: Edson Fernandez<br />
      TodoVueApp
    </v-card-text>
  </v-container>
</template>

<script>
  export default {
    name: 'TodoFooter',

    data: () => ({})
  }
</script>
<style lang="sass" scoped>
  .footer-text
    text-align: center
    color: #bfbfbf
</style>
