import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from '../reducers';
import C from '../../constants';

const reduxRouter = routerMiddleware(browserHistory);
const promise = promiseMiddleware();
const storeWithMiddleware = compose(
    applyMiddleware(thunk, promise, reduxRouter)
  )(createStore);

export default storeWithMiddleware(rootReducer, {});