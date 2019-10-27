/**
 *
 * Tests for Container
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */
import React from 'react'
import { renderWithIntl } from 'app/utils/testUtils'
import Container from '../index'

describe('<Container />', () => {
  it('Should render and match the snapshot', () => {
    const { baseElement } = renderWithIntl(<Container />)
    expect(baseElement).toMatchSnapshot()
  })

  it('Should contain 1 container', () => {
    const { getAllByTestId } = renderWithIntl(<Container />)
    expect(getAllByTestId('container').length).toBe(1)
  })
})
