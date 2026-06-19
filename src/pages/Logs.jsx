import { useState } from "react";
import { RenderedDoc } from "../components/TextParser";

/**
 * Each log entry:
 *   id:      short key
 *   label:   tab label
 *   date:    display date
 *   blocks:  parsed output from parseDredgeText() — leave [] until ready
 */
const LOGS = [
  { id: "log1", label: "Log 1", date: "— —", blocks: [] },
  { id: "log2", label: "Log 2", date: "— —", blocks: [] },
  { id: "log3", label: "Log 3", date: "— —", blocks: [] },
  { id: "log4", label: "Log 4", date: "— —", blocks: [] },
  { id: "log5", label: "Log ???", date: "— —", blocks: [] },
];

export default function Logs() {
  const [active, setActive] = useState(LOGS[0].id);
  const current = LOGS.find((l) => l.id === active);

  return (
    <div className="page">
      <p className="page-eyebrow">Field Notes</p>
      <h1 className="page-title">Logs</h1>
      <p className="page-subtitle">
        Dated entries from the field — observations, conversations, discoveries.
      </p>

      <div className="log-tabs">
        {LOGS.map((log) => (
          <button
            key={log.id}
            className={`log-tab ${active === log.id ? "active" : ""}`}
            onClick={() => setActive(log.id)}
          >
            {log.label}
          </button>
        ))}
      </div>

      {current && (
        <>
          <p className="page-eyebrow" style={{ marginBottom: "1.5rem" }}>
            {current.date}
          </p>
          <RenderedDoc blocks={current.blocks} />
        </>
      )}
    </div>
  );
}
