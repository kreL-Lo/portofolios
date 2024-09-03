import React from 'react'
//import profile.jpeg from src/assets
import './Home.css'
import { Card } from '../../components/card/Card'
import profileIcon from '../../assets/img/profile.jpeg';
import { PotraitCard } from '../../components/cartTypes/portrait/PortraitCard';
import { WriteMeCard } from '../../components/cartTypes/writeMe/WriteMeCard';
import { AboutMe, Hobbies, WhereIWork } from '../../components/cartTypes/aboutme/AboutMe';
import { Collaboration } from '../../components/cartTypes/collaboration/Collaboration';
const Home = () => {
  return (
    <>
      <div className="home-container" >

        <Section1 />

        <Section2 />
        <Section3 />
      </div>
    </>
  )
}


const Section1 = () => {
  return (
    <div className="about-container" id="first-section">
      <div className='about-header'>
        HOME
      </div>
      <div className="about-content">
        <h1>
          Hi, I'm Ciprian, a
          <br />
          <span className='about-content-header-creative'> creative </span> developer
        </h1>
        <div className='about-sub-header'>
          <span>
            &emsp; A passionate and optimistic developer dedicated to crafting innovative solutions
          </span>
        </div>
      </div>
    </div>
  )

}
const Section2 = () => {
  return (
    <div className="firstItem" id="second-section" >
      <div className="imageContainer">
        <div style={{
          marginLeft: 50
        }}>
          <PotraitCard />

          <WriteMeCard />
          <AboutMe />
          <WhereIWork />
          <Hobbies />
          <Collaboration />

        </div>
      </div>
      <div className="descriptionContainer">
        <h1>
          Hi, I am Ciprian, a
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


const Section3 = () => {
  return (
    <div id="third-section">

      <div className="imageContainer">

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
