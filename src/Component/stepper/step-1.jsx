import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import React, { useState } from "react"
import MuiAlert from '@mui/material/Alert';
import { useEffect } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { InputAdornment,  } from '@mui/material';



function Signup({name, email,gender,phoneno, password, confirmpassword, handlePasswordChange, handleConfirmpasswordChange, handleEmailChange, handleGenderChange, handleNameChange, 
  handlePhonenoChange, validname, validemail,validpassword,validcpassword,validphone,validPhone2,validgender,validcpassword2}){
    
    

    
    return (<div className="container2">
    
    
    <label>Name</label>
    <TextField value={name} onChange={handleNameChange} id="Name" label="Please enter your name." variant="outlined" />
    {validname?<></>:<span style={{color:"red"}}>Please enter your name.</span>}
    <label style={{marginTop:"30px"}}>Email</label>
    <TextField value={email} onChange={handleEmailChange} id="email" label="Please enter your email-id." variant="outlined" />
    {validemail?<></>:<span style={{color:"red"}}>Please provide a valid email.</span>}
    <label style={{marginTop:"30px"}}>Gender</label>
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
      
      <RadioGroup
      value={gender} onChange={handleGenderChange} 
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
      {validgender?<></>:<span style={{color:"red"}}>Please specify gender.</span>}
    </FormControl>
    <label style={{marginTop:"30px"}}>Phone Number</label>
    <TextField value={phoneno} onChange={handlePhonenoChange}  id="phoneno." label="Please enter your Phone number." variant="outlined" />
    {validphone?<></>:<span style={{color:"red"}}>Please enter  phoneno.</span>}
    {validPhone2?<></>:(validphone?<span style={{color:"red"}}>Please enter a valid  phoneno.</span>:'')}
    <label style={{marginTop:"30px"}}>Password</label>
    <TextField

// InputProps={{
//     endAdornment: (
//       <InputAdornment>
//         <IconButton>
//           <VisibilityIcon />
//         </IconButton>
//       </InputAdornment>
//     )
//   }}
   type="password"value={password} onChange={handlePasswordChange} id="password." label="Please enter Password." variant="outlined" />
    {validpassword?<></>:<span style={{color:"red"}}>Please enter password.</span>}
    <label style={{marginTop:"30px"}}>Confirm Password</label>
    <TextField 
  //   InputProps={{
  //   endAdornment: (
  //     <InputAdornment>
  //       <IconButton>
  //         <VisibilityIcon />
  //       </IconButton>
  //     </InputAdornment>
  //   )
  // }} 
  type="password" value={confirmpassword} onChange={handleConfirmpasswordChange}  id="confirm password." label="Please confirm password." variant="outlined" />
    {validcpassword?<></>:<span style={{color:"red"}}> Please confirm password .</span>}
    {validcpassword2?<></>: (validcpassword?<span style={{color:"red"}}>  Confirm password doesnot match the password.</span>:'')}
    </div> )
}

export default Signup
