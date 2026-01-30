import Navigation from "@/components/Navigation";

export default function AboutPage() {
  return (
    <>
      <Navigation active="about" />

      <main className="container">
        <section className="hero">
          <h1>About this project</h1>
          <p className="muted">
            This Next.js application is built for WDD 430. Development is guided
            by user stories and tracked using a GitHub Project Board.
          </p>
        </section>

        <section className="section">
          <h2>Goals</h2>
          <div className="grid">
            <article className="card">
              <h3>Component-based design</h3>
              <p className="muted">
                Build reusable UI components and keep pages clean.
              </p>
            </article>
            <article className="card">
              <h3>Steady iteration</h3>
              <p className="muted">
                Deliver incremental features each week with clear tasks.
              </p>
            </article>
            <article className="card">
              <h3>Simple styling</h3>
              <p className="muted">
                Maintain readable, responsive layouts without Tailwind.
              </p>
            </article>
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
