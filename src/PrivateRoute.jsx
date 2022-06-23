import React from 'react';

import { Redirect, Route } from 'react-router-dom'



function PrivateRoute({ component: Component, ...rest}) {

    return (

        <Route {...rest} render={(props) => {

            if (localStorage.getItem("login") == "true")

            {

                return (<Component {...props}/>);

            }

            else if(localStorage.getItem("login") == "false")

            {

                return(

                    <Redirect to={{pathname : '/', state : {from : props.location}} }/>

                ) ;

            }          

        }

        }

        />

    );

}

export default  PrivateRoute