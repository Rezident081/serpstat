import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers/posts';

const middleware = applyMiddleware(thunk);

if (process.env.NODE_ENV === `development`) {
    const logger  = require(`redux-logger`);
    middleware.push(logger);
}

const store = createStore(reducers, {}, composeWithDevTools(middleware));

export default store;