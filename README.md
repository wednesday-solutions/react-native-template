<img align="left" src="https://github.com/wednesday-solutions/react-native-template/blob/master/react_native_template_github.svg" width="480" height="510" />

<div>
  <a href="https://www.wednesday.is?utm_source=gthb&utm_medium=repo&utm_campaign=serverless" align="left" style="margin-left: 0;">
    <img src="https://uploads-ssl.webflow.com/5ee36ce1473112550f1e1739/5f5879492fafecdb3e5b0e75_wednesday_logo.svg">
  </a>
  <p>
    <h1 align="left">React Native Template
    </h1>
  </p>

  <p>
An enterprise React Native template application showcasing - Testing strategies, Global state management, middleware support, a network layer, component library integration, localization, navigation configuration, and Continuous integration.
  </p>

  ___


  <p>
    <h4>
      Expert teams of digital product strategists, developers, and designers.
    </h4>
  </p>

  <div>
    <a href="https://www.wednesday.is/contact-us?utm_source=gthb&utm_medium=repo&utm_campaign=serverless" target="_blank">
      <img src="https://uploads-ssl.webflow.com/5ee36ce1473112550f1e1739/5f6ae88b9005f9ed382fb2a5_button_get_in_touch.svg" width="121" height="34">
    </a>
    <a href="https://github.com/wednesday-solutions/" target="_blank">
      <img src="https://uploads-ssl.webflow.com/5ee36ce1473112550f1e1739/5f6ae88bb1958c3253756c39_button_follow_on_github.svg" width="168" height="34">
    </a>
  </div>

  ___

  <span>We’re always looking for people who value their work, so come and join us. <a href="https://www.wednesday.is/hiring">We are hiring!</a></span>
</div>

## Architecture

The driving goal of the architecture of the template is separation of concerns. Namely:

- **Presentational components are separated from scenes** (aka "screens").

    Presentational components are small components that are concerned with *how things look*. Scenes usually define whole application screens and are concerned with *how things work*: they include presentational components and wire everything together.
    
    If you are interested you can [read more about it here](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0).
    
### Atomic Design for react native architecture
Atomic design further solidifies the idea of seperating screens into components and scenes (containers). The design primarily focuses on reusablity of code, which brings us to the differentiation of components into atoms, molecules and organisms. Analogous to the Atomic design of chemicals, components are seperated by their composition. The components require increasing context as their complexity increases, since each component is tested, this promotes a more granular test coverage.
        
 - **Atoms**
        Atoms are the smallest components that can be reused. Button, Text, and Icons are good example of Atoms. Atoms can be used without context and cannot be further divided.

- **Molecules**
        Molecules are built from one or more atoms that are slightly complex presentational components.

- **Organisms**
        Organisms contain multiple molecules, atoms and perform a specific purpose. In the example screen, an organism is used that displays the fetched character and quote.

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
- [`app/components/atoms`](app/components/atoms): smallest components
- [`app/components/molecules`](app/components/molecules): molecules are a group of one or more atoms
- [`app/components/organisms`](app/components/organisms): organisms are one or more molecules
- [`app/scenes`](app/components/scenes): scenes are screens that can be navigated to
- [`app/config`](app/config): configuration of the application
- [`app/assets`](app/assets): assets (image, audio files, ...) used by the application
- [`app/navigators`](app/navigators): react navigation navigators 
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


### Running expo project

### Android
 - `yarn run android`

### iOS
- `yarn run ios`

 
## Useful documentation

### Deployment

- Using [Fastlane](https://fastlane.tools/) to automate builds and store deployments (iOS and Android)
  - [Distributing beta builds](docs/beta%20builds.md)

### Package dependencies

- You may want to use [CocoaPods](https://cocoapods.org/) to manage your dependencies (iOS only) 
  - [Using CocoaPods to manage your package dependencies](docs/setup%20cocoapods.md)
