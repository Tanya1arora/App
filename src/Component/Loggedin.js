import React, { useState } from "react"
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import MuiAlert from '@mui/material/Alert';
import { set } from "harmony-reflect";
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { Link,useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import Header from './Headers/header2'
import Customcharts from "./customcharts";


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Loggedin (props)
{
  const[open, setOpen] = useState(false);
    const[CircularProgress1, setCircularProgress] = useState(false);
  

   
    
    React.useEffect(()=>{
      console.log(props.history.location.pathname)
        setCircularProgress(true);
        setTimeout(() => {
            setCircularProgress(false);
            if(localStorage.getItem("formlogin")=="true"){
              setOpen(true);
            }
            localStorage.setItem("formlogin","false")

        }, 3000);
        
        
    },[])
    
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      
      setOpen(false)
     
     
    };

    let navigate = useHistory();
    function Handleclick() {
      localStorage.setItem("login","false")
           navigate.push("/")
           window. location. reload()
           
      
      
    }
    
    return    (
    <>
     

    <div class="maincontainer">
        {CircularProgress1?<div style = {{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}> <CircularProgress/></div>:
    <div class="container">
        <h1>Welcome</h1>
    {/* <label>{props.username} </label> */}
    <Button color="primary" variant="contained" onClick={Handleclick}>Log Out</Button>
    
    <Snackbar anchorOrigin={{ "vertical":"top",  "horizontal":"center" }} open={open} autoHideDuration={5000} onClose={handleClose}>
    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
      Login Successful!
    </Alert>
        </Snackbar></div>}<Customcharts/></div ></>)

  
}
