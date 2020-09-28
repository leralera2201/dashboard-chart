import {combineReducers} from 'redux'
import {AuthReducer} from "./authReducer";
import {CoronaReducer} from "./coronaReducer";

export const rootReducer = combineReducers({
    auth: AuthReducer,
    corona: CoronaReducer
})

export type RootReducerType = ReturnType<typeof rootReducer>
