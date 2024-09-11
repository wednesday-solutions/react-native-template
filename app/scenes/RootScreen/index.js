import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import AppNavigator from '@navigators/appNavigator';
import Container from '@atoms/Container';
import { navigateAndReset } from '@app/services/navigationService';
import { appState } from './recoilState';

const RootScreen = () => {
  const app = useRecoilValue(appState);

  useEffect(() => {
    // Startup function
    if (!app) {
      setTimeout(() => navigateAndReset('MainScreen'), 1000);
    }
  }, [app]);

  return (
    <Container testID="root-screen">
      <AppNavigator />
    </Container>
  );
};

export default RootScreen;
export { RootScreen as RootScreenTest };
