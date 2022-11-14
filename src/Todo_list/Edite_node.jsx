import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useEffect } from 'react';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
const Edite_node = (props) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const [edit_input, update_edit_ip] = useState({ fname: "", lname: "", pnumber: "" })

    const [fname_value, update_fname] = useState()
    const [lname_value, update_lname] = useState()
    const [pnumber_value, update_pnumber] = useState()
useEffect(() => {
    
    update_fname(props.array[props.index][0])
    update_lname(props.array[props.index][1])
    update_pnumber(props.array[props.index][2])

    update_edit_ip({ fname: props.array[props.index][0], lname: props.array[props.index][1], pnumber: props.array[props.index][2]})
}, [])
  
    function save_event(e){
        if(e.target.name === "fname"){
            update_fname(e.target.value)
        }else if(e.target.name === "lname"){
            update_lname(e.target.value)
        }else if(e.target.name === "pnumber"){
            update_pnumber(e.target.value)
        }
        update_edit_ip({...edit_input,[e.target.name]:[e.target.value]})
    }

    function save_change(){
       
        props.edit_node(props.index)
        props.array[props.index] = [`${edit_input.fname}`, `${edit_input.lname}`,`${edit_input.pnumber}`]
            
        
    }
    return (<><div>
        <Modal
            open={true}
            onClose={props.handleclose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Edit Id.NO.{props.index}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1,  width: 500,  maxWidth: '100%', '& button': { m: 1 }},
      }}
      noValidate
      autoComplete="off"
    >
         <TextField
          error
          id="standard-error-helper-text"
          label="First Name"
          helperText="Incorrect entry."
          variant="standard"
          onChange={save_event}
          name="fname" value={fname_value}
        />
           <TextField
          error
          id="standard-error-helper-text"
          label="Last Name"
          helperText="Incorrect entry."
          variant="standard"
          onChange={save_event}
          name="lname" value={lname_value}
        />
             <TextField
          error
          id="standard-error-helper-text"
          label="Phone Number"
          helperText="Incorrect entry."
          variant="standard"
          onChange={save_event}
          name="pnumber" value={pnumber_value}
        />
           
           <Button variant="contained" size="large" onClick={() => { props.save_change(edit_input.fname,edit_input.lname,edit_input.pnumber) }} endIcon={<SaveAltIcon />}>Save Edit</Button>
            
            </Box>
                </Typography>
            </Box>
        </Modal>
    </div>

    </>)
}

export default Edite_node