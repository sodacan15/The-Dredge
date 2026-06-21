import PageHeader from "../components/PageHeader";

export default function Home() {
  return (
    <div className="page home-page">
      <PageHeader
        eyebrow="Victoria Village · Canumay East · Valenzuela City"
        title="The"
        titleEm="Dredge"
      />

      <p className="hero-body">
        Digging what's left in the waters. A reconstruction of what was once
        here — the creeks, the marshes, the trees, the fish — and a record
        of what erased them, and what remains despite everything.
      </p>

      <p className="hero-quote">
        "Every rain, it comes back."
      </p>

      <figure className="home-hero-figure">
        <img
          src="/supermarket.jpg"
          alt="NLEX corridor with commercial building — the industrialized landscape that replaced Canumay's wetlands"
          className="home-hero-img"
        />
      </figure>

      <div className="home-intro-cards">
        <div className="intro-card">
          <span className="intro-card-label">Field Notes</span>
          <p className="intro-card-text">Five logs reconstructing the ecological history of Victoria Village — from eleven named creeks to one concrete canal.</p>
        </div>
        <div className="intro-card">
          <span className="intro-card-label">Location</span>
          <p className="intro-card-text">Canumay East, Valenzuela City — a barangay named after a tree that no longer grows there.</p>
        </div>
        <div className="intro-card">
          <span className="intro-card-label">Method</span>
          <p className="intro-card-text">Oral testimony, barangay records, soil maps, creek etymologies, and two decades of living with the floods.</p>
        </div>
      </div>

      <div className="home-annotation">
        * this is a student documentary — not peer-reviewed ecology, but honest fieldwork
      </div>
    </div>
  );
}
