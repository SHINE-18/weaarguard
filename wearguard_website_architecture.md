# WearGuard™ — Website Architecture & System Blueprint

> **System Overview for AI & Developers**: This document details the exact structure, design system, route wiring, data schema, interactive component logic, and visual aesthetics of the **WearGuard™** industrial web application.

---

## 1. Brand Identity & Core Value Proposition
- **Brand Name**: WearGuard™
- **Industry**: Heavy Industrial Metallurgy & Custom Wear-Parts Engineering (Asphalt, Concrete, Cement, Mining, Steel, Earthmoving).
- **Positioning**: High-performance alternative to expensive OEM replacement monopolies. We reverse-engineer worn parts, match tailored alloys, offer small-batch flexibility (1–10 units), and guarantee 6–8 week global delivery with 20–60% higher field service life.

---

## 2. Technical Stack & Design System
- **Framework**: Next.js 16 (React 19, TypeScript, App Router).
- **Styling**: Modern dark luxury industrial aesthetic written in Vanilla CSS (`app/globals.css`).
- **Typography Tokens**:
  - Headings: `Anton` (Uppercase, clamped responsive font sizes, e.g. `clamp(72px, 11vw, 156px)`).
  - Navigation / Monospace Labels: `IBM Plex Mono` (Uppercase, tracking `0.08em` to `0.14em`).
  - Body Text: `Inter` (Clean contrast, `max-width: 60-75ch`, line-height `1.65`).
- **Color Palette Tokens**:
  - `--navy`: `#0b131a` (Primary deep industrial navy background)
  - `--navy-2`: `#131f28` (Card & dark container fill)
  - `--steel`: `#617078` (Subtle muted borders & secondary containers)
  - `--brass`: `#f59e0b` / Safety Amber Gold (Primary CTAs, text highlights, and wordmarks)
  - `--brass-hover`: `#d97706` (Interactive hover state token)
  - `--cream`: `#ffffff` / `#f3f4f5` (High-contrast clean white text & product card image containers)
- **Image Container Backgrounds**: Clean white backgrounds (`#ffffff`) for product image wrappers (`.product-img-box`, `.showcase-image-wrap`, `.alloy-img-wrap`, `.about-img`) ensuring metallic castings are sharp and visible.

---

## 3. Directory & File Structure
```
whatguard/
├── app/
│   ├── globals.css                # Global CSS tokens, dark theme layout, white card rules
│   ├── layout.tsx                 # Root layout embedding Anton, Inter & IBM Plex Mono fonts
│   ├── page.tsx                   # Main Homepage (Bento Hero + Partner Features + Process + Products + Materials + WornVsNew + About + RFQ)
│   ├── sitemap.ts                 # Dynamic sitemap metadata generator
│   ├── robots.ts                  # Search engine crawling rules
│   ├── about/page.tsx             # About Us engineering heritage page
│   ├── applications/page.tsx      # Applications Hub page
│   ├── custom-parts/page.tsx      # Custom OEM reverse-engineering page
│   ├── engineered-alloys/page.tsx # Metallurgical performance & hardness page
│   ├── engineering/page.tsx       # Core engineering capabilities page
│   ├── industries/page.tsx        # Sector solutions page (Asphalt, Concrete, Mining, etc.)
│   ├── materials/page.tsx         # Alloy comparison matrix page
│   ├── contact/page.tsx           # Contact & RFQ Audit page
│   └── products/
│       ├── page.tsx               # Product categories catalog page
│       └── [slug]/page.tsx        # Dynamic Product Detail page
├── components/
│   ├── site-chrome.tsx            # Full-width sticky Header & 4-Column Footer
│   ├── wear-guard-logo.tsx        # Official SVG logo renderer (`/wearguard-logo.svg`)
│   ├── gallery-showcase.tsx       # Interactive image gallery component
│   ├── marketing-page.tsx         # Reusable PageFrame, PartnerFeatureCard, FeatureStrip, Process, RFQBand
│   ├── worn-vs-new-toggle.tsx     # Signature Worn vs. New image comparison toggle
│   └── rfq-form.tsx               # Interactive Quote & audit form component
├── lib/
│   └── site-data.ts               # Authoritative data source for categories, alloys, gallery
└── public/
    ├── wearguard-logo.svg         # Official WearGuard SVG brand logo
    └── images/                    # High-res WebP/PNG product renders & footage
```

---

## 4. Sitemap & Page Routing Map

