import { Typography,FormControlLabel,Checkbox } from '@mui/material'
import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import WcIcon from '@mui/icons-material/Wc';
import PhoneIcon from '@mui/icons-material/Phone';
function step2({ name, email, gender, phoneno, password, confirmpassword,checked,handleChange }) {
    return (
        <div className='details'> 
        <div className='dt'><Typography variant='h6'><PersonIcon/>UserName:</Typography><Typography variant='body1'>{name}</Typography></div>
        <div className='dt'><Typography variant='h6'><EmailIcon/>Email:</Typography><Typography variant='body1'>{email}</Typography></div>
        <div className='dt'><Typography variant='h6'><WcIcon/>Gender:</Typography><Typography variant='body1'>{gender}</Typography></div>
        <div className='dt'><Typography variant='h6'><PhoneIcon/>Phoneno:</Typography><Typography variant='body1'>{phoneno}</Typography></div>
        
        <FormControlLabel control={<Checkbox checked={checked}
      onChange={handleChange} defaultChecked required={true} />} label="I confirm all the details" />
        

        
                   
         </div>
    )
}



export default step2

