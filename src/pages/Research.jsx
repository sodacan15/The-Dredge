import { useState } from "react";
import { RenderedDoc } from "../components/TextParser";

/**
 * Each section:
 *   id:     anchor key
 *   label:  index label
 *   blocks: parsed output from parseDredgeText()
 */
const SECTIONS = [
  { id: "s1", label: "The Land Before the City",    blocks: [] },
  { id: "s2", label: "The Tree That Named Everything", blocks: [] },
  { id: "s3", label: "Eleven Creeks, One Canal",    blocks: [] },
  { id: "s4", label: "What We Remember",            blocks: [] },
  { id: "s5", label: "What Survived",               blocks: [] },
  { id: "s6", label: "What Was Here Before",        blocks: [] },
  { id: "s7", label: "The Current State",           blocks: [] },
];

export default function Research() {
  const [active, setActive] = useState(SECTIONS[0].id);
  const current = SECTIONS.find((s) => s.id === active);

  return (
    <div className="page" style={{ maxWidth: "900px" }}>
      <p className="page-eyebrow">Ecological Record</p>
      <h1 className="page-title">Research</h1>
      <p className="page-subtitle">
        Seven sections reconstructing the ecosystem of Canumay East — from
        barangay records, oral testimony, and botanical field walks.
      </p>

      <hr className="divider" />

      <div className="research-grid">
        {/* Index */}
        <aside className="research-index">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              className={`research-index-item ${active === s.id ? "active" : ""}`}
              onClick={() => setActive(s.id)}
            >
              {s.label}
            </button>
          ))}
        </aside>

        {/* Content */}
        <div>
          {current && <RenderedDoc blocks={current.blocks} />}
        </div>
      </div>
    </div>
  );
}
