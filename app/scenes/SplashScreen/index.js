import React from 'react';
import styled from 'styled-components/native';
import AppContainer from '@atoms/Container';
import { colors, images } from '@themes';

const Container = styled(AppContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary};
`;

const Logo = styled.Image`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
`;

const SplashScreen = () => (
  <Container testID="splash-screen">
    <Logo source={images.wednesdayLogo} resizeMode="contain" />
  </Container>
);

export default SplashScreen;
