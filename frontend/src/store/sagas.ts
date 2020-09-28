import {all} from 'redux-saga/effects'
import {signInWatcher} from "./sagas/authSagas";
import {coronaWatcher} from "./sagas/coronaSagas";

export function* allSagas() {
    yield all([signInWatcher(), coronaWatcher()])
}

