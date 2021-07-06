/**
 *
 * Tests for ExampleScreen
 *
 */

import React from 'react';
import { renderProvider } from 'app/utils/testUtils';
import { ExampleScreenTest } from '../index';

describe('<ExampleScreen /> Container tests', () => {
  let submitSpy;

  beforeAll(() => {
    submitSpy = jest.fn();
  });

  it('should render and match the snapshot', () => {
    const baseElement = renderProvider(
      <ExampleScreenTest fetchUser={submitSpy} />
    );
    expect(baseElement).toMatchSnapshot();
  });

  it('should fetch the user data on mount', () => {
    renderProvider(<ExampleScreenTest fetchUser={submitSpy} />);
    expect(submitSpy).toHaveBeenCalled();
  });
  it('should render ActivityIndicator if userIsLoading is true', () => {
    const { getByTestId } = renderProvider(
      <ExampleScreenTest fetchUser={submitSpy} userIsLoading />
    );

    expect(getByTestId('loader').type).toBe('ActivityIndicator');
    expect(submitSpy).toHaveBeenCalled();
  });

  it('should not render ActivityIndicator if userIsLoading is false, should instead render exampleContainerContent', () => {
    const { getByTestId } = renderProvider(
      <ExampleScreenTest fetchUser={submitSpy} userIsLoading={false} />
    );
    expect(getByTestId('example-container-content').type).toBe('View');
    expect(submitSpy).toHaveBeenCalled();
  });
});
