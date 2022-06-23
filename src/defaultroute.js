import React from 'react';

import { Redirect, Route } from 'react-router-dom'



function DefualtRoute({ component: Component, ...rest}) {

    return (

        <Route {...rest} render={(props) => {

            if (localStorage.getItem("login") == "false"|| localStorage.getItem('login') == null)

            {

                return (<Component {...props}/>);

            }

            else if(localStorage.getItem("login") == "true")

            {

                return(

                    <Redirect to={{pathname : '/loggedin', state : {from : props.location}} }/>

                ) ;

            }          

        }

        }

        />

    );

}

export default  DefualtRoute