import { useState, useEffect, useRef } from "react";

export function parseDredgeText(raw) {
  const blocks = [];
  const lines = raw.split("\n");
  for (const raw_line of lines) {
    const line = raw_line.trim();
    if (!line) continue;
    if (/^<br\s*\/?>$/i.test(line)) { blocks.push({ type: "br" }); continue; }
    const titleMatch = line.match(/^<title>(.*)/i);
    if (titleMatch) { blocks.push({ type: "title", text: titleMatch[1].trim() }); continue; }
    const segMatch = line.match(/^<seg\d+>(?:\[(.+?)\]|(.+))/i);
    if (segMatch) { blocks.push({ type: "seg", text: (segMatch[1] || segMatch[2]).trim() }); continue; }
    const subMatch = line.match(/^<subtitle>(?:\[(.+?)\]|(.+))/i);
    if (subMatch) { blocks.push({ type: "subtitle", text: (subMatch[1] || subMatch[2]).trim() }); continue; }
    const capMatch = line.match(/^<caption>(?:\[(.+?)\]|(.+))/i);
    if (capMatch) { blocks.push({ type: "caption", text: (capMatch[1] || capMatch[2]).trim() }); continue; }
    const quoteMatch = line.match(/^<quote>(?:\[(.+?)\]|(.+))/i);
    if (quoteMatch) { blocks.push({ type: "quote", text: (quoteMatch[1] || quoteMatch[2]).trim() }); continue; }
    blocks.push({ type: "seg", text: line });
  }
  return blocks;
}

/* ── Scroll-reveal wrapper ── */
function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(14px)",
        transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ── Sapang Glossary card ── */
const SAPANG = [
  { name: "Sapang Bulok",           meaning: "Rotten Creek",                note: "The smell of healthy marsh chemistry — decay that sustains life." },
  { name: "Sapang Pangitlogan-Bakaw", meaning: "Mangrove Nesting Creek",    note: "Mangroves with nesting birds once lined this bank. Pangitlog = to lay eggs." },
  { name: "Sapang Halang Sa Araw",  meaning: "Creek Blocked from the Sun",  note: "Old-growth canopy so thick that sunlight never reached the water." },
  { name: "Sapang Bangka-bangka",   meaning: "Boat Creek",                  note: "Wide and deep enough for actual boat travel — a navigable waterway." },
  { name: "Sapang Binawan",         meaning: "Fish Trap Creek",             note: "Where people set traps; the name implies a consistent, reliable catch." },
  { name: "Sapang Kay Calumpit",    meaning: "Creek toward Calumpit",       note: "A directional name — this creek pointed the way to Calumpit, Bulacan." },
  { name: "Sapang Pangit",          meaning: "Ugly Creek",                  note: "Named for appearance, not quality — likely a slow, murky marsh arm." },
  { name: "Sapang Saga",            meaning: "Saga Creek",                  note: "Named after the saga plant (Adenanthera) — a marker tree at the bank." },
  { name: "Sapang Patulo",          meaning: "Dripping Creek",              note: "A seepage creek — water that bled from the hillside into the marsh." },
  { name: "Sapang Kulong-kulong",   meaning: "Enclosed Creek",              note: "Surrounded on most sides — a sheltered inlet or backwater pool." },
  { name: "Sapang Bilaran",         meaning: "Drying Ground Creek",         note: "Where fish and crops were laid to dry in the sun near the water." },
];

function SapangGlossary() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  return (
    <div className={`sapang-card${open ? " sapang-open" : ""}`}>
      <button className="sapang-toggle" onClick={() => setOpen(o => !o)}>
        <span className="sapang-toggle-icon">{open ? "▲" : "▼"}</span>
        <span className="sapang-toggle-label">
          {open ? "fold up" : "The Eleven Sapang — click to unfold"}
        </span>
        <span className="sapang-toggle-sub">field insert · creek name glossary</span>
      </button>

      {open && (
        <div className="sapang-body">
          <p className="sapang-intro">
            These eleven creek names are the most complete ecological record that survives of old Canumay.
            Each name is a description. Read together, they're a field report written in Tagalog.
          </p>
          <div className="sapang-list">
            {SAPANG.map((s, i) => (
              <div
                key={i}
                className={`sapang-item${hovered === i ? " sapang-item-hovered" : ""}`}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <span className="sapang-num">{String(i + 1).padStart(2, "0")}</span>
                <div className="sapang-names">
                  <span className="sapang-tagalog">{s.name}</span>
                  <span className="sapang-english">"{s.meaning}"</span>
                </div>
                {hovered === i && (
                  <div className="sapang-note">{s.note}</div>
                )}
              </div>
            ))}
          </div>
          <p className="sapang-footer">All eleven are gone. None are officially mapped today.</p>
        </div>
      )}
    </div>
  );
}

