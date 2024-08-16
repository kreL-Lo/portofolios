import './CustomScrollBar.css'
import React, { useEffect, useMemo, useState, useRef } from 'react'
import { gsap } from 'gsap'

const THUMB_HEIGHT = 100
const AUTO_HIDE_DELAY = 800 // 1 second delay before hiding the scrollbar

export const CustomScrollBar = ({ bounds }) => {
    const y = bounds?.scroll.y || 0
    const scrollLimitY = bounds?.limit.y || 0
    const ref = useRef(null)
    const thumbRef = useRef(null)
    const timeoutRef = useRef(null)
    const [boxHeight, setBoxHeight] = useState(0)
    const [isThumbVisible, setThumbVisible] = useState(false)

    useEffect(() => {
        const resizeObserver = new ResizeObserver((entries) => {
            const { height } = entries[0].contentRect
            setBoxHeight(height)
        })
        if (ref.current) {
            resizeObserver.observe(ref.current)
        }
        return () => {
            if (ref.current) {
                resizeObserver.unobserve(ref.current)
            }
        }
    }, [])

    const clampedThumbPosition = useMemo(() => {
        const maxThumbPosition = boxHeight - THUMB_HEIGHT
        const thumbPosition =
            scrollLimitY > 0 ? (y / scrollLimitY) * maxThumbPosition : 0
        return Math.min(maxThumbPosition, Math.max(0, thumbPosition))
    }, [y, scrollLimitY, boxHeight])

    useEffect(() => {
        if (thumbRef.current) {
            gsap.to(thumbRef.current, {
                top: clampedThumbPosition,
                duration: 0.2,
                ease: 'power1.out',
            })
        }
    }, [clampedThumbPosition])

    useEffect(() => {
        // Show the scrollbar thumb on scroll
        setThumbVisible(true)

        // Clear any existing timeout
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }

        // Set a timeout to hide the scrollbar thumb
        timeoutRef.current = setTimeout(() => {
            setThumbVisible(false)
        }, AUTO_HIDE_DELAY)

        return () => {
            // Cleanup timeout on unmount or scroll changes
            clearTimeout(timeoutRef.current)
        }
    }, [y])

    const isScrollable = useMemo(() => {
        return scrollLimitY > boxHeight
    }, [scrollLimitY, boxHeight])

    return (
        <div className="custom-scroll" ref={ref}>
            <div
                className={`scroll-arrow scroll-arrow-up ${
                    isThumbVisible && isScrollable ? '' : 'invisible'
                }`}
            >
                &#9650;
            </div>
            <div
                className={`custom-scroll-thumb ${
                    isThumbVisible && isScrollable ? '' : 'invisible'
                }`}
                ref={thumbRef}
                style={{
                    height: `${THUMB_HEIGHT}px`,
                }}
            />
            <div
                className={`scroll-arrow scroll-arrow-down ${
                    isThumbVisible && isScrollable ? '' : 'invisible'
                }`}
            >
                &#9660;
            </div>
        </div>
    )
}
