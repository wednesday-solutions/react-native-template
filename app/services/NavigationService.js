import { NavigationActions, StackActions } from '@react-navigation/compat';
import set from 'lodash/set';

/**
 * The navigation is implemented as a service so that it can be used outside of components, for example in sagas.
 *
 * @see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html
 */
export const navigatorObject = {
  navigator: null
};
/**
 * This function is called when the RootScreen is created to set the navigator instance to use.
 */

export const setTopLevelNavigator = navigatorRef => {
  set(navigatorObject, 'navigator', navigatorRef);
};

/**
 * Call this function when you want to navigate to a specific route.
 *
 * @param routeName The name of the route to navigate to. Routes are defined in RootScreen using createStackNavigator()
 * @param params Route parameters.
 */
export function navigate(routeName, params) {
  navigatorObject.navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
}

/**
 * Call this function when you want to navigate to a specific route AND reset the navigation history.
 *
 * That means the user cannot go back. This is useful for example to redirect from a splashscreen to
 * the main screen: the user should not be able to go back to the splashscreen.
 *
 * @param routeName The name of the route to navigate to. Routes are defined in RootScreen using createStackNavigator()
 * @param params Route parameters.
 */
function navigateAndReset(routeName, params) {
  navigatorObject.navigator.dispatch(
    StackActions.replace({
      routeName,
      params
    })
  );
}

export default {
  navigate,
  navigateAndReset,
  setTopLevelNavigator
};
