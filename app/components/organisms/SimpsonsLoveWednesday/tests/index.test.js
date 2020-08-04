/**
 *
 * Tests for SimpsonsLoveWednesday
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { renderWithIntl } from '@utils/testUtils';
import SimpsonsLoveWednesday from '../index';

describe('<SimpsonsLoveWednesday />', () => {
  it('Should render and match the snapshot', () => {
    const { baseElement } = renderWithIntl(<SimpsonsLoveWednesday />);
    expect(baseElement).toMatchSnapshot();
  });
});
