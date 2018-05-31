import { createStore } from 'redux'
import { composeWithDevTools } from 'remote-redux-devtools'
import { persistStore, persistReducer } from 'redux-persist'
import storage from './storage'
import rootReducer from './redux/index'

const persistConfig = {
  key: 'todoApp',
  storage,
  whitelist: ['todos']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = composeWithDevTools()(createStore)(persistedReducer)

persistStore(store)

export default store
