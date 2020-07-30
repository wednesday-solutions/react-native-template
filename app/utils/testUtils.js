import React from 'react';
import { IntlProvider } from 'react-intl';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import createStore from 'app/rootReducer';
import { DEFAULT_LOCALE, translationMessages } from 'app/i18n';
import ConnectedLanguageProvider from '@atoms/LanguageProvider';

export const apiResponseGenerator = (ok, data) => ({
  ok,
  data
});
export const renderWithIntl = children =>
  render(
    <IntlProvider
      locale={DEFAULT_LOCALE}
      messages={translationMessages[DEFAULT_LOCALE]}
    >
      {children}
    </IntlProvider>
  );

export const renderProvider = children => {
  const { store } = createStore();
  return render(
    <Provider store={store}>
      <ConnectedLanguageProvider messages={translationMessages}>
        {children}
      </ConnectedLanguageProvider>
    </Provider>
  );
};

export const timeout = ms => new Promise(resolve => setTimeout(resolve, ms));
