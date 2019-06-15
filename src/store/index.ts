import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers/index";

export default function() {
    const middleware = [thunkMiddleware];
    const middlewareEnhancer = applyMiddleware(...middleware);
    const Store = createStore(
        rootReducer,
        composeWithDevTools(middlewareEnhancer)
    );

    return Store;
}