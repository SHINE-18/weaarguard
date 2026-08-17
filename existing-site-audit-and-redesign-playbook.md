# Existing-Site Audit & Redesign Playbook

A step-by-step workflow for taking a website that **already exists** and running it through the premium-web-builder system: classify it, confirm the classification with the user, audit it against the five "why AI sites look cheap" tells, pick or validate a style, write a design-system spec, and produce a prioritized redesign plan. This is the same skill (`design-principles.md`, `style-catalog.md`, `design-system-generator.md`, the two track files, `component-toolkit.md`, `mobile-app-viewport.md`) — retargeted at auditing and upgrading a live site instead of building one from a blank page.

**Do not skip phases or reorder them.** Each phase exists to block a specific failure mode of the one after it — auditing before classifying produces feedback against the wrong bar; redesigning before auditing produces a rebuild nobody asked for.

---

## Phase 0 — Gather the site

1. Get the live URL, repo, or uploaded files for the site under review.
2. Load/screenshot the site at three viewports minimum: **390px** (mobile), **768px** (tablet), **1440px** (desktop).
3. Note the current stack if visible (static HTML, React/Next, Webflow, Framer, WordPress, etc.) — this constrains what "apply the fix" can mean later (e.g. a component-toolkit pull assumes React + Tailwind).
4. If the site can't be reached or rendered, stop and say so rather than guessing from a description alone.

---

## Phase 1 — Classify the build (confirm with the user, don't assume)

Look at what's actually there before asking anything:

