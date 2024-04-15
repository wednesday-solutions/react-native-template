import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import AppNavigator from '@navigators/appNavigator';
import Container from '@atoms/Container';
import React, { useEffect } from 'react';
import { setRefForTopLevelNavigtor } from '@app/services/navigationService';
import { rootScreenActions } from './reducer';

const RootScreen = props => {
  useEffect(() => {
    // Run the startup function when the component mounts
    props.startup();
  }, []);

  return (
    <Container testID="root-screen">
      <AppNavigator ref={setRefForTopLevelNavigtor} />
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
