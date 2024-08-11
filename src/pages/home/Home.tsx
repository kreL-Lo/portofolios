import { Divider } from '@mui/material'
import React from 'react'
//import profile.jpeg from src/assets
import profile from '../../assets/img/profile.jpeg'
import './Home.css'

const Home = () => {
  return (
    <>

      <div className="homeContainer" >
        <Section1 />
      </div>
    </>
  )
}


const Section1 = () => {
  return (
    <div className="firstItem" >
      <div className="imageContainer">
        <img
          src={profile}
          alt="random"
          className="imageContainer"
        />
      </div>
      <div className="descriptionContainer">
        <h1>
          Hi, I am Ciprian,
          <br />
          Developer
        </h1>
        <div>
          <span>
            &emsp; A passionate and optimistic developer dedicated to crafting innovative solutions with precision and creativity
          </span>
        </div>
      </div>
    </div>
  )

}


export default Home
