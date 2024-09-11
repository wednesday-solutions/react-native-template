import React from 'react';
import { PostHogProvider } from 'posthog-react-native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '@scenes/SplashScreen/';
import ExampleScreen from '@scenes/ExampleScreen';
import { NavigationContainer } from '@react-navigation/native';
import { setTopLevelNavigator } from '@services/navigationService';
import { getPostHogClient } from '@app/utils/posthogUtils';
const Stack = createStackNavigator();
/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */
export default function AppNavigator() {
  return (
    <NavigationContainer ref={setTopLevelNavigator}>
      <PostHogProvider client={getPostHogClient()}>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="SplashScreen"
        >
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="MainScreen" component={ExampleScreen} />
        </Stack.Navigator>
      </PostHogProvider>
    </NavigationContainer>
  );
}
