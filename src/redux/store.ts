import {combineReducers, createStore} from "redux";
import TestReducer from "./Reducers/TestReducer";
import testResultReducer from "./Reducers/TestResultReducer";
import UserReducer from "./Reducers/UserReducer";
import AppReducer from "./Reducers/AppReducer";
import testAnswerReducer from "./Reducers/TestAnswerReducer";

let rootReducers = combineReducers({
    testReducer: TestReducer,
    testResultReducer: testResultReducer,
    testAnswerReducer: testAnswerReducer,
    userReducer: UserReducer,
    appReducer: AppReducer
})

type RootReducerType = typeof rootReducers;
export type AppStateType = ReturnType<RootReducerType>;


let store = createStore(rootReducers);

export default store;