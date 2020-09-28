import {takeLatest, put, call } from 'redux-saga/effects'
import axios from 'axios'
import {CoronaTypes, fetchData, fetchDataError} from "../actions/coronaActions";


function coronaRequest() {
    return axios.get('https://covid19.mathdro.id/api/daily').then(({data}) => data.map(dailyData => ({
        confirmed: dailyData.confirmed.total,
        deaths: dailyData.deaths.total,
        date: dailyData.reportDate
    })))
}

function* coronaWorker() {
    try{
        const data = yield call(coronaRequest)
        yield put(fetchData(data))
    }catch (e) {
        yield put(fetchDataError('Something went wrong. Try again'))
    }
}


export function* coronaWatcher() {
    yield takeLatest(CoronaTypes.FETCH_CORONA_DATA_REQUEST, coronaWorker)
}
