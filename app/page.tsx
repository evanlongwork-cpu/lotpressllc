import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { COVER, SCHWAB, STANDFIRST } from "./copy";

export default function HomePage() {
  return (
    <div className="shell">
      <Header path="/" />
      <main>
        <h1 className="headline">Lotpress</h1>
        <p className="standfirst">{STANDFIRST}</p>
        <p className="lead">{SCHWAB}</p>
        <p className="cover">{COVER}</p>
        <section className="section" aria-labelledby="how">
          <h2 id="how">How it works</h2>
          <ol className="steps">
            <li>
              <span>1</span>
              <p>Holdings in.</p>
            </li>
            <li>
              <span>2</span>
              <p>A signed order file and a one-page record out.</p>
            </li>
            <li>
              <span>3</span>
              <p>The adviser enters the orders at Schwab.</p>
            </li>
          </ol>
        </section>
      </main>
      <Footer />
    </div>
  );
}
