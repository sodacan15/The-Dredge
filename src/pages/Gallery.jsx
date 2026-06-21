import { useState, useMemo, useCallback, useEffect } from "react";

const ITEMS = [
  { filename: "barangay-map",                        wide: true,  alt: "Barangay Map",                    tag: "archival",       caption: "Hand-drawn boundary map of Barangay Victoria Village, Canumay East. The canal lines are still visible along the southern edge." },
  { filename: "barangay-profile",                    wide: false, alt: "Barangay Profile",                tag: "archival",       caption: "Official barangay profile document. Population figures date to the last census before major land reclamation along the estero." },
  { filename: "Baringtonia",                         wide: false, alt: "Baringtonia",                     tag: "flora",          caption: "Baringtonia asiatica — found near the old drainage line. Locals call it putat. It still fruits here despite the concrete embankment." },
  { filename: "binunga",                             wide: false, alt: "Binunga",                         tag: "flora",          caption: "Macaranga tanarius (binunga) — a pioneer species that colonizes disturbed ground. Its presence marks where the old field edge was." },
  { filename: "binunga2014",                         wide: false, alt: "Binunga, 2014",                   tag: "archival",       caption: "The same stand of binunga photographed in 2014. The lot behind it has since been converted to a warehouse site." },
  { filename: "binungapt2",                          wide: false, alt: "Binunga (detail)",                tag: "flora",          caption: "Understorey detail — the broad leaves trap moisture and shade out competing grass. A small ecosystem in a crack in the wall." },
  { filename: "bonifacio-canal",                     wide: true,  alt: "Bonifacio Canal",                 tag: "infrastructure", caption: "The Bonifacio Canal looking east. Concrete-lined since the early 2000s, but water hyacinth still masses along the banks every rainy season." },
  { filename: "canal-plants",                        wide: false, alt: "Canal Plants",                    tag: "flora",          caption: "Aquatic vegetation at the canal margin — water lettuce, hyacinth, and a few sedges. Indicators of slow, nutrient-rich water." },
  { filename: "emptylot",                            wide: false, alt: "Empty Lot",                       tag: "infrastructure", caption: "A vacant lot at the village edge, still seasonally flooded. The soil here is dark and silty — old floodplain memory." },
  { filename: "emptylot2014",                        wide: false, alt: "Empty Lot, 2014",                 tag: "archival",       caption: "Same lot, 2014. The willows along the rear fence are gone now. The standing water then was deeper and stayed longer." },
  { filename: "empyt-lot-to-upper-canumay",          wide: true,  alt: "Empty Lot to Upper Canumay",      tag: "infrastructure", caption: "Panoramic from the vacant lot toward Upper Canumay. The slight depression in the middle ground traces the old creek bed." },
  { filename: "empyt-lot-to-upper-canumay part 2",  wide: false, alt: "To Upper Canumay (cont.)",        tag: "infrastructure", caption: "Continuation of the panoramic. The NLEX embankment cuts across the far distance — the canal was redirected when the highway was built." },
  { filename: "gabi",                                wide: false, alt: "Gabi (Taro)",                     tag: "flora",          caption: "Colocasia esculenta — gabi — growing at the canal edge. Cultivated here for generations; the tubers are still harvested informally." },
  { filename: "mangoxguava",                         wide: false, alt: "Mango × Guava",                   tag: "flora",          caption: "A mango and a guava growing from the same break in the concrete. No one planted them here. They arrived on their own." },
  { filename: "marton-coconuts",                     wide: false, alt: "Marton Coconuts",                  tag: "flora",          caption: "Coconut palms along the Marton road. Old-growth, probably planted before the village was subdivided. The oldest one leans toward the canal." },
  { filename: "marton-estero",                       wide: true,  alt: "Marton Estero",                   tag: "infrastructure", caption: "The Marton estero at low tide. The concrete casing was added in the 1990s. Beneath it, the original earthen channel is still intact." },
  { filename: "nlex",                                wide: false, alt: "NLEX Corridor",                   tag: "infrastructure", caption: "Looking north along the NLEX right-of-way. The service road here runs over what was once a seasonal flood channel draining to the Tullahan." },
  { filename: "nlex-east2west",                      wide: false, alt: "NLEX, East to West",              tag: "infrastructure", caption: "East-to-west view of the NLEX embankment. The raised highway effectively severed the wetland from its upstream drainage catchment." },
  { filename: "nlex-east2westpart2",                 wide: false, alt: "NLEX East to West (cont.)",       tag: "infrastructure", caption: "Continuation. The scrubland on the right occupies the former right-of-way of the old farm road that predated the expressway." },
  { filename: "old-canal",                           wide: false, alt: "Old Canal",                       tag: "infrastructure", caption: "The old irrigation canal — now partially silted. Locals remember it as knee-deep in summer and waist-deep after typhoons." },
  { filename: "old-farm",                            wide: false, alt: "Old Farm",                        tag: "archival",       caption: "Archival photograph of the farm that occupied this land before subdivision. The tree line at the rear still exists in part." },
  { filename: "old-mango-tree",                      wide: false, alt: "Old Mango Tree",                  tag: "flora",          caption: "The old mango at the corner of the lot — too large and too rooted to remove. It has outlasted three different households beneath it." },
  { filename: "toLibis",                             wide: false, alt: "Toward Libis",                    tag: "infrastructure", caption: "The road leading toward Libis, Quezon City. The elevation drops noticeably here — water drains this way during heavy rain." },
  { filename: "vgc",                                 wide: false, alt: "VGC Entrance",                    tag: "infrastructure", caption: "Victoria Village Club entrance. The original gatehouse stood on what was formerly an elevated dike separating two rice fields." },
  { filename: "vgc-canal",                           wide: true,  alt: "VGC Canal",                       tag: "infrastructure", caption: "The canal running along the VGC perimeter. During heavy rain it overflows onto the road — the drainage was designed for a different era." },
  { filename: "vgc-fruit",                           wide: false, alt: "VGC Fruit Tree",                  tag: "flora",          caption: "An unidentified fruiting tree in the VGC interior. Likely planted as an ornamental, it now produces enough that neighbors collect the fruit." },
  { filename: "vgc-fruit-2",                         wide: false, alt: "VGC Fruit (detail)",              tag: "flora",          caption: "Close detail of the fruit cluster. Possibly a species of Ficus — the fig wasps that pollinate it would need their own field log entry." },
];

