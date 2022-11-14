import React from "react";
import { useLocation, useParams,useNavigate } from "react-router-dom";
const User=()=>{
    const location = useLocation()
    const history = useNavigate()
    const {fname,lname} =useParams()
    const Url_button=()=>{
        alert(location.pathname)
    }
    const back_button=()=>{
      history('/')
    }
    return(<><h1>hello contact,{fname}{lname}</h1>
    <button onClick={Url_button}>Check Url</button><br/>
    <button onClick={back_button}>Back</button>
    </>)
}

export default User