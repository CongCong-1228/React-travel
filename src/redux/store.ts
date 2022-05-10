import {createStore} from "redux";
import LanguageReducer from "./languageReducer";

// @ts-ignore
const Store = createStore(LanguageReducer)
export default Store
