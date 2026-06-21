import PageHeader from "../components/PageHeader";

export default function Home() {
  return (
    <div className="page">
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
          src="/nlex_bridge.jpg"
          alt="NLEX overpass at Valenzuela, where the last Kanumai tree once stood"
          className="home-hero-img"
        />
        <figcaption className="home-hero-caption">
          The NLEX overpass at Canumay — built over the spot where the last Kanumai tree once stood.
        </figcaption>
      </figure>
    </div>
  );
}
