# Design System - Balevik IT & Service

## Overordnet stil
**Nordisk minimalistisk design** med fokus på enkelhet, klarhet og funksjonalitet.

## Fargepalett

### Primærfarger
- **Primary**: `#0066A1` - Hovedblå for overskrifter og viktige elementer
- **Secondary**: `#004E7A` - Mørkere blå for kontrast
- **Accent**: `#0080C8` - Lysere blå for interaktive elementer

### Gradienter
- **Hero bakgrunn**: `from-accent to-secondary` (blå gradient)
- **Alternerende seksjoner**: `from-blue-50 to-blue-100` (lys blå gradient)
- **Footer**: `from-secondary to-primary` (mørk blå gradient)

### Nøytrale farger
- **Bakgrunn hvit**: `bg-white`
- **Tekst primær**: `text-gray-800`, `text-gray-700`
- **Tekst sekundær**: `text-gray-600`, `text-gray-500`
- **Border**: `border-gray-200`

## Typografi

### Fonter
- **Sans-serif** - Standard system fonts (Tailwind default)

### Størrelser
- **H1 (Hero)**: `text-5xl` (3rem / 48px)
- **H2 (Seksjoner)**: `text-4xl` (2.25rem / 36px) 
- **H3 (Cards)**: `text-2xl` (1.5rem / 24px)
- **Body**: `text-base` (1rem / 16px)
- **Body large**: `text-lg` (1.125rem / 18px)
- **Small**: `text-sm` (0.875rem / 14px)

### Font weights
- **Bold**: `font-bold` (700) - Overskrifter
- **Semibold**: `font-semibold` (600) - Sub-headings
- **Medium**: `font-medium` (500) - Links og highlights
- **Normal**: `font-normal` (400) - Body text

## Layout

### Container
- **Max width**: `max-w-7xl` (1280px)
- **Padding**: `px-8` (sides)
- **Margin**: `mx-auto` (centered)

### Modulært oppbygget
Hele siden er bygget opp av **selvstendige moduler** som kan stå alene eller kombineres. Hver modul har:

#### Seksjon (Section)
```html
<section class="py-24 [bakgrunnsfarge]">
  <div class="max-w-7xl mx-auto px-8">
    <!-- Innhold -->
  </div>
</section>
```

Bakgrunnsfargen strekker seg over **full bredde** (edge-to-edge), mens innholdet er **begrenset til max-w-7xl** og sentrert.

#### Typiske modulstrukturer

**Modul med header + grid:**
```
┌─────────────────────────────────────────────┐
│  [Full bredde bakgrunn - py-24]            │
│  ┌───────────────────────────────────────┐ │
│  │ [Container - max-w-7xl mx-auto px-8]  │ │
│  │                                        │ │
│  │  Overskrift (text-4xl, sentrert)      │ │
│  │  Undertekst (text-lg, sentrert)       │ │
│  │                                        │ │
│  │  ┌──────┐  ┌──────┐  ┌──────┐        │ │
│  │  │ Card │  │ Card │  │ Card │        │ │
│  │  └──────┘  └──────┘  └──────┘        │ │
│  │                                        │ │
│  └────────────────────────────────────────┘ │
└─────────────────────────────────────────────┘
```

**Modul uten innhold-container (full-width):**
```
┌─────────────────────────────────────────────┐
│  [Header - sticky, full width]             │
│  ┌───────────────────────────────────────┐ │
│  │ Logo        Navigation                │ │
│  └───────────────────────────────────────┘ │
└─────────────────────────────────────────────┘
```

### Spacing
- **Section padding**: `py-24` (6rem / 96px vertikal)
- **Gap mellom elementer**: `gap-8`, `gap-12`, `gap-16`
- **Inner padding**: `p-8`, `p-12`, `p-16`
- **Margin bottom**: `mb-4`, `mb-8`, `mb-16`

