import type { Metadata } from "next";
import { ContactForm } from "../components/ContactForm";
import { Desk } from "../components/Desk";
import { CONTACT_EMAIL, SITE_TITLE } from "../copy";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: "Contact Lotpress.",
};

export default function ContactPage() {
  return (
    <Desk path="/contact">
      <h1 className="page-title">Name, firm, and email.</h1>
      <p className="lead">
        Write to{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
      <ContactForm />
      <p className="note">
        The form opens your mail application. It does not send a message from
        this site.
      </p>
    </Desk>
  );
}
