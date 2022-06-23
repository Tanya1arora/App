import logo from './logo.svg';
import './App.css';
import React, { useState } from "react"
import LoginForm from "./Component/LoginForm"
//import Loggedin from "./Component/Loggedin"
import Signup from "./Component/Signup"
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
// import HeaderSwitch from '../src/views/header/headerSwitch';
// import UserContextModel from './store/UserContextModel';
import Header from './Component/Headers/mainheader'
import Error from './Component/Error';
import  PrivateRoutes  from './PrivateRoute';
// import { Switch } from '@mui/material';
import Loggedin from './Component/Loggedin'
import DefaultRoutes from './defaultroute'
import IdleTimer from 'react-idle-timer'
import LogoutDialog from './Component/logOutDialog';
function App()
 {
   const [loggedin, setLoggedin] = useState(false);
  const [username, setUsername] = useState('');
  const [formloggedin, setFormLoggedin] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [logoutFleg, setLogoutFleg] = React.useState(0);
  const [showModel, setShowModel] = React.useState(false);
  const [timer, setTimer] = React.useState(0);
  const idleTimer=React.useRef(null);
  
  /*this.state = {
    logoutFleg: 0,
    showModel: false,
    timer: 0
}*/
  function handleOnAction(event) {
    updateLastActivityTime();
}
function handleOnActive(event) {
    updateLastActivityTime();
}
function updateLastActivityTime() {
    //debugger
    var lastActiveDate = localStorage.getItem("actDat");

    if (lastActiveDate) {
        lastActiveDate = new Date(lastActiveDate);
        var currentDate = new Date();

        const seconds = Math.floor((currentDate - lastActiveDate) / 1000 % 60);
        if (seconds > 3600) {
            // window.location.href = location.pathname;
            return;
        }
    } else if (!lastActiveDate) {
        localStorage.clear();
        window.location.href = location.pathname;
        return;
    }
    localStorage.setItem("actDat", new Date());
}

function handleOnIdle(event) {
    // localStorage.clear();
    // window.location.href = location.pathname;
    //this.setState({ logoutFleg: 1, showModel: true })
    setLogoutFleg(1)
    setShowModel(true)

}

function stayLoggedIn  ()  {
    localStorage.setItem("actDat", new Date());
    //this.setState({ showModel: false, logoutFleg: 0 })
    setLogoutFleg(0)
    setShowModel(false)
};

const LogOutNow = () => {
    localStorage.clear();
    window.location.href = location.pathname;
    //this.setState({ showModel: false })
    setShowModel(false)
}



  function setlogin(){
    setLoggedin(true);
    setFormLoggedin(true);
    setOpen(true);
   }
   function resetformloggedin(){
    setFormLoggedin(false);
   }
  function setlogout(){
    console.log("LOGOUT")
     setLoggedin(false);
    localStorage.setItem("login",false)
   }
  
    // var login = localStorage.getItem("login")
    
  return (<div className="App">
      {/*{
        loggedin?<Loggedin />:<LoginForm username = {username} setUsername = {setUsername} login={setlogin}/>
      }*/}
      
      <Router>
      <Header logout={setlogout} />
   
      
    <Switch>
      <DefaultRoutes exact path="/" login={setlogin} component={LoginForm} />
      <Route exact path="/Signup" component={Signup } />
      <>
                        <IdleTimer
                            ref={ref => { idleTimer = ref }}
                            timeout={1000 * 3600 * 1}
                            onActive={handleOnActive}
                            onIdle={handleOnIdle}
                            onAction={handleOnAction}
                            debounce={250}

                        />
                        {logoutFleg == 1 && <LogoutDialog showModel={showModel} stayLoggedIn={stayLoggedIn} LogOutNow={LogOutNow} />}
                        {/*For post login routes with Headers, add in the below component*/}
                        <PrivateRoutes exact  path="/Loggedin" open={open} setOpen={setOpen} logout={setlogout} component={Loggedin} />

                    </>
  
      <Route exact path="*" component={Error} />
    </Switch>
  </Router>

    </div>
    
  );

    }
export default App;
