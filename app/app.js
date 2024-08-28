import React from 'react';
import { I18nextProvider } from 'react-i18next';
import LanguageProvider from '@atoms/LanguageProvider';
import RootScreen from '@scenes/RootScreen';
import i18n from '@app/i18n';
import createStore from '@app/rootReducer';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import 'react-native-gesture-handler';
const { store, persistor } = createStore();
const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <I18nextProvider i18n={i18n}>
        <LanguageProvider>
          <RootScreen />
        </LanguageProvider>
      </I18nextProvider>
    </PersistGate>
  </Provider>
);

export default App;
