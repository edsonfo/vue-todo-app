import { shallowMount } from '@vue/test-utils'
import TodoInput from '@/components/todo-input/TodoInput.vue'

describe('TodoInput component tests', () => {
  const wrapper = shallowMount(TodoInput, {
    data: () => ({
      value: 'hola'
    })
  })

  it('should match snapshot', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render a text field', () => {
    const textInput = wrapper.find('.todo-input')
    expect(textInput.exists()).toBe(true)
  })

  it('should render a save-button', () => {
    const button = wrapper.find('.btn-save')
    expect(button.exists()).toBe(true)
  })

  it('should emmit an event when save-button is clicked', () => {
    const button = wrapper.find('.btn-save')
    button.trigger('click')
    const eventEmitted = wrapper.emitted()['add-todo']
    expect(eventEmitted[0][0]).toEqual('hola')
  })
})
