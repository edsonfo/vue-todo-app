import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  const wrapper = shallowMount(HelloWorld)
  it('should match snapshot', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
