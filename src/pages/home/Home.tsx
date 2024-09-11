import React from 'react'
//import profile.jpeg from src/assets
import './Home.css'
import { Card } from '../../components/card/Card'
import { PotraitCard } from '../../components/cartTypes/portrait/PortraitCard'
import { WriteMeCard } from '../../components/cartTypes/writeMe/WriteMeCard'
import {
  AboutMe,
  Hobbies,
  WhereIWork,
} from '../../components/cartTypes/aboutme/AboutMe'
import { Collaboration } from '../../components/cartTypes/collaboration/Collaboration'
import { BottomFooter } from '../../components/bottomFooter/BottomFooter'
import { InProgress } from '../../components/cartTypes/projectsProgress/InProgress'
import { Engineering } from '@mui/icons-material'
const Home = ({ onClickWorkTogether, onCloseModal }: any) => {
  return (
    <>
      <div className="home-container">
        <Section1 />

        <Section2 />
        <SectionProgress />
        <Section3
          onClickWorkTogether={onClickWorkTogether}
          onCloseModal={onCloseModal}
        />
        <BottomFooter />
      </div>
    </>
  )
}

const Section1 = () => {
  return (
    <div className="about-container" id="first-section">
      <div className="about-content">
        <h1>
          Hi, I'm Ciprian, a
          <br />
          <span className="about-content-header-creative">
            {' '}
            creative{' '}
          </span>{' '}
          developer
        </h1>
        <div className="about-sub-header">
          <span>
            &emsp; A passionate and optimistic developer dedicated
            to crafting innovative solutions
          </span>
        </div>
      </div>
    </div>
  )
}
const Section2 = () => {
  return (
    <div className="firstItem" id="second-section">
      <span className='about-content about-content-header-creative'> <h2> Your inventive website creator</h2>
      </span>
      <AboutMe />
      <div className="home-portrait-pos">
        <PotraitCard />
      </div>
      <div className="where-i-work-pos">
        <WhereIWork />
      </div>
      <div className="hobbies-pos">
        <Hobbies />
      </div>
    </div>
  )
}

const Section3 = ({ onClickWorkTogether, onCloseModal }: any) => {
  return (
    <div id="third-section">
      <Collaboration
        onClickWorkTogether={onClickWorkTogether}
        onCloseModal={onCloseModal}
      />
    </div>
  )
}

export default Home

const SectionProgress = () => {
  return (
    <div id="section-progress">
      <div className="about-content">
        <h2>
          Project {' '}
          <span className="about-content-header-creative">
            Hightlights
          </span>
        </h2>
      </div>
      <div className='progress-sec'>
        <span> In Progress</span>
        <Engineering style={{
          fontSize: '50px',
          color: 'red',
          marginBottom: '20px',

        }} />
      </div>
    </div>
  )
}
