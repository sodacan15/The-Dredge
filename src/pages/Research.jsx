import { useState } from "react";

/**
 * SECTIONS array mapping the official historical document categories 
 * from image_26cb7a.png to the deeply expanded field data and research insights 
 * from "The Dredge" project collation.
 */
const SECTIONS = [
  {
    id: "websites",
    label: "Websites",
    content: (
      <>
        <h2 className="section-title">Websites (Expanded Analysis)</h2>
        <ul className="source-list">
          <li>
            <strong>Valenzuela City History Portal</strong> — {" "}
            <a href="https://valenzuela.gov.ph/history/" target="_blank" rel="noopener noreferrer">https://valenzuela.gov.ph/history/</a>
            <p className="source-insight">
              <strong>The Island Typology:</strong> Documents the foundational baseline of Polo's 1761 formal separation from Meycauayan, Bulacan[cite: 4]. Crucially details the area's original etymology—derived from the Tagalog word <i>pulo</i> (island)—reflecting a landscape completely hemmed in and defined by its pristine river corridors (the Tullahan River to the south and the broader Pampanga River network to the north) long before heavy urbanization[cite: 4].
            </p>
          </li>
          <li>
            <strong>Stuart Xchange Botanical Index</strong> — {" "}
            <a href="https://www.stuartxchange.org/Kanumai.html" target="_blank" rel="noopener noreferrer">https://www.stuartxchange.org/Kanumai.html</a>
            <p className="source-insight">
              <strong>The Toxic Defense Mechanism:</strong> Provides the specialized botanical classification of the endemic Kanumai tree (<i>Diospyros canomoi</i> A. DC. / <i>Diospyros multiflora</i>) from the Ebenaceae family[cite: 4]. It natively requires low-to-medium altitude waterlogged thickets and riparian ecosystems[cite: 4]. The index records that its carbon-rich bark and highly astringent fruits were historically crushed and thrown into active streams by pre-colonial settlements as a natural anesthetic to stun fish for easy gathering—making its total modern absence a definitive indicator of severe wetland-edge habitat eradication[cite: 4].
            </p>
          </li>
          <li>
            <strong>PhilAtlas — Canumay East Database</strong> — {" "}
            <a href="https://www.philatlas.com/luzon/ncr/valenzuela/canumay-east.html" target="_blank" rel="noopener noreferrer">https://www.philatlas.com/luzon/ncr/valenzuela/canumay-east.html</a>
            <p className="source-insight">
              <strong>The Industrial Squeeze:</strong> Details demographic metrics showing 14,657 individuals concentrated across a small 156-hectare boundary[cite: 4]. Tracks the exact historical turning point on October 2, 1966, when the construction of the Manila North Diversion Road (NLEX) cut a 1-kilometer diagonal slash straight through the undivided Canumay watershed, driving up land values and initiating the relentless, uncontrolled conversion of wet agricultural fields and flood basins into dense manufacturing centers[cite: 4].
            </p>
          </li>
          <li>
            <strong>Manila Bay Office — Watershed Data Portal</strong> — {" "}
            <a href="https://mbo.emb.gov.ph/?page_id=18" target="_blank" rel="noopener noreferrer">https://mbo.emb.gov.ph/?page_id=18</a>
            <p className="source-insight">
              <strong>The Connected Catchment:</strong> Maps the regional hydrology showing how internal community waterways seamlessly anchor into the Marilao-Meycauayan-Obando River System (MMORS)[cite: 4]. This links the localized micro-drainage of residential alleys directly to a massive, macro-environmental drainage chain that runs from the heights of the Sierra Madre mountains all the way out to Manila Bay[cite: 4].
            </p>
          </li>
        </ul>
      </>
    )
  },
  {
    id: "news",
    label: "News",
    content: (
      <>
        <h2 className="section-title">News & Media</h2>
        <ul className="source-list">
          <li>
            <strong>Inquirer.net — River Protection Initiatives</strong> — {" "}
            <a href="http://newsinfo.inquirer.net/615748/valenzuela-city-dead-serious-about-river-protection" target="_blank" rel="noopener noreferrer">http://newsinfo.inquirer.net/.../valenzuela-city-dead-serious-about-river-protection</a>
            <p className="source-insight">Exposes local government regulatory actions regarding industrial waste controls alongside community efforts against manufacturing discharge in northern waterways[cite: 4].</p>
          </li>
          <li>
            <strong>Manila Bulletin — Emergency Creek Engineering (August 2025)</strong> — {" "}
            <a href="https://mb.com.ph/2025/08/08/valenzuela-lgu-mmda-intensify-creeks-cleanup-drive" target="_blank" rel="noopener noreferrer">https://mb.com.ph/2025/08/08/valenzuela-lgu-mmda-intensify-creeks-cleanup-drive</a>
            <p className="source-insight">Reports on the extraction of over 69,000 cubic meters of heavy silt and municipal debris from 11 strategic water channels to resolve major NLEX expressway flooding bottlenecks[cite: 4].</p>
          </li>
          <li>
            <strong>Manila Bulletin / UP Diliman Study — Sinking Cities (December 2024)</strong> — {" "}
            <a href="https://mb.com.ph/2024/12/5/sinking-cities-land-subsidence-threatens-to-erase-metro-cities-up-study" target="_blank" rel="noopener noreferrer">https://mb.com.ph/2024/12/5/sinking-cities-land-subsidence-threatens-to-erase-metro-cities-up-study</a>
            <p className="source-insight">Highlights specialized UP geodetic data detailing subsidence threats in Metro Manila where heavy infrastructure and private pumping cause land levels to fall continuously[cite: 4].</p>
          </li>
        </ul>
      </>
    )
  },
  {
    id: "reports",
    label: "Reports & Documents",
    content: (
      <>
        <h2 className="section-title">Reports & Documents (Expanded Analysis)</h2>
        <ul className="source-list">
          <li>
            <strong>World Bank Environmental Assessment Report (2014)</strong> — {" "}
            <a href="https://documents1.worldbank.org" target="_blank" rel="noopener noreferrer">World Bank Documents Portal</a>
            <p className="source-insight">
              <strong>The Architecture of Neglect:</strong> Delineates structural wastewater boundaries, revealing that Canumay East is designated entirely within Sub-Catchment B (Meycauayan)[cite: 4]. This sector has historically received the absolute lowest capital allocation and infrastructure investment out of all three municipal catchments[cite: 4]. This systemic exclusion effectively rendered the internal community streams invisible to engineering upgrades, forcing local water channels to degrade into unnamed, unmaintained, and unmonitored waste corridors[cite: 4].
            </p>
          </li>
          <li>
            <strong>Valenzuela City Ecological Profiles (2019 / 2021)</strong> — {" "}
            <a href="https://valenzuela.gov.ph/download/pdf/" target="_blank" rel="noopener noreferrer">Official Municipal PDF Repository</a>
            <p className="source-insight">
              <strong>The Topographic Bowl:</strong> Establishes the mathematical reality of local flood vulnerability, proving that 25% of Valenzuela's total land area rests directly at or below sea level, with a baseline average elevation of just 2 meters[cite: 4]. This stands in stark, dangerous contrast to the Canumay industrial zone's highest ridge at 38 meters[cite: 4]. This intense elevation delta transforms low-lying residential pockets into natural catch basins, pulling stormwater and heavy industrial runoff downward with nowhere to drain[cite: 4].
            </p>
          </li>
          <li>
            <strong>Official Profile History of Barangay Canumay East (Section 2.1)</strong> — {" "}
            <span>Barangay Hall Physical Archives (No URL)</span>
            <p className="source-insight">
              <strong>The Cartographic Erasure of 11 Sapang:</strong> The fundamental official document capturing the exact names and unique historical profiles of the 7 original <i>sitios</i> and 11 lost <i>sapang</i> (creeks) that mapped the undivided wetland[cite: 4]. It explicitly names <i>Sapang Pangitlogan-Bakaw</i> (confirming a mangrove nesting habitat), <i>Sapang Bangka-bangka</i> (proving historical deep-water boat navigation), and <i>Sapang Halang Sa Araw</i> (revealing a dense riparian canopy that blocked sunlight)[cite: 4]. These names provide physical, historical proof of a rich, interconnected wetland ecosystem that has since been paved, forgotten, and replaced by concrete[cite: 4].
            </p>
          </li>
        </ul>
      </>
    )
  },
  {
    id: "researches",
    label: "Researches & Papers",
    content: (
      <>
        <h2 className="section-title">Researches & Papers</h2>
        <ul className="source-list">
          <li>
            <strong>ScienceDirect / Sulapas et al. — Ground Subsidence Report (2024)</strong> — {" "}
            <a href="https://www.sciencedirect.com/science/article/pii/S1569843224004618" target="_blank" rel="noopener noreferrer">ScienceDirect Portal Entry</a>
            <p className="source-insight">Validates that the CAMANAVA region experiences persistent land sinking at rates ranging between 20mm to 42mm annually due to heavy groundwater extraction and sub-surface compaction[cite: 4].</p>
          </li>
          <li>
            <strong>Bureau of Soils and Water Management Soil Gateway</strong> — {" "}
            <a href="https://www.foi.gov.ph/requests/soil-map-of-valenzuela-city-and-meycauayan-bulacan/" target="_blank" rel="noopener noreferrer">BSWM FOI Soil Gateway Portal</a>
            <p className="source-insight">Maps the area's geological base as Tropudults paired with Tropudalfs and Oxisols, indicating highly weathered, poorly drained, and naturally waterlogged alluvial floodplain horizons[cite: 4].</p>
          </li>
        </ul>
      </>
    )
  },
  {
    id: "laws",
    label: "Laws & Papers",
    content: (
      <>
        <h2 className="section-title">Laws & Papers</h2>
        <ul className="source-list">
          <li>
            <strong>Republic Act No. 10958 (17th Congress)</strong> — {" "}
            <a href="https://elibrary.judiciary.gov.ph/thebookshelf/showdocs/2/86764" target="_blank" rel="noopener noreferrer">Supreme Court E-Library Document</a>
            <p className="source-insight">The legislative act enacted on October 30, 2017, that officially executed the partition of the old 341-hectare land area into independent West and East administrative barangay jurisdictions[cite: 4].</p>
          </li>
        </ul>
      </>
    )
  },
  {
    id: "oral",
    label: "Oral History",
    content: (
      <>
        <h2 className="section-title">Oral History & Field Records</h2>
        <ul className="source-list">
          <li>
            <strong>Author's Personal Testimony (Victoria Village)</strong> — {" "}
            <span>The Dredge Log: Section A.1 (No URL)</span>
            <p className="source-insight">Documents explicit structural evidence including a sealed residential living room well, historical conversion of local <i>kangkungan</i> marshes via volcanic adobe filler, and a recurring induced-flooding bowl phenomenon caused by elevated street paving[cite: 4].</p>
          </li>
        </ul>
      </>
    )
  }
];