### Grid
- **2 kolonner**: `grid-cols-1 md:grid-cols-2`
- **3 kolonner**: `grid-cols-1 md:grid-cols-3`
- **4 kolonner**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`

## Modulsystem - Detaljert

### Full-width bakgrunn + begrenset innhold
Dette er kjernen i det modulære systemet:

```html
<!-- Eksempel: Tjenester-seksjonen -->
<section class="py-24">  <!-- Hvit bakgrunn, full bredde -->
  <div class="max-w-7xl mx-auto px-8">  <!-- Innhold begrenset -->
    <h2>Overskrift</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="card">Card 1</div>
      <div class="card">Card 2</div>
    </div>
  </div>
</section>

<!-- Eksempel: Fordeler-seksjonen -->
<section class="py-24 bg-gradient-to-br from-blue-50 to-blue-100">
  <!-- Blå gradient bakgrunn, full bredde -->
  <div class="max-w-7xl mx-auto px-8">  <!-- Innhold begrenset -->
    <h2>Overskrift</h2>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div class="card">Benefit 1</div>
      <div class="card">Benefit 2</div>
      <div class="card">Benefit 3</div>
      <div class="card">Benefit 4</div>
    </div>
  </div>
</section>
```

### Modulære cards
Cards er gjenbrukbare komponenter som passer inn i alle grids:

```html
<div class="bg-white p-16 rounded-xl border-2 border-gray-100 
            transition-all hover:shadow-xl hover:-translate-y-2">
  <h3>Card tittel</h3>
  <ul class="space-y-3">
    <li>Punkt 1</li>
    <li>Punkt 2</li>
  </ul>
</div>
```

Samme card-stil brukes i:
- Tjenester (2 kolonner)
- Fordeler (4 kolonner)
- Priser (3 kolonner)
- Kunder (2 kolonner)

### Visuell hierarki i moduler

**Nivå 1 - Section (Full bredde)**
- Bakgrunnsfarge (hvit eller gradient)
- Vertikal padding (py-24)
- Strekker seg edge-to-edge

**Nivå 2 - Container (Begrenset bredde)**
- Max bredde (max-w-7xl)
- Horisontal padding (px-8)
- Sentrert (mx-auto)

**Nivå 3 - Header (Overskrift + tekst)**
- Overskrift (text-4xl, sentrert)
- Undertekst (text-lg, sentrert, max-w-2xl)
- Margin bottom (mb-16)

**Nivå 4 - Content Grid**
- Grid layout (1/2/3/4 kolonner)
- Gap mellom elementer (gap-8/12)
- Responsive breakpoints

**Nivå 5 - Cards/Items**
- Individuelle komponenter
- Egen padding (p-8/12/16)
- Border, shadow, hover effects

### Eksempel på komplett modul

**Prosess-seksjonen:**
```
┌────────────────────────────────────────────────────┐
│  SECTION (py-24, hvit bakgrunn)                   │
│  ┌──────────────────────────────────────────────┐ │
│  │  CONTAINER (max-w-7xl mx-auto px-8)          │ │
│  │                                               │ │
│  │  HEADER                                       │ │
│  │  • Overskrift: "Slik jobber vi"              │ │
│  │                                               │ │
│  │  GRID (4 kolonner)                            │ │
│  │  ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐        │ │
│  │  │  1  │  │  2  │  │  3  │  │  4  │        │ │
│  │  │ Kon-│  │ De- │  │ Utv-│  │ Lan-│        │ │
│  │  │ sult│  │ sign│  │ ikl.│  │ ser.│        │ │
│  │  └─────┘  └─────┘  └─────┘  └─────┘        │ │
│  │                                               │ │
│  │  └─────────────────────────────────────────> │ │
│  │       Linje (gradient, lg:visible)           │ │
│  │                                               │ │
│  └───────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────┘
```

### Fordeler med modulært oppsett

1. **Konsistens**: Alle seksjoner følger samme mønster
2. **Fleksibilitet**: Lett å bytte innhold uten å endre struktur
3. **Responsivt**: Grid kollapser automatisk på mobil
4. **Vedlikeholdbart**: Endre én seksjon uten å påvirke andre
5. **Skalerbart**: Enkelt å legge til nye seksjoner
6. **Visuell balanse**: Alternerende bakgrunnsfarger skaper rytme

### Responsive oppførsel

**Desktop (≥1024px):**
```
[Header: Logo ────────────── Nav Nav Nav Nav Nav]

