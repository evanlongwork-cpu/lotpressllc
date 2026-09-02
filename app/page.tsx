import { Desk } from "./components/Desk";
import {
  COVER,
  CUSTODY_FACTS,
  HOW_IT_WORKS_STEPS,
  LEAD,
  STANDFIRST,
} from "./copy";

export default function HomePage() {
  return (
    <Desk path="/">
      <p className="cover">{COVER}</p>
      <p className="standfirst">{STANDFIRST}</p>
      <p className="lead">{LEAD}</p>
      <section className="section" aria-labelledby="how">
        <h2 id="how">How it works</h2>
        <ol className="procedure">
          {HOW_IT_WORKS_STEPS.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>
      <section className="section" aria-labelledby="custody">
        <h2 id="custody">Custody, discretion, and signature</h2>
        <div className="facts">
          {CUSTODY_FACTS.map((fact) => (
            <p key={fact}>{fact}</p>
          ))}
        </div>
      </section>
    </Desk>
  );
}
