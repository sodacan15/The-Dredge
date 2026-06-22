import { useState } from "react";
import PageHeader from "../components/PageHeader";
import { RenderedDoc } from "../components/TextParser";

const TIMELINE_EVENTS = [
  {
    year: "1571",
    text: "Battle of Bangkusay: Spanish conquest reaches the area",
  },
  {
    year: "1623",
    text: "Polo established as independent town from Catangalan",
  },
  { year: "1887", text: "Pío Valenzuela born in Polo" },
  {
    year: "1898",
    text: "Revolution: Pío Valenzuela elected first municipal mayor",
  },
  {
    year: "1960",
    text: "EO 401 separates Polo and Valenzuela; Canumay placed under Valenzuela",
  },
  {
    year: "1966",
    text: "NLEX construction begins: physically divides Canumay east and west",
  },
  {
    year: "1975",
    text: "Jurisdiction transferred to Metro Manila; rapid industrialization begins",
  },
  { year: "1998", text: "Republic Act 8526: Valenzuela granted cityhood" },
  {
    year: "2017",
    text: "RA 10958 formalizes Canumay East / Canumay West split",
  },
  {
    year: "2025",
    text: "State of calamity after three typhoons; emergency dredging excludes Canumay East's internal waterways",
  },
  {
    year: "2026",
    text: "Polo Riverwalk opens. This project's field research conducted.",
  },
];

// Block index in log1 where the old { type: "timeline" } block sits — everything before it
const LOG1_BEFORE_TIMELINE = 13; // blocks 0–12
// everything after it starts at index 14

