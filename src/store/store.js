import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers/posts';

const middleware = applyMiddleware(thunk,logger);
const store = createStore(reducers, {}, composeWithDevTools(middleware));

export default store;