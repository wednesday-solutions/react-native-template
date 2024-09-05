import React from 'react';
import { useRecoilValue } from 'recoil';
import { render, waitFor } from '@testing-library/react-native';
import { navigateAndReset } from '@app/services/navigationService';
import { RootScreenTest } from '../index';

jest.mock('recoil');
jest.mock('@app/services/navigationService');

describe('<RootScreen />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render and match the snapshot', () => {
    useRecoilValue.mockReturnValue(true); // Mock app state as truthy
    const { baseElement } = render(<RootScreenTest />);
    expect(baseElement).toMatchSnapshot();
  });

  it('should render the Container and AppNavigator components', () => {
    useRecoilValue.mockReturnValue(true); // Mock app state as truthy
    const { getByTestId } = render(<RootScreenTest />);

    const rootScreenContainer = getByTestId('root-screen');
    expect(rootScreenContainer).toBeTruthy();

    // Check that AppNavigator is rendered within Container
    expect(rootScreenContainer.children.length).toBeGreaterThan(0);
  });

  it('should call navigateAndReset when appState is falsy', async () => {
    useRecoilValue.mockReturnValue(null); // Mock app state as falsy
    render(<RootScreenTest />);

    await waitFor(
      () => {
        expect(navigateAndReset).toHaveBeenCalledWith('MainScreen');
      },
      { timeout: 1500 }
    );
  });

  it('should not call navigateAndReset when appState is truthy', async () => {
    useRecoilValue.mockReturnValue(true); // Mock app state as truthy
    render(<RootScreenTest />);

    await waitFor(() => {
      expect(navigateAndReset).not.toHaveBeenCalled();
    });
  });

  it('should handle changes to appState', async () => {
    const { rerender } = render(<RootScreenTest />);

    // First render with a falsy app state
    useRecoilValue.mockReturnValueOnce(null);
    rerender(<RootScreenTest />);
    await waitFor(
      () => {
        expect(navigateAndReset).toHaveBeenCalledWith('MainScreen');
      },
      { timeout: 1500 }
    );

    // Re-render with a truthy app state
    useRecoilValue.mockReturnValueOnce(true);
    rerender(<RootScreenTest />);
    await waitFor(() => {
      expect(navigateAndReset).toHaveBeenCalledTimes(1); // Should not be called again
    });
  });
});
