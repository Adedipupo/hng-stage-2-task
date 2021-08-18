const { createStore, combineReducers, applyMiddleware } = require('redux');
const thunk = require("redux-thunk");
const { composeWithDevTools } = require('redux-devtools-extension');
const { userRegisterReducer } = require('./reducer/userReducer');

const reducer = combineReducers({
    userRegister: userRegisterReducer
});

const initialState = {}
const middleware = [thunk];

exports.store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);


