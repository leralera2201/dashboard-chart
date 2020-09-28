import {CoronaActionTypes, CoronaTypes} from "../actions/coronaActions";

interface initialStateInterface {
    coronaData: any | null,
    loading: boolean,
    error: string | null
}

const initialState : initialStateInterface = {
    coronaData: null,
    loading: false,
    error: null
}

export const CoronaReducer = (state = initialState, action: CoronaActionTypes): initialStateInterface => {
    switch(action.type){
        case CoronaTypes.FETCH_CORONA_DATA_REQUEST:
            return {...state, loading: true, error: null}
        case CoronaTypes.FETCH_CORONA_DATA_SUCCESS:
            return {...state, loading: false, error: null, coronaData: action.payload}
        case CoronaTypes.FETCH_CORONA_DATA_ERROR:
            return {...state, error: action.payload, loading: false}
        default:
            return state
    }
}
