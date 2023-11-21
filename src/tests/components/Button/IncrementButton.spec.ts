import IncrementButtonVue from '~/components/Button/IncrementButton.vue'
import { mount } from '@vue/test-utils'

describe('IncrementButton.vue', () => {
  test('表示', () => {
    const wrapper = mount(IncrementButtonVue)
    expect(wrapper.exists()).toBeTruthy()
  })

  test('カウントが0から始まる', () => {
    const wrapper = mount(IncrementButtonVue)
    expect(wrapper.text()).toContain('0')
  })

  test('ボタンクリックでカウントが増える', async () => {
    const wrapper = mount(IncrementButtonVue)
    const button = wrapper.find('button')
    await button.trigger('click')
    expect(wrapper.text()).toContain('1')
  })
})
