# egc.fyi — Portfolio Website

## Project overview
Design portfolio for Elena Gil-Chang (elenagilchang@gmail.com). Vanilla HTML/CSS/JS only — no frameworks, no build process. Hosted on Vercel via GitHub auto-deploy. Domain migrating from Squarespace.

**Figma source file:** https://www.figma.com/design/T1StcQVbUzvPdl0W3IHUOQ/egc.fyi-2026  
**Homepage node:** `54:160`

Always pull copy, layout, and design decisions from Figma first. Never invent copy.

---

## Tech stack
- Vanilla HTML, CSS, JavaScript — no exceptions
- CSS custom properties for all tokens (colors, spacing, type)
- No build step — files are served directly
- Responsive: desktop (1440px) → tablet (768px) → mobile (480px)

---

## File structure
```
/index.html
/styles.css
/script.js
/projects/
  patch-videos.html
  patch-rebalance.html
  patch-thought-leadership.html
  plaid-forum.html
  plaid-money2020.html
  plaid-brand-refresh-2018.html
  lippincott-like-me.html
/assets/
  /images/       ← real images go here when ready
  /fonts/        ← PP Mori + PP Writer woff2 files go here (see styles.css @font-face comments)
  /icons/
    down-arrow.svg
    triangle.svg
```

---

## Design system

### Colors (CSS custom properties)
```css
--color-taupe-1000: #2d2926  /* background */
--color-taupe-700:  #58514d  /* tag backgrounds */
--color-taupe-600:  #837a74  /* borders, dividers */
--color-taupe-400:  #c2b8ae  /* pill borders */
--color-taupe-300:  #e7dbd0  /* all text */
```

### Typography
| Token | Family | Size | Weight | Line height |
|-------|--------|------|--------|-------------|
| H2 Writer | PP Writer | 64px | Thin (100) | 1.1 |
| H1 Project | PP Writer | 80px | Thin (100) | 1.1 |
| H5 Mori | PP Mori | 14px | Semibold (600) | 1.5 |
| Body 14 | PP Mori | 14px | Regular (400) | 1.3 |
| Tag | PP Mori | 8px | Semibold (600) | 1.2 |
| UI/Nav | Aktiv Grotesk | 14px | Regular | 1.2 |

**Fonts:** PP Writer + PP Mori are commercial. Files go in `assets/fonts/`. The `@font-face` blocks are in `styles.css` but commented out — uncomment when files are added. Google Fonts fallbacks (Cormorant + DM Sans) are active in the meantime.

### Spacing scale
```
--spacing-xxs: 8px
--spacing-xs:  12px
--spacing-s:   16px
--spacing-m:   20px
--spacing-l:   24px
--spacing-xl:  32px
--spacing-xxl: 40px
--spacing-whoa: 120px
```

### Grid
- Max width: 1440px, content area: 1376px, padding: 32px each side
- 12 columns, 20px gaps

---

## Homepage layout — critical details from Figma

### Header
- **Logo:** Image asset (complex egc badge/monogram SVG) — NOT plain text. Export from Figma and save as `assets/images/logo.svg`
- **Nav:** Just "Contact" text (Aktiv Grotesk Regular 14px), right-aligned

### Hero (node 54:162)
- Headline + bio + Work/About nav all sit in **cols 1–8** (left side)
- Decorative triangle is **absolutely positioned** top-right (~left: calc(50%+77px), top: 165px)
- **Work/About nav** are plain text rows with a `border-top` divider + down arrow icon — NOT pill buttons
- Bio is ~329px wide, PP Mori Regular 14px

### Actual bio copy (from Figma):
```
Hey. I'm Elena Gil-Chang, a brand designer and art director based in Brooklyn, New York.

I am currently the Lead Brand Designer at Patch; previous roles include Head of Brand Design at Plaid and Senior Design Director at Lippincott.
```
Links: Patch → https://www.patch.io/ | Plaid → https://plaid.com/ | Lippincott → https://www.lippincott.com/

### Project showcase rows — ALL 8 projects
**Layout is NOT alternating.** Every row: image cols 1–8 (left), text cols 9–11 (right), col-12 spacer.

