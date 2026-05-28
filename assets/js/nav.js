/**
 * nav.js — Shared navigation for Surgical Knowledge Base
 * Every study guide imports this file.
 * To add a new guide: add one entry to the GUIDES array below.
 * It will automatically appear in the sidebar of every guide.
 */

const GUIDES = [
  // ── FOUNDATIONS: ANATOMY ──────────────────────────────────────────
  {
    id: "hpb-anatomy",
    title: "HPB Anatomy",
    subtitle: "Calot's triangle, portal triad, Couinaud segments",
    pillar: "anatomy",
    tags: ["HPB", "laparoscopic", "hepatectomy", "Whipple"],
    notionUrl: "", // paste your Notion page URL here
    path: "/guides/anatomy/hpb-anatomy.html",
    status: "complete",
  },
  {
    id: "colorectal-anatomy",
    title: "Colorectal Anatomy",
    subtitle: "Mesorectal plane, pelvic autonomics, Toldt's fascia",
    pillar: "anatomy",
    tags: ["colorectal", "rectal", "TME", "laparoscopic"],
    notionUrl: "",
    path: "/guides/anatomy/colorectal-anatomy.html",
    status: "planned",
  },
  {
    id: "abdominal-wall",
    title: "Abdominal Wall & Hernias",
    subtitle: "Inguinal canal, femoral canal, layers, hernia orifices",
    pillar: "anatomy",
    tags: ["hernia", "inguinal", "femoral", "laparoscopic"],
    notionUrl: "",
    path: "/guides/anatomy/abdominal-wall.html",
    status: "planned",
  },
  {
    id: "upper-gi-anatomy",
    title: "Upper GI Anatomy",
    subtitle: "Lesser sac, gastric vasculature, GOJ, oesophagus",
    pillar: "anatomy",
    tags: ["upper GI", "gastric", "oesophageal", "bariatric"],
    notionUrl: "",
    path: "/guides/anatomy/upper-gi-anatomy.html",
    status: "planned",
  },

  {
    id: "lower-limb-arterial",
    title: "Lower Limb Arterial Anatomy",
    subtitle: "Femoral triangle, popliteal fossa, trifurcation, collaterals",
    pillar: "anatomy",
    tags: ["vascular", "PAD", "bypass", "amputation", "femoral", "popliteal"],
    notionUrl: "",
    path: "/guides/anatomy/lower-limb-arterial.html",
    status: "complete",
  },
  {
    id: "carotid-anatomy",
    title: "Carotid & Cerebrovascular Anatomy",
    subtitle: "ICA/ECA, circle of Willis, cranial nerves, CEA",
    pillar: "anatomy",
    tags: ["vascular", "carotid", "CEA", "TIA", "stroke"],
    notionUrl: "",
    path: "/guides/anatomy/carotid-anatomy.html",
    status: "complete",
  },
  {
    id: "aortic-anatomy",
    title: "Aorta & Iliac Anatomy",
    subtitle: "Segments, branches, EVAR zones, Crawford classification",
    pillar: "anatomy",
    tags: ["vascular", "AAA", "EVAR", "aorta", "iliac"],
    notionUrl: "",
    path: "/guides/anatomy/aortic-anatomy.html",
    status: "complete",
  },
  {
    id: "venous-anatomy",
    title: "Lower Limb Venous Anatomy",
    subtitle: "GSV, SSV, perforators, CEAP, DVT, bypass conduit",
    pillar: "anatomy",
    tags: ["vascular", "varicose veins", "DVT", "GSV", "bypass"],
    notionUrl: "",
    path: "/guides/anatomy/venous-anatomy.html",
    status: "complete",
  },

  // ── FOUNDATIONS: PHYSIOLOGY ───────────────────────────────────────
  {
    id: "surgical-stress-response",
    title: "Surgical Stress Response",
    subtitle: "Neuroendocrine cascade, SIRS, catabolism, fluid shifts",
    pillar: "physiology",
    tags: ["peri-operative", "ERAS", "ICU", "sepsis"],
    notionUrl: "",
    path: "/guides/physiology/surgical-stress-response.html",
    status: "planned",
  },
  {
    id: "coagulation",
    title: "Coagulation & Haemostasis",
    subtitle: "Cascade, anticoagulation, massive haemorrhage protocol",
    pillar: "physiology",
    tags: ["coagulation", "transfusion", "haemorrhage", "anticoagulation"],
    notionUrl: "",
    path: "/guides/physiology/coagulation.html",
    status: "planned",
  },
  {
    id: "fluid-electrolytes",
    title: "Fluids & Electrolytes",
    subtitle: "Starling forces, compartments, surgical fluid management",
    pillar: "physiology",
    tags: ["fluids", "electrolytes", "peri-operative"],
    notionUrl: "",
    path: "/guides/physiology/fluid-electrolytes.html",
    status: "planned",
  },

  // ── FOUNDATIONS: MICROBIOLOGY ─────────────────────────────────────
  {
    id: "intraabdominal-sepsis",
    title: "Intra-abdominal Sepsis",
    subtitle: "Peritonitis, abscesses, anastomotic leak microbiology",
    pillar: "microbiology",
    tags: ["sepsis", "peritonitis", "antibiotics", "source control"],
    notionUrl: "",
    path: "/guides/microbiology/intraabdominal-sepsis.html",
    status: "planned",
  },
  {
    id: "cholangitis",
    title: "Ascending Cholangitis",
    subtitle: "Organisms, Charcot's triad, Reynolds pentad, management",
    pillar: "microbiology",
    tags: ["HPB", "cholangitis", "ERCP", "antibiotics"],
    notionUrl: "",
    path: "/guides/microbiology/cholangitis.html",
    status: "planned",
  },
  {
    id: "ssi-prophylaxis",
    title: "SSI & Surgical Prophylaxis",
    subtitle: "Wound classification, antibiotic choice, timing, duration",
    pillar: "microbiology",
    tags: ["SSI", "prophylaxis", "wound", "antibiotics"],
    notionUrl: "",
    path: "/guides/microbiology/ssi-prophylaxis.html",
    status: "planned",
  },

  // ── FOUNDATIONS: PATHOLOGY ────────────────────────────────────────
  {
    id: "neoplasia-principles",
    title: "Neoplasia Principles",
    subtitle: "Benign vs malignant, TNM staging, tumour spread",
    pillar: "pathology",
    tags: ["oncology", "staging", "TNM", "metastasis"],
    notionUrl: "",
    path: "/guides/pathology/neoplasia-principles.html",
    status: "planned",
  },
  {
    id: "wound-healing",
    title: "Wound Healing",
    subtitle: "Phases, factors impairing healing, dehiscence, fistulae",
    pillar: "pathology",
    tags: ["wound", "healing", "peri-operative", "complications"],
    notionUrl: "",
    path: "/guides/pathology/wound-healing.html",
    status: "planned",
  },

  // ── CONDITIONS ────────────────────────────────────────────────────
  {
    id: "acute-cholecystitis",
    title: "Acute Cholecystitis",
    subtitle: "Pathophysiology, Tokyo guidelines, management",
    pillar: "conditions",
    tags: ["HPB", "emergency", "laparoscopic"],
    notionUrl: "",
    path: "/guides/conditions/acute-cholecystitis.html",
    status: "planned",
  },
  {
    id: "acute-pancreatitis",
    title: "Acute Pancreatitis",
    subtitle: "Scoring, complications, necrosectomy indications",
    pillar: "conditions",
    tags: ["HPB", "emergency", "ICU"],
    notionUrl: "",
    path: "/guides/conditions/acute-pancreatitis.html",
    status: "planned",
  },
  {
    id: "colorectal-cancer",
    title: "Colorectal Cancer",
    subtitle: "Staging, MDT, surgical options, ERAS",
    pillar: "conditions",
    tags: ["colorectal", "oncology", "staging", "laparoscopic"],
    notionUrl: "",
    path: "/guides/conditions/colorectal-cancer.html",
    status: "planned",
  },
  {
    id: "bowel-obstruction",
    title: "Bowel Obstruction",
    subtitle: "SBO vs LBO, strangulation, conservative vs surgical",
    pillar: "conditions",
    tags: ["emergency", "colorectal", "upper GI"],
    notionUrl: "",
    path: "/guides/conditions/bowel-obstruction.html",
    status: "planned",
  },

  // ── PROCEDURES ────────────────────────────────────────────────────
  {
    id: "laparoscopic-cholecystectomy",
    title: "Laparoscopic Cholecystectomy",
    subtitle: "CVS, port placement, danger zones, conversion",
    pillar: "procedures",
    tags: ["HPB", "laparoscopic", "emergency", "elective"],
    notionUrl: "",
    path: "/guides/procedures/laparoscopic-cholecystectomy.html",
    status: "planned",
  },
  {
    id: "appendicectomy",
    title: "Appendicectomy",
    subtitle: "Open vs laparoscopic, stump management, complications",
    pillar: "procedures",
    tags: ["emergency", "laparoscopic", "colorectal"],
    notionUrl: "",
    path: "/guides/procedures/appendicectomy.html",
    status: "planned",
  },
  {
    id: "anterior-resection",
    title: "Anterior Resection & TME",
    subtitle: "Mesorectal excision, anastomosis, diversion, LARS",
    pillar: "procedures",
    tags: ["colorectal", "rectal", "TME", "laparoscopic"],
    notionUrl: "",
    path: "/guides/procedures/anterior-resection.html",
    status: "planned",
  },
];

