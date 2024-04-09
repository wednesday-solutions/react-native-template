import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import AppNavigator from '@navigators/AppNavigator';
import Container from '@atoms/Container';
import { rootScreenActions } from './reducer';
import React, { useEffect } from 'react';
import NavigationService from '@app/services/NavigationService';

const RootScreen = props => {
  useEffect(() => {
    // Run the startup function when the component mounts
    props.startup();
  }, []);

  return (
    <Container testID="root-screen">
      <AppNavigator ref={NavigationService.setRefForTopLevelNavigtor} />
    </Container>
  );
};

RootScreen.propTypes = {
  startup: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  startup: () => dispatch(rootScreenActions.startup())
});
export default connect(null, mapDispatchToProps)(RootScreen);
export { RootScreen as RootScreenTest };
