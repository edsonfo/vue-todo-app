import { shallowMount } from '@vue/test-utils'
import Header from '@/components/header/Header.vue'

describe('Header component tests', () => {
  const wrapper = shallowMount(Header)
  it('should match snapshot', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
