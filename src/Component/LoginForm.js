import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import React, { useState } from "react"
import MuiAlert from '@mui/material/Alert';
import { useEffect } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link,useHistory } from 'react-router-dom';




const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const users = [{password: "12345", email: "tanya@gmail.com" }]
function LoginForm({
    setUsername,login
}) {


    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [validPassword, setValidPassword] = useState(true);
    const [validemail, setValidEmail] = useState(true);
    const [open, setOpen] = React.useState(false);
    const [message, setmessage] = useState('');
    const [validemail2, setValidEmail2] = useState(true);
    const [emailError, setEmailError] = useState(false);
    let navigate = useHistory();




    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    
    function handleEmailChange(e) {
        setEmail(e.target.value)
        if (e.target.value == "" && password == "") {
            return;
        }
        if (e.target.value == "") {
            setValidEmail(false)
        }
        else {
            setValidEmail(true)
        }
        if (!String(e.target.value)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )) {
            setValidEmail2(false)
        }
        else {
            setValidEmail2(true)
        }
    }
    function Handleclick(e) {
      
        setValidEmail2(true);
        setValidEmail(true);
        setValidPassword(true);

        let temp = true;

        if (email == "" && password == "") {
            setmessage("Please fill out mandatory feilds");
            setValidEmail(false);
            setValidEmail2(false);
            setOpen(true);
            temp=false;

        }
        if (email == "") {
            setValidEmail(false);
            temp=false;
            
        }
        if (password == "") {
            setValidPassword(false);
            temp=false;
            
        }
        if (!String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )) {
                setValidEmail2(false);
                temp=false;
            
        }

        if(temp == false){
            return;
        }
        let validuser = users.filter((w) => {
            return w.password === password && w.email === email
        })
        if (validuser.length > 0) {
            
            localStorage.setItem("login","true")
            localStorage.setItem("formlogin","true")
             navigate.push("/Loggedin")
             window. location. reload()
        }
        else {
            setmessage("Login failed")
            setOpen(true);

        }
    }



function handleUsernameChange(e) {
    setUsername(e.target.value)
}

function handlePasswordChange(e) {
    setPassword(e.target.value)
    if (e.target.value == "" && password == "") {
        return;
    }
    if (password == "") {
        setValidPassword(false)
    }
    else {
        setValidPassword(true)
    }
}


return (<div className="maincontainer"><div class="container">
    <h1>Login form</h1>
    <label>Email ID : </label>
    <TextField type="email" error = {emailError} value={email} onChange={handleEmailChange} placeholder="Enter Email ID" name="email" required />
    <span class="colred" style={!(email==='')?(!validemail2 ? {display: 'inline'} : { display: "none" }):{ display: "none" }} >Please fill the valid email </span>
    {/* <span class="colred" style={(!validemail ? {} : { display: "none" })} >Please fill this field </span> */}
    <span class="colred" style={!validemail ?  {} : { display: "none" } }>Please fill the email</span>
    
    <label>Password : </label>
    <TextField type="password" placeholder="Enter Password" value={password} onChange={handlePasswordChange} name="password" required />
    <span class="colred" style={!validPassword ? {} : { display: "none" }}>Please fill the password</span>
    <Button color="primary" variant="contained" style={{marginTop:40}} onClick={Handleclick}>Login</Button>
    <Link to="/Signup" onClick={()=>window.location.href = '/Signup'} style={{textAlign:"center",marginTop:"30px"}}> Register as a new Agency </Link>
    {/*<input type="checkbox" checked="checked" /> Remember me*/}
    {/*<button type="button" class="cancelbtn"> Cancel</button>
    Forgot <a href="#"> password? </a>*/}
</div>

    <Snackbar anchorOrigin={{ "vertical": "top", "horizontal": "center" }} open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            {
                message
            }
        </Alert>
    </Snackbar>



</div>
)

}
export default LoginForm



