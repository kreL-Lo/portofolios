import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import emailjs from '@emailjs/browser'
import Home from './pages/home/Home'

import './App.css'
import { CustomScrollBar } from './components/ScrollBar/CustomScrollBar'
import Footer from './components/Footer/Footer'
import LeftBar from './components/LeftBar/LeftBar'
import { MobileCover } from './components/MobileCover/MobileCover'
import { WriteMeModal } from './components/writeMeModal/WriteMeModal'

function mapRange(x: number) {
    const y = 200 - 2 * x

    return y
}

const FIRST_SECTION = 'first-section'
const SECOND_SECTION = 'section-progress'
const THIRD_SECTION = 'third-section'

const publicKey = 'KC-fCsNyHpRTGMu6z'
const OFF_SET_SCROLL = 300;
const App = () => {
    useEffect(() => {
        emailjs.init({
            publicKey: publicKey,
            limitRate: {
                throttle: 10000,
            },
        })
    }, [])

    const [bounds, setBounds] = useState({
        scroll: {
            y: 0,
            x: 0,
        },
        limit: {
            x: 0,
            y: 0,
        },
        targets: [],
    })
    const [isActive, setIsActive] = useState(false)

    const [activeScroll, setActiveScroll] = useState(0)
    const handleScroll = (scroll: any) => {
        const target = scroll.currentTarget

        const firstSection = document.getElementById(FIRST_SECTION)
        // const secondSection = document.getElementById(SECOND_SECTION)
        const thirdSection = document.getElementById(THIRD_SECTION)
        const windowHeight = target.clientHeight

        const SCROLL_DETECT_OFFSET = windowHeight / 4;

        if (firstSection && thirdSection) {
            const firstSectionTop = firstSection.offsetTop
            const thirdSectionTop = thirdSection.offsetTop
            let offset = OFF_SET_SCROLL;
            if (window.innerWidth < 1120) offset = 0

            const scrollY = target.scrollTop
            const middleScreen = windowHeight / 2

            if (
                scrollY >= firstSectionTop - middleScreen - offset &&
                scrollY < thirdSectionTop - middleScreen - offset
            ) {
                setActiveScroll(0)
            } else if (scrollY >= thirdSectionTop - middleScreen - offset) {
                setActiveScroll(1)
            }
        }

        const image: any = document.querySelector('.portrait-bg-col')
        if (image) {
            const progress =
                target.scrollTop / (target.scrollHeight - target.clientHeight)
            const nextPercentage = mapRange(progress * 100)
            image.animate(
                {
                    backgroundPosition: `50% ${nextPercentage}%`,
                },
                { duration: 2000, fill: 'both' }
            )
        }

        const elements = document.querySelectorAll('[data-id]')
        const targets: any = []
        //iterate over all elements
        elements.forEach((element) => {
            //get the element's position
            const rect = element.getBoundingClientRect()
            const offSet = SCROLL_DETECT_OFFSET
            const isMiddle =
                rect.top <= windowHeight / 2 + offSet &&
                rect.bottom >= windowHeight / 2 - offSet
            if (isMiddle) {
                targets.push(element.getAttribute('data-id'))
            }
        })
        setBounds({
            scroll: {
                y: target.scrollTop,
                x: target.scrollLeft,
            },
            limit: {
                x: target.scrollWidth - target.clientWidth,
                y: target.scrollHeight - target.clientHeight,
            },
            targets: targets,
        })
        //
    }

    // Function to scroll to a section based on the index
    function scrollToSection(index: number) {
        const firstSection = document.getElementById(FIRST_SECTION)
        const thirdSection = document.getElementById(THIRD_SECTION)

        const scrollableContainer = document.querySelector('.main-content')

        if (!scrollableContainer) {
            console.error('Scrollable container not found.')
            return
        }

        let section
        let offset = 0
        switch (index) {
            case 0:
                section = firstSection
                break
            case 1:
                offset = OFF_SET_SCROLL
                section = thirdSection
                break

            default:
                console.error(
                    'Invalid index. Please provide an index between 0 and 2.'
                )
                return
        }
        // Check if the section exists
        if (section) {
            const sectionTop = section.offsetTop
            if (window.innerWidth < 1120) offset = 0

            scrollableContainer.scrollTo({
                top:
                    sectionTop -
                    scrollableContainer.clientHeight / 2 +
                    section.clientHeight / 2 -
                    offset,
                behavior: 'smooth',
            })
        }
    }

    useEffect(() => {
        setTimeout(() => {
            //get url query parameter section and scroll to that section
            const urlParams = new URLSearchParams(window.location.search)
            const section = urlParams.get('section')
            if (section) {
                switch (section) {
                    case 'about':
                        scrollToSection(0)
                        break
                    case 'projects':
                        scrollToSection(1)
                        break
                    case 'contact':
                        scrollToSection(2)
                        break
                    default:
                        break
                }
            }
        }, 1000)
    }, [])

    const [open, setOpen] = useState(false)
    return (
        <>
            <WriteMeModal
                open={open}
                onClose={() => {
                    setOpen(false)
                }}
            />
            <div className="main-grid">
                <Header setIsActive={setIsActive} isActive={isActive} />
                <div className="main-content-grid">
                    <LeftBar
                        activeScroll={activeScroll}
                        scrollToSection={scrollToSection}
                    />
                    <div className="main-content" onScroll={handleScroll}>
                        <MobileCover
                            isActive={isActive}
                            activeScroll={activeScroll}
                            setIsActive={setIsActive}
                            scrollToSection={scrollToSection}
                        />
                        <Home
                            onClickWorkTogether={() => {
                                setOpen(true)
                            }}
                            onCloseModal={() => {
                                setOpen(false)
                            }}
                            bounds={bounds}
                        />
                    </div>
                </div>

                <Footer onClick={() => setOpen(true)} />
            </div>
            <CustomScrollBar bounds={bounds} />
        </>
    )
}

export default App
