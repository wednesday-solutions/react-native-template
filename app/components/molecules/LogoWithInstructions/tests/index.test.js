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
    const baseElement = renderWithIntl(<LogoWithInstructions />);
    expect(baseElement).toMatchSnapshot();
  });
  it('should render the instructions pased as props', () => {
    const instructions = 'PRESS CMD + D for iOS';
    const { getByText } = renderWithIntl(
      <LogoWithInstructions instructions={instructions} />
    );
    expect(getByText(instructions)).toBeTruthy();
  });
});