/* ── Margin note ── */
function MarginNote({ text, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="margin-note-wrap">
      <button
        className={`margin-note-trigger${open ? " open" : ""}`}
        onClick={() => setOpen(o => !o)}
        title="Field note"
      >
        ✎
      </button>
      {open && (
        <div className="margin-note-popup">
          <span className="margin-note-text">{text}</span>
          <button className="margin-note-close" onClick={() => setOpen(false)}>×</button>
        </div>
      )}
    </div>
  );
}

/* ── Reading progress bar (for the log doc) ── */
function ReadingProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setPct(total > 0 ? Math.min(100, (scrolled / total) * 100) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="reading-progress-bar" style={{ width: `${pct}%` }} />
  );
}

/* ── Inline citation parser ── */
function parseWithCitations(text) {
  const parts = text.split(/(\[\d+\])/g);
  if (parts.length === 1) return text;
  return parts.map((part, i) => {
    if (/^\[\d+\]$/.test(part)) {
      return <sup key={i} className="doc-cite">{part}</sup>;
    }
    return part;
  });
}

/* ── Main RenderedDoc ── */
export function RenderedDoc({ blocks }) {
  if (!blocks || blocks.length === 0) {
    return <div className="placeholder-block">No content loaded yet</div>;
  }

  return (
    <div className="rendered-doc">
      <ReadingProgress />
      {blocks.map((block, i) => {
        const delay = (i % 8) * 35;
        switch (block.type) {
          case "title":
            return (
              <Reveal key={i} delay={0}>
                <h2 className="doc-title">{block.text}</h2>
              </Reveal>
            );
          case "seg":
            return (
              <Reveal key={i} delay={delay}>
                <div className="doc-seg-wrap">
                  {block.marginNote && <MarginNote text={block.marginNote} />}
                  <p className="doc-seg">{parseWithCitations(block.text)}</p>
                </div>
              </Reveal>
            );
          case "subtitle":
            return (
              <Reveal key={i} delay={0}>
                <p className="doc-subtitle">{block.text}</p>
              </Reveal>
            );
          case "br":
            return <span key={i} className="doc-br" />;
          case "caption":
            return (
              <Reveal key={i} delay={delay}>
                <p className="doc-caption">{block.text}</p>
              </Reveal>
            );
          case "quote":
            return (
              <Reveal key={i} delay={0}>
                <blockquote className="pullquote">
                  <p>{block.text}</p>
                </blockquote>
              </Reveal>
            );
          case "image": {
            const imgClass = [
              "doc-img",
              block.mono ? "doc-img--mono" : "",
              block.contain ? "doc-img--contain" : "",
            ].filter(Boolean).join(" ");
            return (
              <Reveal key={i} delay={delay}>
                <figure className="doc-figure">
                  <img src={block.src} alt={block.caption || ""} className={imgClass} />
                  {block.caption && (
                    <figcaption className="doc-figcaption">{block.caption}</figcaption>
                  )}
                </figure>
              </Reveal>
            );
          }
          case "sapang-glossary":
            return (
              <Reveal key={i} delay={0}>
                <SapangGlossary />
              </Reveal>
            );
          case "timeline":
            return (
              <Reveal key={i} delay={0}>
                <div className="doc-timeline">
                  <p className="doc-timeline-label">Administrative &amp; Ecological Timeline</p>
                  <div className="doc-timeline-track">
                    {(block.events || []).map(({ year, text }) => (
                      <div key={year} className="doc-timeline-item">
                        <span className="doc-timeline-year">{year}</span>
                        <span className="doc-timeline-dot" />
                        <p className="doc-timeline-text">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          case "citeblock":
            return (
              <div key={i} className="doc-citeblock">
                <p className="doc-citeblock-label">— sources cited in this log —</p>
                <ol className="doc-citeblock-list">
                  {(block.citations || []).map((c, ci) => (
                    <li key={ci} className="doc-citeblock-item">
                      {c.url ? (
                        <a href={c.url} target="_blank" rel="noopener noreferrer" className="doc-cite-link">{c.title}</a>
                      ) : (
                        <span>{c.title}</span>
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            );
          case "margin-note":
            return null;
          default:
            return null;
        }
      })}
    </div>
  );
}
