import type { Metadata } from "next";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { COVER, SCHWAB, SITE_TITLE, STANDFIRST } from "../copy";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: STANDFIRST,
};

export default function RecordPage() {
  return (
    <div className="shell record">
      <Header path="/record" />
      <main>
        <h1 className="headline">Lotpress</h1>
        <p className="standfirst">{STANDFIRST}</p>
        <p className="lead">{SCHWAB}</p>
        <p className="cover">{COVER}</p>
        <section className="section" aria-labelledby="custody">
          <h2 id="custody">Custody, discretion, and signature</h2>
          <div className="facts">
            <p>
              The adviser remains the adviser of record. Lotpress does not
              exercise investment discretion.
            </p>
            <p>
              Client assets remain at Charles Schwab. Lotpress does not hold
              client funds or securities.
            </p>
            <p>
              Lotpress does not place orders. It produces an order file and a
              one-page record. The adviser reviews, signs, and enters the
              orders at Schwab.
            </p>
          </div>
        </section>
        <section className="section" aria-labelledby="book">
          <h2 id="book">The book</h2>
          <div className="facts">
            <p>
              Built for advisers who will not give the account to an outside
              manager.
            </p>
            <p>
              The concentrated name is kept. The file does not buy more of that
              name. The rest of the book is a sample of US large-cap around it.
              The signed page shows where the account is overweight. It does
              not claim the account matches a published index.
            </p>
            <p>
              The adviser chooses how many names, which sectors to leave out,
              and which holdings sit inside or outside the sample.
            </p>
            <p>
              This page is construction software. It is not tax-loss
              harvesting. It is not a discretionary separately managed
              account. It is not a robo. It is not a broker-dealer.
            </p>
            <p>
              Orders are whole shares. Residual cash is shown. The adviser is
              the person who types at Schwab.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
