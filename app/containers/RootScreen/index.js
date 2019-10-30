import React, { Component } from 'react';
import NavigationService from 'app/services/NavigationService';
import AppNavigator from 'app/navigators/AppNavigator';
import Container from 'app/components/Container';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { rootScreenActions } from './reducer';

export class RootScreen extends Component {
  componentDidMount() {
    // Run the startup saga when the application is starting
    this.props.startup();
  }

  setRefForTopLevelNavigtor = navigatorRef => {
    NavigationService.setTopLevelNavigator(navigatorRef);
  };

  render() {
    return (
      <Container testID="root-screen">
        <AppNavigator
          // Initialize the NavigationService (see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html)
          ref={this.setRefForTopLevelNavigtor}
        />
      </Container>
    );
  }
}

RootScreen.propTypes = {
  startup: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  startup: () => dispatch(rootScreenActions.startup())
});

export default connect(
  null,
  mapDispatchToProps
)(RootScreen);
