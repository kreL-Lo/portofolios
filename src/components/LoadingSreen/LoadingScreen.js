import React from 'react'
import './LoadingScreen.css'
import { CircleAnimation, Logo } from '../Logo'
import { CodeOff } from '@mui/icons-material'

export const LoadingScreen = () => {
    return (
        <div className="loading-screen">
            <span className="square-box">
                <CodeOff
                    style={{
                        fill: '#8fff86',
                    }}
                />
            </span>
            <div className="logo-container">
                <Logo />
            </div>

            <div className="animated-circle"></div>
            <span className="square-box-left">
                <CircleAnimation />
            </span>
        </div>
    )
}
