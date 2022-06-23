import React from 'react';
//import { Link } from 'react-router-dom';
//import logo from './../../assets/images/footer/swg_footlogo.png';
import './header2.css'
//import AppLoader from "../../components/common/appLoader";
import logo from '../images/les.png';
import { Link} from 'react-router-dom';

class Header2 extends React.Component {
   
    render() {
        return (
            <header className="ShortHeader" role="region" aria-label="header">
                
                             <Link aria-label="Les logo" to="/" className="brand-logo mt-0 logo-container"><img src={logo} alt=" logo" /></Link> 
                             
                            
                      <p class="header-msg text-md-right">Suspect a leak? Call 911 and 877-860-6020</p>
                       
            </header>
        );
    }
}

export default Header2;