const FILTERS = [
  { id: "all",            label: "All" },
  { id: "archival",       label: "Maps & Archival" },
  { id: "flora",          label: "Flora" },
  { id: "infrastructure", label: "Waterways & Infrastructure" },
];

const ITEMS_PER_PAGE = 9;
const ZOOM_STEP = 0.25;
const ZOOM_MIN  = 0.5;
const ZOOM_MAX  = 4;

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [zoom, setZoom] = useState(1);

  const filteredItems = useMemo(() => {
    if (activeFilter === "all") return ITEMS;
    return ITEMS.filter(item => item.tag === activeFilter);
  }, [activeFilter]);

  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredItems.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredItems, currentPage]);

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);

  function imgSrc(filename) {
    return `/Assets/${encodeURIComponent(filename)}.jpg`;
  }

  function openLightbox(item) {
    setSelectedItem({ ...item, src: imgSrc(item.filename) });
    setZoom(1);
  }

  function closeLightbox() {
    setSelectedItem(null);
    setZoom(1);
  }

  const zoomIn  = useCallback(() => setZoom(z => Math.min(z + ZOOM_STEP, ZOOM_MAX)), []);
  const zoomOut = useCallback(() => setZoom(z => Math.max(z - ZOOM_STEP, ZOOM_MIN)), []);
  const zoomReset = useCallback(() => setZoom(1), []);

  const handleWheel = useCallback((e) => {
    e.preventDefault();
    if (e.deltaY < 0) zoomIn();
    else zoomOut();
  }, [zoomIn, zoomOut]);

  useEffect(() => {
    if (!selectedItem) return;
    const onKey = (e) => {
      if (e.key === "Escape")   closeLightbox();
      if (e.key === "=")        zoomIn();
      if (e.key === "-")        zoomOut();
      if (e.key === "0")        zoomReset();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedItem, zoomIn, zoomOut, zoomReset]);

  return (
    <div className="page gallery-page">
      <p className="page-eyebrow">Field Photography</p>
      <h1 className="page-title">Gallery</h1>
      <p className="page-subtitle">
        Photos from the field walks, May 2026 — surviving plants, buried creeks,
        factory walls, and the margins where things still grow.
      </p>

      <div className="gallery-filters">
        {FILTERS.map(f => (
          <button
            key={f.id}
            className={`gallery-filter-btn${activeFilter === f.id ? " active" : ""}`}
            onClick={() => { setActiveFilter(f.id); setCurrentPage(1); }}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="gallery-grid-photos">
        {paginatedItems.map((item, i) => (
          <div
            key={i}
            className={`photo-card${item.wide ? " wide" : ""}`}
            onClick={() => openLightbox(item)}
          >
            <div className="photo-frame">
              <img
                src={imgSrc(item.filename)}
                alt={item.alt}
                className="photo-img"
                loading="lazy"
              />
            </div>
            <p className="photo-caption">{item.caption}</p>
            <span className="photo-tag">{item.tag}</span>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="gallery-pagination">
          <button className="page-btn" disabled={currentPage === 1}         onClick={() => setCurrentPage(p => p - 1)}>← prev</button>
          <span className="page-indicator">{currentPage} / {totalPages}</span>
          <button className="page-btn" disabled={currentPage === totalPages} onClick={() => setCurrentPage(p => p + 1)}>next →</button>
        </div>
      )}

      {selectedItem && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-card" onClick={e => e.stopPropagation()}>

            <div className="lightbox-toolbar">
              <span className="lightbox-name">{selectedItem.alt}</span>
              <div className="zoom-controls">
                <button className="zoom-btn" onClick={zoomOut}  disabled={zoom <= ZOOM_MIN} title="Zoom out (−)">−</button>
                <button className="zoom-reset" onClick={zoomReset} title="Reset zoom">{Math.round(zoom * 100)}%</button>
                <button className="zoom-btn" onClick={zoomIn}   disabled={zoom >= ZOOM_MAX} title="Zoom in (+)">+</button>
              </div>
              <button className="lightbox-close" onClick={closeLightbox} title="Close (Esc)">✕</button>
            </div>

            <div className="lightbox-viewport" onWheel={handleWheel}>
              <img
                src={selectedItem.src}
                alt={selectedItem.alt}
                className="lightbox-img"
                style={{ transform: `scale(${zoom})`, transformOrigin: "center center" }}
                draggable={false}
              />
            </div>

            <div className="lightbox-footer">
              <p className="lightbox-caption">{selectedItem.caption}</p>
              <span className="lightbox-hint">scroll or +/− to zoom · esc to close</span>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
