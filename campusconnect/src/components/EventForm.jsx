// components/EventForm.jsx
import { useState, useEffect } from "react";
import { categories } from "../data/events";

const empty = { title: "", category: "Tech", date: "", venue: "", description: "" };

export default function EventForm({ onSave, editing }) {
  const [form, setForm] = useState(empty);
  useEffect(() => { setForm(editing ? editing : empty); }, [editing]);

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    if (!form.title || !form.date || !form.venue || !form.description) return alert("Fill all required fields");
    onSave({ title: form.title, category: form.category, date: form.date, venue: form.venue, description: form.description });
    setForm(empty);
  };

  return (
    <form className="card" onSubmit={submit}>
      <h3>{editing ? "Edit Event" : "Add a New Event"}</h3>
      <div className="two-col">
        <label>Event title *<input name="title" value={form.title} onChange={change} placeholder="e.g. React Workshop" /></label>
        <label>Category *
          <select name="category" value={form.category} onChange={change}>
            {categories.map((c) => <option key={c}>{c}</option>)}
          </select>
        </label>
        <label>Date *<input type="date" name="date" value={form.date} onChange={change} /></label>
        <label>Venue *<input name="venue" value={form.venue} onChange={change} placeholder="e.g. Seminar Hall" /></label>
      </div>
      <label>Description *<textarea name="description" value={form.description} onChange={change} placeholder="Describe the event." /></label>
      <button className="btn primary">{editing ? "Update Event" : "Add Event"}</button>
    </form>
  );
}