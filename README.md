# The Dredge — Editing & Maintenance Guide

**Project:** The Dredge — A Digital Ecological Archive  
**Author:** Reinwald Marone Valeza  
**Stack:** React 18 + Vite 5, custom CSS only (no router, no UI library)  
**Date:** April–June 2026

---

## File Structure

```
src/
  App.jsx              ← Navigation shell (sidebar + page switcher)
  App.css              ← ALL styles (one big file, organized by section)
  components/
    PageHeader.jsx     ← Shared header used by Logs, Research, Gallery, Author
    TextParser.jsx     ← Renders the log content blocks (text, images, quotes, etc.)
  pages/
    Home.jsx           ← Homepage (2-column layout, stickers, photos)
    Logs.jsx           ← All log entries (LOG_DATA array) + log viewer UI
    Research.jsx       ← Research entries (RESEARCH_DATA array) + search
    Gallery.jsx        ← Photo gallery (ITEMS array) + lightbox
    Author.jsx         ← Author page
src/pages/public/      ← Static assets (images, stamp.png, logo.png, soil-map.png)
  Assets/              ← Field photos and archival images
```

---

## How to Edit the Homepage (Home.jsx)

The homepage is a two-column layout: text on the left, photos on the right.

### Change the sticky notes
Find `home-sticker-cluster` in `Home.jsx`. Each `<div className="home-sticker">` is one note. Edit the text directly. The yellow/green/blue colors are set by the `home-sticker`, `home-sticker-green`, and `home-sticker-blue` classes in `App.css`.

### Change the quote
Find `<blockquote className="home-grand-quote">` and edit the text inside.

### Change the photos on the right
- Big wide photo: `<img src="/supermarket.jpg" ...>` — swap the `src` for any image in the public folder.
- Polaroid-style: `<img src="/canumai_reimagined.png" ...>` — swap similarly; edit the caption below it.
- Third small photo: `<img src="/nlex-dusk.jpg" ...>` — swap similarly.

### Change the stamp date
Find `home-field-stamp-link` in `Home.jsx`. The text inside reads `APR–JUN 2026` — edit as needed.

### Change what the stamp/logo links to
Both the stamp (orange tree on page headers) and the home field stamp link to YouTube. In `PageHeader.jsx` and `Home.jsx`, find the `href` attribute on the `<a>` tag wrapping the stamp image and update the URL.

---

## How to Add or Edit a Log (Logs.jsx)

All log content lives in the `LOG_DATA` array at the top of `Logs.jsx`. Each log is an object with these fields:

```js
{
  id: "log1",           // unique ID — used for navigation
  label: "Log 1",       // short label shown in the sidebar tabs
  date: "May 2026",     // shown under the log title
  blocks: [...]         // array of content blocks (see below)
}
```

### Content block types

| Type | What it renders |
|------|----------------|
| `{ type: "title", text: "..." }` | Large bold heading at the top of the log |
| `{ type: "subtitle", text: "..." }` | Section subheading (rust-colored, caps) |
| `{ type: "seg", text: "..." }` | A body paragraph |
| `{ type: "image", src: "/path.jpg", caption: "..." }` | A photo with caption below |
| `{ type: "quote", text: "..." }` | A pull-quote (blockquote style) |
| `{ type: "margin", text: "..." }` | Small margin annotation (handwritten style) |
| `{ type: "timeline", events: [...] }` | A vertical timeline of events |
| `{ type: "sapang-glossary" }` | Renders the full sapang name glossary (hardcoded in TextParser.jsx) |

### Add a new log
1. Copy an existing log object in `LOG_DATA`.
2. Give it a new unique `id` (e.g. `"log6"`).
3. Update `label`, `date`, and `blocks`.
4. It will automatically appear in the log tab list.

### Add a new section to an existing log
Insert a new block object into the `blocks` array at the right position. Example:

```js
{ type: "subtitle", text: "My New Section" },
{ type: "seg", text: "Body text goes here." },
{ type: "image", src: "/Assets/my-photo.jpg", caption: "Caption text. Field photograph." },
```

