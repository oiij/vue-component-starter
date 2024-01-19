import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import { MyButton } from 'my-components'

const ALERT_DESCRIPTION = 'Test content'
const ALERT_TITLE = 'Test title'
describe('my-button', () => {
  test('button render test', () => {
    const wrapper = mount(MyButton, {
      slots: {
        default: () => 'Test Button',
      },
    })

    expect(wrapper.find('.my-button').text()).toBe('Test Button')
  })
})
