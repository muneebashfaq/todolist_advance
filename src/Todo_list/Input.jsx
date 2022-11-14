import React from "react";
import { useState } from "react";
import './Input.css'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SaveIcon from '@mui/icons-material/Save';
import DisplayCard from "./DisplayCard";

import Edite_node from "./Edite_node";

const Input = () => {

    const [state, update_state] = useState(false)
    const [arr_state, u_arr_state] = useState([])
    const [input, updateinput] = useState({ fname: "", lname: "", pnumber: "" })
    const [ids, update_id] = useState()
     
    const [fname_v,u_fname_v] = useState(false)
    const [lname_v,u_lname_v] = useState(false)
    const [pnumber_v,u_pnumber_v] = useState(false)


    function change_event(e) {
        
        if(e.target.name === "fname"){
            
            var isFirstLetterUppercase = /^[A-Z]/.test(e.target.value) &&  /^[A-Za-z]+$/.test(e.target.value)&&/^([^a-zA-Z]*[A-Za-z]){3}[\s\S]*/.test(e.target.value);
            if(isFirstLetterUppercase === true){
                u_fname_v(true)
            }else{
                u_fname_v(false)
            }
        }

        if(e.target.name === "lname"){
            
            var isFirstLetterUppercase = /^[A-Z]/.test(e.target.value) &&  /^[A-Za-z]+$/.test(e.target.value)&&/^([^a-zA-Z]*[A-Za-z]){3}[\s\S]*/.test(e.target.value);
            if(isFirstLetterUppercase === true){
                u_lname_v(true)
            }else{
                u_lname_v(false)
            }
        }
        if(e.target.name === "pnumber"){
            
            var isFirstLetterUppercase = /^[0-9]+$/.test(e.target.value);
            if(isFirstLetterUppercase === true){
                u_pnumber_v(true)
            }else{
                u_pnumber_v(false)
            }
        }
        updateinput({ ...input, [e.target.name]: [e.target.value] })


    }
    function submite() {
        console.log(input.pnumber)
        u_arr_state([...arr_state, [input.fname, input.lname, input.pnumber]])
        updateinput({ fname: "", lname: "", pnumber: "" })
        u_pnumber_v(false)
        u_fname_v(false)
        u_lname_v(false)
    }
    function edit_node(index) {
        update_state(true)
        update_id(index)

    }
    function save_change(fname, lname, pnumber) {

        arr_state[ids] = [`${fname}`, `${lname}`, `${pnumber}`]
        update_state(false)
        update_id()
    }
    const handleclose = () => {
        update_state(false)
    }

    function delete_node(id) {

        u_arr_state((oldItem) => {
            return oldItem.filter((arrElem, index) => {
                return id !== index

            })
        })


    }
    return (<>

        {state ?
            <Edite_node handleclose={handleclose} index={ids} array={arr_state} save_change={save_change} />
            : <></>}
        <div className="div">
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: 500, maxWidth: '100%', '& button': { m: 1 } },
                }}
                noValidate
                autoComplete="off"
            >
 {fname_v ? <TextField
                    error
                    id="standard-error-helper-text"
                    label="First Name"
                    variant="standard"
                    onChange={change_event}
                    name="fname" value={input.fname}
                />:<TextField
                error
                id="standard-error-helper-text"
                label="First Name"
                helperText="Must start with capital letter no number and length must atleast 3"
                variant="standard"
                onChange={change_event}
                name="fname" value={input.fname}
            />}
            {lname_v ?<TextField
                    error
                    id="standard-error-helper-text"
                    label="Last Name"
                    variant="standard"
                    onChange={change_event}
                    name="lname" value={input.lname}
                />:<TextField
                error
                id="standard-error-helper-text"
                label="Last Name"
                helperText="Must start with capital letter no number and length must atleast 3"
                variant="standard"
                onChange={change_event}
                name="lname" value={input.lname}
            />}
             {pnumber_v ?  <TextField
                    error
                    id="standard-error-helper-text"
                    label="Phone Number"
                   
                    variant="standard"
                    onChange={change_event}
                    name="pnumber" value={input.pnumber}
                />:  <TextField
                error
                id="standard-error-helper-text"
                label="Phone Number"
                helperText="Phone number must be a number"
                variant="standard"
                onChange={change_event}
                name="pnumber" value={input.pnumber}
            />}
              
                
              
                <br />
                <Button disabled={!(pnumber_v && fname_v && lname_v)} variant="contained" size="large" onClick={submite} endIcon={<SaveIcon />}>Save</Button>
            </Box>
        </div>


        <div class="container" style={{ paddingTop: "10px" }}>
            <div class="row">

                {arr_state.map((val, index) => {
                    return (<>
                        <div class="col" style={{ padding: "5px" }}>
                            <DisplayCard firstname={val[0]} lastname={val[1]} pnumber={val[2]} index={index} edit_node={edit_node} delete_node={delete_node} />
                        </div>
                    </>)
                })}
            </div>
        </div>

    </>)
}

export default Input