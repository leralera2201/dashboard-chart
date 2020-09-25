import {combineReducers} from 'redux'
import {AuthReducer} from "./authReducer";

export const rootReducer = combineReducers({
    auth: AuthReducer
})

export type RootReducerType = ReturnType<typeof rootReducer>
