import { useState } from "react";
import PageHeader from "../components/PageHeader";

const SECTIONS = [
  {
    id: "websites",
    label: "Websites",
    eyebrow: "Digital Sources",
    entries: [
      {
        title: "Valenzuela City History Portal",
        url: "https://valenzuela.gov.ph/history/",
        urlLabel: "valenzuela.gov.ph",
        finding: "The Island Typology",
        body: "Documents the foundational baseline of Polo's 1761 formal separation from Meycauayan, Bulacan. Crucially details the area's original etymology — derived from the Tagalog word pulo (island) — reflecting a landscape completely hemmed in and defined by its pristine river corridors long before heavy urbanization."
      },
      {
        title: "Stuart Xchange Botanical Index",
        url: "https://www.stuartxchange.org/Kanumai.html",
        urlLabel: "stuartxchange.org",
        finding: "The Toxic Defense Mechanism",
        body: "Provides the specialized botanical classification of the endemic Kanumai tree (Diospyros canomoi). It natively requires low-to-medium altitude waterlogged thickets and riparian ecosystems. Its carbon-rich bark and highly astringent fruits were historically crushed and thrown into active streams as a natural anesthetic to stun fish — making its total modern absence a definitive indicator of severe wetland-edge habitat eradication."
      },
      {
        title: "PhilAtlas — Canumay East Database",
        url: "https://www.philatlas.com/luzon/ncr/valenzuela/canumay-east.html",
        urlLabel: "philatlas.com",
        finding: "The Industrial Squeeze",
        body: "Details demographic metrics showing 14,657 individuals concentrated across a small 156-hectare boundary. Tracks the exact historical turning point on October 2, 1966, when the NLEX cut a diagonal slash through the undivided Canumay watershed, driving up land values and initiating uncontrolled conversion of wet agricultural fields and flood basins into dense manufacturing centers."
      },
      {
        title: "Manila Bay Office — Watershed Data Portal",
        url: "https://mbo.emb.gov.ph/?page_id=18",
        urlLabel: "mbo.emb.gov.ph",
        finding: "The Connected Catchment",
        body: "Maps the regional hydrology showing how internal community waterways anchor into the Marilao-Meycauayan-Obando River System (MMORS). This links the localized micro-drainage of residential alleys directly to a massive drainage chain that runs from the Sierra Madre mountains all the way out to Manila Bay."
      },
    ]
  },
  {
    id: "news",
    label: "News",
    eyebrow: "Press & Media",
    entries: [
      {
        title: "Inquirer.net — River Protection Initiatives",
        url: "http://newsinfo.inquirer.net/615748/valenzuela-city-dead-serious-about-river-protection",
        urlLabel: "inquirer.net",
        finding: null,
        body: "Exposes local government regulatory actions regarding industrial waste controls alongside community efforts against manufacturing discharge in northern waterways."
      },
      {
        title: "Manila Bulletin — Emergency Creek Engineering",
        url: "https://mb.com.ph/2025/08/08/valenzuela-lgu-mmda-intensify-creeks-cleanup-drive",
        urlLabel: "mb.com.ph · August 2025",
        finding: null,
        body: "Reports on the extraction of over 69,000 cubic meters of heavy silt and municipal debris from 11 strategic water channels to resolve major NLEX expressway flooding bottlenecks."
      },
      {
        title: "Manila Bulletin / UP Diliman Study — Sinking Cities",
        url: "https://mb.com.ph/2024/12/5/sinking-cities-land-subsidence-threatens-to-erase-metro-cities-up-study",
        urlLabel: "mb.com.ph · December 2024",
        finding: null,
        body: "Highlights specialized UP geodetic data detailing subsidence threats in Metro Manila where heavy infrastructure and private pumping cause land levels to fall continuously."
      },
    ]
  },
  {
    id: "reports",
    label: "Reports & Documents",
    eyebrow: "Institutional Records",
    entries: [
      {
        title: "World Bank Environmental Assessment Report (2014)",
        url: "https://documents1.worldbank.org",
        urlLabel: "World Bank Documents Portal",
        finding: "The Architecture of Neglect",
        body: "Delineates structural wastewater boundaries, revealing that Canumay East is designated entirely within Sub-Catchment B (Meycauayan). This sector has historically received the absolute lowest capital allocation and infrastructure investment out of all three municipal catchments. This systemic exclusion effectively rendered the internal community streams invisible to engineering upgrades, forcing local water channels to degrade into unnamed, unmaintained waste corridors."
      },
      {
        title: "Valenzuela City Ecological Profiles (2019 / 2021)",
        url: "https://valenzuela.gov.ph/download/pdf/",
        urlLabel: "Official Municipal PDF Repository",
        finding: "The Topographic Bowl",
        body: "Establishes the mathematical reality of local flood vulnerability, proving that 25% of Valenzuela's total land area rests directly at or below sea level, with a baseline average elevation of just 2 meters. This stands in stark contrast to the Canumay industrial zone's highest ridge at 38 meters. The intense elevation delta transforms low-lying residential pockets into natural catch basins, pulling stormwater and heavy industrial runoff downward with nowhere to drain."
      },
      {
        title: "Official Profile History of Barangay Canumay East (Section 2.1)",
        url: null,
        urlLabel: "Barangay Hall Physical Archives — no URL",
        finding: "The Cartographic Erasure of 11 Sapang",
        body: "The fundamental official document capturing the exact names and unique historical profiles of the 7 original sitios and 11 lost sapang (creeks) that mapped the undivided wetland. It explicitly names Sapang Pangitlogan-Bakaw (confirming a mangrove nesting habitat), Sapang Bangka-bangka (proving historical deep-water boat navigation), and Sapang Halang Sa Araw (revealing a dense riparian canopy that blocked sunlight). These names provide physical, historical proof of a rich, interconnected wetland ecosystem since paved and forgotten."
      },
    ]
  },
  {
    id: "researches",
    label: "Researches & Papers",
    eyebrow: "Academic Sources",
    entries: [
      {
        title: "ScienceDirect / Sulapas et al. — Ground Subsidence Report (2024)",
        url: "https://www.sciencedirect.com/science/article/pii/S1569843224004618",
        urlLabel: "ScienceDirect Portal Entry",
        finding: null,
        body: "Validates that the CAMANAVA region experiences persistent land sinking at rates ranging between 20mm to 42mm annually due to heavy groundwater extraction and sub-surface compaction."
      },
      {
        title: "Bureau of Soils and Water Management Soil Gateway",
        url: "https://www.foi.gov.ph/requests/soil-map-of-valenzuela-city-and-meycauayan-bulacan/",
        urlLabel: "BSWM FOI Gateway Portal",
        finding: null,
        body: "Maps the area's geological base as Tropudults paired with Tropudalfs and Oxisols, indicating highly weathered, poorly drained, and naturally waterlogged alluvial floodplain horizons."
      },
    ]
  },
  {
    id: "laws",
    label: "Laws & Legislation",
    eyebrow: "Legal Record",
    entries: [
      {
        title: "Republic Act No. 10958 (17th Congress)",
        url: "https://elibrary.judiciary.gov.ph/thebookshelf/showdocs/2/86764",
        urlLabel: "Supreme Court E-Library",
        finding: null,
        body: "The legislative act enacted on October 30, 2017, that officially executed the partition of the old 341-hectare land area into independent West and East administrative barangay jurisdictions."
      },
    ]
  },
  {
    id: "oral",
    label: "Oral History",
    eyebrow: "Field Records",
    entries: [
      {
        title: "Author's Personal Testimony — Victoria Village",
        url: null,
        urlLabel: "The Dredge Log: Section A.1 — no URL",
        finding: null,
        body: "Documents explicit structural evidence including a sealed residential living room well, historical conversion of local kangkungan marshes via volcanic adobe filler, and a recurring induced-flooding bowl phenomenon caused by elevated street paving."
      },
    ]
  },
];

