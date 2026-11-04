import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { initialEvents } from "./data/events";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Events from "./Pages/Events";
import EventDetails from "./Pages/EventDetails";
import Register from "./Pages/Register";

export default function App() {
  const [events, setEvents] = useState(initialEvents);
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) =>
    setFavorites((f) => (f.includes(id) ? f.filter((x) => x !== id) : [...f, id]));

  const registerForEvent = (id) =>
    setEvents((evs) => evs.map((e) => (e.id === id ? { ...e, registrations: e.registrations + 1 } : e)));

  const shared = { events, setEvents, favorites, toggleFavorite, registerForEvent };

  return (
    <>
      <Navbar favCount={favorites.length} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events {...shared} />} />
          <Route path="/events/:id" element={<EventDetails {...shared} />} />
          <Route path="/register" element={<Register events={events} registerForEvent={registerForEvent} />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}