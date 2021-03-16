import { shallowMount } from '@vue/test-utils'
import TodoFooter from '@/components/todo-footer/TodoFooter.vue'

describe('TodoFooter component tests', () => {
  const wrapper = shallowMount(TodoFooter, {
    mocks: {
      $t: msg => msg
    }
  })
  it('should match snapshot', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
