import {combineReducers, createStore, applyMiddleware} from "redux";
import languageReducer from "./language/languageReducer";
import productionReducer from "./production/productionReducer";
import thunk from 'redux-thunk';

const rootReducers = combineReducers({
    language: languageReducer,
    production: productionReducer,
})

const Store = createStore(rootReducers, applyMiddleware(thunk))
export default Store
