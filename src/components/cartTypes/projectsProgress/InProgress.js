import React from 'react'
import './InProgress.css'
import { Card } from '../../card/Card'
import { Engineering } from '@mui/icons-material'

export const InProgress = () => {
    return (
        <Card title="In Progress">
            <Engineering />
        </Card>
    )
}
