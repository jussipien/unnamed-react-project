import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route, Link, Redirect, withRouter
} from 'react-router-dom'

const Notification = ({ message, type }) => {
  if (!!message) {
    return (
      <div className={`notification ${type}`}>
        <p>{message}</p>
      </div>
    ) 
  } else {
    return <></>
  }
}

export default Notification