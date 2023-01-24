import React from 'react';
import { Button, Platform, View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { PropTypes } from 'prop-types';
import styled from 'styled-components/native';
import { createStructuredSelector } from 'reselect';
import { injectIntl } from 'react-intl';

import AppContainer from '@atoms/Container';
import SimpsonsLoveWednesday from '@organisms/SimpsonsLoveWednesday';

import {
  selectUser,
  selectUserIsLoading,
  selectUserErrorMessage
} from './selectors';
import { exampleScreenActions } from './reducer';

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

class ExampleScreen extends React.Component {
  componentDidMount() {
    this.requestFetchUser()();
  }

  requestFetchUser = () => () => {
    this.props.fetchUser();
  };

  render() {
    return (
      <Container>
        {this.props.userIsLoading ? (
          <ActivityIndicator testID="loader" size="large" color="#0000ff" />
        ) : (
          <View testID="example-container-content">
            <SimpsonsLoveWednesday
              instructions={instructions}
              userErrorMessage={this.props.userErrorMessage}
              user={this.props.user}
            />
            <CustomButtonParentView>
              <Button onPress={this.requestFetchUser()} title="Refresh" />
            </CustomButtonParentView>
          </View>
        )}
      </Container>
    );
  }
}

ExampleScreen.propTypes = {
  user: PropTypes.object,
  userIsLoading: PropTypes.bool,
  userErrorMessage: PropTypes.string,
  fetchUser: PropTypes.func
};

const mapStateToProps = createStructuredSelector({
  user: selectUser(),
  userIsLoading: selectUserIsLoading(),
  userErrorMessage: selectUserErrorMessage()
});

const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(exampleScreenActions.requestFetchUser())
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect, injectIntl)(ExampleScreen);
export { ExampleScreen as ExampleScreenTest };
