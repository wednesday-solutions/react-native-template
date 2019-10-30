/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../app/app';

// Note: test renderer must be required after react-native.

jest.useFakeTimers();

it('renders correctly', async () => {
  renderer.create(<App />);
});
 