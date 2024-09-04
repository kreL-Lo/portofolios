import React from 'react'

import './Collaboration.css'
import { Card } from '../../card/Card'
import { WorkTogetherButton } from '../../Footer/Footer'

export const Collaboration = ({ onClickWorkTogether, onCloseModal }) => {
    return (
        <Card title="Collaboration" onClose={onCloseModal}>
            <div className="collaboration-wrapper">
                <div className="circle-wrap">
                    <div className="round-circle">
                        <div className="portrait-bg-col" />
                    </div>
                    <div className="emoji-circle">👋</div>
                </div>
                <div className="collab-right">
                    <div className="collab-text">
                        Let’s work together on your next project
                    </div>
                    <div className="collab-button">
                        <WorkTogetherButton
                            size="large"
                            onClick={() => {
                                onClickWorkTogether()
                            }}
                        />
                    </div>
                </div>
            </div>
        </Card>
    )
}
