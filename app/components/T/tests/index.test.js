/**
 *
 * Tests for T
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */
import React from 'react'
import { renderWithIntl } from 'app/utils/testUtils'
import T from '../index'

describe('<T />', () => {
  it('Should render and match the snapshot', () => {
    const { baseElement } = renderWithIntl(<T />)
    expect(baseElement).toMatchSnapshot()
  })

  it('Should contain 1 t', () => {
    const { getAllByTestId } = renderWithIntl(<T id="soemthing" />)
    expect(getAllByTestId('t').length).toBe(1)
  })
})
