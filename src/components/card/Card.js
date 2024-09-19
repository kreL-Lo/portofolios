import { useEffect, useState } from 'react'
import { CardTopRightButtons } from '../Header'
import './Card.css'

export const Card = ({
    children,
    title = 'Card-Title',
    onClose,
    bounds,
    animated = false,
}) => {
    const dataId = `card-${title}`
    const [animate, setAnimate] = useState(false)

    useEffect(() => {
        // Check if the card should animate based on `bounds.targets`
        if (bounds && bounds?.targets.includes(dataId)) {
            setAnimate(true) // Trigger animation
        }
    }, [bounds, dataId]) // Run effect whenever `bounds.targets` or `dataId` changes
    //if animated is true add an extra class to the card class name
    const cardClassNames = [
        'card',
        animated ? 'card-animated' : 'card-static',
        animate ? 'card-animate' : '',
    ].join(' ')
    return (
        <div className={cardClassNames} data-id={dataId}>
            <div className="card-header">
                <span className="card-header-title">{title}</span>
                <CardTopRightButtons onClose={onClose} />
            </div>
            <div className="card-content">{children}</div>
        </div>
    )
}
