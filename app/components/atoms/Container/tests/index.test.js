/**
 *
 * Tests for Container
 *
 */
import React from 'react';
import { renderWithIntl } from 'app/utils/testUtils';
import Container from '../index';

describe('<Container />', () => {
  it('should render and match the snapshot', () => {
    const baseElement = renderWithIntl(<Container />);
    expect(baseElement).toMatchSnapshot();
  });

  it('should contain 1 container', () => {
    const { getAllByTestId } = renderWithIntl(<Container />);
    expect(getAllByTestId('container').length).toBe(1);
  });
});
