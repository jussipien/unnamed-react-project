import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route, Link, Redirect, withRouter
} from 'react-router-dom'

const Header = () => {
  return (
    <div className={"header"}>  
      <Link to={'/'}>first</Link>
      <Link to={'/another'}>another</Link>
      <Link to={'/lorem'}>lorem</Link>
    </div>
  )
}

export default Header
