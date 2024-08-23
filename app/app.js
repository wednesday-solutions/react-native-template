import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import RootScreen from '@scenes/RootScreen';
import createStore from '@app/rootReducer';
import 'react-native-gesture-handler';

const { store, persistor } = createStore();

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RootScreen />
    </PersistGate>
  </Provider>
);

export default App;
