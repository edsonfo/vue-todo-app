import { shallowMount } from '@vue/test-utils'
import TodoInput from '@/components/todo-input/TodoInput.vue'

describe('TodoInput component tests', () => {
  const wrapper = shallowMount(TodoInput)
  it('should match snapshot', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
