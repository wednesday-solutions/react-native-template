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
        // In-case of custom endpoint please add 'host' property here with url
      })
    );
  }
  return posthog.client;
};
