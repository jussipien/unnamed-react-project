import React from 'react'
import '../sass/styles.scss'

const ImageGrid = () => {
  return (
    <div className="image-menu">
      <div className="filtered-image tree" />
      <div className="filtered-image wall" /> {/* Photo by Aaron Burden on Unsplash */}
      <div className="filtered-image tree" />
    </div>
  )
}

export default ImageGrid