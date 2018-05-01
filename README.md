### TODO app in React Native
This repository contains simple TODO app built to test different state management and persist stores:
#### ready:
* [Realm](https://realm.io/docs/javascript/latest/) as persisted database (branch `add-realm`) - it's the simplest implementation without using any other library than [realm-js](https://github.com/realm/realm-js)

#### not ready:
* [mobx](https://github.com/mobxjs/mobx) as state container + [mobx-persist](https://github.com/pinqy520/mobx-persist) as persisted database (using React Native [AsyncStorage](https://facebook.github.io/react-native/docs/asyncstorage.html))
* [redux](https://github.com/reactjs/redux) as state container + [redux-persist](https://github.com/rt2zz/redux-persist) as persisted database (using React Native [AsyncStorage](https://facebook.github.io/react-native/docs/asyncstorage.html))
* [React Context-API](https://reactjs.org/docs/context.html)
* [react-waterfall](https://github.com/didierfranc/react-waterfall) - React store built on top of the new context API
...
