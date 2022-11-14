import React from "react";
import Array from "./Array";
import Display_Array from "./Display_Array";
const About=()=>{
    return(<>
    {Array.map((val)=>{
        return(<>
        <Display_Array Name={val.name} Age={val.age} Month={val.b_month} />
       </>)
    })}</>)
} 
    

export default About