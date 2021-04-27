import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import commonReducer from './reducers/common';
import movieReducer from './reducers/movie';

const rootReducer = combineReducers({
  common: commonReducer,
  movie: movieReducer,
});

export type StoreState = ReturnType<typeof rootReducer>;

let composeEnhancer = compose;
if (process.env.NODE_ENV !== 'production') {
  composeEnhancer =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunkMiddleware, logger)),
);

export default store;
