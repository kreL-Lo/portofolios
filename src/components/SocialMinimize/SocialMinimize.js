import React from 'react'
import './SocialMinimize.css'
import {
    Close,
    Facebook,
    GitHub,
    Instagram,
    LinkedIn,
} from '@material-ui/icons'

const onClickIcon = (type) => {
    switch (type) {
        case 'facebook':
            window.open(links.facebook, '_blank')
            break
        case 'linkedin':
            window.open(links.linkedIn, '_blank')
            break
        case 'github':
            window.open(links.github, '_blank')
            break
        case 'instagram':
            window.open(links.instagram, '_blank')
            break
    }
}
export const links = {
    facebook: 'https://www.facebook.com/profile.php?id=100011421130774',
    linkedIn: 'https://www.linkedin.com/in/ciprian-m-699113141/',
    github: 'https://github.com/kreL-Lo',
    instagram: 'https://www.instagram.com/ciprianmiru/',
}
export const SocialMinimize = ({ handleMinimize }) => {
    const iconStyle = {
        width: 30,
        height: 30,
    }

    return (
        <div className="social-minimize">
            <div className="social-minimize-header">
                social-media
                <div
                    className="social-minimize-close"
                    onClick={() => {
                        handleMinimize()
                    }}
                >
                    <Close />
                </div>
            </div>
            <div className="social-minimize-social-media">
                <div
                    className="social-minimize-icon"
                    onClick={() => {
                        onClickIcon('facebook')
                    }}
                >
                    <Facebook style={iconStyle} />
                </div>
                <div
                    className="social-minimize-icon"
                    onClick={() => {
                        onClickIcon('linkedin')
                    }}
                >
                    <LinkedIn style={iconStyle} />
                </div>
                <div
                    className="social-minimize-icon"
                    onClick={() => {
                        onClickIcon('github')
                    }}
                >
                    <GitHub style={iconStyle} />
                </div>
                <div
                    className="social-minimize-icon"
                    onClick={() => {
                        onClickIcon('instagram')
                    }}
                >
                    <Instagram style={iconStyle} />
                </div>
            </div>
        </div>
    )
}

export const SocialIcons = () => {
    const iconStyle = {
        width: 20,
        height: 20,
        color: 'white',
    }
    return (
        <div className="social-container">
            <div
                className="social-minimize-icon scaled"
                onClick={() => {
                    onClickIcon('facebook')
                }}
            >
                <Facebook style={iconStyle} />
            </div>
            <div
                className="social-minimize-icon scaled"
                onClick={() => {
                    onClickIcon('linkedin')
                }}
            >
                <LinkedIn style={iconStyle} />
            </div>
            <div
                className="social-minimize-icon scaled"
                onClick={() => {
                    onClickIcon('github')
                }}
            >
                <GitHub style={iconStyle} />
            </div>
            <div
                className="social-minimize-icon scaled"
                onClick={() => {
                    onClickIcon('instagram')
                }}
            >
                <Instagram style={iconStyle} />
            </div>
        </div>
    )
}
