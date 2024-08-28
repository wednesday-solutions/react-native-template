/**
 *
 * Tests for SplashScreen
 *
 */
import React from 'react';
import { renderWithI18next } from 'app/utils/testUtils';
import SplashScreen from '../index';

describe('<SplashScreen />', () => {
  it('should render and match the snapshot', () => {
    const baseElement = renderWithI18next(<SplashScreen />);
    expect(baseElement).toMatchSnapshot();
  });

  it('should contain 1 splash screen', () => {
    const { getAllByTestId } = renderWithI18next(<SplashScreen />);
    expect(getAllByTestId('splash-screen').length).toBe(1);
  });
});
