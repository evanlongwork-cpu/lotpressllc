"use client";

import { FormEvent } from "react";
import { CONTACT_EMAIL } from "../copy";

export function ContactForm() {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const firm = String(data.get("firm") || "").trim();
    const email = String(data.get("email") || "").trim();
    const body = encodeURIComponent(
      `Name: ${name}\nFirm: ${firm}\nEmail: ${email}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Lotpress")}&body=${body}`;
  }

  return (
    <form onSubmit={onSubmit}>
      <label>
        Name
        <input name="name" type="text" autoComplete="name" required />
      </label>
      <label>
        Firm
        <input name="firm" type="text" autoComplete="organization" required />
      </label>
      <label>
        Email
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <button type="submit">Open mail</button>
    </form>
  );
}
