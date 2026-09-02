import type { Metadata } from "next";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { COVER, CUSTODY_FACTS, LEAD, SITE_TITLE, STANDFIRST } from "../copy";

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
        <p className="lead">{LEAD}</p>
        <p className="cover">{COVER}</p>
        <section className="section" aria-labelledby="custody">
          <h2 id="custody">Custody, discretion, and signature</h2>
          <div className="facts">
            {CUSTODY_FACTS.map((fact) => (
              <p key={fact}>{fact}</p>
            ))}
          </div>
        </section>
        <section className="section" aria-labelledby="book">
          <h2 id="book">The book</h2>
          <div className="facts">
            <p>
              When a household is keeping a concentrated name, that position
              stays. Lotpress does not add to it. Remaining cash is used to
              build a sample of US large-cap around the holding, and the
              signed page reports where the account is overweight. Nothing
              on the page claims the account matches a published index.
            </p>
            <p>
              The other case is a household with no such constraint: the
              adviser wants a sampled US large-cap book they will ticket
              themselves, rather than appoint a manager. Either way the
              account remains with the firm.
            </p>
            <p>
              Name count, sector omissions, and whether an existing holding
              sits inside or outside the sample are adviser inputs. Positions
              are sized in whole shares, and residual cash is shown on the
              record. The adviser is the one who enters the orders.
            </p>
            <p>
              Lotpress is a construction tool, not a tax-loss harvesting
              engine, a discretionary separately managed account, a
              robo-adviser, or a broker-dealer.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
