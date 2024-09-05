import { set } from 'lodash';
import PostHog from 'posthog-react-native';
import { POSTHOG_KEY } from '@env';
const posthog = {
  client: null
};

export const getPostHogClient = () => {
  if (!posthog.client) {
    set(
      posthog,
      'client',
      new PostHog(POSTHOG_KEY, {
        // usually 'https://us.i.posthog.com' or 'https://eu.i.posthog.com'

        host: 'https://us.i.posthog.com'
      })
    );
  }
  return posthog.client;
};
