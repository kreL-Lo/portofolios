import React from 'react'

import './FancyLights.css'
export const FancyLights = () => {
    //get scroll position
    const scroll = window.scrollY
    return (
        <div className="fancy-lights">
            <div
                id="fancy-light-1"
                className="fancy-light"
                style={{
                    position: 'absolute',
                    top: scroll,
                }}
            />
            <div
                id="fancy-light-2"
                className="fancy-light"
                style={{
                    position: 'absolute',
                    animationDuration: '6s',
                    animationTimeline: '3s',
                }}
            />
        </div>
    )
}
