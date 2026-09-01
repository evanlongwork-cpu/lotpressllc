import type { Metadata } from "next";
import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { CONTACT_EMAIL, SITE_TITLE } from "../copy";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: "Contact Lotpress.",
};

export default function ContactPage() {
  return (
    <div className="shell">
      <Header path="/contact" />
      <main>
        <h1 className="headline">Lotpress</h1>
        <p className="standfirst">Name, firm, and email.</p>
        <p className="lead">
          Write to{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
        <ContactForm />
        <p className="note">
          The form opens your mail application. It does not send a message from
          this site.
        </p>
      </main>
      <Footer />
    </div>
  );
}
