import React from 'react';
import { RecoilRoot } from 'recoil';
import { I18nextProvider } from 'react-i18next';
import 'react-native-gesture-handler';
import LanguageProvider from '@atoms/LanguageProvider';
import RootScreen from '@scenes/RootScreen';
import i18n from '@app/i18n';

const App = () => (
  <RecoilRoot>
    <I18nextProvider i18n={i18n}>
      <LanguageProvider>
        <RootScreen />
      </LanguageProvider>
    </I18nextProvider>
  </RecoilRoot>
);

export default App;
