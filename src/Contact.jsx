import React from "react";
import { useContext } from "react";
import { FirstName } from "./React_Router";
const Contact=()=>{
    const fname = useContext(FirstName)
    return(<h1>hello contact ... i am {fname}</h1>)
}

export default Contact