/**
 *
 * Tests for If
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from '@testing-library/react-native';
import If from '../index';

describe('<If />', () => {
  it('Should render and match the snapshot', () => {
    const { baseElement } = render(<If />);
    expect(baseElement).toMatchSnapshot();
  });
});
