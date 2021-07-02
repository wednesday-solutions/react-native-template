/**
 *
 * Tests for T
 *
 */
import React from 'react';
import { renderWithIntl } from 'app/utils/testUtils';
import T from '../index';

describe('<T />', () => {
  it('should render and match the snapshot', () => {
    const baseElement = renderWithIntl(<T />);
    expect(baseElement).toMatchSnapshot();
  });

  it('should contain 1 t', () => {
    const { getAllByTestId } = renderWithIntl(<T id="soemthing" />);
    expect(getAllByTestId('t').length).toBe(1);
  });
});
