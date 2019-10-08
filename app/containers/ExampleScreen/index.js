import React from 'react'
import { Platform, View, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { PropTypes } from 'prop-types'
import styled from 'styled-components/native'
import { createStructuredSelector } from 'reselect'
import { injectIntl } from 'react-intl'
import { Images } from 'app/themes'
import Fonts from 'app/themes/fonts'
import AppContainer from 'app/components/Container'
import T from 'app/components/T'
import {
  selectUser,
  selectUserIsLoading,
  selectUserErrorMessage
} from './selector'
import { ExampleActions } from './reducer'

/**
 * This is an example of a container component.
 *
 * This screen displays a little help message and informations about a fake user.
 * Feel free to remove it.
 */

const Container = styled(AppContainer)`
  margin: 30px;
  flex: 1;
  justify-content: center;
`

const TextBox = styled.Text`
  ${Fonts.style.normal};
  text-align: center;
  margin-bottom: 5px;
`

const Instructions = styled.Text`
  ${Fonts.style.normal};
  text-align: center;
  margin-bottom: 5;
  font-style: italic;
`

const Result = styled.Text`
  ${Fonts.style.normal};
  text-align: center;
  margin-bottom: 5;
`

const CharacterImage = styled.Image`
  height: 80px;
  width: 80px;
  margin: 0 auto;
`
const Error = styled.Text`
  ${Fonts.style.normal};
  text-align: center;
  margin-bottom: 5px;
  color: red;
`

const LogoContainer = styled.View`
  width: 100%;
  height: 150px;
  margin-bottom: 25px;
`
const Logo = styled.Image`
  width: 100%;
  height: 100%;
`

const SeparatedView = styled.View`
  > * {
    margin: 10px;
  }
`
const CustomButton = styled.Button`
  margin-top: 40px;
`
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu.',
  android:
    'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu.'
})

class ExampleScreen extends React.Component {
  componentDidMount() {
    this.requestFetchUser()
  }

  requestFetchUser = () => () => {
    this.props.fetchUser()
  }

  render() {
    return (
      <Container>
        {this.props.userIsLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <View>
            <LogoContainer>
              <Logo source={Images.logo} resizeMode="contain" />
            </LogoContainer>
            <TextBox>To get started, edit App.js</TextBox>
            <Instructions>{instructions}</Instructions>
            {this.props.userErrorMessage ? (
              <Error>{this.props.userErrorMessage}</Error>
            ) : (
              <SeparatedView>
                <Result>
                  <T
                    id="wednesday_lover"
                    values={{
                      username: this.props.user.character || 'character'
                    }}
                  />
                </Result>
                <Result>
                  <T id="because" />
                </Result>
                <CharacterImage
                  resizeMode="contain"
                  source={{ uri: this.props.user.image }}
                />
                <Result>{this.props.user.quote}</Result>
              </SeparatedView>
            )}
            <CustomButton onPress={this.requestFetchUser()} title="Refresh" />
          </View>
        )}
      </Container>
    )
  }
}

ExampleScreen.propTypes = {
  user: PropTypes.object,
  userIsLoading: PropTypes.bool,
  userErrorMessage: PropTypes.string,
  fetchUser: PropTypes.func
}

const mapStateToProps = createStructuredSelector({
  user: selectUser(),
  userIsLoading: selectUserIsLoading(),
  userErrorMessage: selectUserErrorMessage()
})

const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(ExampleActions.fetchUser())
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)
export default compose(
  withConnect,
  injectIntl
)(ExampleScreen)
