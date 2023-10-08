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
        const response = await fetch(
          `http://localhost:5631/eventplace/${params.id}`,
        )
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

      <div className="events-list">
        {eventsByPlace.map((event, eventIndex) => (
          <Event
            key={eventIndex}
            image={event.event_image}
            title={event.event_title}
            ticketPrice={event.ticket_price}
            eventId={event.id} // Event ID is index + 1
          />
        ))}
      </div>
    </div>
  )
}

export default Events
