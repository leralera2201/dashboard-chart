import {createStore, applyMiddleware, compose} from 'redux'
import {rootReducer} from './reducers/rootReducer'
import thunk from 'redux-thunk'
import createSagaMiddleware  from 'redux-saga'
import {allSagas} from './sagas'

const sagaMiddleware = createSagaMiddleware()

const user = JSON.parse(localStorage.getItem('userInfo') as string) || null
const initialState={
    auth: {user, loading: false, error: null},
}
declare global{
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, initialState, composeEnhancer(applyMiddleware(thunk, sagaMiddleware)))

sagaMiddleware.run(allSagas)
export default store
