import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './event.css'
import Navbar from '../Header/Navbar'
const Eventdetails = () => {
  const { id } = useParams()
  const [event, setEvent] = useState(null)

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch(`http://localhost:5631/event/${id}`)
        if (!response.ok) {
          throw new Error('Failed to fetch event data')
        }
        const eventData = await response.json()

        setEvent(eventData)
      } catch (error) {
        console.error('Error fetching event data:', error)
      }
    }

    fetchEvent()
  }, [id])

  if (!event) {
    return <div>Loading...</div>
  }
  const [eventdata] = event
  const {
    event_image,
    event_date,
    event_features,
    event_learn,
    event_location,
    event_overview,
    event_speaker,
    event_time,
    event_title,
    ticket_price,
  } = eventdata
  const event_speakerdata = event_speaker[0]
  return (
    <>
      {/* <Navbar /> */}
      <div className="event-details">
        <div className="event-image">
          <img src={event_image} alt="" />
        </div>
        <div className="event-info">
          <h1>{event_title}</h1>
          <p>Date: {event_date}</p>
          <p>{event_time}</p>
          <p>Location: {event_location}</p>
          <p>Ticket Price: {ticket_price}</p>
          <p>Overview: {event_overview}</p>
          <p> {event_learn}</p>
          <h2>Event Features:</h2>
          <ul>
            {event_features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <h2>Event Speakers:</h2>

          {event_speakerdata?.map((speaker, index) => (
            <div key={index}>
              <img src={speaker.image} alt={speaker.name} />
              <p>{speaker.name}</p>
              <a href="">Subash</a>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Eventdetails
