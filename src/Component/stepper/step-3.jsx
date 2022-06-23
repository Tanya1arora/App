import React, {useEffect, useState} from 'react'
import CircularProgress from '@mui/material/CircularProgress';


function Step3(props) {
console.log(props)
  React.useEffect(()=>{
    props.setCircularProgress(true);
    setTimeout(() => {
        props.setCircularProgress(false);

    }, 5000);
    
},[])

    return (
        <div>

          <div><h1> Registration Successful</h1></div> 
        </div>
    )
}



export default Step3

