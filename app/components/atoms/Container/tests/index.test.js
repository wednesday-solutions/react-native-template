/**
 *
 * Tests for Container
 *
 */
import React from 'react';
import { renderWithI18next } from 'app/utils/testUtils';
import Container from '../index';

describe('<Container />', () => {
  it('should render and match the snapshot', () => {
    const baseElement = renderWithI18next(<Container />);
    expect(baseElement).toMatchSnapshot();
  });

  it('should contain 1 container', () => {
    const { getAllByTestId } = renderWithI18next(<Container />);
    expect(getAllByTestId('container').length).toBe(1);
  });
});
