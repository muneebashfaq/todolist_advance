import React from "react";

import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
const DisplayCard = (props) => {
 
    return (<>
    
    <div class="card" style={{width: "18rem"}}>
  <div class="card-body">
  <h4 class="card-title">{props.firstname}</h4>
    <h5 class="card-subtitle mb-2 text-muted">{props.lastname}</h5>
    <h6 class="card-subtitle mb-2 text-muted">{props.pnumber}</h6>
    <Stack direction="row" spacing={1}>
    <IconButton aria-label="edit" onClick={() => { props.edit_node(props.index) }}>
        <BorderColorIcon />
      </IconButton>
   
    <IconButton aria-label="delete" onClick={() => { props.delete_node(props.index) }}>
    < DeleteIcon style={{marginRight:"10px"}}/>
      </IconButton>
    </Stack>

  
  </div>
</div>

    </>

    )
}

export default DisplayCard;