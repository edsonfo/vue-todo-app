<template>
  <form class="input-model">
    <v-text-field
      class="text-placeholder"
      placeholder="what needs to be done?"
      clearable
      v-model="textValue"
    >
      <v-btn icon slot="prepend-inner">
        <v-icon>
          {{ icons.mdiChevronDown }}
        </v-icon>
      </v-btn>

      <v-icon @click="onAddTodo" v-if="!!textValue" icon slot="append">
        {{ icons.mdiContentSave }}
      </v-icon>
    </v-text-field>
  </form>
</template>

<script>
  import { mdiChevronDown, mdiContentSave } from '@mdi/js'

  export default {
    name: 'TodoInput',

    data() {
      return {
        textValue: '',
        icons: {
          mdiChevronDown,
          mdiContentSave
        }
      }
    },
    methods: {
      onAddTodo() {
        this.$emit('add-todo')
      }
    }
  }
</script>
<style lang="less" scoped>
  .input-model {
    max-width: 50%;
    margin-right: auto;
    margin-left: auto;
  }
  .text-placeholder {
    padding: 16px 16px 16px 16px;
    font-family: Roboto;
    font-style: oblique;
    font-size: 26px;
    max-width: 1300px;
    margin-bottom: -18px;
    min-width: 600px;
  }
</style>
