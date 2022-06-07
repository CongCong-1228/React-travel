import {combineReducers, createStore} from "redux";

import languageReducer from "./language/languageReducer";
import productionReducer from "./production/productionReducer";

const rootReducers = combineReducers({
    language: languageReducer,
    production: productionReducer,
})

const Store = createStore(rootReducers)
export default Store
