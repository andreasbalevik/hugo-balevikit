# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Arbeidshypotese basert på eksisterende innhold; bekreftes ved neste
produktavklaring:** Primærbrukeren er en liten bedrift i Vestland som trenger
en tydelig nettside og en enkel vei fra første vurdering til oppstart.
Besøkeren vil forstå hva Balevik IT & Service tilbyr og ta kontakt om et
prosjekt. En sekundær målgruppe er bedrifter som trenger IT-konsultasjon.

## Product Purpose

**Arbeidshypotese basert på eksisterende innhold:** Nettsiden presenterer
nettsideutvikling, prototyping, MVP-utvikling, programmering på prosjektbasis og
IT-konsultasjon, gjør prosessen forståelig og gjør det enkelt å be om et
uforpliktende pristilbud på e-post eller telefon. Suksess er at besøkeren raskt
forstår tilbudet og finner en tydelig vei til kontakt.

## Positioning

Den bekreftede posisjonen er en leverandør med fokus på bedrifter i Vestland,
enkel prosess, rask levering og samarbeid lokalt eller digitalt. Nettsidene
bygges i hovedsak statisk, med headless CMS og integrasjoner når prosjektet
trenger det. Nettsiden beskriver også over 10 års erfaring fra privat og
offentlig sektor. En mer særpreget markedsposisjon er ikke avklart.

## Operating Context

- Nettsiden er inngangen til et lite tjenesteforetak og skal støtte vurdering
  av tjenester og første kontakt.
- Besøk skjer på mobil, nettbrett og PC.
- Kontakt skjer primært via e-post og telefon.
- Innhold skrives i Markdown og rendres med Hugo-maler.
- Produksjonsbygget bruker Tailwind CSS og publiseres som en statisk Netlify-
  deploy.

## Capabilities and Constraints

- Forsiden består av hero, tjenester, kunder og kontakt.
- Det finnes en egen side for nettsider for bedrifter i Vestland med FAQ og
  informasjon om prosess og leveranse.
- Det finnes en egen side for prototyping, MVP og proof of concept med FAQ og
  informasjon om hvordan en idé kan testes før full utvikling.
- Det finnes en egen side for IT-kompetanse og programmering på prosjektbasis
  med informasjon om kortvarig støtte og videreutvikling av eksisterende
  nettsideløsninger.
- Hovedleveransen er statiske nettsider med ferdig genererte filer og få
  serverkomponenter.
- Prototyper og MVP-er kan brukes til å teste avanserte webløsninger,
  bookingtjenester og andre digitale arbeidsflyter før videre investering.
- IT-kompetanse kan leveres i en avtalt periode eller som et avgrenset
  utviklingsoppdrag for eksisterende nettsider og webapplikasjoner.
- Et headless CMS kan kobles til når kunden skal oppdatere tekst og bilder selv.
- Statiske nettsider kan utvides med eksterne tjenester og API-er når prosjektet
  trenger søk, skjema, booking, betaling eller innlogging.
- Store alt-i-ett-CMS-er som WordPress er ikke standard for en enkel firmaside.
  Teknisk løsning skal velges etter behov, ikke etter størst mulig
  funksjonspakke.
- Nettsider skal beskrives som enkle å drifte og bygge videre på.
- Språket skal bruke «uforpliktende pristilbud» fremfor en offentlig prisside.
- Målet er færre løpende vedlikeholdspunkter og et bedre grunnlag for
  forutsigbare driftskostnader. Ingen løsning skal beskrives som helt uten
  sikkerhetsrisiko.
- Løsningen skal være responsiv, semantisk og brukbar med tastatur og
  hjelpemidler.
- Nye funksjoner og innhold må passe Hugo/Tailwind-oppsettet og den statiske
  publiseringen.
- Åpne produktbeslutninger: om IT-konsultasjon skal ha samme prioritet som
  nettsider, hvilke nye tjenester som skal støttes, og om kontaktflyten senere
  skal utvides utover e-post og telefon.

## Brand Commitments

- Navnet er Balevik IT & Service.
- Eksisterende innhold bruker norsk bokmål, kortfattet språk og en direkte
  kontaktinvitasjon.
- Kontaktinformasjon og organisasjonsnummer skal hentes fra nettstedets
  konfigurasjon, ikke kopieres inn flere steder.
- Brukeren har fastsatt teknisk svart-hvitt hero-bilde med transparent blå
  overlay som visuell retning for heroen.

## Evidence on Hand

- Kundeoversikt og eventuelle eksterne kundelenker finnes i
  `layouts/partials/sections/kunder.html`.
- Tjenesteinnhold, geografisk område og FAQ finnes i
  `content/nettsider-for-bedrifter-i-vestland.md`.
- E-post, telefon, organisasjonsnummer og tjenesteområde finnes i
  `hugo.toml`.
- Hero-bildet finnes lokalt i `assets/images/hero-technology.jpg`.
- Det finnes ingen bekreftede testimonials, resultatmålinger eller andre
  bevis som fremtidig arbeid kan dikte opp.

## Product Principles

1. Gjør første steg enkelt og omfanget forståelig.
2. Hjelp besøkeren å forstå tilbudet og ta kontakt uten unødvendige valg.
3. Velg den minste tekniske løsningen som dekker behovet.
4. Bygg løsninger som er lette å drifte og utvide.
5. Behold Vestland-forankringen og bruk bare bekreftede kunder, erfaringer,
   priser og resultater.

## Accessibility & Inclusion

- Innhold og handlinger skal fungere på mobil, nettbrett og PC.
- Semantisk HTML, tydelig tastaturfokus og lesbar kontrast skal bevares når
  nye seksjoner eller komponenter legges til.
- Viktig informasjon skal ikke kommuniseres gjennom farge eller bilde alene.
