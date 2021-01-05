import { createStore, applyMiddleware } from 'redux';
import { Reducer } from './reducer';
import logger from 'redux-logger';

const devMode = process.env.NODE_ENV === 'development';
const middleware = devMode ? applyMiddleware(logger) : applyMiddleware();

export const store = createStore(Reducer, middleware);
