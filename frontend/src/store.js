const { createStore, combineReducers, applyMiddleware } = require('redux');
const thunk = require("redux-thunk");
const { composeWithDevTools } = require('redux-devtools-extension');

const reducer = combineReducers({});

const initialState = {}
const middleware = [thunk];

exports.store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);


