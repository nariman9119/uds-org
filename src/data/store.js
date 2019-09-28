import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension';

import {reducer as formReducer} from 'redux-form'
import routeReducer from "./routeReducer";
import organizationsReducer from "./organizationsReducer";

const reducer = combineReducers({
    app: routeReducer,
    form: formReducer,
    organizations: organizationsReducer
});

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
