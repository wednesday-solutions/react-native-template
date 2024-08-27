/**
 * @format
 */

import { registerRootComponent } from 'expo';
import App from '@app/app';
import { SENTRY_DSN } from '@env';
import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: SENTRY_DSN
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
