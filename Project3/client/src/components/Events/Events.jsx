import React, { useState, useEffect } from 'react'
import Event from './Event.jsx'
import './event.css'
import { useParams } from 'react-router-dom'

const Events = () => {
  const [eventsByPlace, setEventsByPlace] = useState([])
  const [loading, setLoading] = useState(true)
  const params = useParams()
  console.log(params)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:5631/eventplace/Marriot')
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        console.log(data)
        setEventsByPlace(data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching events:', error)
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="events">
      <h1 className="events-heading">Events</h1>
      {eventsByPlace.map((place, index) => (
        <div className="events-list" key={index}>
          {place.events.map((event, eventIndex) => (
            <Event
              key={eventIndex}
              image={event.image}
              title={event.title}
              ticketPrice={event.ticketPrice}
              eventId={event.id} // Event ID is index + 1
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default Events
