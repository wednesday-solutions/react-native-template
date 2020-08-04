/**
 *
 * Tests for LogoWithInstructions
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { renderWithIntl } from '@utils/testUtils';
import LogoWithInstructions from '../index';

describe('<LogoWithInstructions />', () => {
  it('Should render and match the snapshot', () => {
    const { baseElement } = renderWithIntl(<LogoWithInstructions />);
    expect(baseElement).toMatchSnapshot();
  });
});
