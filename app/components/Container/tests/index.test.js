/**
 *
 * Tests for Container
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
// import 'jest-dom/extend-expect' // add some helpful assertions

import Container from '../index'

Enzyme.configure({ adapter: new Adapter() })

describe('<Container />', () => {
  it('Should render and match the snapshot', () => {
    const component = shallow(<Container />)
    expect(component).toMatchSnapshot()
  })
})