export default function Research() {
  const [active, setActive] = useState(SECTIONS[0].id);
  const current = SECTIONS.find((s) => s.id === active);

  return (
    <div className="page" style={{ maxWidth: "900px", fontFamily: "sans-serif", padding: "20px" }}>
      <p className="page-eyebrow" style={{ textTransform: "uppercase", fontSize: "12px", letterSpacing: "1.5px", color: "#8c7a6b", margin: "0 0 5px 0" }}>
        Ultimate Research Collation
      </p>
      <h1 className="page-title" style={{ fontSize: "32px", fontWeight: "700", color: "#2c2520", margin: "0 0 10px 0" }}>
        The Dredge: Sources Directory
      </h1>
      <p className="page-subtitle" style={{ fontSize: "15px", color: "#594e46", margin: "0 0 20px 0", lineHeight: "1.5" }}>
        Classified references backing the ecological reconstruction, land subsidence analysis, and oral histories of Victoria Village, Canumay East.
      </p>

      <hr className="divider" style={{ border: "0", borderTop: "1px solid #d9d2c9", margin: "0 0 25px 0" }} />

      <div className="research-grid" style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: "30px" }}>
        {/* The Sidebar Tabs - completely switched to the categories shown in image_26cb7a.png */}
        <aside className="research-index" style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              style={{
                textAlign: "left",
                padding: "12px 16px",
                fontSize: "14px",
                fontWeight: active === s.id ? "600" : "400",
                color: active === s.id ? "#ffffff" : "#594e46",
                backgroundColor: active === s.id ? "#8c7a6b" : "#fcfbfa",
                border: "1px solid #ebd2c9",
                borderRadius: "4px",
                cursor: "pointer",
                transition: "all 0.2s ease"
              }}
              onMouseEnter={(e) => {
                if (active !== s.id) e.target.style.backgroundColor = "#f2efeb";
              }}
              onMouseLeave={(e) => {
                if (active !== s.id) e.target.style.backgroundColor = "#fcfbfa";
              }}
            >
              {s.label}
            </button>
          ))}
        </aside>

        {/* The Selected Tab Content View */}
        <article className="research-content" style={{ backgroundColor: "#fdfcfb", padding: "25px", borderRadius: "6px", border: "1px solid #ebd2c9" }}>
          {current ? current.content : <p style={{ color: "#8c7a6b" }}>Select a directory category to populate reference resources.</p>}
        </article>
      </div>

      {/* Embedded Project Footer Quote */}
      <footer style={{ marginTop: "40px", padding: "20px 0 0 0", borderTop: "1px solid #e3ded9", textAlign: "center" }}>
        <p style={{ fontStyle: "italic", fontSize: "13px", color: "#7a7169", margin: "0" }}>
          "Every rain, the water finds its way back to what we tried to erase."
        </p>
      </footer>
    </div>
  );
}