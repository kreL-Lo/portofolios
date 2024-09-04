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
                <span className="kudos">
                    kudos:{' '}
                    <div
                        onClick={() => {
                            window.location.href =
                                'https://www.stefanobartoletti.it/'
                        }}
                        className="kudos-class"
                    >
                        @stefanobartoletti
                    </div>
                </span>
            </div>
        </div>
    )
}
