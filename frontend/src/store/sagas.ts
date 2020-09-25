import {all} from 'redux-saga/effects'
import {signInWatcher} from "./sagas/authSagas";

export function* allSagas() {
    yield all([signInWatcher()])
}

