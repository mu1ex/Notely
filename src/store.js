import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducer from './reducers';

const middlewares = [];
const logger = createLogger({ collapsed: true });
middlewares.push(logger);
const persistConfig = {
  key: 'root',
  storage: storage,
}
const persistedReducer = persistReducer(persistConfig, reducer)

export default () => {
  let store = createStore(persistedReducer, applyMiddleware(...middlewares));
  let persistor = persistStore(store)
  return { store, persistor }
}