[Hero: Tekst (50%) │ Bilde (50%)]

[Tjenester: Card │ Card]

[Fordeler: Card │ Card │ Card │ Card]

[Kunder: Card │ Card]

[Priser: Card │ Card │ Card]
```

**Tablet (768px - 1023px):**
```
[Header: Logo ────── Nav Nav Nav Nav Nav]

[Hero: Tekst (50%) │ Bilde (50%)]

[Tjenester: Card │ Card]

[Fordeler: Card │ Card]
           [Card │ Card]

[Kunder: Card │ Card]

[Priser: Card │ Card │ Card]
```

**Mobile (<768px):**
```
[Header: Logo      ]
        [Nav       ]
        [Nav Nav   ]

[Hero: Tekst       ]
       [Bilde      ]

[Tjenester: Card   ]
            [Card  ]

[Fordeler: Card    ]
           [Card   ]
           [Card   ]
           [Card   ]

[Kunder: Card      ]
         [Card     ]

[Priser: Card      ]
         [Card     ]
         [Card     ]
```

## Komponenter

### Header/Navigation
- **Sticky**: `sticky top-0 z-50`
- **Backdrop blur**: `backdrop-blur-md`
- **Bakgrunn**: `bg-white/95` (semi-transparent)
- **Shadow**: `shadow-sm`
- **Logo høyde**: `h-16`
- **Nav gap**: `gap-8`
- **Link hover**: `hover:text-accent`

### Hero
- **Bakgrunn**: Gradient `bg-gradient-to-br from-accent to-secondary`
- **Tekst**: Hvit (`text-white`)
- **Layout**: 2-kolonner (tekst | bilde)
- **Padding**: `py-24`

### Cards
- **Bakgrunn**: `bg-white`
- **Border**: `border-2 border-gray-100` eller `border-gray-200`
- **Border radius**: `rounded-xl` (12px)
- **Shadow**: `shadow-lg`
- **Hover**: `hover:shadow-xl hover:-translate-y-2`
- **Transition**: `transition-all`

### Buttons

#### Primary (CTA)
```css
bg-accent hover:bg-secondary
text-white font-semibold
px-8 py-4 rounded-lg
transition-all transform
hover:-translate-y-0.5 hover:shadow-xl
```

#### Secondary
```css
bg-transparent border-2 border-accent
text-accent hover:bg-accent hover:text-white
font-semibold px-6 py-3 rounded-lg
transition-all
```

### Pricing Cards
- **Featured card**: Border i accent-farge + badge
- **Badge**: Absolute positioning, gradient bakgrunn
- **Layout**: Flexbox column med `flex-1` for features
- **Bullets**: Custom checkmark `✓` i accent-farge

### Customer Showcase
- **Hele card klikkbar**: `<a>` wrapper
- **Image**: `aspect-video` ratio
- **Badge**: `bg-blue-50` rounded pill
- **Link arrow**: `→` symbol

### Icons
- **SVG stroke**: `currentColor` (arver tekstfarge)
- **Size**: `w-16 h-16` eller `w-48 h-48`
- **Container**: Flexbox centered

## Interaktivitet

### Hover States
- **Links**: Color change til `accent` eller `secondary`
- **Cards**: Shadow increase + translate up (`-translate-y-2`)
- **Buttons**: Background change + subtle lift (`-translate-y-0.5`)
- **Images**: Scale effect (`hover:scale-105`)

### Focus States
- **Inputs**: `focus:border-accent focus:ring-4 focus:ring-accent/10`
- **Background shift**: `bg-gray-50 focus:bg-white`

### Transitions
- **Standard**: `transition-all` eller `transition-colors`
- **Duration**: Default (300ms)

## Seksjoner - Bakgrunnsfarger

Vekslende pattern for visuell separasjon:

1. **Hero**: Blå gradient (`from-accent to-secondary`)
2. **Tjenester**: Hvit
3. **Fordeler**: Lys blå gradient (`from-blue-50 to-blue-100`)
4. **Prosess**: Hvit
5. **Kunder**: Lys blå gradient (`from-blue-50 to-blue-100`)
6. **Priser**: Hvit
7. **Kontakt**: Lys blå gradient (`from-blue-50 to-blue-100`)
8. **Footer**: Mørk blå gradient (`from-secondary to-primary`)

## Responsivitet

### Breakpoints (Tailwind standard)
- **Mobile**: `< 768px` (default)
- **Tablet**: `md:` (`>= 768px`)
- **Desktop**: `lg:` (`>= 1024px`)

### Mobile-first approach
- Grid kollapser til 1 kolonne
- Navigation stacker vertikalt
- Padding reduseres
- Font sizes justeres (implisitt via responsive utilities)

## Prinsipper

### 1. Minimalistisk
- Mye whitespace
- Rene linjer
- Ingen unødvendige dekorasjoner
- Fokus på innhold

### 2. Tydelig hierarki
- Klare overskrifter
- Konsistent spacing
- Visuell vekt på viktige elementer

### 3. Nordisk estetikk
- Kjølige fargetoner (blå)
- Funksjonalitet over form
- Enkle, geometriske former
- Subtile effekter

### 4. Accessibility
- God kontrast (blå på hvit/hvit på blå)
- Semantisk HTML
- Klikkbare områder stor nok
- Focus states tydelige

### 5. Performance
- Minimale animations (kun transform og opacity)
- CSS-only effekter (ingen JavaScript)
- Optimaliserte bilder

## Best Practices

### Spacing
- Bruk konsistent spacing-skala (4, 8, 12, 16, 24)
- Mer space mellom seksjoner enn innad i seksjoner
- Symmetrisk padding

### Colors
- Bruk definerte farger fra palette
- Ikke bland nye blåtoner
- Hvit bakgrunn for cards på farget bakgrunn
- Gradienter kun for bakgrunner, ikke tekst

### Typography
- Maksimalt 3 font-sizes per seksjon
- Line-height standard (Tailwind default)
- Begrens tekstbredde for lesbarhet (max-w-2xl for paragrafer)

### Images
- aspect-ratio definert (`aspect-video`)
- object-fit for responsive images (`object-cover`)
- Alt-tekst alltid

### Links
- Underline kun on hover
- Farge-indikasjon (accent/secondary)
- Eksterne linker åpnes i ny tab
- `rel="noopener noreferrer"` for sikkerhet

## Anti-patterns (Unngå)

❌ **Fancy gradienter på knapper med hover-animasjoner**
✅ Simple, solide farger med subtle hover

❌ **Komplekse animasjoner**
✅ Simple transitions (color, transform)

❌ **Mange forskjellige blåtoner**
✅ Bruk de 3 definerte fargene konsistent

❌ **Emoji overload**
✅ Diskret bruk av emoji/ikoner

❌ **SEO og mobilrespons som separate features**
✅ Implisitt inkludert i alle løsninger

❌ **Altfor mye innhold per seksjon**
✅ Fokusert, kortfattet innhold

## Teknisk stack

- **Framework**: Hugo (static site generator)
- **Styling**: Tailwind CSS 3.4+
- **Node**: v18+
- **Build**: `npm run build` (Tailwind + Hugo)
- **Deploy**: Netlify
