// Event.jsx
import { Link } from 'react-router-dom'
import './event.css'
const Event = ({ image, title, ticketPrice, eventId }) => {
  return (
    <div className="event-card">
      <img src={image} alt="Event" className="event-image" />
      <div className="event-details">
        <div className="event-title">{title}</div>

        <div className="event-info">
          <div className="event-ticket-price">{ticketPrice}</div>
          <Link to={`/event/${eventId}`} className="event-read">
            Read More
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Event