| Signal on the live site | Points toward |
|---|---|
| No login, no account area, no persisted user data, single scroll-through page or a small handful of marketing pages | **Static premium site** |
| Login/signup screen, dashboard, settings page, tables, role-gated content, "my account" | **SaaS / working web app** |
| Heavy mobile traffic implied (e.g. it's literally installed as a PWA, or copy says "app"), or a bottom tab bar already present | **Mobile-first / app-viewport addendum applies** |
| Both a marketing/landing surface *and* a logged-in product area | **Both** — classify each surface separately; the marketing pages follow the static track, the product pages follow the SaaS track, and they should still share one palette/type spec |

Then **confirm out loud with the user before doing anything else** — don't silently proceed on an inference. Ask:

> "Here's what I'm seeing: [static site / SaaS app / mixed — marketing pages + logged-in product]. Is that right, or is there a database/login/roles planned that isn't visible yet? And should this be optimized desktop-first, mobile-first, or fully responsive?"

If using an interactive elicitation tool, ask as up to three short single-select questions:
- **Build type:** Static premium site / SaaS or working web app / Both (marketing + product)
- **Viewport priority:** Desktop-first / Mobile-first / Fully responsive
- **Scope of this pass:** Full redesign / Targeted fixes only (tell me which pages) / Just the audit, no changes yet

Do not proceed to Phase 2 until this is confirmed. A wrong classification here invalidates everything downstream — auditing a dashboard against the static track's "10rem hero" bar, or a portfolio against the SaaS track's "components before pages" bar, produces advice that actively makes the site worse.

---

## Phase 2 — Audit against the five tells

Load `design-principles.md`'s five mechanical tells and check the live site against each one, screen by screen. Record findings in this exact table — don't skip a row even if a tell isn't present, write "clean" so the audit is complete and re-checkable.

### 2.1 Spacing hierarchy

- [ ] Is there one consistent spacing scale in use (8/16/24/32/48/64/96/128px), or does spacing look ad hoc / default-framework (16px everywhere)?
- [ ] Does the primary CTA or hero get noticeably *more* surrounding space than neighboring sections, or does everything have equal padding?
- [ ] Test: screenshot the page with all text greeked out (or just squint) — can you point at "the important part" without reading anything?

**Finding:** _[describe what's actually happening, cite specific sections]_

### 2.2 Motion

- [ ] Does every block fade/slide in on scroll regardless of whether it communicates anything?
- [ ] Is there motion on repeated elements (list items, table rows, grid cards) — a tell that motion was applied indiscriminately rather than once, on purpose?
- [ ] Is there one clear signature moment, or is motion spread thin across everything equally?
- [ ] Does exiting a pinned/scroll-scrubbed section look intentional, or does it just vanish?

**Finding:** _[...]_

### 2.3 Grid / layout structure

- [ ] Is the layout a uniform bento grid — equal boxes, equal rows — everywhere, with no deliberate size variation?
- [ ] Is there at least one place per section where the grid rhythm is broken on purpose (a 2x-wide card, an asymmetric row)?

**Finding:** _[...]_

### 2.4 Glow / gradient-as-hierarchy

- [ ] Does every card/button have a glowing border or gradient regardless of whether it needs emphasis?
- [ ] Mentally (or actually) turn all glow off — does the layout still read correctly through size, contrast, and weight alone? If not, the glow is propping up missing hierarchy.
- [ ] Is glow reserved for roughly one element per view, or scattered across many?

**Finding:** _[...]_

### 2.5 Dark mode / palette decision

- [ ] Is the background pure `#000`/`#FFF`, or has it been warmed/cooled on purpose?
- [ ] Is the accent pair a stock pink-to-purple AI gradient, or a deliberate, named, same-temperature-family pair?
- [ ] Was dark mode chosen for a stated reason tied to the brand/product, or is it just the default?

**Finding:** _[...]_

### 2.6 Shared system check (both tracks)

- [ ] Palette: can you name 4–6 hex values currently in use, or does color feel improvised page to page?
- [ ] Type: is the display face something with character, or is it Inter/Roboto/Arial/system-ui (banned as a display face per `design-principles.md`)? Is there a distinct mono for labels/data/timestamps, or is everything one weight of one face?
- [ ] Structure devices: if there's numbering or section labels, do they encode something real (sequence, date, ID) or are they decorative `01/02/03`?

**Finding:** _[...]_

---

## Phase 3 — Track-specific audit

Load whichever track file(s) apply from Phase 1, plus `mobile-app-viewport.md` if mobile/responsive was in scope, and check the extra items below.

### If Static premium site (`static-premium-site.md`)

- [ ] Is there one deep signature technique (not five shallow ones stacked), and is it wired into hovers/scroll/cursor — not just autoplaying once?
- [ ] Is the copy specific (real names, real prices, a real constraint implying scarcity) or generic filler ("crafted with passion," "elevate your brand," lorem ipsum)?
- [ ] Section padding ≥96px desktop / ≥56px mobile? Body text max-width in the 60–75ch range?
- [ ] Does a broken/blocked script degrade to a plain but readable page, or does it blank the page (content hidden in CSS waiting on JS)?
- [ ] Walk the page at 390 / 768 / 1440px — zero console errors, no horizontal overflow, every link works, every hover state present, and — the part that's usually missing — do scroll-exit transitions look finished, not just entrances?

### If SaaS / working web app (`saas-webapp.md`)

- [ ] Is there evidence of shared component primitives (consistent button/input/card/table styling across screens), or does each screen look like it invented its own?
- [ ] Are empty, loading, and error states actually designed, or does only the happy-path populated view exist?
- [ ] Is motion on routine actions (menus, form submits) fast (~150–250ms), or does it feel like decorative fade-ins were applied to dashboard cards/table rows?
- [ ] Is there roughly one glow/accent moment per view, or one per card in a dense grid?
- [ ] Does role-based UI (if roles exist) reflect real conditional rendering, or do different roles look like two static mockups?
- [ ] Keyboard navigation / focus states present on interactive elements?

### If mobile-first or fully responsive (`mobile-app-viewport.md`)

- [ ] Is mobile nav a real decision (bottom tab bar vs. hamburger vs. simplified top bar) matched to how often someone re-navigates, or just a reflexive hamburger?
- [ ] Do touch targets meet ~44×44px with real spacing between them?
- [ ] Does the signature technique (static) or dense interaction pattern (SaaS) have an actual mobile-native equivalent, tested on a real narrow viewport — not just a resized desktop browser?
- [ ] Do structural breakpoints reflect real decisions about what stacks, hides, or simplifies — not just `clamp()`/flex-wrap interpolation?
- [ ] Does anything hover-dependent (tooltips, hover menus) have a working tap equivalent?

---

## Phase 4 — Style-catalog check

1. From what's live, identify the current de facto style, if any (e.g. "unlabeled Glassmorphism," "no consistent style — default Tailwind look").
2. Open `style-catalog.md` and, based on the confirmed industry/audience from Phase 1, find the best-matching named style (General, Landing Page, or BI/Analytics table depending on build type).
3. Decide: does the current site already match a coherent named style closely enough to keep and sharpen, or is a different style a better fit for the industry/audience than what's currently there?
4. State the choice explicitly, with the one-line justification format from `style-catalog.md`: *"[Style], because this is a [industry] site for [audience] and the audience expects [feel]."*
5. If a second style is warranted for a single accent/section only, name that too — but flag if the live site is currently blending three or more aesthetics with no single throughline, since that's the same "decoration instead of decision" failure at the style level.

---

## Phase 5 — Write the redesign spec

Using `design-system-generator.md` section 1, write the spec **based on what should exist going forward**, not what's currently there. Fill in real values:

```
TARGET: [Project Name] — REDESIGN SPEC

CURRENT STATE SUMMARY: [2-3 sentences: what track, what style (or lack of one), the single biggest tell from Phase 2]

PATTERN: [Landing pattern or App pattern]
  Sections / screens in scope: [list them — full site or the "targeted fixes" subset from Phase 1]

STYLE: [chosen style from Phase 4]
  Why: [one line]

COLORS (4–6 named hex values):
  Primary:    [hex + name]
  Secondary:  [hex + name]
  Accent/CTA: [hex + name]
  Background: [hex + name]
  Text:       [hex + name]
  Notes: [temperature family; what's changing vs. current palette and why]

TYPOGRAPHY: [display face] / [body face] / [mono face]
  Mood: [...]
  Notes: [what's changing vs. current type and why — e.g. "swapping system-ui display face, banned per design-principles.md"]

SPACING: [scale] · notes on where hierarchy is currently flat and will be broken on purpose

KEY EFFECTS: [the one motion vocabulary; the one glow/accent moment; elevation approach if SaaS]

AVOID: [style-specific anti-patterns, plus anything found live that should specifically be removed — e.g. "remove glow from all 20 dashboard cards, reserve for one summary metric"]
```

**Persistence:** if this redesign spans more than a couple of pages/screens (near-certain for the SaaS track, common for a multi-page static site), create:

```
design-system/
├── MASTER.md           # this spec
└── pages/
    └── [page-name].md  # per-page overrides only, once work starts
```

Before touching any page's code, check whether `design-system/MASTER.md` already exists from a prior pass — read and follow it rather than re-deriving. Add any new token or reusable pattern discovered mid-build back into `MASTER.md` so later pages inherit it.

---

## Phase 6 — Prioritized fix list

Turn the Phase 2/3 findings into an ordered backlog, not a wall of undifferentiated notes. Rank by:

1. **Structural first** — missing empty/loading/error states, broken responsive behavior, missing focus states, console errors. These are correctness issues, not taste issues.
2. **The five tells, worst offender first** — usually glow-as-hierarchy and flat spacing are the two most visually damaging and cheapest to fix.
3. **Style coherence** — bringing the site to one named style rather than a blend.
4. **Signature-moment / component-primitive work** — the highest-effort, highest-payoff item (static: build or rebuild the one deep interactive moment; SaaS: build the shared primitive library) — sequenced last because it depends on the spec from Phase 5 being locked first.

For each item: cite the specific page/section, the specific rule it violates (cite the source file), and the concrete fix — not "improve spacing" but "hero section uses 16px padding uniformly; increase to 96px top/bottom per design-principles.md's spacing hierarchy rule, tightening surrounding sections to 48px so the hero reads as the important element."

Reference `component-toolkit.md` only where an isolated, infrequent moment needs a ready-made piece (an empty-state illustration, one showpiece hero section) — for SaaS-track fixes, default to extending the site's own tokenized primitives rather than pulling in an external section, and never mix more than one component library into a single build.

---

## Phase 7 — Verify like a hostile critic (after fixes are applied)

Re-run the exact checklist from `design-system-generator.md` section 4, plus the track file's own verification section (static: two full passes including scroll-exit transitions; SaaS: role-by-role flow walk-through, empty/loading/error states, keyboard nav), plus `mobile-app-viewport.md`'s additions if mobile was in scope:

- [ ] No emoji used as UI icons — real SVG icons only
- [ ] `cursor: pointer` on every clickable element
- [ ] Hover/focus transitions ~150–300ms
- [ ] WCAG AA contrast minimum (AAA if healthcare/gov/accessibility-first)
- [ ] Visible `:focus-visible` ring for keyboard nav
- [ ] `prefers-reduced-motion` respected with a real static fallback
- [ ] Checked at 375px, 768px, 1024px, 1440px
- [ ] `design-system/MASTER.md` updated with anything new this pass introduced
- [ ] Zero console errors, no horizontal overflow at any checked width
- [ ] Every scroll-triggered section verified entering *and* exiting
- [ ] (SaaS only) Each role walked through its real permitted flow; empty/loading/error state triggered per major view
- [ ] (Mobile scope only) Real narrow-viewport pass at 375–390px; every interactive element tap-tested for real target size; hover-dependent UI has a tap equivalent

Fix everything found, then do a second full pass. Don't ship after the first pass that merely renders without errors — the second pass is where "looks redesigned" becomes "reads as premium."

---

## One-line summary of the whole flow

Gather the site → confirm classification with the user (don't assume) → audit against the five tells + track-specific checklist → confirm or choose a named style → write (and, if multi-page, persist) the redesign spec → produce a prioritized, cited fix list → apply fixes → verify twice.
