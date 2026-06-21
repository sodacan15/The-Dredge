import { useState, useMemo, useCallback, useEffect, useRef } from "react";
import PageHeader from "../components/PageHeader";

const ITEMS = [
  // ── Root public images ──
  { src: "/supermarket.jpg",        wide: true,  alt: "NLEX Commercial Corridor",          tag: "infrastructure", caption: "The NLEX corridor at Canumay East — commercial buildings now occupy the landscape where the wetland and its creeks once extended." },
  { src: "/aratilis.jpg",           wide: false, alt: "Aratilis on D. Bonifacio",           tag: "flora",          caption: "Aratilis growing wild over a concrete wall on D. Bonifacio Drive — nobody planted it. It colonized the moist, disturbed canal-edge soil on its own." },
  { src: "/kanumai.jpg",            wide: false, alt: "Kanumai / Diospyros canomoi",        tag: "flora",          caption: "Botanical illustration of Diospyros canomoi (Kanumai) — the tree the barangay is named after. Its bark and fruit were used as fish poison. Illustration: Stuart Xchange." },
  { src: "/canumai_reimagined.png", wide: false, alt: "Kanumai — Author's Rendition",       tag: "flora",          caption: "The Kanumai as it might have stood — a theoretical rendition by the author. No photograph of the original exists; this is reconstruction from description alone." },
  { src: "/kangkong.jpg",           wide: false, alt: "Kangkong (Water Spinach)",           tag: "flora",          caption: "Ipomoea aquatica (kangkong) — once covered the low marsh zones of Victoria Village before the land was filled with volcanic adobe. Photo: Wikimedia Commons." },
  { src: "/dalag.jpg",              wide: false, alt: "Dalag (Mudfish)",                    tag: "fauna",          caption: "Channa striata (dalag/mudfish) — confirmed by the author's grandfather as living where our house now stands. Its presence alone tells you the ecosystem was functioning. Photo: Wikimedia Commons." },
  { src: "/barringtonia_fruit.jpg", wide: false, alt: "Barringtonia / Putat",               tag: "flora",          caption: "Barringtonia asiatica (Putat) — one surviving specimen found near the Bonifacio canal. A remnant of the fish-poison trees fishing communities once relied on. Photo: Wikimedia Commons." },
  { src: "/nlex_bridge.jpg",        wide: true,  alt: "NLEX Overpass, Canumay",             tag: "infrastructure", caption: "The NLEX overpass at Canumay — built over the exact spot where the last Kanumai tree stood. Google Street View, Apr 2025." },
  { src: "/nlex-bridge-highway.jpg",wide: false, alt: "NLEX from Inside the Highway",       tag: "infrastructure", caption: "From inside the NLEX looking toward Canumay — the overpass where the barangay's namesake tree once stood is now just a lane marker. Google Street View, Apr 2025." },
  { src: "/nlex_east2west.jpg",     wide: false, alt: "NLEX East to West",                  tag: "infrastructure", caption: "Looking east to west along the NLEX — the physical divide that split old Canumay in 1966. This highway corridor flooded for five hours during July 2025." },
  { src: "/nlex-dusk.jpg",          wide: true,  alt: "NLEX at Dusk",                       tag: "infrastructure", caption: "The NLEX corridor at dusk — motorbikes in rain gear, storm clouds gathering. The 'Maganda sa Valenzuela' sign visible through the overcast." },
  { src: "/canumay-east-street.png",wide: false, alt: "Canumay East Street Corner",         tag: "infrastructure", caption: "A street corner in Canumay East — pioneer trees growing over a perforated block wall beside an 'I ❤️ Canumay East' marker. Persistent green through whatever gap the concrete left open." },
  { src: "/im_wet.jpg",             wide: false, alt: "Knee-deep, 2025 Floods",             tag: "personal",       caption: "Knee-deep in the sala during the 2025 floods. We were more ready the second time around. Water finds the same path every rain — it knows where it came from." },
  { src: "/im_wet2.jpg",            wide: false, alt: "Flood — Before 2025",                tag: "personal",       caption: "Not the 2025 flood — one before it. The expression says everything about how this becomes ordinary. You clean the same thing twice and stop expecting it to stop." },
  // ── Assets subfolder ──
  { src: "/Assets/barangay-map.jpg",                       wide: true,  alt: "Barangay Road Map",                 tag: "archival",       caption: "Road Map of Barangay Canumay East — the official map showing the NLEX diagonal cut, named roads, and waterway lines representing what were once eleven living creeks. Not to scale." },
  { src: "/Assets/barangay-profile.jpg",                   wide: false, alt: "Barangay Profile",                  tag: "archival",       caption: "Barangay Profile Section 2.1 — the official history document listing all 7 sitios and 11 sapang. The Kanumai tree is named explicitly as the barangay's landmark." },
  { src: "/Assets/Baringtonia.jpg",                        wide: false, alt: "Baringtonia (field photo)",          tag: "flora",          caption: "Baringtonia asiatica — found near the old drainage line. Locals call it putat. It still fruits here despite the concrete embankment." },
  { src: "/Assets/binunga.jpg",                            wide: false, alt: "Binunga",                           tag: "flora",          caption: "Macaranga tanarius (binunga) — a pioneer species that colonizes disturbed ground. Its presence marks where the old field edge was." },
  { src: "/Assets/binunga2014.jpg",                        wide: false, alt: "Binunga, Feb 2014",                 tag: "archival",       caption: "A binunga tree photographed in February 2014 via Google Street View. Pioneer trees were already colonizing disturbed lots even then." },
  { src: "/Assets/binungapt2.jpg",                        wide: false, alt: "Binunga (detail)",                  tag: "flora",          caption: "Understorey detail — the broad leaves trap moisture and shade out competing grass. A small ecosystem in a crack in the wall." },
  { src: "/Assets/bonifacio-canal.jpg",                    wide: true,  alt: "Bonifacio Canal",                   tag: "infrastructure", caption: "The drainage canal along D. Bonifacio Drive — concrete infrastructure where a living creek ecosystem once ran. Almost nothing lives in it." },
  { src: "/Assets/canal-plants.jpg",                       wide: false, alt: "Canal Edge Plants",                 tag: "flora",          caption: "Pioneer vegetation at the canal margin — colonising the disturbed, moist soil where creeks used to flow. Indicators of slow, nutrient-rich water." },
  { src: "/Assets/emptylot.jpg",                           wide: false, alt: "Empty Lot",                         tag: "infrastructure", caption: "A vacant lot at the village edge, still seasonally flooded. The soil here is dark and silty — old floodplain memory." },
  { src: "/Assets/emptylot2014.jpg",                       wide: false, alt: "Empty Lot, Feb 2014",               tag: "archival",       caption: "Same lot, February 2014. Pioneer trees reclaiming disturbed ground before it was built over. The adobe rubble is typical of infill construction in the area." },
  { src: "/Assets/empyt-lot-to-upper-canumay.jpg",         wide: true,  alt: "Toward Upper Canumay",              tag: "infrastructure", caption: "Looking from an empty lot toward Upper Canumay. The slight depression in the middle ground traces the old creek bed." },
  { src: "/Assets/empyt-lot-to-upper-canumay%20part%202.jpg",  wide: false, alt: "Toward Upper Canumay (cont.)",      tag: "infrastructure", caption: "Continuation. The NLEX embankment cuts across the far distance — the canal was redirected when the highway was built." },
  { src: "/Assets/gabi.jpg",                               wide: false, alt: "Gabi (Wetland Taro)",               tag: "flora",          caption: "Colocasia esculenta — gabi — confirmed by the author's grandfather as growing where our house now stands. Still found in neighborhood gardens." },
  { src: "/Assets/mangoxguava.jpg",                        wide: false, alt: "Mango and Guava",                   tag: "flora",          caption: "A mango tree growing alongside a guava in Canumay East. Mango trees live 100–300 years — these were almost certainly planted by someone's great-grandparents." },
  { src: "/Assets/marton-coconuts.jpg",                    wide: false, alt: "Marton Coconuts",                   tag: "flora",          caption: "Coconut palms along the Marton road. Old-growth, probably planted before the village was subdivided — their root systems still reach the old water table." },
  { src: "/Assets/marton-estero.jpg",                      wide: true,  alt: "Marton Estero",                     tag: "infrastructure", caption: "The estero near Marton Road — one of the last visible waterways in Canumay East, now functioning as a flood drain rather than a living creek." },
  { src: "/Assets/nlex.jpg",                               wide: false, alt: "NLEX Corridor",                     tag: "infrastructure", caption: "Looking north along the NLEX right-of-way. The service road here runs over what was once a seasonal flood channel draining to the Tullahan." },
  { src: "/Assets/nlex-east2west.jpg",                     wide: false, alt: "NLEX, East to West (Assets)",       tag: "infrastructure", caption: "East-to-west view of the NLEX embankment — the raised highway effectively severed the wetland from its upstream drainage catchment in 1966." },
  { src: "/Assets/nlex-east2westpart2.jpg",                wide: false, alt: "NLEX, Commercial View",             tag: "infrastructure", caption: "The NLEX corridor looking east — commercial buildings now occupy the landscape. The 'Maganda sa Valenzuela' sign marks how much the area's identity has shifted." },
  { src: "/Assets/old-canal.jpg",                          wide: false, alt: "Old Canal",                         tag: "infrastructure", caption: "The old canal — the water has nowhere to go except down and in. This is the geometry of induced flooding: streets raised over decades, homes sitting lower with each cycle." },
  { src: "/Assets/old-farm.jpg",                           wide: false, alt: "Old Farm",                          tag: "archival",       caption: "Old agricultural land use in the area — the kind of landscape Canumay East used to be before industrialization." },
  { src: "/Assets/old-mango-tree.jpg",                     wide: false, alt: "Old Mango Tree",                    tag: "flora",          caption: "The old mango at the corner of the lot — too large and too rooted to remove. It has outlasted three different households beneath it." },
  { src: "/Assets/toLibis.jpg",                            wide: false, alt: "Toward Sitio Libis",                tag: "infrastructure", caption: "The path toward Sitio Libis — a community that organized itself from scratch against flooding, eventually purchasing the land and re-blocking their settlement." },
  { src: "/Assets/vgc.jpg",                                wide: false, alt: "VGC Entrance",                      tag: "infrastructure", caption: "Victoria Grande Court entrance. The original gatehouse stood on what was formerly an elevated dike separating two rice fields." },
  { src: "/Assets/vgc-canal.jpg",                          wide: true,  alt: "VGC Canal",                         tag: "infrastructure", caption: "The canal running through VGC — water moves, but nothing lives in it. This is what replaced the Sapang Bangka-bangka, where people once traveled by boat." },
  { src: "/Assets/vgc-fruit.jpg",                          wide: false, alt: "VGC Fruit Tree",                    tag: "flora",          caption: "An unidentified fruiting tree inside VGC — likely planted as an ornamental, but possibly a relative of the old wetland-edge species. Fruit still collected by neighbors." },
  { src: "/Assets/vgc-fruit-2.jpg",                        wide: false, alt: "VGC Fruit (detail)",                tag: "flora",          caption: "Close detail of the fruit cluster — possibly a species of Ficus. The tree has outlasted whatever plan someone had when they planted it." },
];

