/**
 *
 * Tests for T
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

/* global shallowWithIntl */
/* eslint no-undef: "error" */
import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import T from '../index'

Enzyme.configure({ adapter: new Adapter() })

describe('<T />', () => {
  it('Should render and match the snapshot', () => {
    const component = shallowWithIntl(<T id="test" />)
    expect(component).toMatchSnapshot()
  })
})
