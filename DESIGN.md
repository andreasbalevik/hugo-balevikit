---
name: Balevik IT & Service
description: Enkle nettsider og IT-hjelp for bedrifter i Vestland.
colors:
  primary: "oklch(44% 0.11 244)"
  neutral-bg: "#ffffff"
  neutral-dark: "#111827"
  neutral-body: "#1f2937"
  neutral-muted: "#374151"
  neutral-border: "#e5e7eb"
typography:
  display:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1.875rem, 4vw, 3rem)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2.25rem)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1.25rem, 2vw, 1.5rem)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.5
rounded:
  sm: "4px"
  md: "8px"
  full: "9999px"
spacing:
  xs: "0.5rem"
  sm: "1rem"
  md: "2rem"
  lg: "3rem"
  section: "4rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "1rem 2rem"
  button-hero:
    backgroundColor: "{colors.neutral-bg}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: "1rem 2rem"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: "1rem 2rem"
  card:
    backgroundColor: "{colors.neutral-bg}"
    rounded: "{rounded.md}"
    padding: "2rem"
  navigation:
    backgroundColor: "{colors.neutral-bg}"
    height: "70px"
---

# Design System: Balevik IT & Service

## Overview

**Creative North Star: "Det klare nordiske verkstedet"**

Dette er en arbeidsmetafor utledet fra den eksisterende nordiske,
funksjonelle utformingen og er ikke en ny visuell retning. Systemet skal føles
rolig, presist og lett å forstå. Hvit bakgrunn, en kjølig fjordblå aksent og
moderate overflater lar tjenestene og neste steg være tydelige.

Komposisjonen bruker god luft, enkel geometri og få visuelle virkemidler.
Teknisk innhold kan få en tydeligere rolle gjennom den eksisterende
svart-hvitt-heroen med blå overlay, men resten av siden skal ikke konkurrere
med den.

**Key Characteristics:**

- kjølig fjordblå aksent mot hvite og mørke nøytraler
- Inter med moderate vekter og balanserte overskrifter
- flate eller svakt løftede overflater med konsistente kanter
- tydelig responsiv rytme fremfor dekorativ kompleksitet

## Colors

Paletten er monokrom med én kjølig blå aksent. Primærblå brukes sparsomt på
handlinger, lenker, fokus og strukturelle detaljer.

### Primary

- **Fjordblå** (`oklch(44% 0.11 244)`): Primær handling, overskrifter, lenker,
  fokus og heroens underliggende flate.

### Neutral

- **Hvit bakgrunn** (`#ffffff`): Sidebakgrunn, kort og tekst på mørke flater.
- **Mørk skifer** (`#111827`): Overskrifter og footer.
- **Kulltekst** (`#1f2937`): Brødtekst.
- **Dempet skifer** (`#374151`): Sekundær tekst og metadata.
- **Lys skiferkant** (`#e5e7eb`): Diskré grenser og skillelinjer.

### Named Rules

**The Fjord Accent Rule.** Bruk fjordblå som eneste strukturelle aksent. Nye
visuelle farger må ha en funksjonell grunn og skal ikke bli en ny merkevarefarge.

## Typography

**Display Font:** Inter (med system-ui, -apple-system, sans-serif fallback)

**Body Font:** Inter (med system-ui, -apple-system, sans-serif fallback)

**Character:** Typografien er saklig og luftig. Medium overskrifter gir
hierarki uten å bli tunge, mens brødtekst prioriterer lesbarhet og en rolig
linjehøyde.

### Hierarchy

- **Display** (500, 30/36/48px, 1.2): Hovedoverskrift i hero og på sider.
- **Headline** (500, 24/30/36px, 1.2): Seksjonsoverskrifter.
- **Title** (500, 20/24px, 1.2): Kort- og støtteoverskrifter.
- **Body** (400, 16px, 1.625): Brødtekst og forklaringer.
- **Label** (600, 14px, 1.5): Handlingsetiketter og kontaktmetadata.

### Named Rules

**The Quiet Hierarchy Rule.** Bruk størrelse, vekt og luft for å skille nivåer.
Ikke legg til ekstra fonter, dekorativ tekst eller unødvendig fet skrift.

## Layout

