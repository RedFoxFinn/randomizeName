import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import appReducer from '../reducers/appReducer';

const reducers = combineReducers({
  appState: appReducer
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;