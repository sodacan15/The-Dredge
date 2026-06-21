/**
 * parseDredgeText(raw)
 *
 * Parses the custom .txt format into an array of block objects.
 *
 * Supported tags:
 *   <title>          — section title (text follows on same line)
 *   <seg1>[text]     — body paragraph
 *   <subtitle>[text] — small all-caps label
 *   <br>             — vertical spacer
 *   <caption>[text]  — aside / caption text
 *   <quote>[text]    — pull quote
 *
 * Returns: Array<{ type: string, text?: string }>
 */
export function parseDredgeText(raw) {
  const blocks = [];
  const lines = raw.split("\n");

  for (const raw_line of lines) {
    const line = raw_line.trim();
    if (!line) continue;

    // <br>
    if (/^<br\s*\/?>$/i.test(line)) {
      blocks.push({ type: "br" });
      continue;
    }

    // <title>text
    const titleMatch = line.match(/^<title>(.*)/i);
    if (titleMatch) {
      blocks.push({ type: "title", text: titleMatch[1].trim() });
      continue;
    }

    // <seg1>[text]  or  <seg1>text
    const segMatch = line.match(/^<seg\d+>(?:\[(.+?)\]|(.+))/i);
    if (segMatch) {
      blocks.push({ type: "seg", text: (segMatch[1] || segMatch[2]).trim() });
      continue;
    }

    // <subtitle>[text]  or  <subtitle>text
    const subMatch = line.match(/^<subtitle>(?:\[(.+?)\]|(.+))/i);
    if (subMatch) {
      blocks.push({ type: "subtitle", text: (subMatch[1] || subMatch[2]).trim() });
      continue;
    }

    // <caption>[text]
    const capMatch = line.match(/^<caption>(?:\[(.+?)\]|(.+))/i);
    if (capMatch) {
      blocks.push({ type: "caption", text: (capMatch[1] || capMatch[2]).trim() });
      continue;
    }

    // <quote>[text]
    const quoteMatch = line.match(/^<quote>(?:\[(.+?)\]|(.+))/i);
    if (quoteMatch) {
      blocks.push({ type: "quote", text: (quoteMatch[1] || quoteMatch[2]).trim() });
      continue;
    }

    // Untagged lines — treat as body text
    blocks.push({ type: "seg", text: line });
  }

  return blocks;
}

/**
 * RenderedDoc component
 * Renders a parsed block array into styled JSX.
 */
export function RenderedDoc({ blocks }) {
  if (!blocks || blocks.length === 0) {
    return (
      <div className="placeholder-block">
        No content loaded yet — paste your formatted .txt here
      </div>
    );
  }

  return (
    <div className="rendered-doc">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "title":
            return <h2 key={i} className="doc-title">{block.text}</h2>;
          case "seg":
            return <p key={i} className="doc-seg">{block.text}</p>;
          case "subtitle":
            return <p key={i} className="doc-subtitle">{block.text}</p>;
          case "br":
            return <span key={i} className="doc-br" />;
          case "caption":
            return <p key={i} className="doc-caption">{block.text}</p>;
          case "quote":
            return (
              <blockquote key={i} className="pullquote">
                <p>{block.text}</p>
              </blockquote>
            );
          case "image":
            return (
              <figure key={i} className="doc-figure">
                <img src={block.src} alt={block.caption || ""} className="doc-img" />
                {block.caption && <figcaption className="doc-figcaption">{block.caption}</figcaption>}
              </figure>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