const FILTERS = [
  { id: "all",            label: "All Photos" },
  { id: "archival",       label: "Maps & Archival" },
  { id: "flora",          label: "Flora" },
  { id: "fauna",          label: "Fauna" },
  { id: "infrastructure", label: "Waterways & Infrastructure" },
  { id: "personal",       label: "Personal" },
];

const ZOOM_STEP = 0.25;
const ZOOM_MIN  = 0.5;
const ZOOM_MAX  = 4;

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [zoom, setZoom] = useState(1);
  const stripRef = useRef(null);

  const filteredItems = useMemo(() => {
    if (activeFilter === "all") return ITEMS;
    return ITEMS.filter(item => item.tag === activeFilter);
  }, [activeFilter]);

  function openLightbox(item) {
    setSelectedItem(item);
    setZoom(1);
  }

  function closeLightbox() {
    setSelectedItem(null);
    setZoom(1);
  }

  const zoomIn    = useCallback(() => setZoom(z => Math.min(z + ZOOM_STEP, ZOOM_MAX)), []);
  const zoomOut   = useCallback(() => setZoom(z => Math.max(z - ZOOM_STEP, ZOOM_MIN)), []);
  const zoomReset = useCallback(() => setZoom(1), []);

  const handleWheel = useCallback((e) => {
    e.preventDefault();
    if (e.deltaY < 0) zoomIn(); else zoomOut();
  }, [zoomIn, zoomOut]);

  // Horizontal scroll strip — drag to scroll
  const isDragging = useRef(false);
  const startX    = useRef(0);
  const scrollLeft= useRef(0);

  function onStripMouseDown(e) {
    isDragging.current = true;
    startX.current = e.pageX - stripRef.current.offsetLeft;
    scrollLeft.current = stripRef.current.scrollLeft;
    stripRef.current.style.cursor = "grabbing";
  }
  function onStripMouseMove(e) {
    if (!isDragging.current) return;
    const x = e.pageX - stripRef.current.offsetLeft;
    stripRef.current.scrollLeft = scrollLeft.current - (x - startX.current);
  }
  function onStripMouseUp() {
    isDragging.current = false;
    if (stripRef.current) stripRef.current.style.cursor = "grab";
  }

  useEffect(() => {
    if (!selectedItem) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "=")      zoomIn();
      if (e.key === "-")      zoomOut();
      if (e.key === "0")      zoomReset();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedItem, zoomIn, zoomOut, zoomReset]);

  return (
    <div className="page gallery-page">
      <PageHeader
        eyebrow="Field Photography"
        title="Gallery"
        subtitle="Photos from the field walks, May 2026 — surviving plants, buried creeks, factory walls, and the margins where things still grow."
      />

      {/* Horizontal filmstrip — all images, drag to scroll */}
      <div
        className="gallery-strip"
        ref={stripRef}
        onMouseDown={onStripMouseDown}
        onMouseMove={onStripMouseMove}
        onMouseUp={onStripMouseUp}
        onMouseLeave={onStripMouseUp}
      >
        {ITEMS.map((item, i) => (
          <div key={i} className="strip-thumb" onClick={() => openLightbox(item)}>
            <img src={item.src} alt={item.alt} className="strip-img" loading="lazy" />
          </div>
        ))}
      </div>
      <p className="gallery-strip-hint">← drag to scroll · click any photo to open</p>

      {/* Filter pills */}
      <div className="gallery-filters">
        {FILTERS.map(f => (
          <button
            key={f.id}
            className={`gallery-filter-btn${activeFilter === f.id ? " active" : ""}`}
            onClick={() => setActiveFilter(f.id)}
          >
            {f.label}
            <span className="filter-count">{f.id === "all" ? ITEMS.length : ITEMS.filter(i => i.tag === f.id).length}</span>
          </button>
        ))}
      </div>

      {/* Masonry grid — all photos, no pagination */}
      <div className="gallery-masonry">
        {filteredItems.map((item, i) => (
          <div
            key={item.src}
            className={`photo-card${item.wide ? " wide" : ""}`}
            onClick={() => openLightbox(item)}
            style={{ animationDelay: `${(i % 9) * 0.04}s` }}
          >
            <div className="photo-frame">
              <img
                src={item.src}
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

      {/* Lightbox */}
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
