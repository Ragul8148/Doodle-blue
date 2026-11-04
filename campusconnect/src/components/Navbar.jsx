// components/Navbar.jsx
import { NavLink } from "react-router-dom";
export default function Navbar({ favCount }) {
  return (
    <header className="navbar">
      <span className="logo">CampusConnect</span>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/register">Register</NavLink>
        <span className="pill">Favorites ({favCount})</span>
      </nav>
    </header>
  );
}