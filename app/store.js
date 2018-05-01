import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'remote-redux-devtools'
import rootReducer from './reducers/index'

const store = createStore(rootReducer, composeWithDevTools())

export default store
