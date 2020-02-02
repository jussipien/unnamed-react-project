import React, { useState, useEffect } from 'react'
import Todo from './Todo'
import '../sass/styles.scss'

const TodoList = ({post}) => {
  return (
    <>
      {notification}
      <h2>{post.title}</h2>
      <input type={"checked"} checked={post.checked} />
      <ImageGrid />
    </>
  )
}

export default TodoList