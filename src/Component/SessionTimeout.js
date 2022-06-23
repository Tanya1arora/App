import React, { useContext, useRef, useState } from "react";
import IdleTimer from "react-idle-timer";
 
export default function SessionTimeout() {
  const idleTimer = useRef(null);
  const {handleLogoutUser} = useContext(AppStateContext);
 
  const onActive = () => {
    console.log("active");
    // timer reset automatically.
  };
 
  const onIdle = () => {
    console.log("idle")
    handleLogoutUser();
  };
  function handleLogoutUser(isTimedOut = false) {
    dispatch({ type: LOGOUT, isTimedOut });
    navigate("/");
  }
 
  return (
    <>
      <IdleTimer
        ref={idleTimer}
        onActive={onActive}
        onIdle={onIdle}
        debounce={250}
        timeout={5000}
      />
    </>
  );
}