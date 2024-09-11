import React from 'react';
import { render } from '@testing-library/react-native';
import T from '@atoms/T';
import { renderWithI18next } from '@utils/testUtils';
import { Text } from 'react-native';
import ConnectedLanguageProvider, { LanguageProvider } from '../index';
describe('<LanguageProvider /> container tests', () => {
  it('should render its children', () => {
    const children = (
      <h1>
        <Text>Test</Text>
      </h1>
    );
    const container = renderWithI18next(
      <LanguageProvider>{children}</LanguageProvider>
    );
    expect(container.firstChild).not.toBeNull();
  });
});

describe('<ConnectedLanguageProvider /> container tests', () => {
  it('should render the default language messages', () => {
    const { queryByText } = render(
      <ConnectedLanguageProvider>
        <T id="because" />
      </ConnectedLanguageProvider>
    );
    expect(queryByText('because')).not.toBeNull();
  });
});
