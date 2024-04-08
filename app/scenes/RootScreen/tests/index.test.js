/**
 *
 * Tests for HomeScreen
 *
 */

import React from 'react';
import { renderWithIntl } from 'app/utils/testUtils';
import { RootScreenTest } from '../index';
export const setupJest = () => ({ submitSpy: jest.fn() });
jest.mock('@services/NavigationService', () => ({
  setTopLevelNavigator: jest.fn()
}));
describe('<HomeScreen /> container', () => {
  it('should render and match the snapshot', () => {
    const { submitSpy } = setupJest();
    const baseElement = renderWithIntl(<RootScreenTest startup={submitSpy} />);
    expect(baseElement).toMatchSnapshot();
  });

  it('should call the startup prop on mount', () => {
    const { submitSpy } = setupJest();
    renderWithIntl(<RootScreenTest startup={submitSpy} />);
    expect(submitSpy).toHaveBeenCalled();
  });

  it('should not render rootSceen Container', () => {
    const { submitSpy } = setupJest();
    const { getByTestId } = renderWithIntl(
      <RootScreenTest startup={submitSpy} />
    );
    expect(getByTestId('root-screen').type).toBe('View');
    expect(submitSpy).toHaveBeenCalled();
  });
});
