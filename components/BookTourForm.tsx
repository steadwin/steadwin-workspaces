"use client";
import { FormEvent, useState } from "react";

export default function BookTourForm() {
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "");
    const phone = String(form.get("phone") || "");
    const seats = String(form.get("seats") || "1 seat");
    const date = String(form.get("date") || "Flexible");
    const msg = `Hi STEADWIN Workspaces, I want to book a free tour.%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0ASeats: ${encodeURIComponent(seats)}%0APreferred date: ${encodeURIComponent(date)}`;
    window.open(`https://wa.me/919035275367?text=${msg}`, "_blank");
    setSent(true);
  }
  return (
    <form className="lead-form" onSubmit={submit}>
      <div className="form-title">Book your free workspace tour</div>
      <div className="form-grid">
        <input name="name" required placeholder="Your name" />
        <input name="phone" required type="tel" placeholder="Mobile number" />
        <select name="seats" defaultValue="1 seat"><option>1 seat</option><option>2 seats</option><option>3-5 seats</option><option>6-12 seats</option><option>Private team space</option></select>
        <input name="date" type="date" />
      </div>
      <button className="btn btn-primary full-btn" type="submit">Book Free Tour on WhatsApp</button>
      <p className="form-note">No booking fee. Visit the office, compare options and decide.</p>
      {sent && <p className="success">WhatsApp opened with your tour details.</p>}
    </form>
  );
}
