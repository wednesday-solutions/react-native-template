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
An enterprise React Native template application showcasing - Testing strategies, Global state management, middleware support, a network layer, component library integration, localization, navigation configuration, Continuous integration, analytics, feature flagging, and error tracking.
  </p>

---

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

---

<span>We’re always looking for people who value their work, so come and join us. <a href="https://www.wednesday.is/hiring">We are hiring!</a></span>

</div>

## Architecture

The driving goal of the architecture of the template is separation of concerns. Namely:

- **Presentational components are separated from scenes** (aka "screens").

  Presentational components are small components that are concerned with _how things look_. Scenes usually define whole application screens and are concerned with _how things work_: they include presentational components and wire everything together.

  If you are interested you can [read more about it here](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0).

### Atomic Design for react native architecture

Atomic design further solidifies the idea of separating screens into components and scenes (containers). The design primarily focuses on reusability of code, which brings us to the differentiation of components into atoms, molecules, and organisms. Analogous to the Atomic design of chemicals, components are separated by their composition. The components require increasing context as their complexity increases, since each component is tested, this promotes a more granular test coverage.

- **Atoms**  
   Atoms are the smallest components that can be reused. Button, Text, and Icons are good examples of Atoms. Atoms can be used without context and cannot be further divided.

- **Molecules**  
   Molecules are built from one or more atoms that are slightly complex presentational components.

- **Organisms**  
   Organisms contain multiple molecules, atoms, and perform a specific purpose. In the example screen, an organism is used that displays the fetched character and quote.

- **State is managed using [Recoil](https://recoiljs.org/)**.

  Recoil provides a set of utilities to manage global state in React Native. It allows for atoms (the smallest units of state) and selectors (to transform or combine state) to handle the app's state efficiently. This eliminates the need for Redux, actions, and reducers, simplifying the process for managing state across components.

  Atoms are the core units of state, and selectors are derived state values computed from one or more atoms. Recoil's state management is highly reactive and more efficient for handling state at a granular level.

  If you are interested you can [read more about it here](https://recoiljs.org/docs/introduction/getting-started).

- **Side Effects (API calls, etc.) are managed within components or with Recoil selectors**.

  Recoil allows for managing side effects within the components themselves or through asynchronous selectors. This keeps your side effects closer to where they are needed.

## Analytics, Feature Flagging, and Error Tracking

- **[PostHog](https://posthog.com/)** is integrated to provide analytics and event tracking across the application. PostHog captures user interactions and events, which helps in analyzing user behavior and improving the app based on data-driven insights.

- **[GrowthBook](https://www.growthbook.io/)** is used for feature flagging. With GrowthBook, you can easily manage the rollout of features to users, enabling A/B testing, and controlling which features are visible to which segments of your user base without redeploying the app.

- **[Sentry](https://sentry.io/)** is used for error tracking and reporting. Sentry captures errors and exceptions from the app in real time, providing detailed insights into the errors that occur, enabling faster bug fixing and better app stability.

## Content

The React Native Template contains:

- a [React Native](https://facebook.github.io/react-native/) (v**0.73.6**) application (in "[ejected](https://github.com/react-community/create-react-native-app/blob/master/EJECTING.md)" mode to allow using dependencies that rely on native code)
- a [clear directory layout](#directory-layout) to provide a base architecture for your application
- [Recoil](https://recoiljs.org/) to manage global state
- [React Navigation](https://reactnavigation.org/) (v5.3.15) with a [`NavigationService`](app/services/navigationService.js) to handle routing and navigation in the app, with a splash screen setup by default
- [axios](https://github.com/axios/axios/) to make API calls (v0.27.2)
- [PostHog](https://posthog.com/) for analytics
- [GrowthBook](https://www.growthbook.io/) for feature flagging
- [Sentry](https://sentry.io/) for error tracking
- [prettier](https://prettier.io/) and [eslint](https://eslint.org/) preconfigured for React Native

The template includes an example (displaying fake user data) from UI components to state management using Recoil. The example is easy to remove so that it doesn't get in the way.

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
