import React from 'react'

const Display=(props)=>{
    return(<>
    <ul><li>{props.value} <button onClick={()=>{props.del(props.id)}}>Delete</button></li></ul>
    </>)
}
export default Display