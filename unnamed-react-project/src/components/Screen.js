import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route, Link, Redirect, withRouter
} from 'react-router-dom'
import Notification from './Notification'
import ImageGrid from './ImageGrid'
import '../sass/styles.scss'

const Screen = ({title, text, message, type}) => {
  const notification = <Notification message={message} type={type} />

  return (
    <>
      {notification}
      <h1 className={"main-title"}>{title}</h1>
      <p>{text}</p>
      <ImageGrid />
    </>
  )
}

export default Screen