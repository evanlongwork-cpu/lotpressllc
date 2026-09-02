import { Footer } from "./Footer";
import { Header } from "./Header";

export function Desk({
  path,
  children,
}: {
  path: string;
  children: React.ReactNode;
}) {
  return (
    <div className="desk">
      <Header path={path} />
      <div className="desk-body">
        <article className="sheet">
          <main>{children}</main>
        </article>
      </div>
      <Footer />
    </div>
  );
}
