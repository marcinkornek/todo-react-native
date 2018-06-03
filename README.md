### TODO app in React Native
This repository contains simple TODO app built to test different state management and persist stores:
#### ready:
* branch [master](https://github.com/marcinkornek/todo-react-native) - simple TODO app using state, without persisting database
* branch [realm](https://github.com/marcinkornek/todo-react-native/tree/realm) - [Realm](https://realm.io/docs/javascript/latest/) as persisted database - it's the simplest implementation without using any other library than [realm-js](https://github.com/realm/realm-js)
* branch [realm-improved](https://github.com/marcinkornek/todo-react-native/tree/realm-improved) - [Realm](https://realm.io/docs/javascript/latest/) as persisted database - it's the simplest implementation without using any other library than [realm-js](https://github.com/realm/realm-js), improved by moving realm to separate file
* branch [mobx](https://github.com/marcinkornek/todo-react-native/tree/mobx) - [mobx](https://github.com/mobxjs/mobx) as state container without decorators syntax, without persisting database
* branch [mobx-decorators](https://github.com/marcinkornek/todo-react-native/tree/mobx-decorators) - [mobx](https://github.com/mobxjs/mobx) as state container using decorators syntax, without persisting database
* branch [mobx-persist-decorators](https://github.com/marcinkornek/todo-react-native/tree/mobx-persist-decorators) - [mobx](https://github.com/mobxjs/mobx) as state container using decorators syntax + [mobx-persist](https://github.com/pinqy520/mobx-persist) as persisted database (using React Native [AsyncStorage](https://facebook.github.io/react-native/docs/asyncstorage.html))
* branch [redux](https://github.com/marcinkornek/todo-react-native/tree/redux) - [redux](https://github.com/reactjs/redux) as state container, without persisting database
* branch [redux-persist-asyncstorage](https://github.com/marcinkornek/todo-react-native/tree/redux-persist-asyncstorage) - [redux](https://github.com/reactjs/redux) as state container + [redux-persist](https://github.com/rt2zz/redux-persist) as persisted database (using React Native [AsyncStorage](https://facebook.github.io/react-native/docs/asyncstorage.html))
* branch [redux-persist-realm](https://github.com/marcinkornek/todo-react-native/tree/redux-persist-realm) - [redux](https://github.com/reactjs/redux) as state container + [redux-persist](https://github.com/rt2zz/redux-persist) as persisted database (using [Realm](https://realm.io/docs/javascript/latest/))
* branch [unstated](https://github.com/marcinkornek/todo-react-native/tree/unstated) - [unstated](https://github.com/jamiebuilds/unstated) as state container, without persisting database

#### not ready:
* [React Context-API](https://reactjs.org/docs/context.html)
* [react-waterfall](https://github.com/didierfranc/react-waterfall) - React store built on top of the new context API
...
