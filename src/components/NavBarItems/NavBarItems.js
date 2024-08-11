import { Person, Home, Work, Mail } from '@material-ui/icons'
import './NavBarItems.css'
import React, { useEffect, useRef } from 'react'

export const sections = {
    home: {
        section: 'section-intro',
        text: 'Home',
        icon: Home,
    },
    about: {
        section: 'section-about',
        text: 'About',
        icon: Person,
    },
    projects: {
        section: 'section-projects',
        text: 'Projects',
        icon: Work,
    },
    contact: {
        section: 'section-contact',
        text: 'Contact',
        icon: Mail,
    },
}

const Tooltip = ({ text, anchor }) => {
    useEffect(() => {
        if (anchor) {
            const tooltip = document.getElementById(`tooltip-${text}`)

            const rect = anchor.getBoundingClientRect()
            anchor.onmouseover = () => {
                tooltip.style.display = 'block'
                tooltip.style.left = `${rect.x - rect.width}px`
                tooltip.style.top = `${rect.y + 20}px`
                tooltip.style.transform = `scale(1)`
            }
            anchor.onmouseout = () => {
                tooltip.style.display = 'none'
            }
        }
    }, [anchor])
    return (
        <div className="tooltip" key={text} id={`tooltip-${text}`}>
            <div className="tooltip-text">{text}</div>
        </div>
    )
}

export const NavItem = ({ text, icon, activeScroll, section, goTo }) => {
    const ref = useRef(null)
    const navRef = useRef(null)
    const Icon = icon
    useEffect(() => {
        if (activeScroll === section) {
            // add opacity to 1
            navRef.current.style.opacity = 1
        } else {
            // add opacity to 0.5
            navRef.current.style.opacity = 0.3
        }
    }, [activeScroll])
    const handleScrollTo = () => {
        const element = document.getElementsByClassName(section)[0]

        if (section === 'section-intro') {
            goTo('top')
        } else {
            goTo(element, {
                offset: -100,
                // disableLerp: true,
            })
        }
    }
    return (
        <>
            <div
                className="nav-bar-item"
                ref={navRef}
                key={section}
                onClick={() => {
                    handleScrollTo()
                }}
            >
                <Icon ref={ref} />
            </div>
            {/* <Tooltip text={text} anchor={ref.current} /> */}
        </>
    )
}
export const NavBarItems = ({ activeScroll, goTo }) => {
    return (
        <div className="nav-bar-items">
            {Object.entries(sections).map(([key, value]) => {
                return (
                    <NavItem
                        goTo={goTo}
                        section={value.section}
                        key={key}
                        text={value.text}
                        icon={value.icon}
                        activeScroll={activeScroll}
                    />
                )
            })}
        </div>
    )
}
