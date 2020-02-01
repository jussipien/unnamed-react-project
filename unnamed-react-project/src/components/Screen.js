import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route, Link, Redirect, withRouter
} from 'react-router-dom'
import '../sass/styles.scss'

const Screen = ({title, text}) => {
  return (
    <>
      <h1 className={"main-title"}>{title}</h1>
      <p>{text}</p>
    </>
  )
}

export default Screen