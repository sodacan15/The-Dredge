# The Dredge

> Digging What's Left in the Waters  
> Victoria Village, Canumay East, Valenzuela City — CS Final Project, May 2026

---

## Setup

```bash
npm install
npm run dev
```

Then open http://localhost:5173

---

## Project structure

```
src/
  App.jsx               — layout, sidebar nav, routing
  App.css               — all styles (tokens, typography, components)
  main.jsx              — entry point
  components/
    TextParser.jsx      — parseDredgeText() + RenderedDoc component
  pages/
    Home.jsx            — landing / hero
    Logs.jsx            — tabbed field log entries
    Research.jsx        — sidebar index + section content
    Gallery.jsx         — photo grid
    Author.jsx          — about + bibliography
```

---

## Adding content

### Logs

In `src/pages/Logs.jsx`, import and use `parseDredgeText`:

```js
import { parseDredgeText } from "../components/TextParser";

const myLog = `
<title>May 3, 2026
<seg1>[Walked D. Bonifacio Drive at 7am. The aratilis is still there, right at the canal edge.]
<br>
<caption>[Photo: aratilis beside canal]
`;

const LOGS = [
  { id: "log1", label: "Log 1", date: "May 3 2026", blocks: parseDredgeText(myLog) },
  // ...
];
```

### Research sections

Same pattern in `src/pages/Research.jsx` — call `parseDredgeText()` on your formatted .txt content for each section.

### Supported tags

| Tag | Output |
|-----|--------|
| `<title>text` | Section heading |
| `<seg1>[text]` | Body paragraph |
| `<subtitle>[text]` | Small all-caps label |
| `<br>` | Vertical spacer |
| `<caption>[text]` | Aside / caption (left-bordered) |
| `<quote>[text]` | Pull quote (rust border) |

---

## Deploy to GitHub Pages

```bash
npm run build
```

Then push the `dist/` folder to your `gh-pages` branch, or use the [gh-pages](https://www.npmjs.com/package/gh-pages) package:

```bash
npm install --save-dev gh-pages
# add to package.json scripts: "deploy": "gh-pages -d dist"
npm run deploy
```

Make sure `vite.config.js` has `base: "./"` (already set) or `base: "/your-repo-name/"` if deploying to a project page.
