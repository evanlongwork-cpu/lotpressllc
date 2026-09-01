import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export default function NotFound() {
  return (
    <div className="shell">
      <Header path="" />
      <main>
        <h1 className="headline">Lotpress</h1>
        <p className="standfirst">This page is not here.</p>
      </main>
      <Footer />
    </div>
  );
}
