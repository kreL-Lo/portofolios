import React from 'react'
import "./FeaturedWork.css"
export const FeaturedWork = ({
  title,
  image,
  year,
  isOngoing,
  description,
}: {
  title: string
  image: string
  year: string
  isOngoing?: boolean
  description: string
}) => {

  return (
    <div className='container'>
      <div className='leftContainer' >
        <img src={image} alt="random" className='leftContainer' />
      </div>

      {/* header */}
      <div className='rightContainer'>
        <h1>{title}</h1>
        <div className="yearType">
          <div className="year">{year}</div>
          {isOngoing && <div className="ongoing">Ongoing</div>}
        </div>

        <div
          className='description'
        ><span>
            {description}</span></div>
      </div>
    </div>
  )
}
