const highlights = [
  "Single-page React app scaffolded for GitHub Pages",
  "Vite-powered development and production builds",
  "One-command deploy flow with the gh-pages package",
];

export default function App() {
  return (
    <main className="page-shell">
      <section className="hero">
        <p className="eyebrow">React + GitHub Pages</p>
        <h1>Sugar Gliders</h1>
        <p className="lede">
          A clean single-page starter that is ready for you to shape into the
          site you actually want to launch.
        </p>
        <div className="actions">
          <a className="button button-primary" href="#next-steps">
            View setup steps
          </a>
          <a className="button button-secondary" href="https://pages.github.com/">
            GitHub Pages docs
          </a>
        </div>
      </section>

      <section className="card-grid" aria-label="Starter highlights">
        {highlights.map((item) => (
          <article className="card" key={item}>
            <span className="card-accent" />
            <p>{item}</p>
          </article>
        ))}
      </section>

      <section className="steps" id="next-steps">
        <h2>Next steps</h2>
        <ol>
          <li>Customize the content in <code>src/App.jsx</code>.</li>
          <li>Run <code>npm run dev</code> to work locally.</li>
          <li>Run <code>npm run deploy</code> after you create the GitHub repo.</li>
        </ol>
      </section>
    </main>
  );
}
