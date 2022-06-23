import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepOne from './stepper/step-1'
import StepTwo from './stepper/step-2'
import StepThree from './stepper/step-3'
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { margin } from '@mui/system';
import HorizontalLabelPositionBelowStepper  from './horizontalstepper'


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const getNavStyles = (indx, length) => {
    let styles = []
    for (let i = 0; i < length; i++) {
        if (i < indx) {
            styles.push('done')
        } else if (i === indx) {
            styles.push('doing')
        } else {
            styles.push('todo')
        }
    }
    return styles
}

const getButtonsState = (indx, length) => {
    if (indx > 0 && indx < length - 1) {
        return {
            showSecondstep: true,
            showPreviousBtn: true,
            showNextBtn: true

        }
    } else if (indx === 0) {
        return {
            showPreviousBtn: false,
            showNextBtn: true,
            showCancelBtn: true,
            showFirststep: true
        }
    }
    else if(indx==2){
        return {
            showPreviousBtn: false,
            showNextBtn: false,
            showCancelBtn: false,
            showSubmitBtn: true
        }
    }
    else {
        return {
            showPreviousBtn: true,
            showSubmitBtn: true,
            showThirdstep: true
        }
    }
}



export default function MultiStep(props) {
    const { compState, setComp } = props
    const [stylesState, setStyles] = useState(getNavStyles(0, props.steps.length))
    const [buttonsState, setButtons] = useState(getButtonsState(0, props.steps.length))
    const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

    const [open, setOpen] = React.useState(false);
    const [message, setmessage] = useState('');


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const handleCancel = () => {
        if(localStorage.getItem('login')=='true'){
            window.location.href = '/loggedin'

            console.log("1")

        }
        else{
            window.location.href = '/'

        }
    }



    function setStepState(indx) {
        setStyles(getNavStyles(indx, props.steps.length))
        setComp(indx < props.steps.length ? indx : compState)
        setButtons(getButtonsState(indx, props.steps.length))
    }

    const next = (e) => {
        const { name, email, gender, phoneno, password, confirmpassword,setValidCPassword2,
            setValidPhoneno,setValidPhoneno2, setValidCPassword, setValidPassword, setValidName, setValidEmail, setValidGender } = props
        setValidName(true)
        setValidEmail(true)
        setValidGender(true)
        setValidPassword(true)
        setValidCPassword(true)
        setValidPhoneno(true)
        setValidPhoneno2(true)
        setValidCPassword2(true)

        let temp = true
        switch (compState) {

            case 0:
                if (name == '' && password == '' && confirmpassword == '' && email == '' && phoneno == '' && gender == '') {
                    setmessage("Please fill out mandatory feilds")
                    setOpen(true);

                }
                if (name == '') {
                    setValidName(false)
                    temp = false
                } if (email == '') {
                    setValidEmail(false)
                    temp = false
                }
                if (!String(email)
                    .toLowerCase()
                    .match(
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    )) {
                    setValidEmail(false)
                    temp = false
                }

                if (phoneno == '') {
                    setValidPhoneno(false)
                    temp = false
                }
                if (phoneno.length < 10) {
                    setValidPhoneno2(false)
                    temp = false
                }

                if (password === '') {
                    setValidPassword(false)
                    temp = false
                }
                if (confirmpassword === '' ) {
                    setValidCPassword(false)
                    temp = false
                }
                if (password != confirmpassword&& password !== '') {
                    setValidCPassword2(false)
                    temp = false
                }
                if (gender === '') {
                    setValidGender(false)
                    temp = false
                }
                if (temp == false) {
                    return;
                }
                break;
            case 1:
if(!checked){
    setmessage("Please confirm all the details")
    setOpen(true)
    return}
                break;
            default:

        }


        setStepState(compState + 1);


    }

    const previous = () => {


        setStepState((compState > 0) ? compState - 1 : compState);
    };

    const handleOnClick = (evt) => {
        if (evt.currentTarget.value === props.steps.length - 1 && compState === props.steps.length - 1) {
            setStepState(props.steps.length)
        } else {
            setStepState(evt.currentTarget.value)
        }
    }




    return (
        <div className='stepheading' >
            <h1>Signup form</h1>
            <HorizontalLabelPositionBelowStepper Step=
            {compState}/>
            {
                compState == 0 ? <StepOne {...props} /> : (compState == 1 ? <StepTwo {...props} checked={checked} handleChange={handleChange}/> : compState == 2 ? <StepThree {...props} /> : <></>)
            }
            <div className="paybuttons" style={props.showNavigation ? {} : { display: 'none' }}>

                
                <Button aria-label="Please Click here to back" color="primary" variant="outlined"
                        style={buttonsState.showPreviousBtn ? { marginBlock: 20 } : { display: 'none' }}
                        onClick={previous}
                    >
                       back
                    </Button>

                <Link to="/" onClick={handleCancel}>
                    <Button aria-label="Please Click here to cancel" color="primary" variant="outlined"
                        style={buttonsState.showCancelBtn ? { marginBlock: 20 } : { display: 'none' }}
                    >
                        Cancel
                    </Button>
                </Link>
                <Button aria-label="Please Click here to next" color="secondary" variant="contained"
                    style={buttonsState.showNextBtn ? {} : { display: 'none' }}
                    onClick={next}>
                    Next
                </Button>
                
                    <Button aria-label="Please Click here to submit" color="secondary" onClick={()=>{
                        console.log(localStorage.getItem('login'))
                    if(localStorage.getItem('login')=='true'){
                        window.location.href = '/loggedin'

                        console.log("1")

                    }
                    else{
                        window.location.href = '/'

                    }
                }} variant="contained"
                        style={buttonsState.showSubmitBtn ? {} : { display: 'none' }}
                    >
                        Done
                    </Button>
                

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
MultiStep.defaultProps = {
    showNavigation: true
}