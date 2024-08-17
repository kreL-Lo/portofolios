import React, { useState, useEffect, useRef } from 'react'
import './FancyLights.css'

let transitionTime = 2000
let angle = 180
let animationDirection = 'forwards'
let intervalFrame
let currentPct = 0
let elapsed = 0

const gradientStopOne = [
    { pct: 0, color: { r: 90, g: 243, b: 60 } },
    { pct: 100, color: { r: 17, g: 104, b: 72 } },
]
const gradientStopTwo = [
    { pct: 0, color: { r: 0, g: 102, b: 153 } },
    { pct: 100, color: { r: 0, g: 51, b: 102 } },
]

let c1 = gradientStopOne[0].color
let c2 = gradientStopTwo[0].color

const getColor = function (pct, colorSet) {
    for (var i = 1; i < colorSet.length - 1; i++) {
        if (pct < colorSet[i].pct) {
            break
        }
    }
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
    return `rgb(${color.r}, ${color.g}, ${color.b})`
}

export const FancyLights = () => {
    const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 })
    const [circleSize, setCircleSize] = useState(200)
    const [increasing, setIncreasing] = useState(true)
    const circleRef = useRef(null)

    const animateGradient = function () {
        const elements = ['fancy-light-1', 'fancy-light-2']
        if (intervalFrame === undefined) {
            intervalFrame = setInterval(() => {
                let time = transitionTime / 1000
                let numberOfFrames = time * 60

                if (animationDirection === 'forwards') {
                    elapsed += 1
                    currentPct = Math.min(elapsed / numberOfFrames, 1) * 100
                } else {
                    elapsed -= 1
                    currentPct = Math.max(elapsed / numberOfFrames, 0) * 100
                }

                let colorOne = getColor(currentPct, gradientStopOne)
                let colorTwo = getColor(currentPct, gradientStopTwo)

                let generateGradient = `linear-gradient(${angle}deg, ${colorOne}, ${colorTwo})`

                elements.forEach((element) => {
                    document.getElementById(element).style.backgroundImage =
                        generateGradient
                })

                if (currentPct === 100 || currentPct === 0) {
                    clearInterval(intervalFrame)
                    intervalFrame = undefined
                }
            }, 16.667)
        }
    }

    useEffect(() => {
        animateGradient()
    }, [])

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setCircleSize((prevSize) => {
                if (prevSize >= 150 && increasing) {
                    setIncreasing(false)
                    return 150
                } else if (prevSize <= 100 && !increasing) {
                    setIncreasing(true)
                    return 100
                } else {
                    return increasing ? prevSize + 2 : prevSize - 2
                }
            })
        }, 60) // 60 frames per second

        return () => clearInterval(interval)
    }, [increasing])

    const handleMouseMove = (event) => {
        setMousePosition({
            x: event.clientX,
            y: event.clientY,
        })
    }

    const circleStyle = {}

    return (
        <div className="fancy-lights">
            <div ref={circleRef} style={circleStyle} />
            <div id="fancy-light-1" className="fancy-light" />
            <div id="fancy-light-2" className="fancy-light" />
        </div>
    )
}

export default FancyLights
