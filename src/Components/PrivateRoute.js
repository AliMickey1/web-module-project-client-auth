import React from "react"
import { Route } from "react-router-dom"


const PrivateRoute = ({componenent: Component, ...rest}) => {
    return<Route {...rest} render={(props) => {
        if(localStorage.getItem(token)) {
            return(<Component {...props}/>)
        }
        else {
            return <Navigate to="/login" />
        }
    }} />
}

export default PrivateRoute