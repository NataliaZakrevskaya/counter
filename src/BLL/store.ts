import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";

const rootReducer = combineReducers( {
 counter: counterReducer
})

export const store = createStore(rootReducer)

//types
export type AppRootStateType = ReturnType<typeof rootReducer>
type AppStoreType = typeof store