import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Timer from './TimerCounter'

export default function LogoutDialog(props) {


    return (
        <>
            <Dialog
                open={props.showModel}
                onClose={props.stayLoggedIn}
                aria-labelledby="responsive-dialog-title"
                disableEscapeKeyDown
                disableBackdropClick
            >
                <DialogTitle id="responsive-dialog-title">
                    {"Session Expiration Warning"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText style={{ 'color': '#0c0c0c' }}>
                        Because you have been inactive, your session is about to expire
                    </DialogContentText>
                    {<Timer initialTime={1} autoLogout={props.LogOutNow} />}
                </DialogContent>
                <DialogActions>
                    <Button aria-label="click here to Log Out Now" onClick={props.LogOutNow} style={{ 'color': '#ec6a05', 'fontSize': '16px' }}>
                        Log Out Now
                    </Button>
                    <Button onClick={props.stayLoggedIn} aria-label="click here to stay Logged In" style={{ 'color': '#ec6a05', 'fontSize': '16px' }} autoFocus>
                        Stay Logged In
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}