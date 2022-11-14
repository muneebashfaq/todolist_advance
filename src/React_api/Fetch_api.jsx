import React,{useState,useEffect} from 'react'
import Display from './Display'
const Fetch_api=()=>{
 const [display,update_display] = useState([])
 const [state,update_state] = useState(0)
 const [input,u_input] = useState()

  async function fetching(){
    var response = await fetch(`https://60eedea7eb4c0a0017bf4685.mockapi.io/api/test/todo/`,{
      method:"GET",

    
    })
        // const res = await axios.get(`https://60eedea7eb4c0a0017bf4685.mockapi.io/api/test/todo/`)
        const res = await response.json()
        console.log(res)
        update_display(res)
      
    }
   
    function change(e){
     
      u_input(e.target.value)
    }

    async function Adding(){
    const response=await fetch('https://60eedea7eb4c0a0017bf4685.mockapi.io/api/test/todo/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
       task: `${input}`,
      })
    })

    update_state(state+1)
  }


 useEffect(() => {
  fetching()
 }, [state])
 async function Del(id){
  
   const response = await fetch(`https://60eedea7eb4c0a0017bf4685.mockapi.io/api/test/todo/${id}`,{
     method:'DELETE',
 })
  update_state(state+1)
 }
    return(<>
   
    <label>Enter Text</label>
    <input type="text" onChange={change}/>
    <button onClick={Adding}>Add</button>
 {display.map((val,index)=>{
  return(<>
  <Display value={val.task} id={val.id} del={Del}/>
  </>)
 })}
    
    </>)
}

export default Fetch_api