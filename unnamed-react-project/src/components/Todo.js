import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route, Link, Redirect, withRouter
} from 'react-router-dom'
import '../sass/styles.scss'

const Todo = ({todo}) => {
  return (
    <>
      <h2>{todo.title}</h2>
      <input type={"checked"} checked={todo.checked} />
    </>
  )
}

export default Todo