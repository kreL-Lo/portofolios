import React, { useEffect } from 'react'
import './FancyLights.css'

let transitionTime = 2000 // <-- 100 ms - time our animation will last

let angle = 180 // <-- angle of gradient
let animationDirection = 'forwards' // <-- stores the animation direction
let intervalFrame // <-- stores the interval frame
let currentPct = 0 // <-- current percentage through the animation
let elapsed = 0 // <-- number of frames which have ellapsed

// GRADIENT COLORS

// background: linear-gradient(180deg, #5af33c, #116848);
// background: linear-gradient(180deg, #006699, #003366);

// conver this to rgb  #5af33c, #116848
// 90, 243, 60
// 17, 104, 72

// and this 006699, #003366
// 0, 102, 153
// 0, 51, 102

const gradientStopOne = [
    { pct: 0, color: { r: 90, g: 243, b: 60 } }, // The first color in your gradient
    { pct: 100, color: { r: 17, g: 104, b: 72 } }, // The color you want your first color to transition to
]
const gradientStopTwo = [
    { pct: 0, color: { r: 0, g: 102, b: 153 } }, // The second color in your gradient
    { pct: 100, color: { r: 0, g: 51, b: 102 } }, // The color you want your second color to transition to
]

// Apply our gradient programmatically so we can completely manipulate the gradient from JS rather than CSS
let c1 = gradientStopOne[0].color
let c2 = gradientStopTwo[0].color

// This function transitions between two rgb colors
const getColor = function (pct, colorSet) {
    for (var i = 1; i < colorSet.length - 1; i++) {
        if (pct < colorSet[i].pct) {
            break
        }
    }
    // This conversion figures out the transition between two rgb values
    var lower = colorSet[i - 1]
    var upper = colorSet[i]
    var range = upper.pct - lower.pct
    var rangePct = (pct - lower.pct) / range
    var pctLower = 1 - rangePct
    var pctUpper = rangePct
    var color = {
        r: Math.floor(lower.color.r * pctLower + upper.color.r * pctUpper),
        g: Math.floor(lower.color.g * pctLower + upper.color.g * pctUpper),
        b: Math.floor(lower.color.b * pctLower + upper.color.b * pctUpper),
    }
    // And returns the rgb code
    return `rgb(${color.r}, ${color.g}, ${color.b})`
}

// This is our animation which we run on hover

export const FancyLights = () => {
    //get scroll position
    const animateGradient = function () {
        const elements = ['fancy-light-1', 'fancy-light-2']
        if (intervalFrame === undefined) {
            intervalFrame = setInterval(() => {
                let time = transitionTime / 1000 // time in seconds
                let numberOfFrames = time * 60 // 60 frames per second -> 1 second = 60 frames

                // If the animation is going forward
                if (animationDirection === 'forwards') {
                    // Add 1 to elapsed
                    elapsed += 1
                    // The elapsed frames out of max frames
                    currentPct = Math.min(elapsed / numberOfFrames, 1) * 100
                } else {
                    // Otherwise we're going back - subtract 1 from ellapsed
                    elapsed -= 1
                    // The elapsed frames out of max frames
                    currentPct = Math.max(elapsed / numberOfFrames, 0) * 100
                }

                // Calculate current color in this time for each gradient color
                let colorOne = getColor(currentPct, gradientStopOne)
                let colorTwo = getColor(currentPct, gradientStopTwo)

                // Generate CSS string
                let generateGradient = `linear-gradient(${angle}deg, ${colorOne}, ${colorTwo})`

                // Add it to our background.
                // document.getElementById(element).style.backgroundImage =
                //     generateGradient

                elements.forEach((element) => {
                    document.getElementById(element).style.backgroundImage =
                        generateGradient
                })
                // End the interval when we're done
                if (currentPct === 100 || currentPct === 0) {
                    clearInterval(intervalFrame)
                    intervalFrame = undefined
                }
            }, 16.667) // 60 frames per second
        }
    }

    useEffect(() => {
        animateGradient()
    }, [])
    return (
        <div className="fancy-lights">
            <div id="fancy-light-1" className="fancy-light" />
            <div id="fancy-light-2" className="fancy-light" />
        </div>
    )
}
