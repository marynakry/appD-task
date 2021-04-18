import { Paragraph } from '../Paragraph'
import React from 'react'
import { render } from '@testing-library/react'
import { describe, expect, it } from '@jest/globals'

describe('Paragraph', () => {
  it('render paragraph component', () => {
    const { getByText } = render(<Paragraph>test</Paragraph>)
    expect(getByText('test')).toBeTruthy()
    expect(getByText('test')).toMatchSnapshot()
  })
})
