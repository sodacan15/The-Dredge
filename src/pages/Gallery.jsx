import { useState, useMemo } from "react";

/**
 * ITEMS array mapping all 27 filenames inside your public/Assets/ folder.
 */
const ITEMS = [
  { filename: "barangay-map", wide: true, alt: "Barangay Map", tag: "archival", caption: "this is a caption" },
  { filename: "barangay-profile", wide: false, alt: "Barangay Profile", tag: "archival", caption: "this is a caption" },
  { filename: "Baringtonia", wide: false, alt: "Baringtonia", tag: "flora", caption: "this is a caption" },
  { filename: "binunga", wide: false, alt: "Binunga", tag: "flora", caption: "this is a caption" },
  { filename: "binunga2014", wide: false, alt: "Binunga 2014", tag: "archival", caption: "this is a caption" },
  { filename: "binungapt2", wide: false, alt: "Binunga Part 2", tag: "flora", caption: "this is a caption" },
  { filename: "bonifacio-canal", wide: true, alt: "Bonifacio Canal", tag: "infrastructure", caption: "this is a caption" },
  { filename: "canal-plants", wide: false, alt: "Canal Plants", tag: "flora", caption: "this is a caption" },
  { filename: "emptylot", wide: false, alt: "Empty Lot", tag: "infrastructure", caption: "this is a caption" },
  { filename: "emptylot2014", wide: false, alt: "Empty Lot 2014", tag: "archival", caption: "this is a caption" },
  { filename: "empyt-lot-to-upper-canumay", wide: true, alt: "Empty Lot to Upper Canumay", tag: "infrastructure", caption: "this is a caption" },
  { filename: "empyt-lot-to-upper-canumay part 2", wide: false, alt: "Empty Lot to Upper Canumay Part 2", tag: "infrastructure", caption: "this is a caption" },
  { filename: "gabi", wide: false, alt: "Gabi", tag: "flora", caption: "this is a caption" },
  { filename: "mangoxguava", wide: false, alt: "Mango x Guava", tag: "flora", caption: "this is a caption" },
  { filename: "marton-coconuts", wide: false, alt: "Marton Coconuts", tag: "flora", caption: "this is a caption" },
  { filename: "marton-estero", wide: true, alt: "Marton Estero", tag: "infrastructure", caption: "this is a caption" },
  { filename: "nlex", wide: false, alt: "NLEX Corridor", tag: "infrastructure", caption: "this is a caption" },
  { filename: "nlex-east2west", wide: false, alt: "NLEX East to West", tag: "infrastructure", caption: "this is a caption" },
  { filename: "nlex-east2westpart2", wide: false, alt: "NLEX East to West Part 2", tag: "infrastructure", caption: "this is a caption" },
  { filename: "old-canal", wide: false, alt: "Old Canal", tag: "infrastructure", caption: "this is a caption" },
  { filename: "old-farm", wide: false, alt: "Old Farm", tag: "archival", caption: "this is a caption" },
  { filename: "old-mango-tree", wide: false, alt: "Old Mango Tree", tag: "flora", caption: "this is a caption" },
  { filename: "toLibis", wide: false, alt: "To Libis", tag: "infrastructure", caption: "this is a caption" },
  { filename: "vgc", wide: false, alt: "VGC Entrance", tag: "infrastructure", caption: "this is a caption" },
  { filename: "vgc-canal", wide: true, alt: "VGC Canal", tag: "infrastructure", caption: "this is a caption" },
  { filename: "vgc-fruit", wide: false, alt: "VGC Fruit", tag: "flora", caption: "this is a caption" },
  { filename: "vgc-fruit-2", wide: false, alt: "VGC Fruit 2", tag: "flora", caption: "this is a caption" }
];

