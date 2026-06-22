export default function Home() {
  return (
    <div className="page home-page">

      {/* ─── Two-column masthead ─── */}
      <div className="home-masthead">

        {/* Left: text + stats + quote */}
        <div className="home-text-col">
          <p className="page-eyebrow">Victoria Village · Canumay East · Valenzuela City</p>
          <h1 className="page-title">The <em>Dredge</em></h1>
          <p className="home-tagline">
            Digging what's left in the waters. A reconstruction of what was once
            here: the creeks, the marshes, the trees, the fish — and a record of
            what erased them, and what remains despite everything.
          </p>

          <div className="home-sticker-cluster">
            <div className="home-sticker" style={{ "--r": "-3deg" }}>
              11 creeks.
              <br />
              <strong>0</strong> remaining.
            </div>
            <div className="home-sticker home-sticker-green" style={{ "--r": "1.8deg" }}>
              1 tree that named
              <br />a barangay.
              <br />
              Also gone.
            </div>
            <div className="home-sticker home-sticker-blue" style={{ "--r": "-1.2deg" }}>
              A CS student.
              <br />A flooded sala.
              <br />A notebook.
            </div>
            <a
              href="https://www.youtube.com/watch?v=lm3t3myPspk&list=RDgNoW8w5nmwQ&index=10"
              target="_blank"
              rel="noopener noreferrer"
              className="home-field-stamp home-field-stamp-link"
              title="Watch on YouTube"
            >
              <span>
                CANUMAY
                <br />
                EAST
                <br />·<br />
                APR–JUN
                <br />
                2026
              </span>
            </a>
          </div>

          <blockquote className="home-grand-quote">
            "Every rain, it comes back."
          </blockquote>
        </div>

        {/* Right: photo cluster */}
        <div className="home-photo-col">
          <figure className="home-hero-figure">
            <img
              src="/supermarket.jpg"
              alt="NLEX corridor at Canumay East: the industrialized landscape that replaced the wetland"
              className="home-hero-img"
            />
          </figure>
          <div className="home-photo-row">
            <div className="home-polaroid-small">
              <img
                src="/canumai_reimagined.png"
                alt="The Kanumai tree — author's rendition"
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
            <figure className="home-photo-third">
              <img
                src="/nlex-dusk.jpg"
                alt="NLEX corridor at dusk"
                className="home-photo-third-img"
              />
            </figure>
          </div>
          <span className="home-annotate">↑ the highway replaced all of this.</span>
        </div>
      </div>

      {/* ─── Closing note ─── */}
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
