import React from 'react'
import {Route, Redirect} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootReducerType} from "../store/reducers/rootReducer";

const ProtectedRoute = ({component: Component,  ...rest}) => {
    const {user, loading} = useSelector((state: RootReducerType) => state.auth)
    return <Route
        {...rest}
        render={props => !user?.token && !loading ?
            (<Redirect to='/signin' />)
            :
            (<Component {...props}/>)
        }/>
}


export default ProtectedRoute