// ── PILLAR METADATA ───────────────────────────────────────────────────────────
const PILLARS = {
  anatomy:           { label: "Anatomy",          color: "#b85c2a", icon: "◈" },
  physiology:        { label: "Physiology",        color: "#2a6eb8", icon: "◉" },
  microbiology:      { label: "Microbiology",      color: "#2ab87a", icon: "◎" },
  pharmacology:      { label: "Pharmacology",      color: "#8b2ab8", icon: "◐" },
  pathology:         { label: "Pathology",         color: "#b8862a", icon: "◑" },
  conditions:        { label: "Conditions",        color: "#b82a2a", icon: "◆" },
  procedures:        { label: "Procedures",        color: "#1a1a1a", icon: "◇" },
  "clinical-reasoning": { label: "Clinical Reasoning", color: "#2a8bb8", icon: "◈" },
};

// ── INJECT SIDEBAR ────────────────────────────────────────────────────────────
function injectNav(currentGuideId) {
  const style = document.createElement("style");
  style.textContent = `
    #sk-nav-toggle { display:none; }
    #sk-sidebar {
      position: fixed; top: 0; left: 0; height: 100vh; width: 280px;
      background: #111; color: #ccc; overflow-y: auto; z-index: 1000;
      font-family: 'DM Sans', sans-serif; transition: transform 0.3s ease;
      display: flex; flex-direction: column;
    }
    #sk-sidebar::-webkit-scrollbar { width: 4px; }
    #sk-sidebar::-webkit-scrollbar-thumb { background: #333; }
    .sk-sidebar-head {
      padding: 20px 18px 14px; border-bottom: 1px solid #222;
      position: sticky; top: 0; background: #111; z-index: 2;
    }
    .sk-sidebar-logo {
      font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase;
      color: #555; margin-bottom: 8px; font-family: 'JetBrains Mono', monospace;
    }
    .sk-search {
      width: 100%; background: #1a1a1a; border: 1px solid #2a2a2a;
      color: #ccc; padding: 7px 10px; font-size: 12px; border-radius: 3px;
      font-family: 'DM Sans', sans-serif; outline: none;
    }
    .sk-search:focus { border-color: #444; }
    .sk-pillar-group { margin-bottom: 4px; }
    .sk-pillar-label {
      padding: 10px 18px 5px; font-size: 10px; letter-spacing: 0.12em;
      text-transform: uppercase; color: #444; display: flex;
      align-items: center; gap: 6px; font-family: 'JetBrains Mono', monospace;
    }
    .sk-pillar-dot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }
    .sk-guide-link {
      display: block; padding: 8px 18px 8px 28px; text-decoration: none;
      font-size: 12.5px; color: #888; transition: all 0.15s; line-height: 1.3;
      border-left: 2px solid transparent; margin-left: 0;
    }
    .sk-guide-link:hover { color: #eee; background: #181818; border-left-color: #333; }
    .sk-guide-link.active { color: #fff; background: #1e1e1e; }
    .sk-guide-link.planned { opacity: 0.45; }
    .sk-guide-subtitle { font-size: 10.5px; color: #555; margin-top: 1px; line-height: 1.3; }
    .sk-guide-link.active .sk-guide-subtitle { color: #777; }
    .sk-status-dot {
      display: inline-block; width: 5px; height: 5px; border-radius: 50%;
      margin-right: 5px; vertical-align: middle; margin-top: -1px;
    }
    .sk-notion-btn {
      display: inline-block; font-size: 9px; font-family: 'JetBrains Mono', monospace;
      letter-spacing: 0.06em; padding: 1px 6px; border: 1px solid #333;
      color: #555; border-radius: 2px; text-decoration: none; margin-top: 3px;
      transition: all 0.15s;
    }
    .sk-notion-btn:hover { color: #aaa; border-color: #555; }
    .sk-sidebar-footer {
      margin-top: auto; padding: 14px 18px; border-top: 1px solid #1e1e1e;
      font-size: 10px; color: #333; font-family: 'JetBrains Mono', monospace;
    }
    body.sk-has-nav { margin-left: 280px; }
    .sk-mob-toggle {
      display: none; position: fixed; bottom: 20px; right: 20px;
      width: 44px; height: 44px; background: #111; color: #fff;
      border: none; border-radius: 50%; font-size: 18px; cursor: pointer;
      z-index: 2000; box-shadow: 0 4px 12px rgba(0,0,0,0.4);
    }
    @media (max-width: 768px) {
      body.sk-has-nav { margin-left: 0; }
      #sk-sidebar { transform: translateX(-100%); }
      #sk-sidebar.open { transform: translateX(0); }
      .sk-mob-toggle { display: flex; align-items: center; justify-content: center; }
    }
  `;
  document.head.appendChild(style);

  // Group guides by pillar
  const grouped = {};
  GUIDES.forEach(g => {
    if (!grouped[g.pillar]) grouped[g.pillar] = [];
    grouped[g.pillar].push(g);
  });

  let html = `
    <div class="sk-sidebar-head">
      <div class="sk-sidebar-logo">⚕ Surgical Knowledge</div>
      <input class="sk-search" placeholder="Search guides…" id="sk-search-input" oninput="skFilter(this.value)">
    </div>`;

  Object.entries(PILLARS).forEach(([key, meta]) => {
    if (!grouped[key]) return;
    html += `<div class="sk-pillar-group" data-pillar="${key}">
      <div class="sk-pillar-label">
        <span class="sk-pillar-dot" style="background:${meta.color}"></span>${meta.label}
      </div>`;
    grouped[key].forEach(g => {
      const isActive = g.id === currentGuideId;
      const isPlanned = g.status === "planned";
      const dot = isPlanned ? `<span class="sk-status-dot" style="background:#333"></span>` : `<span class="sk-status-dot" style="background:${meta.color}"></span>`;
      const notionBtn = g.notionUrl ? `<a class="sk-notion-btn" href="${g.notionUrl}" target="_blank">NOTION ↗</a>` : '';
      // Resolve relative path from current page location
      const href = isPlanned ? '#' : resolveGuidePath(g.path);
      html += `<a class="sk-guide-link${isActive ? ' active' : ''}${isPlanned ? ' planned' : ''}"
        href="${href}" data-title="${g.title} ${g.tags.join(' ')}" data-id="${g.id}">
        ${dot}${g.title}
        <div class="sk-guide-subtitle">${g.subtitle}</div>
        ${notionBtn}
      </a>`;
    });
    html += `</div>`;
  });

  html += `<div class="sk-sidebar-footer">
    Last updated: ${new Date().toLocaleDateString('en-GB', {month:'short', year:'numeric'})}<br>
    <span style="color:#2a6eb8">Add guide → edit assets/js/nav.js</span>
  </div>`;

  const sidebar = document.createElement("div");
  sidebar.id = "sk-sidebar";
  sidebar.innerHTML = html;
  document.body.prepend(sidebar);
  document.body.classList.add("sk-has-nav");

  // Mobile toggle
  const mob = document.createElement("button");
  mob.className = "sk-mob-toggle";
  mob.innerHTML = "☰";
  mob.onclick = () => {
    sidebar.classList.toggle("open");
    mob.innerHTML = sidebar.classList.contains("open") ? "✕" : "☰";
  };
  document.body.appendChild(mob);
}

function skFilter(q) {
  const query = q.toLowerCase();
  document.querySelectorAll(".sk-guide-link").forEach(el => {
    const text = (el.dataset.title || "").toLowerCase();
    el.style.display = text.includes(query) ? "block" : "none";
  });
  document.querySelectorAll(".sk-pillar-group").forEach(grp => {
    const visible = [...grp.querySelectorAll(".sk-guide-link")].some(l => l.style.display !== "none");
    grp.style.display = visible ? "block" : "none";
  });
}

function resolveGuidePath(absolutePath) {
  // Convert absolute path like /guides/anatomy/foo.html to relative from current file
  // Works for GitHub Pages where base is /surgical-knowledge/
  const base = window.location.pathname.replace(/\/[^/]*$/, '');
  const depth = (window.location.pathname.match(/\//g) || []).length - 1;
  const prefix = depth <= 1 ? '.' : '../'.repeat(depth - 1);
  // Strip leading slash and prepend relative prefix
  return prefix + absolutePath;
}