export default function Research() {
  const [active, setActive] = useState(SECTIONS[0].id);
  const current = SECTIONS.find(s => s.id === active);

  return (
    <div className="page research-page">
      <PageHeader
        eyebrow="Sources Directory"
        title="The Research"
        subtitle="Classified references backing the ecological reconstruction, land subsidence analysis, and oral histories of Victoria Village, Canumay East."
      />

      <hr className="divider" />

      <div className="research-layout">
        <aside className="research-nav">
          <p className="research-nav-label">Categories</p>
          {SECTIONS.map(s => (
            <button
              key={s.id}
              className={`research-nav-btn${active === s.id ? " active" : ""}`}
              onClick={() => setActive(s.id)}
            >
              {s.label}
            </button>
          ))}
        </aside>

        <div className="research-body">
          {current && (
            <>
              <p className="research-eyebrow">{current.eyebrow}</p>
              <h2 className="research-heading">{current.label}</h2>
              <div className="research-entries">
                {current.entries.map((entry, i) => (
                  <div key={i} className="research-entry">
                    <div className="entry-header">
                      <h3 className="entry-title">{entry.title}</h3>
                      {entry.url
                        ? <a href={entry.url} target="_blank" rel="noopener noreferrer" className="entry-url">{entry.urlLabel}</a>
                        : <span className="entry-url muted">{entry.urlLabel}</span>
                      }
                    </div>
                    {entry.finding && (
                      <p className="entry-finding">— {entry.finding}</p>
                    )}
                    <p className="entry-body">{entry.body}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <footer className="research-footer">
        <p className="research-footer-quote">
          "Every rain, the water finds its way back to what we tried to erase."
        </p>
      </footer>
    </div>
  );
}