Each row structure:
- Image (890×500px, 8px border radius, right border divider)
- Text panel:
  - Pills row: number pill (e.g. "01") overlapping with a hidden "Learn more" pill (opacity: 0 — show on hover)
  - Title (PP Mori Semibold 14px)
  - Description (PP Mori Regular 14px)
  - Tags (taupe-700 background pills, 8px PP Mori Semibold uppercase)

### Project data (exact copy from Figma):

| # | Title | Description | Tags | URL | Notes |
|---|-------|-------------|------|-----|-------|
| 01 | A brand built to feel safe, scientific, and urgent | Coming soon. I developed this brand identity while at Patch, in collaboration with stakeholders from across the corporate, academic, and forestry preservation sectors. | Brand identity, Brand identity, Web design | — | No link. Hover overlay: coming soon |
| 02 | Patch videos | A variety of videos for different purposes, from customer testimonials to product launches. We chose different styles based on the kind of stories we aimed to tell and the outcomes we wanted to drive, but all of them are meant to feel like they belong to the same brand. | Brand identity, Video, Campaign | patch-videos | |
| 03 | Patch Rebalance: CSO summit | Developing a repeatable, scalable visual identity and experience design for Chief Sustainability Officers. | Brand identity, Events & Experiences, Web design | patch-rebalance | |
| 04 | Patch thought leadership | Rigorous, educational, and pragmatic: a series of downloadable guides helping sustainability leaders understand corporate climate claims, science-based targets, policy changes, and the fragmented voluntary carbon markets. | Collateral, Data visualizations, Campaign | patch-thought-leadership | |
| 05 | Plaid Forum virtual event | Creating a sub-brand for Plaid's first flagship customer event: one that would be fully digital, but could expand to have a physical presence in years to come. | Brand identity, Video, Events & Experiences | plaid-forum | |
| 06 | Plaid: Money20/20 booth | Launching Plaid's European presence with a custom-built, brand-forward booth at Money 20/20, Amsterdam. | Events & Experiences | plaid-money2020 | |
| 07 | Plaid brand refresh | Preparing Plaid for its next phase of growth with a new set of brand traits and visual identity, created 100% in-house. | Brand strategy, Brand identity, Web design, Art direction | plaid-brand-refresh-2018 | |
| 08 | Lippincott: Like Me exhibition | An exhibition held during London Design Festival at the London Design Museum about the push and pull between brands and their audiences — who is branding whom? | Events & Experiences | lippincott-like-me | |

### Footer (exact copy from Figma):
- **Copyright:** © Elena Gil-Chang 2026
- **Contact heading:** Contact
- **Contact body:** "I am decent at responding to [emails] and terrible at responding to [LinkedIn] messages."  
  (emails + LinkedIn are underlined links)
- **Select recognition heading:** Select recognition
- **Recognition body:** "My work has been featured in UnderConsideration's Brand New, Advertising Age, the Graphis Design Annual Awards, Logo Lounge, the Rebrand Awards, and one time a guy emailed me from across the world to say he found one of my illustrations on Tumblr and got it tattooed on his arm."

Footer grid: copyright bottom-left (row 2, col 1-3), Contact (row 1, col 4-6), Select recognition (row 1, col 1-3).

---

## Current build status
- `styles.css` — built, design system complete, needs review against Figma
- `index.html` — built but needs full rebuild: wrong alternating layout, invented copy, wrong nav style, logo is text not image
- `script.js` — built, interactions mostly correct
- `projects/*.html` — 7 stub pages built with invented copy; need real content from Figma project detail nodes

## Immediate next task
Rebuild `index.html` from scratch using the Figma design (node 54:160). Pull layout and copy directly from Figma. Key things to get right:
1. Logo as image asset (export from Figma first)
2. Hero: headline + bio + nav in cols 1–8, triangle absolutely positioned top-right
3. Work/About nav as bordered text rows, not pill buttons
4. ALL 8 project rows: image left (cols 1–8), text right (cols 9–11) — no alternating
5. Number pill + hidden "Learn more" pill overlap pattern
6. Exact copy from the table above
7. Footer with correct copy and layout

---

## Important rules
- **Never invent copy.** If content isn't in Figma, use `[PLACEHOLDER — add copy from Figma]`
- **Always check Figma** before writing any text, layout dimensions, or spacing values
- **No frameworks.** Vanilla HTML/CSS/JS only
- **Images:** Use `placehold.co` placeholders until real assets are provided. Match dimensions from Figma exactly