| Route | Page Name | Primary Content & Key Features |
| :--- | :--- | :--- |
| `/` | **Homepage** | Full-width header with official SVG logo, Bento-split hero layout, proof rail stats, **2-column 2x2 Partner Feature Card**, 5-step process timeline, 6-system product grid, materials overview, **Worn vs. New Toggle Visualizer**, About section, and RFQ Band. |
| `/industries` | **Sectors We Serve** | High-res imagery for Asphalt, Concrete, Process Industries, and Mining. Details wear mechanisms at work, recommended alloys, key deliverables, and direct links to product systems. |
| `/engineered-alloys` | **Engineered Alloys** | Alloy metallurgy cards (WearGuard P400, P450, P500, EnduraCast Z-Core, EnduraCast Ultra, Wearcast Ultra 800) with BHN/HRC hardness ratings & comparative matrix. |
| `/materials` | **Materials Comparison** | Application-matched material grid, alloy composition tables, and severe abrasion resistance specs. |
| `/engineering` | **Core Engineering** | 6 core capabilities, 3D laser-scanning details, failure analysis breakdown, and 9-step workflow. |
| `/applications` | **Applications Hub** | Core application systems with high-res thumbnails directing visitors straight to dedicated product detail pages. |
| `/products/[slug]` | **Product Detail Page** | Dedicated detail pages for each system (`/products/dryer-components`, `/products/mixer-components`, etc.) with white image containers, technical spec sheet tables, and embedded direct quote forms. |
| `/custom-parts` | **Custom Parts & CAD** | OEM reverse-engineering breakdown, 3D scanning info, small-batch flexibility (1–10 units), and 5-step process timeline. |
| `/about` | **About WearGuard** | Company background, engineering standards, quality guarantees, and trust rail. |
| `/contact` | **Contact & RFQ Audit** | Direct engineering contact info (`contact@wearguard.com`, `+61 437 433 890`) and interactive RFQ form. |

---

## 5. Core Interactive Components & UI Mechanics

### A. Full-Width Sticky Navigation (`SiteHeader` & `WearGuardLogo`)
- **Official SVG Logo**: Rendered via `WearGuardLogo` (`src="/wearguard-logo.svg"`), responsive to `small` (44px height in header) and `large` (96px height in footer).
- **Stretching Behavior**: Spans sticky top with `z-index: 50`, `background: #ffffff`, clean bottom border, and responsive side padding (`padding: 10px clamp(20px, 5vw, 64px)`).
- **Navigation Links**: `INDUSTRIES`, `ENGINEERED ALLOYS`, `APPLICATIONS`, `CUSTOM PARTS`, `ABOUT US`, plus `REQUEST A QUOTE` Safety Amber Gold CTA button.

### B. 4-Column Industrial Footer (`SiteFooter`)
- **Column 1**: Large official SVG logo (`/wearguard-logo.svg`), positioning statement, and `Engineered to outwear.` tagline.
- **Column 2 (Solutions)**: Links to `/industries`, `/engineered-alloys`, `/applications`, `/custom-parts`, `/about`.
- **Column 3 (Systems)**: Quick links to Dryer Components, Filter Systems, Mixers & Liners, Bucket Elevators, Drag Conveyors, Earthmoving Teeth.
- **Column 4 (Engineering Direct)**: Contact email (`contact@wearguard.com`), phone (`+61 437 433 890`), address, and `6–8 WEEKS QUOTE TO DELIVERY` badge.

### C. Partner Feature Card (`PartnerFeatureCard`)
- **Layout**: 2-column feature card matching exact bento design with gold border accents (`1.5px solid #fcd34d`).
- **Cards**: 4 feature blocks (Low-Volume 1-10 Units, 20-60% Longer Service Life, 6-8 Weeks Delivery, Global Engineering & On-Site Audits).

### D. Interactive Worn vs. New Visualizer (`WornVsNewToggle`)
- **Toggle State**: Clicking switches between the worn OEM part image (`/images/wearguard-hero-new.png`) and the new precision casting with a smooth fade-scale transition.

---

## 6. How to Explain This Project to Any AI
If you prompt another AI assistant about this repository, summarize it as follows:

> *"WearGuard™ is a Next.js 16 production web application built for a high-end industrial wear-parts and metallurgy engineering company. It uses a modern dark-mode luxury design system with custom Vanilla CSS tokens (), Anton headings, IBM Plex Mono labels, and official SVG branding (`/wearguard-logo.svg`). The architecture features full-width sticky headers, white product image wrappers, dynamic product detail routes (`/products/[slug]`), partner feature bento cards, signature Worn vs. New comparison visualizers, custom OEM reverse-engineering timelines, and embedded direct quote forms."*
