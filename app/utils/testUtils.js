import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import createStore from 'app/rootReducer';
import { I18nextProvider } from 'react-i18next';
import i18n from '@app/utils/i18nextTestUtils'; // assuming i18n is configured in this file
import ConnectedLanguageProvider from '@atoms/LanguageProvider';

export const apiResponseGenerator = (ok, data) => ({
  ok,
  data
});

export const renderWithI18next = (children, renderFunction = render) =>
  renderFunction(<I18nextProvider i18n={i18n}>{children}</I18nextProvider>);

export const renderProvider = children => {
  const { store } = createStore();
  return render(
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </Provider>
  );
};

export const timeout = ms => new Promise(resolve => setTimeout(resolve, ms));
