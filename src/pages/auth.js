import React from 'react'
import { Redirect } from "react-router-dom";

export default function auth({isUser}) {

    if(isUser) return <Redirect to="/"/>
    return <Redirect to="/login"/>
}
