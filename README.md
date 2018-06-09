### TODO app in React Native - with [storybook](https://github.com/storybooks/storybook/tree/master/app/react-native)
This repository contains simple TODO app built to test different state management and persist stores and storybook

click [here](https://github.com/marcinkornek/todo-react-native) to go to base branch with all other branches described

#### Description
* added [storybook](https://github.com/storybooks/storybook/tree/master/app/react-native) with example stories and TODO component ListItem.js

#### Prerequisites
* [React Native](https://facebook.github.io/react-native/docs/getting-started.html)
* [Yarn](https://yarnpkg.com/en/docs/install)
* [Storybook CLI](https://github.com/storybooks/storybook/tree/master/app/react-native#getting-started)

#### Instalation
1. Clone the repo:
```sh
$ git clone git@github.com:marcinkornek/todo-react-native.git
$ cd todo-react-native
```
2. Open storybook branch:
```sh
$ git checkout storybook
```
3. Install [Storybook CLI](https://github.com/storybooks/storybook/tree/master/app/react-native#getting-started):
```sh
$ npm -g i @storybook/cli
$ getstorybook
```
4. Install dependencies:
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

##### Running storybook
1. Run storybook bundler (you need to close normal bundler):
```sh
$ yarn storybook
```
2. Build and run iOS app or build and run Android app
```sh
$ yarn ios
OR
$ yarn android
```

![usage](https://d1ro8r1rbfn3jf.cloudfront.net/ms_130237/zMd7AJEdQVl1ebbbgqGW277HVFJUhJ/screencast%2B2018-06-09%2B11-24-09.gif?Expires=1528622807&Signature=Qrmc67pqYHuItdzSsxCpnX-kmL~SYKKZBrHBXgRHZYvEYy4sQJ70~eO4gtVEN9O-PamywZ53OuFNlJOO3FrYMHPFdCJiAGL47Ys9MqmXe~B~Ng8qpLWqg3aet0RoIGgb17ldK-2UNB~imerHoYpPlLUqqVCvuZQx2HSh54jpXUg697F~oR8HiNZSgMU65Yf8mxUCowhU4y1crVe~cCJhDjbciYnVhCI1hqSP8TjsDTS0uUzTI8FI98Y9qD07mSFYetwMXQ6BxbS-lZSGJiOyvgbz1sGsE2Stce7eUKS2Lig619ibSZrpTJBuIrFiebe0pvU1j1FCKnd7aa04joqvzQ__&Key-Pair-Id=APKAJHEJJBIZWFB73RSA)
