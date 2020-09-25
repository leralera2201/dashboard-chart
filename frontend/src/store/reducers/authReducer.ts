import {ChatActionTypes, UserTypes} from '../actions/authActions'

interface userInterface {
    name: string,
    surname: string,
    token: string
}

interface initialStateInterface {
    user: userInterface | null,
    loading: boolean,
    error: string | null
}

const initialState : initialStateInterface = {
    user: null,
    loading: false,
    error: null
}

export const AuthReducer = (state = initialState, action: ChatActionTypes): initialStateInterface => {
    switch(action.type){
        case UserTypes.SIGNIN_REQUEST:
        case UserTypes.SIGNUP_REQUEST:
            return {...state, loading: true, error: null}
        case UserTypes.SIGNIN:
        case UserTypes.SIGNUP:
            return {...state, loading: false, error: null, user: action.payload}
        case UserTypes.SIGNIN_ERROR:
            return {...state, error: action.payload, loading: false}
        case UserTypes.LOGOUT:
            return initialState
        default:
            return state
    }
}
