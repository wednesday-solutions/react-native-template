# React Native template

This project is a [React Native](https://facebook.github.io/react-native/) template that can be used to kickstart a mobile application.

The template provides **an architecture optimized for building solid cross-platform mobile applications** through separation of concerns between the UI and business logic. It is extremely documented so that each piece of code that lands in your application can be understood and used.

## Architecture

The driving goal of the architecture of the template is separation of concerns. Namely:

- **Presentational components are separated from containers** (aka "screens").

    Presentational components are small components that are concerned with *how things look*. Containers usually define whole application screens and are concerned with *how things work*: they include presentational components and wire everything together.
    
    If you are interested you can [read more about it here](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0).

- **State is managed using global [Redux](https://redux.js.org/) stores**.

    When applications grow, sharing state and its changes can become very hard. Questions like "How can I access this data?" or "When did this change?" are common, just like passing data around components just to be able to use it in nested components.
    
    With Redux, state is shared using global *stores*, and changes are predictable: *actions* are applied by *reducers* to the state. While the pattern can be a bit much for small projects, the clear separation of responsibilities and predictability helps with bigger applications.
    
    If you are interested you can [read more about it here](https://redux.js.org/introduction/motivation).
    
- **Application side-effects (API calls, etc.) are separated from UI and state manipulation using [Redux Saga](https://redux-saga.js.org/)**.

    Using Redux Saga has two benefits: keeping application side-effects and related business logic out of UI components, as well as executing that logic in an asynchronous way without ending in callback hell.
    
    Sagas are triggered by Redux actions and can also trigger Redux actions to alter state. By using JavaScript generators (`yield`), sagas are written in a synchronous-like manner while still executing asynchronously.

## Content

The React Native Template contains:

- a [React Native](https://facebook.github.io/react-native/) (v**0.60.6**) application (in "[ejected](https://github.com/react-community/create-react-native-app/blob/master/EJECTING.md)" mode to allow using dependencies that rely on native code)
- a [clear directory layout](#directory-layout) to provide a base architecture for your application
- [Redux](https://redux.js.org/) (v4.0.1) to help manage state
- [Redux Persist](https://github.com/rt2zz/redux-persist) (v5.10.0) to persist the Redux state
- [Redux Sagas](https://redux-saga.js.org) (v1.0.2) to separate side-effects and logic from state and UI logic
- [React Navigation](https://reactnavigation.org/) (v3.11.2) with a [`NavigationService`](app/services/NavigationService.js) to handle routing and navigation in the app, with a splash screen setup by default
- [reduxsauce](https://github.com/infinitered/reduxsauce) (v1.0.1) to facilitate using Redux
- [apisauce](https://github.com/infinitered/apisauce/) to make API calls (v0.19.0)
- [prettier](https://prettier.io/) and [eslint](https://eslint.org/) preconfigured for React Native

The template includes an example (displaying fake user data) from UI components to the saga. The example is easy to remove so that it doesn't get in the way.

## Directory layout

- [`app/components`](app/components): presentational components
- [`app/config`](app/config): configuration of the application
- [`App/containers`](App/containers): container components, i.e. the application's screens
- [`App/assets`](App/Assets): assets (image, audio files, ...) used by the application
- [`App/navigators`](App/navigators): react navigation navigators 
- [`app/services`](app/services): application services, e.g. API clients
- [`app/utils`](app/utils): Util methods and constants
- [`app/themes`](app/themes): base styles for the application
- [`app/rootSaga`](app/rootSaga): all the individual sagas need to be added here.
- [`app/rootReducer`](app/rootReducer): all the individual reducers need to be added here.

For more information on each directory, click the link and read the directory's README.

## Requirements

Node 8 or greater is required. Development for iOS requires a Mac and Xcode 9 or up, and will target iOS 9 and up.

You also need to install the dependencies required by React Native:

- for [Android development](https://facebook.github.io/react-native/docs/getting-started.html#installing-dependencies-3)
- for [iOS development](https://facebook.github.io/react-native/docs/getting-started.html#installing-dependencies)


## Using the template

To create a new project using the template:

- clone this repository
- remove the previous git history: `yarn initialize`
- install the npm dependencies by running `yarn`
- rename the React Native project to your own project name: `yarn run rename -- <YourProjectName>` (the default name is `ReactNativeApplication`)
- remove the LICENSE file and the "License" section from the README if your project is not open source


## Running the project

Assuming you have all the requirements installed, you can setup and run the project by running:

- `yarn install` to install the dependencies
- create your [configuration file `app/config/index.js`](app/config) from `index.dev.js` (in you are in dev environment) and fill the missing values
- run the following steps for your platform

### Android

- only the first time you run the project, you need to generate a debug key with :
  - `cd android/app`
  - `keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000`
  - `cd ../..` to come back to the root folder
- `react-native run-android` to run the Android application (remember to start a simulator or connect an Android phone)

### iOS

- `cd ios`
- `pod install` to install pod dependencies
- `cd ..` to come back to the root folder
- `yarn start` to start the metro bundler, in a dedicated terminal
- `react-native run-ios` to run the iOS application (remember to start a simulator or connect an iPhone phone)

## Useful documentation

### Deployment

- Using [Fastlane](https://fastlane.tools/) to automate builds and store deployments (iOS and Android)
  - [Distributing beta builds](docs/beta%20builds.md)

### Package dependencies

- You may want to use [CocoaPods](https://cocoapods.org/) to manage your dependencies (iOS only) 
  - [Using CocoaPods to manage your package dependencies](docs/setup%20cocoapods.md)
