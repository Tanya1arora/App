
import React from 'react';
//import { Link } from 'react-router-dom';
//import logo from './../../assets/images/footer/swg_footlogo.png';
import './header2.css'
//import AppLoader from "../../components/common/appLoader";
import logo from '../images/les.png';
import { Link} from 'react-router-dom';

class Header1 extends React.Component {
   
    render() {
        return (
            <header  className="ShortHeader" role="region" aria-label="header">
                
                             <Link aria-label="Les logo" to="/" className="brand-logo mt-0 logo-container"><img src={logo} alt=" logo" /></Link> 
                             <button style={{width: "100px",float:'right'}} onClick={()=>{localStorage.setItem('login', false); window.location.href = '/'          }}>Logout</button>
                            
                      <button onClick={()=>window.location.href='/Signup'} style={{width: "200px", backgroundColor: 'black', height: 60, marginTop: 10, marginInline: 5, color: 'white', textAlign: 'center'}} >Signup Page</button>
                       
            </header>
        );
    }
}

export default Header1;