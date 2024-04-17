/**
 * @format
 */

import {registerRootComponent} from 'expo';
import App from '@app/app';
import { name as appName } from './app.json';

if (!window.Intl) {
  new Promise(resolve => {
    resolve(import('intl'));
  })
    .then(() => Promise.all([import('intl/locale-data/jsonp/en')]))
    .then(() => registerRootComponent(App))
    .catch(alert);
} else {
  registerRootComponent(App);
}

export default App;
