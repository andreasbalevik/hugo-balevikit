# Copilot Instructions - Balevik IT & Service

## Project Context
This is a static website for **Balevik IT & Service**, a Norwegian web development and IT consultancy company. The site showcases custom static websites and IT consulting services targeting small businesses.

## Tech Stack
- **Hugo** (v0.150.0) - Static site generator
- **Tailwind CSS** (v3.4+) - Utility-first CSS framework
- **Netlify** - Hosting and deployment
- **Norwegian language** (nb-NO) - All content in Norwegian

## Design Philosophy

### Core Principles
1. **Nordic minimalism** - Clean, simple, functional
2. **Mobile-first** - Responsive design is default, not a feature
3. **Performance** - Fast, static, lightweight
4. **Accessibility** - Clear hierarchy, good contrast, semantic HTML

### Color Palette
Only use these 3 blue tones defined in tailwind.config.js:
- primary: '#0066A1' (Main blue)
- secondary: '#004E7A' (Darker blue)
- accent: '#0080C8' (Lighter blue for interactions)

### Visual Pattern
Sections alternate between white and light blue gradient backgrounds.

## Code Style

### Tailwind Classes
- Spacing: py-24 for sections, px-8 horizontal
- Typography: text-4xl for h2, text-2xl for h3
- Containers: max-w-7xl mx-auto px-8
- Grid: grid grid-cols-1 md:grid-cols-2
- Hover: hover:shadow-xl hover:-translate-y-2

### Sections (Fixed Structure)
1. Hero - Value proposition
2. Tjenester - Two services (websites + IT consulting)
3. Fordeler - 4 benefits
4. Prosess - 4 steps
5. Kunder - Customer showcases
6. Priser - 3 tiers (Enkel, Standard, Skreddersydd)
7. Kontakt - Contact info
8. Footer

### Pricing Logic
- All include: Responsive design, SEO (implicit)
- Enkel: 1-3 pages, 1 language, 1 month support, 2.500 kr
- Standard: 5-10 pages, multilingual, CMS, 3 months support, 6.000 kr
- Skreddersydd: Everything in Standard + more, custom price

## Development Commands
- npm run dev - Development with Tailwind watch
- npm run build - Production build
- npm run build-tw - Build Tailwind only

## Things to Avoid
- New blue color variations
- Complex animations
- Custom CSS files (use Tailwind)
- JavaScript (keep it static)
- Listing SEO/Mobile as features (implicit)

## Key Info
- Email: andreasbalevik@gmail.com
- Phone: +47 95 12 77 23
- Org.nr: 925316504
- Domain: balevikit.no

Remember: Less is more. Keep it simple, Nordic, and fast.

## Modular Layout System

The site uses a **modular, self-contained section approach**:

### Section Structure (Full-width background + contained content)
```html
<section class="py-24 [background-color]">  <!-- Full width -->
  <div class="max-w-7xl mx-auto px-8">      <!-- Content contained -->
    <!-- Header + Grid + Cards -->
  </div>
</section>
```

### Visual Hierarchy
1. **Section** (Level 1): Full-width background, py-24
2. **Container** (Level 2): max-w-7xl, centered, px-8
3. **Header** (Level 3): Title + subtitle, centered, mb-16
4. **Grid** (Level 4): 1-4 columns, responsive breakpoints
5. **Cards** (Level 5): Individual components, p-8/12/16

### Key Pattern
- Background spans **edge-to-edge** (full viewport width)
- Content is **limited to max-w-7xl** and centered
- Sections alternate: white → blue gradient → white → blue
- Same card style reused across all sections
- Grid collapses to 1 column on mobile

### Example Modules
- **Tjenester**: 2-column grid with service cards
- **Fordeler**: 4-column grid with benefit cards
- **Prosess**: 4-column grid with numbered steps + connecting line
- **Kunder**: 2-column grid with clickable customer cards
- **Priser**: 3-column grid with pricing tiers

### Responsive Behavior
- Desktop (≥1024px): Full multi-column layout
- Tablet (768-1023px): 2 columns or stacked pairs
- Mobile (<768px): Single column, stacked

Each module is **independent and self-contained** - can be rearranged, removed, or duplicated without affecting others.
