/**
 *
 * Tests for ExampleScreen
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react'
import { renderProvider } from '../../../utils/testUtils'
import { ExampleScreenTest } from '../index'

describe('<ExampleScreen />', () => {
  let submitSpy

  beforeAll(() => {
    submitSpy = jest.fn()
  })

  it('Should render and match the snapshot', () => {
    const { container } = renderProvider(
      <ExampleScreenTest fetchUser={submitSpy} />
    )
    expect(container.children[0]).toMatchSnapshot()
  })

  it('should fetch the user data on mount', () => {
    renderProvider(<ExampleScreenTest fetchUser={submitSpy} />)
    expect(submitSpy).toHaveBeenCalled()
  })
  it('should render ActivityIndicator if userIsLoading is true', () => {
    const { getByTestId } = renderProvider(
      <ExampleScreenTest fetchUser={submitSpy} userIsLoading />
    )

    // expect(getByTestId('loader')).toExist()
    expect(getByTestId('loader').type).toBe('ActivityIndicator')
    expect(submitSpy).toHaveBeenCalled()
  })

  it('should not render ActivityIndicator if userIsLoading is false, should instead render exampleContainerContent', () => {
    const { getByTestId } = renderProvider(
      <ExampleScreenTest fetchUser={submitSpy} userIsLoading={false} />
    )
    expect(getByTestId('exampleContainerContent').type).toBe('View')
    expect(submitSpy).toHaveBeenCalled()
  })
})
