import React from 'react';
import { I18nextProvider } from 'react-i18next';
import LanguageProvider from '@atoms/LanguageProvider';
import RootScreen from '@scenes/RootScreen';
import i18n from '@app/i18n';
import 'react-native-gesture-handler';

const App = () => (
  <I18nextProvider i18n={i18n}>
    <LanguageProvider>
      <RootScreen />
    </LanguageProvider>
  </I18nextProvider>
);

export default App;
