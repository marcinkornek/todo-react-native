import React from 'react'
import { Provider } from 'unstated'
import RootNavigator from './RootNavigator'

const App = () => {
  return (
    <Provider>
      <RootNavigator />
    </Provider>
  )
}

export default App