const ITEMS_PER_PAGE = 6;

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredItems = useMemo(() => {
    if (activeFilter === "all") return ITEMS;
    return ITEMS.filter(item => item.tag === activeFilter);
  }, [activeFilter]);

  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredItems, currentPage]);

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);

  return (
    <div className="page" style={{ maxWidth: "1100px", fontFamily: "sans-serif", padding: "20px" }}>
      <p className="page-eyebrow" style={{ textTransform: "uppercase", fontSize: "12px", letterSpacing: "1.5px", color: "#8c7a6b", margin: "0 0 5px 0" }}>
        Field Photography
      </p>
      <h1 className="page-title" style={{ fontSize: "32px", fontWeight: "700", color: "#2c2520", margin: "0 0 10px 0" }}>
        Gallery
      </h1>
      <p className="page-subtitle" style={{ fontSize: "15px", color: "#594e46", margin: "0 0 25px 0", lineHeight: "1.5" }}>
        Photos from the field walks, May 2026 — surviving plants, buried creeks, factory walls, and the margins where things still grow. Click any Polaroid frame to zoom into the details.
      </p>

      {/* Tabs */}
      <div className="filter-bar" style={{ display: "flex", gap: "10px", marginBottom: "30px", flexWrap: "wrap", borderBottom: "1px solid #e3ded9", paddingBottom: "12px" }}>
        {[
          { id: "all", label: "All Items" },
          { id: "archival", label: "Maps & Archival" },
          { id: "flora", label: "Botanical / Flora" },
          { id: "infrastructure", label: "Waterways & Infrastructure" }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => { setActiveFilter(tab.id); setCurrentPage(1); }}
            style={{
              padding: "8px 16px",
              fontSize: "13px",
              fontWeight: activeFilter === tab.id ? "600" : "400",
              color: activeFilter === tab.id ? "#ffffff" : "#594e46",
              backgroundColor: activeFilter === tab.id ? "#8c7a6b" : "transparent",
              border: activeFilter === tab.id ? "1px solid #8c7a6b" : "1px solid #d9d2c9",
              borderRadius: "20px",
              cursor: "pointer"
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="gallery-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "28px" }}>
        {paginatedItems.map((item, index) => {
          const srcPath = `/Assets/${item.filename}.jpg`;

          return (
            <div
              key={index}
              onClick={() => setSelectedItem({ ...item, src: srcPath })}
              style={{
                gridColumn: item.wide ? "span 2" : "span 1",
                backgroundColor: "#fdfdfb",
                border: "1px solid #ebd2c9",
                padding: "16px 16px 24px 16px",
                boxShadow: "0 4px 10px rgba(44, 37, 32, 0.05)",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ width: "100%", height: item.wide ? "340px" : "260px", backgroundColor: "#eae4de", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img 
                  src={srcPath} 
                  alt={item.alt}
                  style={{ width: "100%", height: "100%", objectFit: "cover", filter: "contrast(1.01) sepia(0.04)" }}
                />
              </div>
              <p style={{ fontFamily: "Georgia, serif", fontSize: "13px", color: "#40352e", marginTop: "16px", marginBottom: "0", lineHeight: "1.45", fontStyle: "italic", borderLeft: "2px solid #8c7a6b", paddingLeft: "10px" }}>
                {item.caption}
              </p>
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "15px", marginTop: "40px" }}>
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(prev => prev - 1)}
            style={{ padding: "6px 14px", fontSize: "12px", border: "1px solid #d9d2c9", cursor: "pointer" }}
          >
            Previous
          </button>
          <span style={{ fontSize: "13px", color: "#594e46" }}>Page {currentPage} of {totalPages}</span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(prev => prev + 1)}
            style={{ padding: "6px 14px", fontSize: "12px", border: "1px solid #d9d2c9", cursor: "pointer" }}
          >
            Next
          </button>
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedItem && (
        <div onClick={() => setSelectedItem(null)} style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", backgroundColor: "rgba(44, 37, 32, 0.88)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000 }}>
          <div onClick={(e) => e.stopPropagation()} style={{ backgroundColor: "#fdfdfb", padding: "24px", maxWidth: "850px", width: "100%" }}>
            <img src={selectedItem.src} alt={selectedItem.alt} style={{ width: "100%", maxHeight: "65vh", objectFit: "contain" }} />
            <div style={{ marginTop: "20px", display: "flex", justifyContent: "space-between" }}>
              <div>
                <h3 style={{ margin: "0 0 6px 0", color: "#2c2520" }}>{selectedItem.alt}</h3>
                <p style={{ margin: 0, fontFamily: "Georgia, serif", fontStyle: "italic" }}>{selectedItem.caption}</p>
              </div>
              <button onClick={() => setSelectedItem(null)} style={{ border: "1px solid #d9d2c9", padding: "6px 14px", cursor: "pointer" }}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}