import { CardTopRightButtons } from '../Header'
import './Card.css'

export const Card = ({ children, title = 'Card-Title', onClose }) => {
    return (
        <div className="card">
            <div className="card-header">
                <span className="card-header-title">{title}</span>
                <CardTopRightButtons onClose={onClose} />
            </div>
            <div className="card-content">{children}</div>
        </div>
    )
}
