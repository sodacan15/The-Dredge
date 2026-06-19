/**
 * Gallery page.
 * Replace each <div className="gallery-cell"> with an <img> tag when
 * you have photos. The "wide" class spans 2 columns.
 *
 * Example with image:
 *   <img src="./photos/creek.jpg" alt="The drainage canal on D. Bonifacio Drive"
 *        className="gallery-cell" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
 */

const ITEMS = [
  { id: 1, wide: false, label: "Photo placeholder" },
  { id: 2, wide: false, label: "Photo placeholder" },
  { id: 3, wide: true,  label: "Photo placeholder — wide" },
  { id: 4, wide: false, label: "Photo placeholder" },
  { id: 5, wide: false, label: "Photo placeholder" },
  { id: 6, wide: false, label: "Photo placeholder" },
  { id: 7, wide: false, label: "Photo placeholder" },
];

export default function Gallery() {
  return (
    <div className="page">
      <p className="page-eyebrow">Field Photography</p>
      <h1 className="page-title">Gallery</h1>
      <p className="page-subtitle">
        Photos from the field walks, May 2026 — surviving plants, buried
        creeks, factory walls, and the margins where things still grow.
      </p>

      <div className="gallery-grid">
        {ITEMS.map((item) => (
          <div
            key={item.id}
            className={`gallery-cell ${item.wide ? "wide" : ""}`}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}
