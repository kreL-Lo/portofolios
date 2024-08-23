import { CardTopRightButtons } from '../Header'
import './Card.css'

export const Card = ({ children, title = 'Card-Title' }) => {
    return (
        <div className="card">
            <div className="card-header">
                <span className="card-header-title">{title}</span>
                <div>
                    <CardTopRightButtons />
                </div>
            </div>
            <div className="card-content">{children}</div>
        </div>
    )
}
