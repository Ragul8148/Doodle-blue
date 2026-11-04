// components/EventCard.jsx
import { Link } from "react-router-dom";
export default function EventCard({ event, isFav, onFav, onRegister, onEdit, onDelete }) {
  return (
    <article className="event-card">
      <div className="side">{event.category.toUpperCase()}</div>
      <div className="body">
        <small>{event.category.toUpperCase()}</small>
        <h3>{event.title}</h3>
        <p>{event.description}</p>
        <p><b>Date:</b> {event.date}</p>
        <p><b>Venue:</b> {event.venue}</p>
        <p><b>Registrations:</b> {event.registrations}</p>
        <p><b>Event ID:</b> {event.id}</p>
        <button className="btn primary" onClick={onRegister}>Register</button>
        <button className="btn warn" onClick={onFav}>{isFav ? "Favorited" : "Add Favorite"}</button>
        <br />
        <Link className="btn dark" to={`/events/${event.id}`}>View Details</Link>
        <button className="btn blue" onClick={onEdit}>Edit Event</button>
        <button className="btn red" onClick={onDelete}>Delete Event</button>
      </div>
    </article>
  );
}