import React from 'react'

import './FancyLights.css'
export const FancyLights = () => {
    //get scroll position
    return (
        <div className="fancy-lights">
            <div id="fancy-light-1" className="fancy-light" />
            <div id="fancy-light-2" className="fancy-light" />
        </div>
    )
}
