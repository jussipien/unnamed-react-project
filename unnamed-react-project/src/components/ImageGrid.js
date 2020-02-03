import React from 'react'
import {
  BrowserRouter as Router,
  Route, Link, Redirect, withRouter
} from 'react-router-dom'
import '../sass/styles.scss'

const ImageGrid = () => {
  return (
    <div className="image-menu">
      <Link className="image-link tree" to={'/'} />
      <Link className="image-link wall" to={'/another'} /> {/* Photo by Aaron Burden on Unsplash */}
      <Link className="image-link tree" to={'/lorem'} />
    </div>
  )
}

export default ImageGrid