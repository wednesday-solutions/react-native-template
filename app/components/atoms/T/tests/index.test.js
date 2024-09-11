/**
 *
 * Tests for T
 *
 */
import React from 'react';
import { renderWithI18next } from 'app/utils/testUtils';
import T from '../index';

describe('<T />', () => {
  it('should render and match the snapshot', () => {
    const baseElement = renderWithI18next(<T />);
    expect(baseElement).toMatchSnapshot();
  });

  it('should contain 1 t', () => {
    const { getAllByTestId } = renderWithI18next(<T id="soemthing" />);
    expect(getAllByTestId('t').length).toBe(1);
  });
});
