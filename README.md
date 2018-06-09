### TODO app in React Native - with [redux](https://github.com/reduxjs/redux)
This repository contains simple TODO app built to test different state management and persist stores and storybook

click [here](https://github.com/marcinkornek/todo-react-native) to go to base branch with all other branches described

#### Description
* uses [redux](https://github.com/reduxjs/redux) as state container, without persisting database

#### Prerequisites
* [React Native](https://facebook.github.io/react-native/docs/getting-started.html)
* [Yarn](https://yarnpkg.com/en/docs/install)

#### Instalation
1. Clone the repo:
```sh
$ git clone git@github.com:marcinkornek/todo-react-native.git
$ cd todo-react-native
```
2. Open redux branch:
```sh
$ git checkout redux
```
3. Install dependencies:
```sh
$ yarn
```

#### Running/Development
* Build and run iOS app
```sh
$ yarn ios
```
* Build and run Android app
```sh
$ yarn android
```
* Clean cache
```sh
$ yarn clean
```
* Debugging with [remote-redux-devtools](https://github.com/zalmoxisus/remote-redux-devtools):
open [http://remotedev.io/local/](http://remotedev.io/local/)
