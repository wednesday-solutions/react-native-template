import React from 'react'
import styled from 'styled-components/native'
import AppContainer from 'app/components/Container'
import { Colors, Images } from 'app/themes'

const Container = styled(AppContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.primary};
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
      <Logo source={Images.wednesdayLogo} resizeMode="contain" />
    </Logo>
  </Container>
)

export default SplashScreen
