import React from 'react';
import 'react-native';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import T from '@atoms/T';
import createStore from 'app/rootReducer';
import { translationMessages } from 'app/i18n';
import { renderWithIntl } from '@utils/testUtils';
import ConnectedLanguageProvider, { LanguageProvider } from '../index';

describe('<LanguageProvider /> container tests', () => {
  it('should render its children', () => {
    const children = <h1>Test</h1>;
    const container = renderWithIntl(
      <LanguageProvider messages={translationMessages} locale="en">
        {children}
      </LanguageProvider>
    );
    expect(container.firstChild).not.toBeNull();
  });
});

describe('<ConnectedLanguageProvider /> container tests', () => {
  let reduxStore;

  beforeAll(() => {
    const { store } = createStore();
    reduxStore = store;
  });

  it('should render the default language messages', () => {
    const { queryByText } = render(
      <Provider store={reduxStore}>
        <ConnectedLanguageProvider messages={translationMessages}>
          <T id="because" />
        </ConnectedLanguageProvider>
      </Provider>
    );
    expect(queryByText('because')).not.toBeNull();
  });
});
