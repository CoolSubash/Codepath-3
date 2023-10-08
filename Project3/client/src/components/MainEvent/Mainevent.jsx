import EventPlaceCard from './EventPlaceCard' // Adjust the import path based on your project structure
import './mainevent.css' // Import CSS file for styling

const MainEventPage = () => {
  const eventPlaces = [
    {
      name: 'HyatRegency',
      placeImage:
        'https://images.pexels.com/photos/70441/pexels-photo-70441.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Marriot',
      placeImage:
        'https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Raddison',
      placeImage:
        'https://images.pexels.com/photos/2227787/pexels-photo-2227787.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ]

  return (
    <div
      className="main-event-page"
      style={{
        backgroundImage:
          'url(https://images.pexels.com/photos/2034851/pexels-photo-2034851.jpeg?auto=compress&cs=tinysrgb&w=600)',
      }}
    >
      <h1>Explore Event Places</h1>
      <div className="event-place-container">
        {eventPlaces.map((place, index) => (
          <EventPlaceCard
            key={index}
            name={place.name}
            placeImage={place.placeImage}
          />
        ))}
      </div>
    </div>
  )
}

export default MainEventPage
