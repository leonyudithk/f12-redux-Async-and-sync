import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { reducersLogin } from "../reducers/reducersLogin";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers(
    {
        login: reducersLogin,
    }
)

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
    
    
);