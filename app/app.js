import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import LanguageProvider from 'app/containers/LanguageProvider';
import createStore from 'app/rootReducer';
import { translationMessages } from './i18n';
import RootScreen from './containers/RootScreen';

const { store, persistor } = createStore();

const App = () => (
  <Provider store={store}>
    <LanguageProvider messages={translationMessages}>
      <PersistGate loading={null} persistor={persistor}>
        <RootScreen />
      </PersistGate>
    </LanguageProvider>
  </Provider>
);

export default App;