const LOGS = [
  {
    id: "log1",
    label: "Log 1",
    date: "— FIELD NOTES, MAY 2026 —",
    blocks: [
      {
        type: "title",
        text: "The Brief History of Valenzuela and Canumay East",
      },
      {
        type: "quote",
        text: "This land was already written. Eleven creeks, eleven names. We just stopped reading it.",
      },
      {
        type: "subtitle",
        text: "Valenzuela: An Island That Wasn't Quite an Island",
      },
      {
        type: "seg",
        text: "Valenzuela City sits on the northwestern edge of Metro Manila, about 14 kilometers north of Manila proper, bordered by Bulacan to the north and Caloocan to the south. It occupies a low-lying alluvial plain carved out by the Meycauayan River system. Long before it was Valenzuela, this land was just water-shaped earth. The numbers back that up even today: roughly a quarter of the city sits below sea level, with elevations ranging from about 5 meters below at the lowest point to 109 meters at the highest. [1] Even the parts that count as high ground here aren't very high.",
      },
      {
        type: "seg",
        text: "The town's first name was Polo, from the Tagalog pulô, meaning island, and it earned that name honestly. [2] Before the Spanish arrived, this was already a wetland-agricultural community built around an abundance of waterways: the Tullahan River on one side and branches of the Rio Grande de Pampanga on the other, enough that early residents genuinely experienced it as separate land, an island ringed by rivers rather than sea. This was especially true around Coloong, Lingunan, and the barangay of Polo itself.",
      },
      {
        type: "seg",
        text: "In 1571, the Battle of Bangkusay brought the Spanish conquest of Manila and the surrounding area, folding Polo into the township of Catangalan (present-day Meycauayan) under the Bulacan alcaldía. In 1587, the first organized Filipino plot against Spanish rule, known as the Tondo Conspiracy, was partly hatched in neighboring Tambobong (present-day Malabon). Under Spanish rule, the areas of Polo functioned as an Augustinian friar hacienda (Malinta in particular), a garrison town, and a political settlement: the kind of place that appears in colonial records mostly as a waypoint, not a destination.",
      },
      {
        type: "seg",
        text: "Polo was formally established as an independent town on November 12, 1623, by Governor-General Alonso Fajardo de Entenza, separated out from Catangalan. By 1761, Polo had been re-established as its own municipality. An 1818 Spanish census counted 3,160 native families and 11 Spanish-Filipino families in the area.",
      },
      {
        type: "seg",
        text: "The town's eventual renaming is where local history gets a name and a face. Dr. Pío Valenzuela was born in Polo in 1887. He is a physician, Katipunero, one of the key figures in the revolutionary movement against Spain. During the 1898 Philippine Revolution he was elected the area's first municipal mayor, and it's his role in that uprising that earned the town his surname decades later, when a portion of old Polo was carved out and renamed in his honor.",
      },
      { type: "subtitle", text: "The Long Road to Cityhood" },
      {
        type: "seg",
        text: "What happened next reads less like a clean timeline and more like a town being passed back and forth. American colonial administration (1899–1941) brought roads, schools, formal census-taking, and slow industrialization. Adobe stone, the same volcanic material later used to bury the kangkungan marsh under my own house, came into wide use as a construction material around this period. Japanese occupation during World War II brought destruction and displacement; postwar rebuilding accelerated the area's urbanization.",
      },
      {
        type: "seg",
        text: "On July 21, 1960, President Carlos P. Garcia signed Executive Order No. 401, [6] dividing Polo from Valenzuela as separate municipalities. That arrangement didn't even last: by 1963 the split was reversed, and the two towns were reunified. In 1975, jurisdiction transferred from Bulacan to Metro Manila. Cityhood came on February 14, 1998, through Republic Act 8526. [7]",
      },
      {
        type: "seg",
        text: "Today the city carries a real, documented list of business and governance awards. The Philippine Chamber of Commerce and Industry inducted Valenzuela into its Most Business-Friendly LGU Hall of Fame after wins in 2012, 2014, and 2015, then handed the city the award again in 2019 and 2020, with a special citation as recently as 2025. The World Bank and International Finance Corporation's 2011 ease-of-business rankings put Valenzuela first out of 25 nominated cities for Ease of Registering Property, fourth for Ease of Starting a Business, and sixth for Ease of Dealing with Construction Permits. [8] By most economic measures, this is a success story. By the measures that matter for this project, it's the story of how a wetland got paved and faded in the recess of time.",
      },
      {
        type: "image",
        src: "/dr_valenzuela.jpg",
        contain: true,
        caption:
          "Dr. Pío Valenzuela (1869–1956), physician, Katipunero, first elected mayor of the area during the 1898 Philippine Revolution. The city, and this research, carry his name. Photo: Wikipedia / Wikimedia Commons.",
      },
      // ← timeline renders here in JSX, this slot is intentionally empty in blocks
      { type: "subtitle", text: "Canumay: The Barangay That Got Cut in Half" },
      {
        type: "seg",
        text: "Before the split, old Canumay was one of the largest original barangays in Valenzuela. 341 hectares combined, seven sitios, and eleven sapangs; all of the land is named after the Kanumai tree. [4] Each sitio name was its own small piece of ecological evidence: Kaypandan for the pandan that grows at marshy edges; Bilaran for where people dried fish and crops by the water; Daang Malalim for a sunken, flood-prone road; Pinagbayanan for the old town center; Dulong Canumay for the farthest edge of the barangay; and Canumay itself, where a big tree is located.",
        marginNote:
          "Sitio names as ecological field data. No biologist needed, people already wrote it down.",
      },
      {
        type: "seg",
        text: "The split into Canumay East and Canumay West didn't happen overnight, nor was it due to some divide between the communities. It started physically on October 2, 1966, when construction crews under Col. Tan of the 512th Engineering Construction Battalion began cutting the Manila North Diversion Road to become NLEX. [3] The project diagonally cut through Canumay's western edge; about a kilometer of highway sliced through old barangay territory. The source material I'm working from calls this the ecological turning point, and after sitting with the rest of the research, I'd agree. That physical division became an administrative one decades later: City Ordinance No. 37 in November 2011 proposed the formal split; a plebiscite on March 3, 2012 (notably overseen by deployed AFP and PNP personnel) ratified it; and Republic Act No. 10958, passed by the 17th Congress on October 30, 2017, made it official. [5] Canumay East came out of that division at 1,563,546 square meters, or 156 hectares. Canumay West came out larger, at 1,850,972 square meters, or 185 hectares. One ecosystem, split unevenly into two barangays. This also birthed a unique tradition: every two years, both barangays pass around the celebration of Easter Sunday.",
      },
      {
        type: "seg",
        text: "Canumay East today is bounded by Lingunan and Lawang Bato to the northwest and holds two distinct internal zones: high-ground hilly zones and low-ground areas such as Victoria Village, Sitio Libis, and Marton Road. No matter how high or low their topography is, both are highly industrialized, with factories such as New Star Apa and Paper One blending with residential homes. As of the 2020 census, the barangay had a population of 14,657 (up from 12,462 in 2015, spread across 3,455 households averaging 3.61 members each); [3] the largest single age group is 20- to 24-year-olds, just over 1,500 people. That's the paper trail: the borders, the renamings, the splits, the headcounts. Now for the part that actually matters to this project: what was living on this land before any of it happened?",
      },
      {
        type: "image",
        src: "/Assets/barangay-map.jpg",
        caption:
          "Road Map of Barangay Canumay East, the official map showing the NLEX diagonal cut on the left, the named roads, and the waterway lines that represent what used to be eleven living creeks. Note: for reference purposes only, not to scale. Source: Barangay Hall of Canumay East, official records.",
      },
      {
        type: "citeblock",
        citations: [
          { title: "Valenzuela City Ecological Profiles 2019/2021 — elevation, sea-level share, topographic range", url: "https://valenzuela.gov.ph" },
          { title: "Valenzuela City History Portal — Polo etymology (pulô) and early colonial settlement", url: "https://valenzuela.gov.ph/history" },
          { title: "PhilAtlas — Canumay East — NLEX construction date, 2020 census population, area figures", url: "https://www.philatlas.com/luzon/ncr/valenzuela/canumay-east.html" },
          { title: "Official Barangay Profile History, Section 2.1 — seven sitios, eleven sapang, 341 ha combined (Barangay Hall physical archives, Canumay East)", url: null },
          { title: "Republic Act No. 10958 (17th Congress, 2017) — formal administrative split of Canumay", url: "https://lawphil.net/statutes/repacts/ra2017/ra_10958_2017.html" },
          { title: "Executive Order No. 401 (President Garcia, July 21, 1960) — Polo/Valenzuela separation", url: "https://www.officialgazette.gov.ph" },
          { title: "Republic Act No. 8526 (February 14, 1998) — Valenzuela cityhood", url: "https://www.officialgazette.gov.ph" },
          { title: "World Bank / IFC — Philippines Doing Business Survey (2011) — Valenzuela ease-of-business rankings", url: "https://documents.worldbank.org" },
        ],
      },
    ],
  },
  {
    id: "log2",
    label: "Log 2",
    date: "— FIELD NOTES, MAY 2026 —",
    blocks: [
      { type: "title", text: "What is Canumay?" },
      {
        type: "seg",
        text: "Every barangay in this part of Valenzuela is named after something: a tree, a feature, a memory of what used to grow there. Canumay's namesake is a tree most people here have never seen, because it isn't here anymore. This log is about that tree, the eleven creeks it used to stand near, and what's left of either.",
      },
      {
        type: "image",
        src: "/Assets/barangay-profile.jpg",
        contain: true,
        caption: "Barangay Profile of Canumay East, Section 2.1 — the official history document listing all 7 sitios and 11 sapang. The Kanumai tree is named explicitly as the barangay's landmark. Barangay Hall physical archives.",
      },
      { type: "subtitle", text: "The Tree Itself: Diospyros canomoi" },
      {
        type: "seg",
        text: "The Kanumai (Diospyros canomoi A. DC.) belongs to the Ebenaceae family, the same family as kamagong and mabolo. [1] It differs from its similar cousin, Diospyros maritima, mainly in habitat. Where D. maritima prefers environments close to the open sea, D. canomoi usually favors hilly ground near fresh water. According to the official Barangay Profile of Canumay East, [2] the tree was once tall enough to serve as a literal landmark: people orienting themselves toward the area would navigate by spotting it. It grew in lowland thickets, favored low to medium altitude, and like a lot of plants tied to old fishing communities, its bark and fruit were used as fish poison, thrown into the water to stun fish for easier harvest. [1] That detail alone tells you something about the landscape it grew in: water close by, fish worth catching, and people who knew how to use both.",
      },
      {
        type: "image",
        src: "/kanumai.jpg",
        caption:
          "Diospyros canomoi (Kanumai), botanical illustration showing the leaves, fruit clusters, and flower detail. The fruit and bark were used as fish poison by communities along the creeks. Illustration: Stuart Xchange / Philippine Medicinal Plants.",
      },
      {
        type: "image",
        src: "/canumai_reimagined.png",
        caption:
          "The Kanumai as it might have stood, a theoretical rendition of the tree by the author. No photograph of the original exists; this is reconstruction from description alone.",
      },
      {
        type: "image",
        src: "/Assets/old-farm.jpg",
        caption: "An old agricultural land use typical of old Canumay. But now it has been transformed into storage for trucks. Source: Field Pictures.",
      },
      {
        type: "image",
        src: "/Assets/emptylot2014.jpg",
        caption: "An empty lot in Canumay East, February 2014. Pioneer trees already reclaiming disturbed ground before the lot was built over. The adobe rubble is typical of infill construction. Source: Google Street View.",
      },
      {
        type: "image",
        src: "/Assets/binunga2014.jpg",
        caption: "A binunga tree on a Canumay East street, February 2014. Pioneer trees were colonizing disturbed lots even then. The contrast between the tree and the concrete wall behind it is the whole story. Source: Google Street View.",
      },
      {
        type: "subtitle",
        text: "Ecology and Topography, Before Any of This Was Paved",
      },
      {
        type: "seg",
        text: "Old Canumay sat at the meeting point of upland and wetland. Hillier ground to the north and low marsh to the south, with creeks threading the gap between them. The soil classification map prepared by Valenzuela's City Planning and Development Office and the Bureau of Soils and Water Management [3] still places Canumay East entirely within a single soil zone: Tropudults with Tropudalfs, Tropepts, and Oxisols. Every one of those classifications independently points to the same conclusion: historically wet, poorly drained, seasonally waterlogged ground. The mix between the high elevation of the hills and the lower elevations of the marshes creates a dynamic environment. The higher hills contain a lot of trees, and when rain comes, the water drains to the lower parts of the land where the marshes exist.",
      },
      {
        type: "image",
        src: "/kangkong.jpg",
        caption:
          "Ipomoea aquatica (kangkong/water spinach), the plant that covered the low marsh zones of Victoria Village and Libis before the land was filled with adobe. Photo: Wikimedia Commons.",
      },
      {
        type: "image",
        src: "/soil-map.png",
        caption:
          "Soil Classification Map of Valenzuela City, prepared by the Bureau of Soils and Water Management and the City Planning and Development Office. Canumay East sits entirely in the pink zone: Tropudults with Tropudalfs, Tropepts, and Oxisols. All of those soil types independently point to historically wet, poorly drained, seasonally waterlogged ground. The soil remembers what the surface forgot. Source: BSWM / City Planning and Development Office, retrieved via FOI (foi.gov.ph).",
      },
      { type: "subtitle", text: "The Eleven Creeks" },
      {
        type: "seg",
        text: "The eleven sapa or creeks of old Canumay had names. [2] Not labels, not survey coordinates. Names. Every single one was a description written in Tagalog by the people who actually lived beside the water. You could reconstruct the whole landscape just from reading them carefully.",
      },
      {
        type: "seg",
        text: 'Sapang Bulok ("Rotten Creek") described the stagnant, decomposing smell of healthy marsh chemistry. Sapang Pangitlogan-Bakaw, or "Creek of the Mangrove Nesting Ground," confirms there were mangroves here once, with birds nesting and laying eggs along the bank. Sapang Halang Sa Araw, or "Creek Blocked from the Sun," describes a canopy so thick over the water that sunlight couldn\'t reach it, meaning it\'s an old-growth forest wetland. Sapang Bangka-bangka was wide and deep enough for boat travel. Sapang Binawan was where people set fish traps. Read together, it\'s a descriptive way to describe the waterways of Canumay and how people depend on and co-exist with them. [2]',
      },
      { type: "sapang-glossary" },
      { type: "subtitle", text: "The Heart of It: One Big Tree in the Middle" },
      {
        type: "seg",
        text: "By most accounts, there used to be one especially large Kanumai standing more or less at the center of old Canumay, the kind of tree a whole community could use to find its way home. It's gone now. Not relocated, not replaced, just gone. The species that gave the barangay its name no longer exists anywhere, at least not in what I know in Canumay East.",
      },
      {
        type: "quote",
        text: "A barangay named after a tree that no longer grows there. The whole archive is right there, in that one sentence.",
      },
      { type: "subtitle", text: "What's Left Today" },
      {
        type: "seg",
        text: "Here's where it gets a little eerie. I asked a barangay worker I happened to run into while getting my aunt's PWD rice ticket. I asked her if she knows where the giant Kanumai tree that gave our barangay their name is located. She told me that the tree used to stand on the NLEX overpass bridge, the same bridge that physically split Canumay East from Canumay West back in 1966. [4] There's no Kanumai standing anywhere in the vicinity today, no original, no descendant, and no second-generation tree. Just highway. But on that highway was also a bridge: one traversable by foot and by motorcycle that bridges the two barangays.",
      },
      {
        type: "image",
        src: "/nlex-bridge-highway.jpg",
        caption:
          "From inside the NLEX looking toward Canumay, the overpass where the barangay's namesake tree once stood is now just a lane marker in a four-lane expressway. Google Street View, Apr 2025.",
      },
      {
        type: "seg",
        text: "As for the eleven creeks, there aren't any left, not really, and the research bears out exactly how they disappeared. Their location is lost to time, and what's left of the creeks, the Canumay Creek on the western side, is used as a drainage and flood control area. As for Canumay East? What runs through the area now, where Valenzuela Gateway Center used to drain toward Marton, is functionally just one of those concrete lines that moves water, technically, but doesn't support life the way a creek does. A creek has fish, insects, birds, and plants rooted along its banks; a drainage canal is a pipe that happens to be open on top.",
      },
      {
        type: "seg",
        text: "So that's Canumay reduced to its two clearest symbols: a highway overpass standing exactly where its namesake tree once did and a former network of eleven living creeks erased and replaced by one engineered canal that carries everything except the things that used to live in the water.",
      },
      {
        type: "citeblock",
        citations: [
          { title: "Stuart Xchange — Diospyros canomoi A. DC. (Kanumai) — Ebenaceae family, habitat, fish-poison use", url: "https://www.stuartxchange.org/Kanumai.html" },
          { title: "Official Barangay Profile History, Section 2.1 — Kanumai as landmark, eleven sapang names and meanings (Barangay Hall physical archives)", url: null },
          { title: "BSWM Soil Gateway / City Planning and Development Office — Canumay East soil classification (Tropudults, Tropudalfs, Oxisols)", url: "https://www.foi.gov.ph" },
          { title: "Barangay office staff, personal communication, May 2026 — oral account of Kanumai tree location at NLEX overpass", url: null },
        ],
      },
    ],
  },
  {
    id: "log3",
    label: "Log 3",
    date: "— FIELD NOTES, MAY 2026 —",
    blocks: [
      { type: "title", text: "The Portraits of Canumay East" },
      {
        type: "seg",
        text: "If Log 2 was about the official records (barangay profiles, soil maps, place names), this log is about the people who actually remember the water, and the image it forms of the barangay.",
      },
      { type: "subtitle", text: "Testimonials: What Lolo Remembers" },
      {
        type: "quote",
        text: "He said it the way you'd say 'we used to have a dog.' Like it was just a fact. Like the fish were gone, the water no longer there.",
      },
      {
        type: "seg",
        text: "I interviewed my own grandfather for this. Turns out, our house was once a kangkungan before it got dumped by adobe rocks and cemented. He confirmed three fish species live on where our house stands: hito (catfish), [2] dalag (mudfish, an iconic wetland species whose presence alone tells you the ecosystem was functioning), [3] and samaral (rabbit fish). [4] On the plant side, he named kangkong, [5] gabi (wetland variety), active rice paddies (palayaban), cogon grass at the wetland edges, and coconuts on the slightly drier ground near homes. I also have my own memory to add to his: tadpoles and dragonflies living in the kanal near our house before it was concreted over. Sure it is in a canal but it did function. [1]",
        marginNote: "I took me a lot of courage to ask him about this.",
      },
      {
        type: "image",
        src: "/dalag.jpg",
        caption:
          "Channa striata (dalag/mudfish), my grandfather confirmed these lived where our house now stands. Its presence alone tells you the ecosystem was once functioning. Photo: Wikimedia Commons.",
      },
      {
        type: "image",
        src: "/kangkong.jpg",
        caption:
          "Ipomoea aquatica (kangkong / water spinach) — my grandfather confirmed the ground under our house was once a kangkungan before it was buried under adobe. Still found growing wild in wet margins throughout the barangay. Photo: Wikimedia Commons.",
      },
      {
        type: "image",
        src: "/Assets/gabi.jpg",
        caption:
          "Colocasia esculenta (gabi, wetland taro), still growing in a neighbor's sidewalk, a living remnant of the old wetland-edge ecosystem. Field photograph.",
      },
      {
        type: "seg",
        text: "Neighbors in Victoria Village backed up his account of the old creek without my having to prompt them. About 500 meters away, residents of Sitio Libis (whose name literally just means \"low-lying area\" in Filipino) confirmed the area's water-rich history too and pointed out something I wouldn't have known to look for: guyabano trees in their yards, which prefer moist, well-drained soil close to water. A small detail, but it lines up with everything else: this whole stretch sat on a wetland-edge gradient, and the plants people chose to grow (whether they realized it or not) reflect that.",
      },
      {
        type: "seg",
        text: "Sitio Libis turned out to be a bigger part of this story than I expected when I started. It's the subject of an actual peer-reviewed case study. Corrine Cash and their study \"Creating the Conditions for Climate Resilience: A Community-Based Approach in Canumay East, Philippines,\" published in the journal Urban Planning in 2021, [6] documents a community that organized itself, more or less from scratch, against the same flooding and water problems. Libis sits on land originally owned by the Philippine Veterans Bank; residents lived there for years under the constant threat of eviction before organizing as the United Libis Homeowners Association (ULHOA), led by Theresa Carampatana, to purchase the land outright and re-block their own settlement. [6] They did it by replanning narrow, flood-prone footpaths into a layout that could actually drain. It worked well enough that ULHOA has since been invited to speak at UN-Habitat Philippines events about community-led flood and waste management. None of that is ecology, exactly, but it's the human half of the same story: the water never left, and the people living closest to it have been doing the adapting almost entirely on their own.",
      },
      {
        type: "image",
        src: "/Assets/toLibis.jpg",
        caption:
          "The path toward Sitio Libis, a community that organized itself from scratch against the same flooding problems the whole barangay shares. They eventually purchased the land and re-blocked the settlement entirely. Field photograph.",
      },
      { type: "subtitle", text: "Guesswork, But Grounded Guesswork" },
      {
        type: "seg",
        text: "I want to be upfront: I'm a computer science student, not an ecologist. Everything past this point is reconstruction, not certainty. But it's reconstruction built on real evidence: topography, soil classification, creek names, oral testimony, and the fact that Canumay's waterways are technically still part of the Meycauayan River system, which connects onward through Manila Bay to the broader Pampanga River watershed, which is why this little barangay's drainage technically falls under the Supreme Court's Manila Bay rehabilitation mandate [7] — a legal thread connecting our backyard canal to one of the country's biggest environmental cleanup efforts, even if nobody's pulled on that thread yet.",
      },
      {
        type: "seg",
        text: "Putting the topography, the soil, the creek etymology, and the testimonials together, a rough zoning emerges: high ground to the north held Kanumai and Putat trees, coconut groves, and old mango trees, marking generational home sites. The wetland-edge zone held cogon grass, pandan, aratilis, guava, and malunggay. The low marsh zone, where Victoria Village, Libis, and Marton sit now, held the kangkungan marsh, gabihan, and rice paddies, with a water table so close to the surface that wells could be dug straight through a house floor. And running through all of it: eleven creeks, mangroves, boat traffic, fish traps, and the whole water-and-wildlife system Log 2 already laid out.",
      },
      {
        type: "image",
        src: "/Assets/vgc-fruit.jpg",
        caption:
          "An unidentified fruiting tree inside Valenzuela Gateway Center, likely planted as an ornamental, but possibly a relative of the old wetland-edge flora. Field photograph.",
      },
      { type: "subtitle", text: "What Must Have Lived Here Too" },
      {
        type: "seg",
        text: "Nobody interviewed for this project specifically remembered frogs or birds, but the plants and fish they did confirm make certain animals almost a logical necessity, not just a guess. A functioning kangkungan marsh and active rice paddies mean frogs and other amphibians had somewhere to breed. A mangrove creek literally named for nesting birds, Sapang Pangitlogan-Bakaw, means egrets, herons, and other wading birds were nesting along those banks. Cogon grass edges would have held maya birds. A marsh this functional would have supported dragonflies, water striders, and diving beetles, plus freshwater crabs and shrimp in the creek system itself. None of this is confirmed the way the fish and plants are. But ecosystems don't work piecemeal: if the marsh plants and the marsh fish were here, the rest of the food web almost has to have been here too.",
      },
      { type: "subtitle", text: "The Landscape Now" },
      {
        type: "seg",
        text: "None of that is visible at street level anymore. Canumay East today is mostly cemented; the waterways are narrowed to drainage canals, and road heights have risen over the decades until the canals sit walled off below them. This is further exasperated by industrialization and modernization, especially by companies such as Sibesco (now operating as Vision Corporation in Meycauayan, the reason my grandfather moved here). What trees remain are mostly ornamental or pioneer species, plants that move in after disturbance, not plants that were chosen for the site.",
      },
      { type: "subtitle", text: "What's Still Here, If You Look" },
      {
        type: "seg",
        text: "And yet. My field walks in May 2026 turned up more survivors than I expected. Aratilis is growing wild beside the big drainage canal on D. Bonifacio Drive. [8] Nobody planted it; it just colonized the disturbed, moist soil at the canal's edge. There also used to be an aratilis in our area before it disappeared. I still remember the sticky-sweet smell of its crushed fruit from when I was a kid. Gabi, the wetland variety of taro, is still growing in neighborhood gardens. Mango and guava trees old enough to mark where past homesteads stood, mango trees can live 100 to 300 years, so the ones still standing here were very likely planted by someone's great-grandparents. I remember one tree that died two years later after its owner died. Malunggay, planted beside nearly every house, generation after generation. There are also binunga trees growing around empty lots in the land, which are known for their sticky sap. [7] As you can see, most of the plants that thrive in the area are pioneer trees, thriving and living in areas that were once surrounded by water.",
      },
      {
        type: "image",
        src: "/aratilis.jpg",
        caption:
          "Aratilis growing over a concrete wall on D. Bonifacio Drive. Nobody planted it here. It colonized the moist, disturbed soil at the canal's edge on its own. This exact tree is the one mentioned in the log. Field photograph, D. Bonifacio Drive.",
      },
      {
        type: "image",
        src: "/Assets/mangoxguava.jpg",
        caption:
          "A mango tree alongside a guava beside a neighborhood home in Canumay East. Mango trees live 100 to 300 years — the ones still standing were almost certainly planted by someone's great-grandparents. Field photograph.",
      },
      {
        type: "image",
        src: "/Assets/canal-plants.jpg",
        caption:
          "Canal-edge vegetation along Canumay East, pioneer species colonizing the disturbed, moist soil where creeks used to flow. Field photograph.",
      },
      {
        type: "image",
        src: "/Assets/binunga.jpg",
        caption:
          "Macaranga tanarius (binunga) growing around empty lots, a pioneer species that thrives in areas once surrounded by water. The sticky sap is a distinctive field marker. Field photograph.",
      },
      { type: "subtitle", text: "The Full Portrait" },
      {
        type: "seg",
        text: "Put it all together, and Canumay East looks like a ghostly wetland. Sure, it may seem like an ordinary neighborhood filled with pioneer and heritage trees and plants. But beneath it is remnants and evidence of a place that it once was.",
      },
      {
        type: "citeblock",
        citations: [
          { title: "Grandfather (maternal), personal communication, May 2026 — species present, original land conditions before infill", url: null },
          { title: "FishBase — Clarias batrachus (hito / walking catfish) — ecological range", url: "https://www.fishbase.se/summary/Clarias-batrachus.html" },
          { title: "FishBase — Channa striata (dalag / striped snakehead) — wetland ecosystem indicator", url: "https://www.fishbase.se/summary/Channa-striata.html" },
          { title: "FishBase — Siganus sp. (samaral / rabbitfish) — estuarine and brackish-water indicator", url: "https://www.fishbase.se/identification/SpeciesList.php?famcode=430" },
          { title: "Stuart Xchange — Ipomoea aquatica (kangkong / water spinach) — wetland habitat indicator", url: "https://www.stuartxchange.org/Kangkong.html" },
          { title: "Cash, Corrine — \"Creating the Conditions for Climate Resilience\" (2021), Urban Planning Vol. 6 No. 2 — ULHOA / Sitio Libis community study", url: "https://www.cogitatiopress.com/urbanplanning/article/view/4205" },
          { title: "Stuart Xchange — Macaranga tanarius (binunga / parasol leaf tree) — pioneer species, disturbed sites", url: "https://www.stuartxchange.org/Binunga.html" },
          { title: "Wikipedia — Muntingia calabura (aratilis / Jamaica cherry) — colonizes disturbed, moist soils", url: "https://en.wikipedia.org/wiki/Muntingia_calabura" },
          { title: "Neighbors / Sitio Libis residents, personal communication, May 2026 — guyabano trees, creek memory", url: null },
        ],
      },
    ],
  },
  {
    id: "log4",
    label: "Log 4",
    date: "— FIELD NOTES, MAY 2026 —",
    blocks: [
      { type: "title", text: "The Shape of the Water" },
      {
        type: "seg",
        text: "This is the log where the project stops being about what's gone and starts being about what keeps coming back, whether the city wants it to or not, we still keep getting flooded.",
      },
      { type: "subtitle", text: "The Dead Zone Where a Creek Used to Be" },
      {
        type: "image",
        src: "/Assets/bonifacio-canal.jpg",
        caption:
          "The drainage canal along D. Bonifacio Drive, concrete infrastructure where a living creek ecosystem once ran. Almost nothing lives in it. Field photograph.",
      },
      {
        type: "seg",
        text: "The drainage canal running along D. Bonifacio Drive and through parts of Canumay East isn't a creek. It only looks like one if you don't know what you're looking at. A creek is a living system. It has fish, insects, birds, and plants rooted along the banks, the whole slow machinery of a wetland doing its job. A concrete canal is infrastructure. It moves water out of the area as efficiently as possible, and that's the whole job description. Almost nothing lives in it. The closest thing to life I found near the drainage near D. Bonifacio was a single aratilis tree growing wild at the canal's edge, a pioneer species colonising disturbed soil, which is not a sign of the canal supporting an ecosystem so much as a sign of how desperately moisture-loving plants will take whatever edge habitat they can get. One fish-poison tree, Barringtonia, survives behind a factory wall nearby and in a canal near the Valenzuela Gateway Centre. That's roughly the state of biodiversity along what used to be eleven living creeks: one tree behind a wall and a canal that functions, ecologically speaking, as a dead zone.",
      },
      {
        type: "image",
        src: "/Assets/Baringtonia.jpg",
        caption:
          "Barringtonia asiatica (Putat), one surviving specimen found behind a factory wall near the Bonifacio canal. A remnant of the fish-poison trees that fishing communities once relied on. Field photograph.",
      },
      {
        type: "seg",
        text: "And the dead zone doesn't stay local. Victoria Village's kanal drains into Canumay East's unnamed waterways, which drain into the Meycauayan River, which drains into Manila Bay. [1] It then connects, however loosely, to the much larger Pampanga River watershed reaching back to the Sierra Madre. We sealed the kangkungan with concrete and mostly forgot. The Meycauayan River itself isn't a footnote here. As part of the Marilao-Meycauayan-Obando River System, it was named to the Blacksmith Institute's 2007 \"Dirty Thirty\" list of the world's most polluted places, [2] and multiple peer-reviewed water studies independently describe it as one of the most severely polluted rivers in the Philippines. Downstream dissolved oxygen has been measured as low as 0.49 parts per million in published water quality research [3] (vs. a fish survival minimum of about 5 ppm); the contamination includes lead from battery recycling, hexavalent chromium from leather tanning, mercury, and nickel, [2] and despite all of that, the river still serves as a domestic and agricultural water source for roughly 250,000 people. [3] The nearby Tullahan River, which forms Valenzuela's southern border, is in even worse shape: functionally biologically dead and one of seven Philippine rivers identified as major contributors of plastic waste to the world's oceans. It's worth sitting with the irony in its name: \"Tullahan\" comes from \"tulya,\" meaning clam, because the river was once so full of shellfish that people named it after them.",
      },
      {
        type: "image",
        src: "/Assets/vgc-canal.jpg",
        caption:
          "A canal running through VGC. Water moves, but nothing lives in it. Field photograph.",
      },
      {
        type: "subtitle",
        text: "Flooding: The Water Remembers Where It Used to Be",
      },
      {
        type: "image",
        src: "/nlex_east2west.jpg",
        caption:
          "Looking east to west along the NLEX, the physical divide that split old Canumay in 1966. The highway was built over and beside the original creek corridor. In July 2025, flooding along this section shut it down for five hours. Field photograph.",
      },
      {
        type: "seg",
        text: "Victoria Village floods every typhoon season, and it isn't random. My family's house sits in one of the lowest parts of Canumay East, and it receives water from every surrounding direction. That's not bad luck. That's the original marsh elevation reasserting itself.",
      },
      {
        type: "seg",
        text: "It's gotten worse over the decades because of something with an actual name: induced flooding. Neighbors build up. They raise their floors, add fill soil, and repave their section of road a little higher each time. Drainage channels get raised to match the new road levels. And the houses that were never raised, usually because the people in them couldn't afford to, end up sitting in what amounts to a bowl, catching runoff from every surface around them. That's not just an environmental story. It's an environmental justice one. The people who flood worst are, almost without exception, the people who had the least ability to keep raising their homes to stay ahead of the water.",
      },
      {
        type: "seg",
        text: "July 2025 made the stakes concrete, literally and otherwise. Valenzuela was declared under a state of calamity after Typhoons Crising, Dante, and Emong hit in close succession; more than 9,000 people had to be rescued and evacuated citywide. [6] On July 21 specifically, nearly half a kilometer of NLEX itself went under a meter of floodwater for more than five hours, and that single event is what triggered the emergency dredging operations that followed in August, when over 69,000 cubic meters of silt and debris were pulled from eleven priority waterways across Valenzuela and Meycauayan. [7]",
      },
      {
        type: "seg",
        text: "On top of all of that, the ground itself is slowly sinking. Valenzuela sits inside the CAMANAVA area (Caloocan, Malabon, Navotas, Valenzuela), one of the worst subsidence zones in Metro Manila. Older satellite data (2003–2011) put the CAMANAVA rate at 20 to 42 millimeters a year; [4] more recent measurements from 2015–2019 suggest it's actually improved to roughly 10 to 20 millimeters a year, [5] which researchers attribute to groundwater extraction restrictions inside Metro Manila proper. It's a rare piece of good news in this research, though it comes with a sharp asterisk, since the unrestricted provinces just outside the city line, Bulacan and Cavite, are still sinking at 40 millimeters a year or more. [4] The honest, uncomfortable version of the flooding story is that it isn't primarily about heavier rain. It's that the ground is sinking faster than the sea is rising.",
      },
      {
        type: "image",
        src: "/Assets/marton-estero.jpg",
        caption:
          "The canal near Marton Road, one of the last visible waterways in Canumay East, now functioning as a flood drain rather than a living creek. Field photograph.",
      },
      {
        type: "image",
        src: "/Assets/old-canal.jpg",
        caption:
          "A canal in Canumay East. The water has nowhere to go except down and in. This is the geometry of induced flooding: streets raised over decades, drainage walls lifted to match, and the original marsh-level homes sitting lower with each cycle. Field photograph.",
      },
      {
        type: "quote",
        text: "The city dredged the creek that flooded the highway. Nobody dredged the creek that just flooded the houses.",
      },
      { type: "subtitle", text: "What the City Is Doing, and Isn't" },
      {
        type: "seg",
        text: "This is the part of the research that turned out to be less about ecology and more about who gets protected. The eleven waterways targeted in the August 2025 dredging operation were chosen specifically because their blockages were worsening flooding along NLEX and in Valenzuela and Meycauayan more broadly after that five-hour highway submersion in July. [7] Canumay West does have two named, tracked creeks, Paso de Blas Creek at L. San Diego and at T. Santiago, both included in the 2025 cleanup. The pattern holds up uncomfortably well across the whole research: creeks that touch NLEX get dredged, get named, and get official attention because protecting them protects the highway. Lingunan, the barangay next door, had one of its creeks named DENR's Most Improved Estero in Metro Manila in 2021. [8] In the World Bank's own sewerage system assessment, Canumay East falls under the sub-catchment that received the least infrastructure investment of the three covered by the project. [9]",
      },
      {
        type: "seg",
        text: 'To be fair, it\'s not nothing, citywide. Valenzuela runs creek and waterway cleanup drives with MMDA, cites the Clean Water Act (Republic Act 9275) [10] in its sustainability policy, and technically falls under the Manila Bay rehabilitation mandate [11] through its connection to the Meycauayan River system. San Miguel Corporation\'s private cleanup of the Tullahan River, completed in August 2022 after just over two years of work, removed 1.12 million metric tons of silt and waste, a part of SMC\'s larger "Better Rivers PH" program, which has now pulled more than 9.12 million metric tons of waste from ten major river systems nationwide since 2020. [12] Nearby communities did report less flooding afterward. A more recent round of maintenance cleanup, reported in April 2026, removed another 710,168 metric tons from the Bulacan River System, including the downstream portion of the Meycauayan River. The Polo Riverwalk, a 2.5-kilometer linear park connecting five barangays along the old Tullahan floodwalls, opened in January 2026. [13] DENR has stated publicly that the biodiversity these rivers once supported can return with sustained effort. Whether "sustained effort" ever turns toward the unnamed, undredged side of the watershed is the open question this whole project is really asking.',
      },
      {
        type: "seg",
        text: "We covered the kangkungan with adobe. We made canals. The eleven sapa were buried or built over without ever being formally recorded as gone. Every single one of those was a decision to bury the water instead of living with it. And every rain, without fail, the water finds its way back anyway. Not because anything is broken, but because nothing about the land's original shape ever actually changed. We didn't just build on a marsh. We built on a marsh that is sinking, sealed the well that used to tell us exactly how close the water always was, and hoped concrete would be enough.",
        marginNote:
          "This is the argument. Everything else in these logs is just evidence for this sentence.",
      },
      { type: "seg", text: "It wasn't." },
      {
        type: "citeblock",
        citations: [
          { title: "Manila Bay Office / EMB — Watershed Data Portal — Meycauayan River connectivity to Manila Bay", url: "https://mbo.emb.gov.ph/?page_id=18" },
          { title: "Blacksmith Institute — The World's Worst Polluted Places (2007) — Marilao-Meycauayan-Obando River System 'Dirty Thirty'", url: "https://www.blacksmithinstitute.org" },
          { title: "Pleto et al. — Meycauayan River Water Quality Assessment (2020) — 0.49 ppm dissolved oxygen; 250,000 people dependent on river", url: "https://www.journalofhealthandpollution.org" },
          { title: "Eco et al. — Widespread Land Subsidence in Metro Manila (2018) — CAMANAVA 20–42 mm/yr baseline; Bulacan/Cavite 40 mm/yr", url: "https://www.jscimedcentral.com" },
          { title: "Sulapas et al. — Ground Subsidence Study (2024), ScienceDirect — Metro Manila 10–20 mm/yr recent estimate", url: "https://www.sciencedirect.com/science/article/pii/S1569843224004618" },
          { title: "Tribune — Valenzuela State of Calamity Declaration, July 2025 — Typhoons Crising, Dante, Emong; 9,000+ evacuated", url: "https://tribune.net.ph" },
          { title: "Manila Bulletin — Emergency Creek Dredging, August 2025 — 69,000 m³ removed from 11 priority waterways", url: "https://mb.com.ph/2025/08/08/valenzuela-lgu-mmda-intensify-creeks-cleanup-drive" },
          { title: "DENR-NCR — Lingunan Creek Named Most Improved Estero in Metro Manila (2021)", url: "https://ncr.denr.gov.ph" },
          { title: "World Bank Environmental Assessment Report (2014) — Canumay East in least-invested sub-catchment of three", url: "https://documents.worldbank.org" },
          { title: "Republic Act No. 9275 — Philippine Clean Water Act (2004)", url: "https://www.officialgazette.gov.ph/2004/03/22/republic-act-no-9275/" },
          { title: "MMDA et al. v. Concerned Residents of Manila Bay, G.R. Nos. 171947–48 (SC, 2008) — Manila Bay rehabilitation mandate", url: "https://elibrary.judiciary.gov.ph" },
          { title: "BusinessMirror — SMC Better Rivers PH: 9.12M metric tons removed since 2020 (April 2026)", url: "https://businessmirror.com.ph/2026/04/30/smcs-river-cleanups-reach-9-12m-metric-tons-of-waste-silt-removed-since-2020/" },
          { title: "GMA News — Polo Riverwalk opens in Valenzuela, January 2026 — 2.5 km along old Tullahan floodwalls", url: "https://www.gmanetwork.com" },
        ],
      },
    ],
  },
  {
    id: "log5",
    label: "Log ???",
    date: "— —",
    blocks: [
      {
        type: "title",
        text: "I Never Really Know What to Feel About This Place",
      },
      {
        type: "image",
        src: "/im_wet.jpg",
        mono: true,
        href: "https://www.youtube.com/watch?v=1Oz9rEpcBH0",
        caption:
          "Knee-deep in the sala during the 2025 floods. We were more ready the second time around. Valeza family archive.",
      },
      {
        type: "seg",
        text: "I never really know what to feel about this place.",
      },
      {
        type: "seg",
        text: "In my twenty years of existing, I just accepted it: this is where I live, the place that decided what kind of person I'd turn out to be. It feels special and containing at the same time, like being held and being held down use the same hands.",
      },
      {
        type: "seg",
        text: "I know what the rain smells like before it falls. Wet earth, rising off asphalt that was hot under my feet a second ago, and then the cold water rushes in around them the longer I stand there. Were they dirty? Of course they were. I never cared. This place feels like mine in a way nothing else does.",
      },
      {
        type: "seg",
        text: "It wasn't always gentle, though. There's one time I remember clearly: standing knee-deep in our own sala, scrubbing dirt and grime off stuff and hanging certificates like laundry. I don't remember being sad about it. I remember my hands being tired and mildly annoyed that electricity was down for a bit. That's all flooding really teaches you, eventually. Not grief. Just the work of cleaning the same thing twice. That sometimes you have to stay and persevere.",
      },
      {
        type: "seg",
        text: "My grandfather came here for the work. Built this house and established a family. That's the whole story I have, and at some point I stopped asking for more of it. He was less a person to me than a wall, something you didn't argue with, something you went quiet around. I don't know what I feel when I think about him. I'm just scared of him, if more than anything. I just wanna leave and yet… I can't.",
      },
      { type: "seg", text: "I'm not going to figure it out here." },
      {
        type: "seg",
        text: "But I also wanted change, and somehow I'm terrified of it. This place has been the site of every storm I've lived through, and somehow I cannot leave. I tell myself someday I'll escape, and in the same breath I see myself still standing in it, like the leaving and the staying are happening at once and neither one wins.",
      },
      {
        type: "quote",
        text: "Water isn't held by any shape. It just finds the one continuous string back to where it came from. The same way it rises over the streets every rain, memory rises through the cracks in me.",
      },
      {
        type: "seg",
        text: "Some nights I don't fight it. Some nights I want to sink into it.",
      },
      {
        type: "seg",
        text: "There's a tree that isn't here anymore. Gone the way water is never gone: gone for good, gone on purpose, gone in a way nothing rained back. I keep reaching for it anyway, some past version of this place too good to have actually been real, going looking for it like it's still standing somewhere I haven't checked.",
      },
      {
        type: "seg",
        text: "I tell myself I'll leave when I'm older. It still feels distant. Unreachable. Even now, being older.",
      },
      {
        type: "seg",
        text: "I still don't know what to feel about this place.",
      },
      { type: "seg", text: "I think I'm not supposed to." },
      { type: "seg", text: "Maybe someday, in the rain." },
    ],
  },
];

