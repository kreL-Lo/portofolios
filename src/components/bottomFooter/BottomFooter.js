import React from 'react'
import './BottomFooter.css'
import { Logo } from '../Logo'

export const BottomFooter = () => {
    return (
        <div className="bottom-footer">
            <div className="top-half">
                <Logo />
            </div>

            <div className="bottom-half">
                <span>@2024 Ciprian Miru | Web Developer</span>{' '}
            </div>
        </div>
    )
}
