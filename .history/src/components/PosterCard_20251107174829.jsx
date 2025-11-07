import React from 'react'
import './PosterCard.css'

const PosterCard = ({ poster }) => {
  const getCategoryInfo = (category) => {
    const categories = {
      research: { icon: '🔬', name: 'Investigación Clínica', color: '#4a90e2' },
      pelvic: { icon: '💪', name: 'Fisioterapia Uroginecológica', color: '#9b59b6' },
      advanced: { icon: '⚡', name: 'Técnicas Avanzadas', color: '#e74c3c' },
    }
    return categories[category] || categories.research
  }

  const categoryInfo = getCategoryInfo(poster.category)

  return (
    <div className="poster-card">
      <div className="poster-card-header" style={{ borderTopColor: categoryInfo.color }}>
        <span className="poster-category" style={{ backgroundColor: categoryInfo.color }}>
          {categoryInfo.icon} {categoryInfo.name}
        </span>
      </div>
      <div className="poster-card-body">
        <h3 className="poster-title">{poster.title}</h3>
        <p className="poster-description">{poster.description}</p>
      </div>
      <div className="poster-card-footer">
        <a 
          href={poster.file} 
          target="_blank" 
          rel="noopener noreferrer"
          className="poster-link"
        >
          Ver Póster
          <span className="arrow">→</span>
        </a>
      </div>
    </div>
  )
}

export default PosterCard
