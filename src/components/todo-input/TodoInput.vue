<template>
  <v-text-field
    v-model="value"
    class="todo-input"
    placeholder="what needs to be done?"
    clearable
  >
    <v-icon
      v-if="!!value"
      icon
      class="btn-save"
      slot="append"
      @click="onAddTodo"
    >
      mdi-content-save
    </v-icon>
  </v-text-field>
</template>

<script>
  export default {
    name: 'TodoInput',

    data() {
      return {
        value: ''
      }
    },

    methods: {
      onAddTodo() {
        this.$emit('add-todo', this.value)
      }
    }
  }
</script>

<style lang="less" scoped>
  .todo-input {
    width: 100%;
    padding: 16px;
    font-family: Roboto;
    font-style: oblique;
    font-size: 26px;
  }
</style>
