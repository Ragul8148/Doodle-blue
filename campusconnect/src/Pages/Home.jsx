import { Link } from "react-router-dom";
export default function Home() {
  return (
    <section className="hero">
      <small>YOUR CAMPUS, YOUR COMMUNITY</small>
      <h1>Make Your Campus <span>Experience Count.</span></h1>
      <p>Discover exciting events, meet new people, and make the most of your college life.</p>
      <Link className="btn primary" to="/events">Explore Events</Link>
      <Link className="btn primary" to="/register">Register for an Event</Link>
    </section>
  );
}