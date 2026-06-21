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
        finding: "The Enforcement Gap",
        body: "Exposes local government regulatory actions regarding industrial waste controls alongside community efforts against manufacturing discharge in northern waterways. The article covers cleanup enforcement drives along Valenzuela's creek system — the same network that Log 4 documents as functionally dead at the micro-drainage level, even while macro-level enforcement continues."
      },
      {
        title: "Manila Bulletin — Emergency Creek Engineering",
        url: "https://mb.com.ph/2025/08/08/valenzuela-lgu-mmda-intensify-creeks-cleanup-drive",
        urlLabel: "mb.com.ph · August 2025",
        finding: "The 69,000 Cubic Meter Number",
        body: "Reports on the extraction of over 69,000 cubic meters of heavy silt and municipal debris from 11 strategic water channels after July 2025 flooding submerged nearly half a kilometer of NLEX for over five hours. The cleanup was triggered by highway flooding, not residential flooding — which is why the unnamed canals of Victoria Village and Sitio Libis were not among the eleven priority channels."
      },
      {
        title: "Manila Bulletin / UP Diliman Study — Sinking Cities",
        url: "https://mb.com.ph/2024/12/5/sinking-cities-land-subsidence-threatens-to-erase-metro-cities-up-study",
        urlLabel: "mb.com.ph · December 2024",
        finding: "The Ground That Disappears",
        body: "Highlights specialized UP geodetic data detailing subsidence threats in Metro Manila where heavy infrastructure and private pumping cause land levels to fall continuously. The CAMANAVA area — which includes Valenzuela — appears in the data as one of the most affected zones. Read alongside the peer-reviewed Sulapas et al. paper below, this establishes the scale of the sinking: 20–42mm per year in older measurements, still 10–20mm in more recent data even with restrictions on extraction."
      },
      {
        title: "BusinessMirror — SMC River Cleanups Reach 9.12M Metric Tons (2026)",
        url: "https://businessmirror.com.ph/2026/04/30/smcs-river-cleanups-reach-9-12m-metric-tons-of-waste-silt-removed-since-2020/",
        urlLabel: "businessmirror.com.ph · April 2026",
        finding: "The Private Sector Gap",
        body: "Reports that San Miguel Corporation's 'Better Rivers PH' program has removed more than 9.12 million metric tons of waste from ten major river systems since 2020, including a 2026 maintenance round that pulled 710,168 metric tons from the Bulacan River System — including the downstream Meycauayan River. A private actor doing the dredging the state hasn't prioritized. Nearby communities reported reduced flooding after the earlier Tullahan cleanup, completed in August 2022."
      },
      {
        title: "GMA News — Polo Riverwalk Opens in Valenzuela City (2026)",
        url: "https://www.gmanetwork.com",
        urlLabel: "GMA News · February 2026",
        finding: "The Linear Park Where a Floodwall Was",
        body: "Covers the January 2026 opening of the Polo Riverwalk — a 2.5-kilometer linear park connecting five barangays along the old Tullahan River floodwalls. A city-level investment in turning a flood-control embankment into public green space, which is exactly the kind of ecological attention the unnamed waterways of Canumay East have never received."
      },
      {
        title: "Tribune / Valenzuela LGU — State of Calamity Declaration",
        url: "https://tribune.net.ph",
        urlLabel: "tribune.net.ph · July 2025",
        finding: "The Human Count",
        body: "Covers the July 2025 calamity declaration after Typhoons Crising, Dante, and Emong hit Valenzuela in close succession, resulting in more than 9,000 residents requiring rescue or evacuation. The flooding was most severe in the low-lying residential zones of Canumay, Lawang Bato, and Lingunan — the same areas the World Bank assessment places in the sub-catchment with the least infrastructure investment."
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
        title: "Blacksmith Institute — The World's Worst Polluted Places: The Top Ten (of the Dirty Thirty) (2007)",
        url: "https://www.blacksmithinstitute.org",
        urlLabel: "Blacksmith Institute / Pure Earth",
        finding: "The Named River",
        body: "Placed the Marilao-Meycauayan-Obando River System — the same system Canumay East's unnamed drainage feeds into — on the 2007 global list of the world's thirty most polluted places. The contamination profile includes lead from battery recycling, hexavalent chromium from leather tanning, mercury, and nickel. This is the downstream consequence of what gets buried in places like Canumay's sealed kangkungan."
      },
      {
        title: "DENR-NCR — Lingunan Creek Named Most Improved Estero in Metro Manila (2021)",
        url: "https://ncr.denr.gov.ph",
        urlLabel: "DENR-NCR Official Announcement · March 2021",
        finding: "The Neighbor That Got the Award",
        body: "Documents DENR's recognition of Lingunan Creek — immediately adjacent to Canumay East — as Metro Manila's most improved estero in 2021. The contrast is the whole point: Lingunan's waterway received sustained monitoring, cleanup effort, and now an award. Canumay East's eleven creeks received none of those things, and most no longer appear in any official waterway database at all."
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
      {
        title: "Pleto et al. — Meycauayan River Water Quality Assessment (2020)",
        url: "https://www.journalofhealthandpollution.org",
        urlLabel: "Journal of Health and Pollution",
        finding: "The 0.49 ppm Number",
        body: "Measures downstream dissolved oxygen in the Meycauayan River segment of the Marilao-Meycauayan-Obando River System at as low as 0.49 parts per million — against a minimum of ~5 ppm that fish need to survive. The river still serves as a domestic and agricultural water source for approximately 250,000 people. This is what the drainage from Canumay East's sealed-over creeks flows into."
      },
      {
        title: "Eco et al. — Widespread Land Subsidence in Metro Manila (2018)",
        url: "https://www.jscimedcentral.com",
        urlLabel: "JSM Environmental Science & Ecology",
        finding: "The CAMANAVA Baseline",
        body: "Documents satellite-measured land subsidence rates across Metro Manila from 2003 to 2011, establishing the CAMANAVA baseline at 20 to 42 millimeters per year — among the worst in the region. Valenzuela's position inside this zone means that even if flooding frequency were constant, the ground sinking beneath homes effectively raises flood risk with every passing year."
      },
      {
        title: "Cash, Corrine — \"Creating the Conditions for Climate Resilience\" (2021)",
        url: "https://www.cogitatiopress.com/urbanplanning/article/view/4205",
        urlLabel: "Urban Planning Journal · Vol. 6, Issue 3",
        finding: "The ULHOA Model",
        body: "Documents the United Libis Homeowners Association (ULHOA) community-based flood response in Sitio Libis, Canumay East. Led by Theresa Carampatana, residents organized to purchase Philippine Veterans Bank land outright and re-block their settlement to improve drainage. The study is one of the few peer-reviewed documents that treats Canumay East as a subject of ecological consequence rather than a footnote to Valenzuela's industrial profile. Referenced directly in Log 3."
      },
    ]
  },
  {
    id: "species",
    label: "Species & Ecology",
    eyebrow: "Field Reference",
    entries: [
      {
        title: "Diospyros canomoi A. DC. — Kanumai (Ebenaceae)",
        url: "https://www.stuartxchange.org/Kanumai.html",
        urlLabel: "Stuart Xchange Philippine Medicinal Plants",
        finding: "The Named Absence",
        body: "The tree the barangay is named after. Classified within the ebony family (Ebenaceae), favoring lowland thickets and riverine zones at low to medium altitude — a habitat profile that perfectly matches Canumay's original wetland-edge topography. Bark and fruit were used as fish poison, confirming this was a waterside species living beside a fish-bearing system. Its total local extinction is the core premise of this project. No living specimen has been documented anywhere in Canumay East or its immediate vicinity."
      },
      {
        title: "Channa striata (Bloch, 1793) — Dalag / Striped Snakehead (Channidae)",
        url: "https://www.fishbase.se/summary/Channa-striata.html",
        urlLabel: "FishBase Global Reference",
        finding: "The Wetland Indicator",
        body: "The mudfish my grandfather named when describing what lived under our house before it was filled with adobe. Channa striata is a classic lowland wetland indicator: it can breathe atmospheric air through a suprabranchial organ, allowing it to survive in oxygen-depleted swamps, rice paddies, and seasonally flooded mudflats — exactly the marsh conditions oral testimony places in Victoria Village. Its confirmed presence in living memory establishes that the wetland was biologically functioning, not just topographically wet."
      },
      {
        title: "Clarias batrachus (Linnaeus, 1758) — Hito / Walking Catfish (Clariidae)",
        url: "https://www.fishbase.se/summary/Clarias-batrachus.html",
        urlLabel: "FishBase Global Reference",
        finding: "The Mudflat Fish",
        body: "The second fish my grandfather named — hito, or walking catfish. Like dalag, C. batrachus is a wetland-specialist air breather, confirmed in rice paddies, flood plains, swamps, and muddy ponds. It is listed as a food fish across Philippine wetland communities; its former presence confirms a productive, year-round wetland system rather than a seasonally waterlogged field."
      },
      {
        title: "Siganus sp. — Samaral / Rabbitfish (Siganidae)",
        url: "https://www.fishbase.se/identification/SpeciesList.php?famcode=430",
        urlLabel: "FishBase — Siganidae",
        finding: "The Estuarine Reach",
        body: "The third species my grandfather confirmed. Samaral (rabbitfish) are primarily brackish-water and estuarine fish — their presence in the oral record suggests the creek system of old Canumay had tidal or estuarine reach, connecting freshwater marsh with Manila Bay influence. If samaral were being caught here, the waterway was not a closed drainage channel but an active, tidally influenced estuary."
      },
      {
        title: "Ipomoea aquatica Forssk. — Kangkong / Water Spinach (Convolvulaceae)",
        url: "https://www.stuartxchange.org/Kangkong.html",
        urlLabel: "Stuart Xchange Philippine Medicinal Plants",
        finding: "The Buried Plant",
        body: "My grandfather confirmed the ground under our house was once a kangkungan — a kangkong marsh — before it was buried under adobe fill. Ipomoea aquatica is a floating or semi-aquatic creeping plant that colonizes shallow freshwater marshes, ditch edges, and rice paddy margins, rooting directly into wet soil. Its presence requires standing or slow-moving water, confirmed by barangay soil classification data: Tropudults and Tropudalfs, both inherently poorly drained. The kangkungan is gone. The soil conditions that produced it are not."
      },
      {
        title: "Macaranga tanarius (L.) Müll. Arg. — Binunga / Parasol Leaf Tree (Euphorbiaceae)",
        url: "https://www.stuartxchange.org/Binunga.html",
        urlLabel: "Stuart Xchange Philippine Medicinal Plants",
        finding: "The Pioneer Witness",
        body: "A fast-growing pioneer species that colonizes disturbed and formerly waterlogged ground — exactly the ground Canumay East has become. Binunga trees were documented in Google Street View imagery from 2014 growing on empty lots in the barangay, before those lots were built over. They continue to appear in field walks today, particularly around VGC and along D. Bonifacio Drive. Binunga's preference for moist, disturbed soil makes every specimen here an ecological marker: it is growing where the wetland used to be, finding the moisture the concrete couldn't completely seal off."
      },
      {
        title: "Barringtonia asiatica (L.) Kurz — Putat (Lecythidaceae)",
        url: "https://www.stuartxchange.org/Putat.html",
        urlLabel: "Stuart Xchange Philippine Medicinal Plants",
        finding: "The Last Survivor",
        body: "A coastal and freshwater shoreline tree whose bark, leaves, and fruit were used as fish poison — the same ecological function as the Kanumai. One surviving Barringtonia specimen was located during May 2026 field walks, growing behind a factory wall near the Bonifacio canal. A second individual appears near the Valenzuela Gateway Centre canal. These two specimens are among the last living physical evidence of the fish-poison tree culture that operated along this creek system within living memory."
      },
      {
        title: "Muntingia calabura L. — Aratilis / Jamaica Cherry (Muntingiaceae)",
        url: "https://en.wikipedia.org/wiki/Muntingia_calabura",
        urlLabel: "Wikipedia — Muntingia calabura",
        finding: "The Canal-Edge Colonist",
        body: "A pioneer fruit tree that the author remembers from childhood along the old kanal before it was concreted. One wild specimen was located in May 2026 growing at the edge of the D. Bonifacio drainage canal — nobody planted it; it self-seeded into the moist disturbed soil at the concrete edge. Aratilis is one of the few trees that can establish itself on minimal, compacted soils beside active drainage infrastructure. Its presence marks exactly where the old wetland edge ran."
      },
    ]
  },
  {
    id: "laws",
    label: "Laws & Legislation",
    eyebrow: "Legal Record",
    entries: [
      {
        title: "Republic Act No. 8526 (1998) — Valenzuela Cityhood",
        url: "https://www.officialgazette.gov.ph",
        urlLabel: "Official Gazette of the Philippines",
        finding: null,
        body: "Converted the Municipality of Valenzuela into a component city on February 14, 1998. Cityhood accelerated the pace of industrialization and formalized the administrative structures that now govern Canumay East — including the infrastructure investment priorities that left the barangay's internal waterways unmaintained and unnamed in official databases."
      },
      {
        title: "Executive Order No. 401 (1960) — Polo / Valenzuela Separation",
        url: "https://www.officialgazette.gov.ph",
        urlLabel: "Official Gazette · July 21, 1960",
        finding: null,
        body: "Signed by President Carlos P. Garcia on July 21, 1960, separating Polo and Valenzuela as independent municipalities and placing Canumay under Valenzuela's jurisdiction. One of the administrative pivots in the long paper trail that eventually produced the two separate barangays — and the two separate, unequal waterway histories — documented in this project."
      },
      {
        title: "Metropolitan Manila Development Authority v. Concerned Residents of Manila Bay, G.R. Nos. 171947–48 (2008)",
        url: "https://elibrary.judiciary.gov.ph",
        urlLabel: "Supreme Court E-Library",
        finding: "The Legal Thread to Canumay's Canals",
        body: "The Supreme Court's writ of continuing mandamus, issued December 18, 2008, places any waterway that drains into Manila Bay within an ongoing court-ordered rehabilitation chain. Because Canumay East's drainage feeds the Meycauayan River, which feeds Manila Bay, the unnamed concrete canals of Victoria Village are technically covered by this mandate — a legal thread connecting a neighborhood drainage ditch to one of the country's most significant environmental rulings, even if no enforcement has ever pulled on it at that scale."
      },
      {
        title: "Republic Act No. 10958 (17th Congress)",
        url: "https://elibrary.judiciary.gov.ph/thebookshelf/showdocs/2/86764",
        urlLabel: "Supreme Court E-Library",
        finding: null,
        body: "The legislative act enacted on October 30, 2017, that officially executed the partition of the old 341-hectare land area into independent West and East administrative barangay jurisdictions."
      },
      {
        title: "Republic Act No. 9275 — Philippine Clean Water Act (2004)",
        url: "https://www.officialgazette.gov.ph/2004/03/22/republic-act-no-9275/",
        urlLabel: "Official Gazette of the Philippines",
        finding: null,
        body: "The foundational clean water legislation that Valenzuela City cites in its sustainability policy and creek management programs. Technically applies to the Meycauayan River and connected waterways — meaning the unnamed drainage canals of Victoria Village are part of a legally protected watershed system, even if no enforcement has ever touched them at that scale."
      },
    ]
  },
  {
    id: "oral",
    label: "Oral History",
    eyebrow: "Field Records",
    entries: [
      {
        title: "Grandfather — Original Resident, Victoria Village",
        date: "May 2026",
        speaker: "Lolo (maternal grandfather)",
        quote: "Dati, dito, may hito, dalag, samaral. Kangkong, gabi, palay. Tubig malapit — ang balon, bubukas mo lang ang sahig.",
        finding: "Three Fish, One Sentence",
        body: "My grandfather confirmed three fish species living on the exact lot where our house now stands: hito (catfish), dalag (mudfish), and samaral (rabbitfish). On the plant side: kangkong, gabi (the wetland variety), sedge grass, rice paddies, cogon grass at the edges, and coconut trees on slightly drier ground. He also confirmed that the original water table was high enough that a well could be opened directly through the house floor — a detail later corroborated by the soil classification data. He came to Victoria Village for work, built the house, and established the family. That's the whole story I have."
      },
      {
        title: "Barangay Worker — Canumay East Barangay Hall",
        date: "May 2026",
        speaker: "Barangay office staff (name withheld)",
        quote: "Doon dati, sa NLEX overpass — doon nakatayo yung puno. Wala na ngayon.",
        finding: "The Tree and the Bridge",
        body: "Encountered while processing a PWD rice ticket. When asked whether she knew where the original Kanumai tree once stood — the tree the barangay is named after — she said it used to stand at the NLEX overpass bridge, the same structure that physically split Canumay East from Canumay West when construction began in 1966. There is no Kanumai anywhere in the vicinity today: no original, no descendant, no second-generation tree. Just the bridge."
      },
      {
        title: "Neighbors — Victoria Village residents",
        date: "May 2026",
        speaker: "Multiple residents, Victoria Village",
        quote: "Bumabaha talaga dito every typhoon. Hindi bago. Ganyan na since dati.",
        finding: "The Water Always Comes Back",
        body: "Multiple Victoria Village neighbors confirmed the old creek without prompting — none of them needed to be told there used to be water here; they already knew. They described the recurrent flooding as something they lived with rather than were surprised by. Several noted how road levels around their houses had risen over the decades while their own floors stayed at the original elevation, creating the bowl effect described in Log 4."
      },
      {
        title: "Sitio Libis residents — low-lying community",
        date: "May 2026",
        speaker: "Libis residents (several, informal conversation)",
        quote: "Guyabano ang puno namin. Gusto niya ang tubig — basta malapit sa tubig, tumutubo.",
        finding: "The Guyabano Tells You Something",
        body: "Residents of Sitio Libis pointed out guyabano trees growing in their yards — a detail I wouldn't have known to look for. Guyabano prefers moist, well-drained soil close to water. It's a small thing, but it lines up with everything else: this whole stretch sat on a wetland-edge gradient, and the plants people chose to grow (whether they realized it or not) reflect the soil moisture that's still there, even under the concrete."
      },
      {
        title: "Author's Personal Testimony — Victoria Village",
        date: "Ongoing — 20 years",
        speaker: "The author",
        quote: "I remember tadpoles in the kanal before it got concreted over. I didn't think much of it then.",
        finding: "The Well Under the Floor",
        body: "Documents structural evidence including a sealed residential living room well (confirming the original high water table), the historical conversion of local kangkungan marsh via volcanic adobe filler, and a recurring induced-flooding bowl phenomenon caused by elevated street paving around lower, unchanged homes. The tadpoles in the kanal — remembered from childhood, before concreting — confirm that a functioning amphibian breeding habitat existed within my own lifetime, not just historical record."
      },
    ]
  },
];

