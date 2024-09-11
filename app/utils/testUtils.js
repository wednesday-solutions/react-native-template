import React from 'react';
import { RecoilRoot } from 'recoil';
import { I18nextProvider } from 'react-i18next';
import { render } from '@testing-library/react-native';
import i18n from '@app/utils/i18nextTestUtils';

export const apiResponseGenerator = (ok, data) => ({
  ok,
  data
});

export const renderWithI18next = (children, renderFunction = render) =>
  renderFunction(
    <RecoilRoot>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </RecoilRoot>
  );

export const renderProvider = children =>
  render(
    <RecoilRoot>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </RecoilRoot>
  );
export const timeout = ms => new Promise(resolve => setTimeout(resolve, ms));
