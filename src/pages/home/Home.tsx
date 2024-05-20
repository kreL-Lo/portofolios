import { Button, Divider } from '@mui/material'
import React from 'react'
//import profile.jpeg from src/assets
import profile from '../../assets/img/profile.jpeg'
import { FeaturedWork } from './FeaturedWork'
import './Home.css'
import LuxoftLogo from '../../assets/img/luxoft_logo.jpeg'
const Home = () => {
  return (
    <div className="homeContainer">
      <div className="firstItem">
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
          <div>
            <Button variant="contained">
              <a href="./CV.pdf" download>
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
      <Divider />
      <div className="secondItem">
        <div>
          <h2>Work Experience</h2>
          <Divider
            style={{
              color: 'black',
              width: '50vw',
            }}
          />
          <FeaturedWork
            title="Frontend Developer"
            image={LuxoftLogo}
            year="2023 - 2024 "
            description="At Cisco/Luxoft, I worked on a multisite orchestrator app, focusing on enhancing UI/UX for seamless navigation, leveraging my front-end expertise."
          />
          <Divider
            style={{
              color: 'black',
              width: '50vw',
            }}
          />

          <FeaturedWork
            title="Full Stack Developer"
            image="https://media.licdn.com/dms/image/C4E0BAQEiGP6XOmcTkw/company-logo_200_200/0/1630617663312/amplifiedsoftware_logo?e=1723075200&v=beta&t=wkMjYIuwfrayo84oIWoA7Dw96gfWn0ZyP9nnXUXq8yc"
            year="2021 - 2023"
            description="At my first gig as a full-stack developer at Amplified, I tackled various projects, soaking up tons of knowledge. I'm truly thankful for the chance."
          />
        </div>
      </div>

      <Divider />
    </div>
  )
}

export default Home
