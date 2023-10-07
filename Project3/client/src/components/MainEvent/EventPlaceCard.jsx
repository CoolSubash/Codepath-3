import { Link } from 'react-router-dom'

const EventPlaceCard = ({ name, placeImage }) => {
  // Convert the name to uppercase
  const nameUpper = name.toUpperCase()

  return (
    <div className="event-place-card">
      {/* Link to the event details page */}
      <Link to={`/events/${name}`} className="event-place-link">
        {/* Display the place image */}
        <img src={placeImage} alt={name} />

        {/* Display an overlay with the place name in uppercase */}
        <div className="overlay">
          <span className="place-name">{nameUpper}</span>
        </div>
      </Link>
    </div>
  )
}

export default EventPlaceCard
