import React, { useEffect } from 'react'

import './WriteMeModal.css'
import { WriteMeCard } from '../cartTypes/writeMe/WriteMeCard'

import gsap from 'gsap'
export const WriteMeModal = ({ open, onClose }) => {
    const handleClose = () => {
        onClose()
    }
    // on open add a animation to scale animation
    useEffect(() => {
        if (open) {
            gsap.to('.write-me-modal-content', {
                scale: 1,
                duration: 0.3,
                ease: 'power2.inOut',
            })
        } else {
            gsap.to('.write-me-modal-content', {
                scale: 0,
                duration: 0.3,
                ease: 'power2.inOut',
            })
        }
    }, [open])

    return (
        <div
            className={`write-me-modal ${open ? 'open' : ''}`}
            onClick={(element) => {
                //if element className is not equal to write-me-modal-content then close the modal
                if (element.target.className.includes('write-me-modal')) {
                    handleClose()
                }
                console.log(
                    'element.target.className',
                    element.target.className
                )
            }}
        >
            <div className="write-me-modal-content">
                <WriteMeCard
                    onClose={() => {
                        handleClose()
                    }}
                />
            </div>
        </div>
    )
}
