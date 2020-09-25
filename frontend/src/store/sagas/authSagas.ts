import {takeLatest, put, call } from 'redux-saga/effects'
import {
    setError,
    signIn,
    SignInActionInterface,
    UserTypes,
    SignUpActionInterface,
    signUp
} from "../actions/authActions";
import axios from 'axios'

function signInRequest(user) {
    return axios.post('http://localhost:5000/api/users/signin', user).then(({data}) => data)
}

function* signInWorker({payload}: SignInActionInterface) {
    try{
        const data = yield call(signInRequest, payload)
        localStorage.setItem('userInfo', JSON.stringify(data))
        yield put(signIn(data))
    }catch (e) {
        if(e.response){
            console.log(e.response.data)
            yield put(setError(e.response.data.msg))
        }else{
            yield put(setError('Something went wrong. Try again'))
        }
    }
}

function signUpRequest(user) {
    return axios.post('http://localhost:5000/api/users/signup', user).then(({data}) => data)
}

function* signUpWorker({payload}: SignUpActionInterface) {
    try{
        const data = yield call(signUpRequest, payload)
        localStorage.setItem('userInfo', JSON.stringify(data))
        yield put(signUp(data))
    }catch (e) {
        if(e.response){
            console.log(e.response.data)
            yield put(setError(e.response.data.msg))
        }else{
            yield put(setError('Something went wrong. Try again'))
        }
    }
}
export function* signInWatcher() {
    yield takeLatest(UserTypes.SIGNIN_REQUEST, signInWorker)
    yield takeLatest(UserTypes.SIGNUP_REQUEST, signUpWorker)
}
