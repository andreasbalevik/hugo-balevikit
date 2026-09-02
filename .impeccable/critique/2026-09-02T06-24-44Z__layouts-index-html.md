---
target: ta full gjennomgang — hele nettstedet
total_score: 24
max_score: 36
na_heuristics: 7
p0_count: 0
p1_count: 4
timestamp: 2026-09-02T06-24-44Z
slug: layouts-index-html
---
# Critique: Balevik IT & Service — hele nettstedet (layouts/index.html)

Method: dual-agent (A: assessment-a-design-review · B: assessment-b-detector)

## Design Health Score (Nielsen)
| # | Heuristik | Score | Nøkkelfunn |
|---|-----------|-------|------------|
| 1 | Systemstatus synlig | 2 | Aktiv-nav-logikk kan aldri treffe anker-URLer; død «Nettside»-lenke feiler lydløst; ingen scroll-spy |
| 2 | System / virkelighet | 3 | Ren, jargongfri norsk; nav-label «Tjenester» ≠ overskrift «Hva vi tilbyr»; «Nettside» peker på ingenting |
| 3 | Brukerkontroll | 3 | Ingen feller; mobilmeny mangler Esc/klikk-utenfor og fokushåndtering |
| 4 | Konsistens | 2 | Engelsk lekkasje på nb-NO-side; tre ulike blåfarger (#00578a, #0066A1, #0369a1); drift mellom DESIGN_SYSTEM.md og bygg |
| 5 | Feilforebygging | 3 | Lite å ødelegge; alias-redirect håndterer omdøpt side |
| 6 | Gjenkjenning | 3 | Alt merket, ≤4 valg — men pris (det mest etterspurte) er gjemt i kollapset FAQ |
| 7 | Fleksibilitet | n/a | Fire-seksjons brosjyre; ingen repeterende oppgave |
| 8 | Estetisk/minimalistisk | 3 | Rolig og ryddig; org.nr presentert to ganger |
| 9 | Feilgjenoppretting | 2 | Ødelagt nav-anker gir null tilbakemelding; lucide CDN-feil gir usynlig hamburger |
| 10 | Hjelp/dok | 3 | FAQ er oppgavefokusert og native <details> — men finnes bare på undersider |
| **Total** | | **24/36** | **Akseptabelt** |

## Design-spesifisitetsverdi
Copy er skrevet for dette produktet (geografi, «Du forteller om bedriften din. Vi bygger resten.», ekte Vestland-kunder, org.nr). Visuelt språk er kategori-utbyttbart: flat blå hero, to kort, navneliste — ingen bilder, logoer, fjord eller ansikt. DESIGN_SYSTEM.md dokumenterer en rikere side enn den som er shippet (hero med bilde, showcase-kort, priskort, prosess-tidslinje) — skjelettet uten det differensierende kjøttet.

## Kognitiv last
1 hard feil (arbeidsminne: eneste pris gjemt i kollapset FAQ, ingen priser på hjemmesiden) + 1 borderline (kunder og kontakt er to tilstøtende like toner etter at Priser-seksjonen ble slettet). Ellers lav last.

## Emosjonell reise
Peak: hero-kopletet. Daler: tjenester (abstrakt, ingen pris/bevis), kunder (heading som sikler: «og tidligere kunder»), og den store: prisangst møtes aldri — «fast pris» lover schema til Google, mennesker ser ingen kronebeløp. Ende: mailto til gmail på eget domene.

## Styrker
1. Hero-copyen — geografisk presisjon + lovnad i to linjer; CTA med 7.8:1 kontrast (AAA).
2. Craft-detaljer: skip-link til ekte #main-content, scroll-padding-top, focus-visible, native details, rel=noopener med norske aria-labels.
3. Lokal legitimitet: org.nr, navngitte kunder, ProfessionalService-schema med geo og priceRange, alias-redirect.

## Prioriterte funn
1. **P1 — Død primærnavigasjon.** «Nettside» → /#nettside, ingen id="nettside" finnes (hugo.toml:61–63). Fiks: pek til /nettsider-for-bedrifter-i-vestland/ eller fjern.
2. **P1 — Usynlig footer-overskrift.** h4 «Information» har #101828 på #101828 (1.0:1) på alle sider; footer.html:108 mangler text-white fordi styles.css:45–47 h1–h6-elementregel overstyrer. Bekreftet visuelt (evidence/footer-desktop.png).
3. **P1 — Pris er usynlig i beslutningsøyeblikket.** Ingen pris på hjemmesiden; pakkene på /pris-pa-nettside/ uten tall; eneste beløp i kollapset FAQ — mens JSON-LD annonserer «fra 3.500 kr» (strukturert-data/innhold-mismatch).
4. **P1 — Undersider er konverterings blindveier.** Ingen kontakt-CTA i <main> på undersider; bare krysslenker.
5. **P2 — Sosialt bevis er en navneliste.** Hedgende heading, ingen resultater/bilder, 3 av 5 ulenket — DESIGN_SYSTEM.md spesifiserte bedre komponent.
6. **P2 — Kontakt-friksjon.** Kun mailto, og gmail-adresse på balevikit.no-domene. Netlify Form eller hei@balevikit.no.

## Persona-rødflagg
- **Jordan (førstegangs):** Nettside-knappen gjør ingenting → finner prissiden → ingen priser → må åpne FAQ → mailto åpner ukonfigurert klient. Tre feil på kjerneflyten.
- **Casey (mobil, distrahert):** Hamburger-ikon avhenger av unpkg CDN uten defer/fallback; ingen sticky CTA; døde preconnects.
- **Riley (stresstester):** Alias meta-refresh er absolutt URL (teleporterer staging til prod); schema lover priser mennesker aldri ser; mobilmeny ignorerer Esc og utenfor-klikk.

## Mindre observasjoner
Engelsk lekkasje («Information», «All rights reserved», «Go to top»); Inter deklarert men aldri lastet; theme-color #0369a1 er tredje blå; prose max-w-none → ~140 tegn linjelengde; scroll-behavior:smooth uten prefers-reduced-motion; org.nr to ganger; menu-vekter 1,3,4,6 og hero-fossiler.

## Åpne spørsmål
1. Hele pitchen er «fast pris» — hvorfor finnes 3.500 kr bare i en kollapset FAQ mens schema siterer priser til Google?
2. Hva beviser overfor en baker i Sogndal kl. 21 på mobil at du har bygd noe for noen som henne?
3. Var nedstrippingen fra DESIGN_SYSTEM.md en bevisst konverteringssatsing eller drift?
4. Hvem er «vi»? Siden er én person, og gmail-adressen røper det.
