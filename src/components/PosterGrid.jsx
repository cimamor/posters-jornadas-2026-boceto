import React from 'react'
import PosterCard from './PosterCard'
import './PosterGrid.css'

const PosterGrid = ({ posters }) => {
  if (posters.length === 0) {
    return (
      <div className="no-posters">
        <p>No se encontraron pósters en esta categoría.</p>
      </div>
    )
  }

  return (
    <div className="posters-grid">
      {posters.map(poster => (
        <PosterCard key={poster.id} poster={poster} />
      ))}
    </div>
  )
}

export default PosterGrid
