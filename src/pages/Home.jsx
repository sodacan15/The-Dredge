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
        here: the creeks, the marshes, the trees, the fish: and a record of what
        erased them, and what remains despite everything.
      </p>

      <blockquote className="home-grand-quote">
        "Every rain, it comes back."
      </blockquote>

      <div className="home-sticker-cluster">
        <div className="home-sticker" style={{ "--r": "-3deg" }}>
          11 creeks.
          <br />
          <strong>0</strong> remaining.
        </div>
        <div
          className="home-sticker home-sticker-green"
          style={{ "--r": "1.8deg" }}
        >
          1 tree that named
          <br />a barangay.
          <br />
          Also gone.
        </div>
        <div
          className="home-sticker home-sticker-blue"
          style={{ "--r": "-1.2deg" }}
        >
          A CS student.
          <br />A flooded sala.
          <br />A notebook.
        </div>
        <div className="home-field-stamp">
          <span>
            CANUMAY
            <br />
            EAST
            <br />·<br />
            MAY
            <br />
            2026
          </span>
        </div>
      </div>

      <div className="home-double-image">
        <figure className="home-hero-figure" style={{ margin: 0 }}>
          <img
            src="/supermarket.jpg"
            alt="NLEX corridor with commercial building: the industrialized landscape that replaced Canumay's wetlands"
            className="home-hero-img"
          />
        </figure>
        <div className="home-polaroid-small">
          <img
            src="/canumai_reimagined.png"
            alt="The Kanumai tree: author's rendition"
            className="home-polaroid-img"
          />
          <p className="home-polaroid-caption">
            the kanumai
            <br />
            as it might
            <br />
            have looked
          </p>
        </div>
      </div>

      <span className="home-annotate">
        ↑ the highway replaced this. both of these, actually.
      </span>

      <div className="home-map-section">
        <p className="home-map-label">
          Victoria Village · Canumay East, Valenzuela City
        </p>
        <div className="home-map-frame">
          <iframe
            title="Victoria Village, Canumay East location map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=120.97217559814455%2C14.707398960868233%2C121.00135803222658%2C14.727986563571733&amp"
            className="home-map-embed"
            loading="lazy"
            allowFullScreen
          />
        </div>
        <a
          href="https://www.openstreetmap.org/?mlat=14.7050&mlon=120.9620#map=15/14.7050/120.9620"
          target="_blank"
          rel="noopener noreferrer"
          className="home-map-link"
        >
          View on OpenStreetMap →
        </a>
      </div>

      <div className="home-closing-note">
        <p className="home-closing-body">
          This started as a CS final project. It became something harder to
          categorize. A reconstruction of a wetland nobody thought to write down
          while it was still there, built from creek names, soil data, and my
          grandfather's memory of the fish that used to live under our house.
        </p>
        <p className="home-closing-body">
          The eleven creeks are in Log 2. The people who remember them are in
          Log 3. The reason we keep flooding is in Log 4. Everything is still
          connected, underground, the way water always is.
        </p>
        <div className="home-closing-sticker">
          every name was
          <br />
          someone's evidence
        </div>
      </div>

      <div className="home-annotation">
        * this is a student documentary: not peer-reviewed ecology, but honest
        fieldwork
      </div>
    </div>
  );
}
