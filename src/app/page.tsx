import Navigation from "../components/Navigation";
import Card from "../components/Card";

export default function Home() {
  return (
    <>
      <Navigation active="home" />

      <main className="container">
        <section className="hero" id="get-started">
          <h1>Build a clean, component-based Next.js app</h1>
          <p className="muted">
            This project is organized with user stories, tasks, and reusable
            components to support steady weekly progress.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#features">
              View Features
            </a>
            <a className="btn btn-secondary" href="/about">
              Learn More
            </a>
          </div>
        </section>

        <section className="section" id="features">
          <h2>Core Features (in progress)</h2>
          <p className="muted">
            These items are tracked in the GitHub Project Board and built
            incrementally.
          </p>

          <div className="grid">
            <Card
              title="Reusable Components"
              description="Navigation, cards, layout, and shared UI patterns."
            />

            <Card
              title="Pages"
              description="Home and About pages built with the App Router structure."
            />

            <Card
              title="Responsive Layout"
              description="Baseline responsiveness and readable spacing for mobile/desktop."
            />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span className="muted">© {new Date().getFullYear()} WDD 430</span>
          <span className="muted">Next.js • TypeScript • ESLint</span>
        </div>
      </footer>
    </>
  );
}
