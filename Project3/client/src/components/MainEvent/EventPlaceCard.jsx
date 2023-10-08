import { Link } from 'react-router-dom'

const EventPlaceCard = ({ name, placeImage }) => {
  // Convert the name to uppercase
  const nameUpper = name.toUpperCase()

  return (
    <div className="event-place-card">
      <Link to={`/events/${name}`} className="event-place-link">
        <img src={placeImage} alt={name} />

        <div className="overlay">
          <span className="place-name">{nameUpper}</span>
        </div>
      </Link>
    </div>
  )
}

export default EventPlaceCard
