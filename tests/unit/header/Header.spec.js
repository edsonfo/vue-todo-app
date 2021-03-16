import { shallowMount } from '@vue/test-utils'
import Header from '@/components/header/Header.vue'

describe('HelloWorld.vue', () => {
  const wrapper = shallowMount(HelloWorld)
  it('should match snapshot', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
