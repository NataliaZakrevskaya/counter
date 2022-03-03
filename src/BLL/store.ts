import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import {loadState, saveState} from "../Utils/localstorage-utils";

const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = createStore(rootReducer, loadState())

store.subscribe(() => {
 saveState( {
     counter: store.getState().counter
 })
})


// TYPES
export type AppRootStateType = ReturnType<typeof rootReducer>
type AppStoreType = typeof store