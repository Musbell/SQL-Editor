import { mount } from '@vue/test-utils'
import HeaderQueryPanel from '@/components/HeaderQueryPanel.vue'

describe('HeaderQueryPanel', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(HeaderQueryPanel)
    expect(wrapper.vm).toBeTruthy()
  })
})
