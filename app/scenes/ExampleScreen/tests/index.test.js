import React from 'react';
import {
  RecoilRoot,
  useRecoilValueLoadable,
  useSetRecoilState,
  useRecoilState
} from 'recoil';
import { render, fireEvent } from '@testing-library/react-native';
import { ExampleScreenTest } from '../index';

jest.mock('recoil', () => ({
  ...jest.requireActual('recoil'),
  useRecoilValueLoadable: jest.fn(),
  useSetRecoilState: jest.fn(),
  useRecoilState: jest.fn()
}));
jest.mock('posthog-react-native', () => ({
  usePostHog: jest.fn(() => ({
    identify: jest.fn(),
    capture: jest.fn()
  }))
}));
describe('ExampleScreen', () => {
  const mockSetFetchTrigger = jest.fn();
  const mockSetUser = jest.fn();
  const mockUseRecoilState = jest.fn();

  beforeEach(() => {
    useSetRecoilState.mockReturnValue(mockSetFetchTrigger);
    useRecoilValueLoadable.mockReturnValue({ state: 'loading' });
    mockUseRecoilState.mockReturnValue([null, mockSetUser]);
    useRecoilState.mockImplementation(mockUseRecoilState);
    jest.spyOn(global.console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders loading indicator initially', () => {
    const { getByTestId } = render(
      <RecoilRoot>
        <ExampleScreenTest />
      </RecoilRoot>
    );

    expect(getByTestId('loader')).toBeTruthy();
  });

  test('renders content when userLoadable.state is "hasValue"', () => {
    useRecoilValueLoadable.mockReturnValue({
      state: 'hasValue',
      contents: { character: 'Homer' }
    });

    const { getByTestId } = render(
      <RecoilRoot>
        <ExampleScreenTest />
      </RecoilRoot>
    );

    expect(getByTestId('example-container-content')).toBeTruthy();
  });

  test('renders error message when userLoadable.state is "hasError"', () => {
    useRecoilValueLoadable.mockReturnValue({
      state: 'hasError',
      contents: { message: 'Error occurred' }
    });

    const { getByText } = render(
      <RecoilRoot>
        <ExampleScreenTest />
      </RecoilRoot>
    );

    expect(getByText('Error occurred')).toBeTruthy();
  });

  test('calls requestFetchUser on button press', () => {
    useRecoilValueLoadable.mockReturnValue({
      state: 'hasValue',
      contents: { character: 'Homer' }
    });

    const { getByText } = render(
      <RecoilRoot>
        <ExampleScreenTest />
      </RecoilRoot>
    );

    fireEvent.press(getByText('refresh'));
    expect(mockSetFetchTrigger).toHaveBeenCalled();
  });

  test('sets user when userLoadable.state is "hasValue"', () => {
    useRecoilValueLoadable.mockReturnValue({
      state: 'hasValue',
      contents: { character: 'Homer' }
    });

    render(
      <RecoilRoot>
        <ExampleScreenTest />
      </RecoilRoot>
    );

    expect(mockSetUser).toHaveBeenCalledWith({ character: 'Homer' });
  });
});
