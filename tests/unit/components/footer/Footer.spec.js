import { shallowMount } from '@vue/test-utils'
import Footer from '@/components/footer/Footer.vue'

describe('Footer component tests', () => {
  const wrapper = shallowMount(Footer)
  it('should match snapshot', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
