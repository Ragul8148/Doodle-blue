// pages/Events.jsx
import { useState } from "react";
import EventForm from "../components/EventForm";
import EventCard from "../components/EventCard";
import { categories } from "../data/events";

export default function Events({ events, setEvents, favorites, toggleFavorite, registerForEvent }) {
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("All");
  const [editing, setEditing] = useState(null); // event being edited

  const saveEvent = (data) => {
    if (editing) {
      setEvents(events.map((e) => (e.id === editing.id ? { ...e, ...data } : e)));
      setEditing(null);
    } else {
      setEvents([...events, { ...data, id: Date.now(), registrations: 0 }]);
    }
  };
  const deleteEvent = (id) => setEvents(events.filter((e) => e.id !== id));

  const filtered = events.filter((e) =>
    (cat === "All" || e.category === cat) &&
    (e.title + e.venue).toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <small>DISCOVER YOUR CAMPUS</small>
      <h2>Upcoming Events</h2>
      <p>Find opportunities to learn, connect, and participate.</p>

      <EventForm onSave={saveEvent} editing={editing} />

      <div className="filters">
        <input placeholder="Search events by title or venue..." value={search} onChange={(e) => setSearch(e.target.value)} />
        <select value={cat} onChange={(e) => setCat(e.target.value)}>
          <option>All</option>
          {categories.map((c) => <option key={c}>{c}</option>)}
        </select>
        <button onClick={() => { setSearch(""); setCat("All"); }}>Reset Filters</button>
      </div>

      <div className="grid">
        {filtered.length === 0 && <p>No events found.</p>}
        {filtered.map((ev) => (
          <EventCard key={ev.id} event={ev}
            isFav={favorites.includes(ev.id)}
            onFav={() => toggleFavorite(ev.id)}
            onRegister={() => registerForEvent(ev.id)}
            onEdit={() => { setEditing(ev); window.scrollTo(0, 0); }}
            onDelete={() => deleteEvent(ev.id)} />
        ))}
      </div>
    </div>
  );
}