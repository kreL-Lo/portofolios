import React from 'react'
//import profile.jpeg from src/assets
import './Home.css'
import './Section2.css'

import { PotraitCard } from '../../components/cartTypes/portrait/PortraitCard'
import {
    AboutMe,
    Hobbies,
    WhereIWork,
} from '../../components/cartTypes/aboutme/AboutMe'
import { Collaboration } from '../../components/cartTypes/collaboration/Collaboration'
import { BottomFooter } from '../../components/bottomFooter/BottomFooter'
import { Engineering } from '@mui/icons-material'
import { useEffect } from 'react'

const Home = ({ onClickWorkTogether, onCloseModal, bounds }: any) => {
    return (
        <>
            <div className="home-container">
                <Section1 />

                <Section2 bounds={bounds} />
                {/* <SectionProgress /> */}
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

const Section2 = ({ bounds }: any) => {
    const [triggered, setTriggered] = React.useState(false)
    useEffect(() => {
        const waveLetters = Array.from(
            document.getElementsByClassName('wave-letter')
        ) as HTMLElement[]
        const restartAnimation = () => {
            setTriggered(true)

            if (waveLetters) {
                waveLetters.forEach((letter, index) => {
                    letter.animate(
                        [
                            { transform: 'translateY(50%)', opacity: 0 },
                            { transform: 'translateY(0%)', opacity: 1 },
                        ],
                        {
                            duration: 600,
                            easing: 'ease-in-out',
                            fill: 'forwards',
                            delay: index * 10, // Add a delay for each letter (in ms)
                        }
                    )
                })
            }
        }
        if (bounds.targets.includes('test1')) {
            if (!triggered) restartAnimation()
        } else {
            setTriggered(false)
        }
    }, [bounds, triggered])

    // Function to wrap each letter in a span
    const waveText = 'Bringing your website to life'

    const wrapLetters = (text: string) => {
        return text.split('').map((letter, index) => (
            <span
                key={index}
                className="wave-letter"
                style={{ animationDelay: `${index * 0.1}s` }}
            >
                {letter === ' ' ? '\u00A0' : letter}{' '}
                {/* Non-breaking space for better control */}
            </span>
        ))
    }

    return (
        <div className="firstItem" id="second-section">
            <span
                className="about-content about-content-header-creative"
                style={{ paddingBottom: 100 }}
            >
                <h2 id="wave-text" className="wave-text" data-id="test1">
                    {wrapLetters(waveText)}
                </h2>
            </span>
            <AboutMe bounds={bounds} animated={true} />
            <div className="home-portrait-pos">
                <PotraitCard bounds={bounds} animated />
            </div>
            <div className="where-i-work-pos">
                <WhereIWork bounds={bounds} animated />
            </div>
            <div className="hobbies-pos">
                <Hobbies bounds={bounds} animated />
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
                    Project{' '}
                    <span className="about-content-header-creative">
                        Hightlights
                    </span>
                </h2>
            </div>
            <div className="progress-sec">
                <span> In Progress</span>
                <Engineering
                    style={{
                        fontSize: '50px',
                        color: 'red',
                        marginBottom: '20px',
                    }}
                />
            </div>
        </div>
    )
}
