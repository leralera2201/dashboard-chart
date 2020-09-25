
export enum UserTypes {
    SIGNIN='SIGNIN',
    SIGNUP='SIGNUP',
    SIGNIN_REQUEST = 'SIGNIN_REQUEST',
    SIGNIN_ERROR = 'SIGNIN_ERROR',
    SIGNUP_REQUEST = 'SIGNUP_REQUEST',
    LOGOUT = 'LOGOUT'
}

interface UserSignInRequestInterface {
    email: string,
    password: string
}

interface UserSignUpRequestInterface {
    email: string,
    password: string,
    name: string,
    surname: string
}

export interface UserSignInSuccessInterface {
    name: string,
    surname: string,
    token: string
}

interface ErrorInActionInterface {
    type: UserTypes.SIGNIN_ERROR,
    payload: string
}

export interface SignInRequestActionInterface {
    type: UserTypes.SIGNIN_REQUEST
    payload: UserSignInRequestInterface
}

export interface SignInActionInterface {
    type: UserTypes.SIGNIN
    payload: UserSignInSuccessInterface
}

export interface SignUpRequestActionInterface {
    type: UserTypes.SIGNUP_REQUEST
    payload: UserSignUpRequestInterface
}

export interface SignUpActionInterface {
    type: UserTypes.SIGNUP
    payload: UserSignInSuccessInterface
}

export interface LogOutActionInterface {
    type: UserTypes.LOGOUT
}

export const signInRequest = (user: UserSignInRequestInterface): SignInRequestActionInterface => ({
    type: UserTypes.SIGNIN_REQUEST,
    payload: user
})


export const signIn = (user: UserSignInSuccessInterface): SignInActionInterface => ({
    type: UserTypes.SIGNIN,
    payload: user
})

export const signUpRequest = (user: UserSignUpRequestInterface): SignUpRequestActionInterface => ({
    type: UserTypes.SIGNUP_REQUEST,
    payload: user
})

export const signUp = (user: UserSignInSuccessInterface): SignUpActionInterface => ({
    type: UserTypes.SIGNUP,
    payload: user
})

export const logOut = (): LogOutActionInterface =>{
    localStorage.removeItem('userInfo')
    return{
        type: UserTypes.LOGOUT
    }
}


export const setError = (msg: string): ErrorInActionInterface => ({
    type: UserTypes.SIGNIN_ERROR,
    payload: msg
})


export type ChatActionTypes = SignInActionInterface |
    ErrorInActionInterface |
    SignInRequestActionInterface |
    LogOutActionInterface |
    SignUpActionInterface |
    SignUpRequestActionInterface
