import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './MobileCover.css'

const items = [
    {
        id: '01',
        title: 'about',
    },
    // {
    //     id: '02',
    //     title: 'projects',
    // },
    {
        id: '02',
        title: 'contact',
    },
]
export const MobileCover = ({
    isActive,
    activeScroll,
    setIsActive,
    scrollToSection,
}) => {
    const coverRef = useRef(null)

    useEffect(() => {
        if (isActive) {
            // Make the cover visible before the slide-in animation
            gsap.set(coverRef.current, { display: 'block' })

            // Animate the cover height from 0% to 100%
            gsap.to(coverRef.current, {
                height: 'calc(100vh - 161px)',
                duration: 0.5,
                ease: 'power2.out',
            })
        } else {
            // Animate the cover height back to 0%
            gsap.to(coverRef.current, {
                height: '0%',
                duration: 0.5,
                ease: 'power2.in',
                onComplete: () => {
                    // Hide the cover after the animation completes
                    gsap.set(coverRef.current, { display: 'none' })
                },
            })
        }
    }, [isActive])

    return (
        <div className="mobile-cover" ref={coverRef}>
            <div className="mobile-cover-content">
                {
                    // Render the items
                    items.map((item, index) => (
                        <div
                            key={item.id}
                            className="mobile-cover-item"
                            onClick={() => {
                                // animate the cover back
                                setIsActive(false)
                                // add logic to scroll to that position
                                scrollToSection(index)
                            }}
                        >
                            <div className="mobile-cover-item-id">
                                {item.id}
                            </div>
                            <div
                                className={`mobile-cover-item-title ${
                                    index === activeScroll ? 'active' : ''
                                }`}
                            >
                                {item.title}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
