import React, { useEffect } from 'react';
import { Button, Platform, View, ActivityIndicator } from 'react-native';
import {
  useRecoilState,
  useSetRecoilState,
  useRecoilValueLoadable
} from 'recoil';
import styled from 'styled-components/native';
import { useTranslation } from 'react-i18next';
import { usePostHog } from 'posthog-react-native';

import AppContainer from '@atoms/Container';
import SimpsonsLoveWednesday from '@organisms/SimpsonsLoveWednesday';
import If from '@app/components/atoms/If';
import { conditionalOperatorFunction } from '@app/utils/common';
import { LoadingStates } from '@app/utils/constants';
import { POSTHOG_EVENTS } from '@app/utils/posthogEvents';

import { userState, fetchUserSelector, fetchTriggerState } from './recoilState';

const Container = styled(AppContainer)`
  margin: 30px;
  flex: 1;
  justify-content: center;
  align-items: center;
  max-width: 320px;
  align-self: center;
`;

const CustomButtonParentView = styled(View)`
  margin-top: 40px;
  max-width: 80px;
  align-self: center;
`;

const ExampleScreen = () => {
  const [user, setUser] = useRecoilState(userState);
  const setFetchTrigger = useSetRecoilState(fetchTriggerState);
  const userLoadable = useRecoilValueLoadable(fetchUserSelector);
  const posthog = usePostHog();
  const { t } = useTranslation();
  const requestFetchUser = () => {
    setFetchTrigger(prev => prev + 1);
  };
  const instructions = Platform.select({
    ios: t('ios_instructions'),
    android: t('android_instructions')
  });

  useEffect(() => {
    requestFetchUser();
  }, []);

  useEffect(() => {
    if (userLoadable.state === LoadingStates.HAS_VALUE) {
      setUser(userLoadable.contents);
    }
  }, [userLoadable?.contents?.character]);

  const refreshButtonHandler = () => {
    posthog.capture(POSTHOG_EVENTS.REFRESH_BUTTON_CLICKED);
    requestFetchUser();
  };

  return (
    <Container>
      <If
        condition={userLoadable.state === LoadingStates.LOADING}
        otherwise={
          <View testID="example-container-content">
            <SimpsonsLoveWednesday
              instructions={instructions}
              userErrorMessage={conditionalOperatorFunction(
                userLoadable.state === LoadingStates.HAS_ERROR,
                userLoadable.contents?.message,
                null
              )}
              user={user}
            />
            <CustomButtonParentView>
              <Button
                onPress={refreshButtonHandler}
                title={t('refresh')}
              ></Button>
            </CustomButtonParentView>
          </View>
        }
      >
        <ActivityIndicator testID="loader" size="large" color="#0000ff" />
      </If>
    </Container>
  );
};

export default ExampleScreen;
export { ExampleScreen as ExampleScreenTest };
