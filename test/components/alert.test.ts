import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { MyButton } from 'my-components'

describe('my-button', () => {
  it('button render test', () => {
    const wrapper = mount(MyButton, {
      slots: {
        default: () => 'Test Button',
      },
    })

    expect(wrapper.find('.my-button').text()).toBe('Test Button')
  })
})
