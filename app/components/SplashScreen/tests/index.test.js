/**
 *
 * Tests for SplashScreen
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */
import React from 'react';
import { renderWithIntl } from 'app/utils/testUtils';
import SplashScreen from '../index';

describe('<SplashScreen />', () => {
  it('should render and match the snapshot', () => {
    const { baseElement } = renderWithIntl(<SplashScreen />);
    expect(baseElement).toMatchSnapshot();
  });

  it('should contain 1 splash screen', () => {
    const { getAllByTestId } = renderWithIntl(<SplashScreen />);
    expect(getAllByTestId('splash-screen').length).toBe(1);
  });
});
