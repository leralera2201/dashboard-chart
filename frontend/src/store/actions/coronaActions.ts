
export enum CoronaTypes {
    FETCH_CORONA_DATA_ERROR='FETCH_CORONA_DATA_ERROR',
    FETCH_CORONA_DATA_SUCCESS = 'FETCH_CORONA_DATA_SUCCESS',
    FETCH_CORONA_DATA_REQUEST = 'FETCH_CORONA_DATA_REQUEST',
}

export interface FetchDataRequestActionInterface {
    type: CoronaTypes.FETCH_CORONA_DATA_REQUEST
}

export interface FetchDataActionInterface {
    type: CoronaTypes.FETCH_CORONA_DATA_SUCCESS,
    payload: any
}


export interface FetchDataErrorActionInterface {
    type: CoronaTypes.FETCH_CORONA_DATA_ERROR,
    payload: string
}

export const fetchDataRequest = (): FetchDataRequestActionInterface => ({
    type: CoronaTypes.FETCH_CORONA_DATA_REQUEST
})

export const fetchData = (data: any): FetchDataActionInterface => ({
    type: CoronaTypes.FETCH_CORONA_DATA_SUCCESS,
    payload: data
})


export const fetchDataError = (error: string): FetchDataErrorActionInterface => ({
    type: CoronaTypes.FETCH_CORONA_DATA_ERROR,
    payload: error
})

export type CoronaActionTypes = FetchDataRequestActionInterface |
    FetchDataActionInterface |
    FetchDataErrorActionInterface
