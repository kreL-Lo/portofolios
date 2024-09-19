import React from 'react'
import { Card } from '../../card/Card'
import './PortraitCard.css'

export const PotraitCard = (props) => {
    return (
        <Card title="Portrait" {...props}>
            <div className="potrait-bg" />
        </Card>
    )
}
