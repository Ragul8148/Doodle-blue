import { useState } from "react";

const initial = { name: "", email: "", department: "", year: "", password: "",
                  mode: "In person", eventId: "", accessibility: false, message: "" };

export default function Register({ events, registerForEvent }) {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [result, setResult] = useState(null);

  const change = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const validate = () => {
    const err = {};
    if (!form.name.trim()) err.name = "Name is required";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = "Enter a valid email";
    if (!form.department) err.department = "Select a department";
    if (!form.eventId) err.eventId = "Choose an event";
    return err;
  };

  const submit = (e) => {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length) return;
    const ev = events.find((x) => x.id === Number(form.eventId));
    registerForEvent(ev.id);
    setResult({ name: form.name, email: form.email, department: form.department, event: ev.title, mode: form.mode });
  };

  const reset = () => { setForm(initial); setErrors({}); setResult(null); };

  return (
    <div className="container narrow">
      <form className="card" onSubmit={submit}>
        <small>SAVE YOUR SEAT</small>
        <h2>Student Event Registration</h2>
        <p>Complete the required fields to register for a campus event.</p>
        <div className="two-col">
          <label>Student name *<input name="name" value={form.name} onChange={change} placeholder="Enter your full name" />
            {errors.name && <span className="err">{errors.name}</span>}</label>
          <label>Email address *<input name="email" value={form.email} onChange={change} placeholder="student@example.com" />
            {errors.email && <span className="err">{errors.email}</span>}</label>
          <label>Department *
            <select name="department" value={form.department} onChange={change}>
              <option value="">Select your department</option>
              <option>Computer Science</option><option>Information Technology</option>
              <option>Electronics</option><option>Mechanical</option>
            </select>
            {errors.department && <span className="err">{errors.department}</span>}</label>
          <label>Year of study<input type="number" name="year" value={form.year} onChange={change} placeholder="Example: 2" /></label>
          <label>Create a demo password (optional)
            <input type="password" name="password" value={form.password} onChange={change} placeholder="Password input example" />
            <small>This is a teaching example only; no password is saved or sent.</small></label>
          <fieldset>
            <legend>How will you attend?</legend>
            {["In person", "Online"].map((m) => (
              <label key={m}><input type="radio" name="mode" value={m} checked={form.mode === m} onChange={change} /> {m}</label>
            ))}
          </fieldset>
        </div>
        <label>Choose an event *
          <select name="eventId" value={form.eventId} onChange={change}>
            <option value="">Select a campus event</option>
            {events.map((ev) => <option key={ev.id} value={ev.id}>{ev.title}</option>)}
          </select>
          {errors.eventId && <span className="err">{errors.eventId}</span>}</label>
        <label><input type="checkbox" name="accessibility" checked={form.accessibility} onChange={change} /> I would like the team to contact me about accessibility support.</label>
        <label>Message (optional)<textarea name="message" value={form.message} onChange={change} placeholder="Any questions or notes for the event team?" /></label>
        <button className="btn primary" type="submit">Submit Registration</button>
        <button className="btn" type="button" onClick={reset}>Reset Form</button>

        {result && (
          <div className="success">
            <h4>Registration complete!</h4>
            <p>This is a local demonstration. Your details have not been sent to a server.</p>
            <ul>
              <li><b>Student:</b> {result.name}</li>
              <li><b>Email:</b> {result.email}</li>
              <li><b>Department:</b> {result.department}</li>
              <li><b>Event:</b> {result.event}</li>
              <li><b>Attendance:</b> {result.mode}</li>
            </ul>
          </div>
        )}
      </form>
    </div>
  );
}