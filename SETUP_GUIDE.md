# GitHub Pages Setup Guide
## Your Surgical Knowledge Base — Step by Step

---

## What you'll have at the end
A live website at `https://YOUR-USERNAME.github.io/surgical-knowledge/` accessible from any device — phone, tablet, computer — with a searchable dashboard of all your study guides.

---

## PART 1 — First-time setup (~20 minutes)

### Step 1: Create a GitHub account
1. Go to **github.com**
2. Click **Sign up**
3. Use a personal email (not SAF/hospital)
4. Choose a username — this becomes part of your URL (e.g. `drjohntan`)

### Step 2: Create the repository
1. Once logged in, click the **+** icon (top right) → **New repository**
2. Repository name: `surgical-knowledge` (exactly this, lowercase, hyphenated)
3. Set to **Public** (required for free GitHub Pages hosting)
4. Tick **Add a README file**
5. Click **Create repository**

### Step 3: Upload your files
1. In your new repository, click **Add file** → **Upload files**
2. Drag the entire `surgical-knowledge` folder contents (not the folder itself) into the upload area
   - `index.html` goes in the root
   - `assets/` folder with `css/` and `js/` inside
   - `guides/` folder with all subfolders inside
3. Scroll down, write a commit message like `Initial upload`
4. Click **Commit changes**

### Step 4: Enable GitHub Pages
1. In your repository, click **Settings** (top tab)
2. In the left sidebar, click **Pages**
3. Under "Branch", select **main** from the dropdown
4. Leave the folder as `/ (root)`
5. Click **Save**
6. Wait 2–3 minutes, then refresh the page
7. A green banner will appear: **"Your site is live at https://USERNAME.github.io/surgical-knowledge/"**

### Step 5: Test it
Open that URL on your phone. You should see the dashboard. Click the HPB Anatomy card to open the study guide.

---

## PART 2 — Adding a new study guide (ongoing, ~2 minutes per guide)

Every time Claude generates a new study guide for you:

### Step 1: Save the HTML file
Save it with a clear filename, e.g. `acute-pancreatitis.html`

### Step 2: Put it in the right folder
Based on what it is:
- Anatomy guides → `guides/anatomy/`
- Physiology → `guides/physiology/`
- Conditions → `guides/conditions/`
- Procedures → `guides/procedures/`
- Microbiology → `guides/microbiology/`
- Pathology → `guides/pathology/`

### Step 3: Upload to GitHub
1. Navigate to the right folder in your GitHub repository
2. Click **Add file** → **Upload files**
3. Upload the HTML file
4. Click **Commit changes**

### Step 4: Register it in nav.js
This is the one extra step that makes it appear in every guide's sidebar and on the dashboard.

1. In GitHub, open `assets/js/nav.js`
2. Click the **pencil icon** (Edit this file)
3. Find the section matching your pillar (e.g. `// ── CONDITIONS ──`)
4. Add a new entry following this template:

```javascript
{
  id: "acute-pancreatitis",              // unique ID, kebab-case
  title: "Acute Pancreatitis",           // display name
  subtitle: "Scoring, complications, necrosectomy indications",
  pillar: "conditions",                  // must match folder name
  tags: ["HPB", "emergency", "ICU"],     // for search
  notionUrl: "",                         // paste your Notion page URL here
  path: "/guides/conditions/acute-pancreatitis.html",
  status: "complete",                    // change from "planned" to "complete"
},
```

5. Scroll down → **Commit changes**

The guide now appears on the dashboard and in every sidebar. Takes ~90 seconds.

---

## PART 3 — Linking to your Notion pages

For each guide entry in `nav.js`, there's a `notionUrl: ""` field.

1. Open the corresponding Notion page
2. Click **Share** → **Copy link**
3. Paste it into the `notionUrl` field in nav.js

A **NOTION ↗** button will then appear on both the dashboard card and the sidebar entry for that guide, taking you directly to your notes.

---

## PART 4 — Keeping content on your phone

### Option A: Browser bookmark (simplest)
On Safari/Chrome, open your GitHub Pages URL → Share → **Add to Home Screen**. It appears as an icon on your phone like an app.

### Option B: PWA-ready (already works)
The site works offline once loaded — browsers cache it automatically. Useful on the wards when you don't have signal.

---

## File structure reference

```
surgical-knowledge/
│
├── index.html                    ← Dashboard (your homepage)
├── README.md                     ← This file
│
├── assets/
│   ├── css/
│   │   └── shared.css            ← Shared styles (all guides import this)
│   └── js/
│       └── nav.js                ← MASTER FILE: register all guides here
│
└── guides/
    ├── anatomy/
    │   └── hpb-anatomy.html      ← Complete ✓
    ├── physiology/               ← Add guides here as you generate them
    ├── microbiology/
    ├── pharmacology/
    ├── pathology/
    ├── conditions/
    ├── procedures/
    └── clinical-reasoning/
```

---

## Troubleshooting

**Site not loading after upload**
Wait 5 minutes — GitHub Pages can be slow to propagate. Hard refresh with Cmd+Shift+R.

**Guide appears but sidebar doesn't show**
Check the `<script src="../../assets/js/nav.js">` path in the HTML head. The `../..` depth must match the folder depth (guides are always 2 levels deep from root).

**New guide not appearing on dashboard**
You added the HTML but haven't updated `nav.js`. Add the entry as described in Part 2, Step 4.

**Notion link button not appearing**
The `notionUrl` field in nav.js is empty for that guide. Paste the Notion share URL.

---

## Asking Claude for future guides

Use this prompt template for consistency:

> "Create a surgical study guide HTML for [TOPIC]. 
> It is for the folder `guides/[pillar]/[filename].html` in my surgical-knowledge GitHub Pages site.
> Import the shared nav from `../../assets/js/nav.js` and inject with `injectNav('[guide-id]')`.
> Import shared CSS from `../../assets/css/shared.css`.
> Add a breadcrumb linking back to `../../index.html`.
> Include: Overview, [relevant tabs], Self-test quiz (5 questions), Anki cards, Related guides section, Evidence footer.
> Also give me the nav.js entry to add."

This ensures every guide slots in perfectly without any manual fixing.