function HomeTimeline() {
  return (
    <div className="home-timeline-section">
      <p className="home-timeline-label">
        Administrative &amp; Ecological Timeline
      </p>
      <div className="home-timeline-track">
        {TIMELINE_EVENTS.map(({ year, text }) => (
          <div key={year} className="home-timeline-item">
            <span className="home-timeline-year">{year}</span>
            <span className="home-timeline-dot" />
            <p className="home-timeline-text">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Logs() {
  const [active, setActive] = useState(LOGS[0].id);

  const currentIndex = LOGS.findIndex((l) => l.id === active);
  const current = LOGS[currentIndex];
  const prevLog = currentIndex > 0 ? LOGS[currentIndex - 1] : null;
  const nextLog =
    currentIndex < LOGS.length - 1 ? LOGS[currentIndex + 1] : null;

  return (
    <div className="page">
      <PageHeader
        eyebrow="Field Notes"
        title="Logs"
        subtitle="Dated entries from the field, observations, conversations, discoveries."
      />


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

          {active === "log1" ? (
            <>
              <RenderedDoc
                blocks={current.blocks.slice(0, LOG1_BEFORE_TIMELINE)}
              />
              <HomeTimeline />
              <RenderedDoc
                blocks={current.blocks.slice(LOG1_BEFORE_TIMELINE)}
              />
            </>
          ) : (
            <RenderedDoc blocks={current.blocks} />
          )}

          <div className="log-nav-footer">
            {prevLog ? (
              <button
                className="log-nav-btn prev"
                onClick={() => setActive(prevLog.id)}
              >
                ← {prevLog.label}
              </button>
            ) : (
              <span />
            )}
            {nextLog ? (
              <button
                className="log-nav-btn next"
                onClick={() => setActive(nextLog.id)}
              >
                {nextLog.label} →
              </button>
            ) : (
              <span />
            )}
          </div>
        </>
      )}
    </div>
  );
}
