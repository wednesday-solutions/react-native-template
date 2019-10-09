import React from 'react'
import styled from 'styled-components/native'
import AppContainer from 'app/components/Container'
import { colors, images } from 'app/themes'

const Container = styled(AppContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary};
`

const Logo = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 70px;
  background-color: white;
`

const SplashScreen = () => (
  <Container>
    <Logo>
      <Logo source={images.wednesdayLogo} resizeMode="contain" />
    </Logo>
  </Container>
)

export default SplashScreen
