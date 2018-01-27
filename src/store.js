import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import reducer from './reducers';

const middlewares = [];
const logger = createLogger({ collapsed: true });
middlewares.push(logger);

export default compose(applyMiddleware(...middlewares))(createStore)(reducer);