Seksjoner går kant-til-kant, mens `.container` samler innholdet ved maksimalt
1280px. Containeren har 16px sidepadding og 48px vertikal padding som standard,
64px vertikal padding fra 1024px og ingen sidepadding fra 1536px.

Grids starter som én kolonne og går til to kolonner fra 768px. Tjenestekort
bruker `gap-6` på mobil og `gap-8` fra 768px. Navigasjonen er fast med 70px
høyde; siden bruker 80px scroll-offset for å unngå at ankere skjules.

Siden er mobil-først. Hero-innhold, navigasjon, kort og kontaktflater skal
fortsatt ha tydelig rekkefølge og ingen horisontal overflow på små skjermer.

## Elevation & Depth

Systemet bruker primært tonal lagdeling: hvite flater mot en svært svak
primærfarget bakgrunn og mørk footer. Kort og kontaktflater får et lite
`shadow-sm`-løft når de trenger avgrensning. Hover kan bruke et moderat
`shadow-lg`-løft på handlinger, men skygger skal ikke bære hele hierarkiet.

### Shadow Vocabulary

- **Ambient low** (`0 1px 2px 0 rgb(0 0 0 / 0.05)`): Kontaktkort og rolige
  innholdsflater.
- **Action lift** (`0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)`):
  Hover på primære handlinger.

### Named Rules

**The Flat-By-Default Rule.** Overflater skal være flate i hvile. Bruk skygge
bare for avgrensning eller som respons på hover, ikke som dekorasjon.

## Shapes

Hjørnene er moderat avrundet med 8px som standard og 4px for små tekstnære
elementer. Grenser er vanligvis 1px og bruker primærfarget tint eller lys
skifer. Unngå store piller og mange forskjellige radier.

## Components

### Buttons

Knappene er tydelige, tekstbaserte handlinger med rolig overgang.

- **Shape:** Moderat avrundet (`8px`).
- **Primary:** Fjordblå bakgrunn, hvit tekst og `16px 32px` padding.
- **Hero:** Hvit bakgrunn, fjordblå tekst og samme størrelse på mørk hero.
- **Secondary:** Transparent bakgrunn med 1px fjordblå kant.
- **Hover / Focus:** Primærfargen mørknes eller flaten lysnes; handlingen kan
  løftes 2px. Tastaturfokus bruker 2px synlig outline med 2px offset.

### Cards / Containers

- **Corner Style:** 8px radius.
- **Background:** Hvit på svakt primærtintede seksjoner; svært svak
  primærtint på hvite seksjoner.
- **Shadow Strategy:** `shadow-sm` ved behov, ellers tonal avgrensning.
- **Border:** 1px, normalt primærfarget tint eller lys skifer.
- **Internal Padding:** `32px` på mobil, `48px` fra 768px og `64px` fra 1024px
  for store tjenestekort.

### Navigation

Navigasjonen er en fast, hvit 70px-flate med diskret bunnkant. Desktop-lenker
bruker 16px tekst og 32px gap. Mobilmenyen åpner under navigasjonen og
beholder store nok trykkflater, tydelig fokus og samme teksthierarki.

### Hero

Heroen bruker en mørk primærflate med lokal svart-hvitt-teknologi i `object-cover`.
Bildet har gråtone, økt kontrast og redusert opacity, med en transparent
fjordblå overlay over bildet. Tekst og hovedhandling ligger i et sentrert,
begrenset innholdsområde.

## Do's and Don'ts

### Do:

- **Do** bruk `--color-primary` som eneste merkevareaksent.
- **Do** bruk Tailwind utilities og eksisterende container-/spacing-mønstre.
- **Do** hold én tydelig primærhandling per seksjon.
- **Do** behold 1px grenser, moderate radier og synlig tastaturfokus.
- **Do** la hero-bildet være teknisk, svart-hvitt og blåtonet av overlayen.

### Don't:

- **Don't** introduser nye fargepaletter, gradienter eller tunge skygger uten
  en konkret funksjon.
- **Don't** bruk `font-bold` eller legg til en ny fontfamilie.
- **Don't** bruk mange piller, tykke sidekanter eller dekorkort.
- **Don't** la nye elementer gi horisontal overflow på mobil.
- **Don't** legg tilbake en offentlig prisside eller konkrete prisbeløp.
