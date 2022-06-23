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
import CustomStepper from './stepper'
import VisibilityIcon from '@mui/icons-material/Visibility';




function Signup(){
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneno, setPhoneno] = useState('');
    const [gender, setGender] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    const[CircularProgress1, setCircularProgress] = useState(false);
    const [compState, setComp] = useState(0)
    const [validname, setValidName] = useState(true)
    const [validemail, setValidEmail] = useState(true)
    const [validgender, setValidGender] = useState(true)
    const [validphone, setValidPhone] = useState(true)
    const [validPhone2, setValidPhone2] = useState(true)
    const [validpassword, setValidPassword] = useState(true)
    const [validcpassword, setValidCPassword] = useState(true)
    const [validcpassword2, setValidCPassword2] = useState(true)



    
    function handlePasswordChange(e) {
        setPassword(e.target.value)
    }
    function handleNameChange(e) {
        setName(e.target.value)
    }
    function handleEmailChange(e) {
        setEmail(e.target.value)
    }
    function handlePhonenoChange(e) {
        setPhoneno(e.target.value)
    }
    function handleGenderChange(e) {
        setGender(e.target.value)
    }
    function handleConfirmpasswordChange(e) {
        setConfirmpassword(e.target.value)
    }
    function openCircularProgress(val){
        setCircularProgress(val)
    }
   function handleCompstate(idx){
       setComp(idx)
   }
   function handleValidName(bol){
    setValidName(bol)
   }
   function handleValidEmail(bol){
    setValidEmail(bol)
   }
   function handleValidPhone(bol){
    setValidPhone(bol)
   }
   function handleValidPhone2(bol){
    setValidPhone2(bol)
   }
   function handleValidGender(bol){
    setValidGender(bol)
   }
   function handleValidPassword(bol){
    setValidPassword(bol)
   }
   function handleValidCPassword(bol){
    setValidCPassword(bol)
   }
   function handleValidCPassword2(bol){
    setValidCPassword2(bol)
   }
   
    return (<>
        {CircularProgress1 &&<div style = {{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}> <CircularProgress/></div>}
    
    <div style={CircularProgress1?{display:"none"}:{}}className="maincontainer"><div className="maincontainer2">
    <CustomStepper 
    name={name}
    password={password}
    email={email}
    phoneno={phoneno}
    confirmpassword={confirmpassword}
    gender={gender}
    handlePasswordChange={handlePasswordChange}
    handleNameChange={handleNameChange}
    handleEmailChange={handleEmailChange}
    handleGenderChange={handleGenderChange}
    handleConfirmpasswordChange={handleConfirmpasswordChange}
    handlePhonenoChange={handlePhonenoChange}
    setCircularProgress={openCircularProgress}
    compState={compState}
    setComp={handleCompstate}
    validname={validname}
    setValidName={handleValidName}
    validemail={validemail}
    setValidEmail={handleValidEmail}
    validgender = {validgender}
    setValidGender ={handleValidGender}
    validphone={validphone}
    setValidPhoneno={handleValidPhone}
    validPhone2={validPhone2}
    setValidPhoneno2={handleValidPhone2}
    validpassword={validpassword}
    setValidPassword={handleValidPassword}
    validcpassword={validcpassword}
    setValidCPassword={handleValidCPassword}
    validcpassword2={validcpassword2}
    setValidCPassword2={handleValidCPassword2}
/>

    </div>
        </div></> )
}

export default Signup
