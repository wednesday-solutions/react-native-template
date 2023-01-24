/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from '@app/app';
import { name as appName } from './app.json';

if (!window.Intl) {
  new Promise(resolve => {
    resolve(import('intl'));
  })
    .then(() => Promise.all([import('intl/locale-data/jsonp/en.js')]))
    .then(() => AppRegistry.registerComponent(appName, () => App))
    .catch(err => {
      throw err;
    });
} else {
  AppRegistry.registerComponent(appName, () => App);
}

export default App;
