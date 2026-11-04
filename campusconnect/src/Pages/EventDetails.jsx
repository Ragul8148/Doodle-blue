import { useParams, Link } from "react-router-dom";
export default function EventDetails({ events, favorites, toggleFavorite, registerForEvent }) {
  const { id } = useParams();
  const event = events.find((e) => e.id === Number(id));
  if (!event) return <div className="container"><p>Event not found.</p><Link to="/events">Back to Events</Link></div>;

  return (
    <div className="container narrow">
      <Link className="btn" to="/events">Back to Events</Link>
      <div className="card">
        <span className="tag">{event.category.toUpperCase()}</span>
        <small>Event ID: #{event.id}</small>
        <h2>{event.title}</h2>
        <p>{event.description}</p>
        <div className="info"><p><b>Date:</b> {event.date}</p><p><b>Venue:</b> {event.venue}</p></div>
        <button className="btn primary" onClick={() => registerForEvent(event.id)}>Register for this Event</button>
        <button className="btn" onClick={() => toggleFavorite(event.id)}>
          {favorites.includes(event.id) ? "Favorited" : "Add Favorite"}
        </button>
      </div>
    </div>
  );
}