import React, { Component } from 'react';
import Header2 from './header1';//./shared/Header/Header
import Header from './header2'

class HeaderSwitch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roleRights: {},
            dashboardNotification: {},
            showDashbaordNotification: false
        }
    }
    //componentDidMount() {

    //}

    render() {
        //var pageName = window.location.hash.split("/").slice(-1);
        var pageName = window.location.href.substr(window.location.href.lastIndexOf('/'));
        // if (pageName.indexOf('?') !== -1) {
        //     pageName = pageName.split("?")[0];
        // }
        //call session tracker if user is already logged in
        //if (localStorage.getItem('UserID') && Convert.ToBoolean(localStorage.getItem('TwoFactorAuthenticated')) == true)
        //    SessionTracker();
        var tf = pageName.toLowerCase();
        console.log(tf)
        
        if (tf == '/') { return <Header2 /> }
        if (tf == '/login') { return <Header2/> }
        
        if (tf == '/signup') { return <Header2/> }
        if (tf == '/loggedin') { return <Header {...this.props}/> }
        
        
        return (
              <></>
        );
    }
}

export default HeaderSwitch;

