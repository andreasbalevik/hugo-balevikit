# Balevik IT & Service

Nettside for Balevik IT & Service - enkle og effektive nettsider for små bedrifter.

## Utvikling

Start Hugo development server med Tailwind CSS watch:
```bash
npm run dev
```

Dette starter både Tailwind CSS watcher og Hugo server samtidig.
Nettsiden vil være tilgjengelig på `http://localhost:1313`

## Bygg

Bygg produksjonsversjon:
```bash
npm run build
```

Dette bygger Tailwind CSS (minified) og Hugo (minified).
Output: `public/` mappen

### Tailwind plugins og theme

Tailwind-pluginer som brukes under Hugo-build må ligge i rotprosjektets
`package.json`, selv om de også brukes av theme-et.

I dette prosjektet gjelder det blant annet
`@tailwindcss/typography`.

Årsaken er at `css.TailwindCSS` under build resolver npm-pakker fra
prosjektroten. Avhengigheter som bare er installert i
`themes/balevikit-tailwindcss-hugo-theme/` blir derfor ikke automatisk funnet
av Netlify/Hugo.

Hvis denne dependencyen fjernes fra rotprosjektet, vil build feile med en feil
som ligner på:

```text
Can't resolve '@tailwindcss/typography' in '/opt/build/repo'
```

## Deploy

Prosjektet er satt opp for Netlify med:
- Kontaktskjema-integrasjon (Netlify Forms)
- Hugo build kommando
- Tailwind CSS kompilering

## Teknologi

- **Hugo** - Static site generator
- **Tailwind CSS** - Utility-first CSS framework
- **Netlify Forms** - Kontaktskjema
- **Nordisk minimalistisk design**

## Struktur

- `content/` - Innhold (markdown)
- `layouts/` - HTML templates med Tailwind classes
- `static/` - Statiske filer (CSS, logo, bilder)
- `assets/css/` - Tailwind CSS input fil
- `hugo.toml` - Hugo konfigurasjon
- `tailwind.config.js` - Tailwind konfigurasjon
