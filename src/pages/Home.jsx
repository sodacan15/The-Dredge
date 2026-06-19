export default function Home() {
  return (
    <div className="page">
      <div className="hero">
        <p className="hero-kicker">Victoria Village · Canumay East · Valenzuela City</p>

        <h1 className="hero-headline">
          The <em>Dredge</em>
        </h1>

        <p className="hero-body">
          Digging what's left in the waters. A reconstruction of what was once
          here — the creeks, the marshes, the trees, the fish — and a record
          of what erased them, and what remains despite everything.
        </p>

        <p className="hero-quote">
          "Every rain, it comes back."
        </p>

        <div className="hero-meta">
          <span>A CS Final Project</span>
          <span>May 2026</span>
          <span>Research Concluded</span>
        </div>
      </div>

      <hr className="divider" />

      <div className="tag-list">
        <span className="tag">Ecology</span>
        <span className="tag">Oral History</span>
        <span className="tag">Canumay East</span>
        <span className="tag">Wetlands</span>
        <span className="tag">Metro Manila</span>
        <span className="tag">Personal Memoir</span>
      </div>

      {/* ── Placeholder: featured excerpt or latest log ── */}
      <div className="placeholder-block" style={{ marginTop: "2rem" }}>
        Featured excerpt / latest log entry — drop content here
      </div>
    </div>
  );
}
