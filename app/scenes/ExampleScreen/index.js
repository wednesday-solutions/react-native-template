import React, { useEffect } from 'react';
import { Button, Platform, View, ActivityIndicator, Text } from 'react-native';
import {
  useRecoilState,
  useSetRecoilState,
  useRecoilValue,
  useRecoilValueLoadable
} from 'recoil';
import styled from 'styled-components/native';
import { injectIntl } from 'react-intl';

import AppContainer from '@atoms/Container';
import SimpsonsLoveWednesday from '@organisms/SimpsonsLoveWednesday';

import {
  userState,
  userIsLoadingState,
  userErrorMessageState,
  fetchUserSelector,
  fetchTriggerState
} from './recoilState';
import If from '@app/components/atoms/If';
import { conditionalOperatorFunction } from '@app/utils/common';

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

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu.',
  android:
    'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu.'
});

const ExampleScreen = () => {
  const [user, setUser] = useRecoilState(userState);
  const setFetchTrigger = useSetRecoilState(fetchTriggerState);
  const userLoadable = useRecoilValueLoadable(fetchUserSelector);

  const requestFetchUser = () => {
    setFetchTrigger(prev => prev + 1);
  };

  useEffect(() => {
    requestFetchUser();
  }, []);

  useEffect(() => {
    if (userLoadable.state === 'hasValue') {
      setUser(userLoadable.contents);
    }
  }, [userLoadable?.contents?.character]);

  return (
    <Container>
      <If
        condition={userLoadable.state === 'loading'}
        otherwise={
          <View testID="example-container-content">
            <SimpsonsLoveWednesday
              instructions={instructions}
              userErrorMessage={conditionalOperatorFunction(
                userLoadable.state === 'hasError',
                userLoadable.contents?.message,
                null
              )}
              user={user}
            />
            <CustomButtonParentView>
              <Button onPress={requestFetchUser} title="Refresh" />
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