### Add a new photo to a log
1. Put the image file into `src/pages/public/` (or `src/pages/public/Assets/`).
2. Add an image block to the log's `blocks` array.
3. The `src` path is relative to `public/` — so `"/Assets/my-photo.jpg"` if the file is at `src/pages/public/Assets/my-photo.jpg`.

---

## How to Add Photos to the Gallery (Gallery.jsx)

All gallery photos are in the `ITEMS` array near the top of `Gallery.jsx`. Each item is:

```js
{
  src: "/Assets/photo.jpg",   // path from public/
  wide: false,                // true = spans 2 columns in the grid
  alt: "Alt text",            // screen reader + lightbox title
  tag: "flora",               // filter category (see below)
  caption: "Caption text."    // shown in grid and lightbox
}
```

**Available tags:** `flora`, `fauna`, `infrastructure`, `archival`, `personal`

### Add a new photo
1. Copy an existing item object.
2. Update `src`, `alt`, `tag`, and `caption`.
3. The item will appear automatically in the grid and filmstrip.

---

## How to Edit the Research Page (Research.jsx)

All research entries are in the `RESEARCH_DATA` array in `Research.jsx`. Categories and their entries are organized as:

```js
{
  id: "category-id",
  label: "Category Name",
  entries: [
    {
      title: "Source Title",
      body: "What this source documents.",
      finding: "The key finding or takeaway.",
      quote: "A direct quote if applicable.",
      url: "https://doi.org/..."   // or null
    }
  ]
}
```

### Add a new source
1. Find the relevant category.
2. Add a new object to its `entries` array.
3. The search functionality will automatically index it.

---

## How to Change Styles (App.css)

`App.css` is one file organized into labeled sections using comments like:
```css
/* ── Section Name ── */
```

### Key sections
- **`:root`** (line ~4): CSS color and size tokens — change here to update all colors at once.
- **`/* ── Sidebar ── */`**: The dark left navigation bar.
- **`/* ── Page header ── */`**: The shared header with logo and stamp.
- **`/* ── Log: document ── */`**: All log page typography and layout.
- **`/* HOME — 2-column masthead ── */`** (near bottom): The homepage-specific layout.
- **`/* GALLERY — embedded location map */`** (near bottom): Map section in Gallery.

### Color tokens (change in `:root`)
| Token | Color | Used for |
|-------|-------|----------|
| `--ink` | dark brown | Main text |
| `--rust` | brick red | Accents, headings |
| `--moss` | olive green | Secondary accents |
| `--water` | steel blue | Links, water references |
| `--paper` | warm cream | Background |
| `--paper-warm` | darker cream | Cards, closing note |

---

## How to Add Animations

New keyframes are near the top of `App.css`. Available animations:
- `fadeInUp` — elements rising into view (used on page loads)
- `fadeIn` — simple opacity fade
- `dropIn` — drops in with a slight tilt (used for stickers)
- `stampIn` — rubber stamp bounce-in (used for the orange stamp)
- `popIn` — pop with rotation and scale (used for stickers)
- `slideInRight` — slides in from the right (used for photo column)

To apply any animation: `animation: popIn 0.45s ease 0.2s both;`

---

## Deployment

This is a plain Vite/React app. To build for production:
```
npm run build
```
The output goes to `dist/`. Upload that folder to any static host (Vercel, Netlify, Replit Deployments).

---

## Common Mistakes to Avoid

1. **Wrong image path**: Paths must start from `public/`. A file at `src/pages/public/Assets/photo.jpg` is referenced as `/Assets/photo.jpg`.
2. **Breaking the blocks array**: Make sure every block object has a closing `},` and the array itself ends with `]`.
3. **Editing the wrong log**: `LOG_DATA` has five log objects — check the `id` before editing.
4. **The stamp link**: Both the sidebar logo and the page-header stamp are YouTube links. The sidebar logo URL is in `App.jsx`; the stamp URL is in `PageHeader.jsx` and `Home.jsx`.