export default function Research() {
  const [active, setActive] = useState(SECTIONS[0].id);
  const [query, setQuery] = useState("");
  const current = SECTIONS.find(s => s.id === active);
  const isOral = current?.id === "oral";

  const q = query.trim().toLowerCase();
  const filteredEntries = q
    ? (current?.entries || []).filter(e =>
        (e.title || "").toLowerCase().includes(q) ||
        (e.body || "").toLowerCase().includes(q) ||
        (e.finding || "").toLowerCase().includes(q) ||
        (e.quote || "").toLowerCase().includes(q)
      )
    : (current?.entries || []);

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
              onClick={() => { setActive(s.id); setQuery(""); }}
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

              <div className="research-search-wrap">
                <input
                  type="search"
                  className="research-search"
                  placeholder={`Search ${current.label.toLowerCase()}...`}
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                />
                {q && (
                  <span className="research-search-count">
                    {filteredEntries.length} result{filteredEntries.length !== 1 ? "s" : ""}
                  </span>
                )}
              </div>

              <div className="research-entries">
                {filteredEntries.length === 0 ? (
                  <p className="research-no-results">No matches for "{query}"</p>
                ) : filteredEntries.map((entry, i) => (
                  isOral ? (
                    <div
                      key={i}
                      className="research-entry oral-entry"
                      data-date={entry.date}
                    >
                      <p className="oral-speaker">{entry.speaker}</p>
                      <h3 className="entry-title">{entry.title}</h3>
                      {entry.finding && (
                        <p className="entry-finding">{entry.finding}</p>
                      )}
                      {entry.quote && (
                        <p className="oral-quote">"{entry.quote}"</p>
                      )}
                      <p className="entry-body">{entry.body}</p>
                    </div>
                  ) : (
                    <div key={i} className="research-entry">
                      <div className="entry-header">
                        <h3 className="entry-title">{entry.title}</h3>
                        {entry.url
                          ? <a href={entry.url} target="_blank" rel="noopener noreferrer" className="entry-url">{entry.urlLabel}</a>
                          : <span className="entry-url muted">{entry.urlLabel}</span>
                        }
                      </div>
                      {entry.finding && (
                        <p className="entry-finding">{entry.finding}</p>
                      )}
                      <p className="entry-body">{entry.body}</p>
                    </div>
                  )
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
