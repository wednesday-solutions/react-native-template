/**
 * @format
 */

import { registerRootComponent } from 'expo';
import App from '@app/app';
import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn:
    'https://0fbf25b4bfb443b7ae58aa4baf34460e@o4505374929584128.ingest.us.sentry.io/4505374931812352'
});

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
