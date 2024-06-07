import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { MyButton } from 'x0ui'

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
