# Project Structure Guide for GitHub Copilot

## Directory Structure
```
d:\Projects\pool-landing\
├── .github\                          # GitHub configuration & instructions
│   ├── copilot-instructions.md       # Main Copilot context
│   ├── evidence-based-instructions.md # Research-backed guidelines
│   ├── world-class-simple.md         # Minimal quality principles
│   ├── coding-standards.md           # Development patterns
│   ├── workspace-context.md          # Business & tech context
│   └── instructions\                 # Specialized instructions
│       ├── components.instructions.md # React component standards
│       ├── tailwind.instructions.md  # CSS & design system
│       ├── forms.instructions.md     # Form optimization
│       └── testing.instructions.md   # Testing strategy
├── public\                          # Static assets
│   ├── pool-real.jpg               # Hero image (conversion-optimized)
│   ├── robots.txt                  # SEO configuration
│   └── sitemap.xml                 # Search engine indexing
├── src\                            # Source code
│   ├── components\                 # React components
│   │   ├── Hero.tsx               # Landing hero + primary CTA
│   │   ├── Gallery.tsx            # Portfolio showcase
│   │   ├── Benefits.tsx           # Value proposition
│   │   ├── Services.tsx           # Pricing transparency
│   │   ├── Testimonials.tsx       # Social proof
│   │   ├── CTA.tsx                # Contact form
│   │   ├── Header.tsx             # Navigation
│   │   ├── Footer.tsx             # Contact info
│   │   └── WhatsAppFloat.tsx      # Floating CTA
│   ├── hooks\                     # Custom React hooks
│   ├── types\                     # TypeScript type definitions
│   ├── utils\                     # Utility functions
│   ├── assets\                    # React assets
│   ├── App.tsx                    # Main application
│   ├── main.tsx                   # Application entry
│   └── index.css                  # Global styles
├── package.json                    # Dependencies & scripts
├── vite.config.ts                 # Vite configuration
├── tailwind.config.js             # Tailwind CSS config
├── tsconfig.json                  # TypeScript configuration
└── netlify.toml                   # Deployment configuration
```

## Key Files for Copilot Context

### Business Logic Files
- `src/components/Hero.tsx` - Primary conversion point
- `src/components/CTA.tsx` - Lead generation form
- `src/components/WhatsAppFloat.tsx` - Direct contact method

### Configuration Files
- `tailwind.config.js` - Psychology-optimized color system
- `vite.config.ts` - Performance optimization settings
- `package.json` - Project dependencies and scripts

### Documentation Files
- `.github/copilot-instructions.md` - Main context for AI
- `.github/evidence-based-instructions.md` - Research-backed decisions
- `.github/coding-standards.md` - Development patterns

## Component Relationships

```
App.tsx
├── Header.tsx (navigation + contact info)
├── Hero.tsx (primary CTA + value prop)
├── Benefits.tsx (emotional drivers)
├── Gallery.tsx (social proof visual)
├── Services.tsx (pricing transparency)
├── Testimonials.tsx (local trust signals)
├── CTA.tsx (lead capture form)
├── Footer.tsx (secondary contact)
└── WhatsAppFloat.tsx (persistent CTA)
```

## Data Flow

1. **User Landing** → Hero.tsx displays value proposition
2. **Engagement** → Gallery.tsx shows work examples
3. **Education** → Benefits.tsx explains value
4. **Trust Building** → Testimonials.tsx provides social proof
5. **Conversion** → CTA.tsx captures lead OR WhatsAppFloat.tsx direct contact

## Key Business Rules

### Contact Information
- Phone: +51 999 888 777 (Peru format)
- WhatsApp: Primary contact method for LATAM
- Email: contacto@jefrapools.com

### Color Psychology
- Primary: #0ea5e9 (blue = clean water)
- Accent: #f59e0b (yellow = urgency without aggression)
- Avoid: Green colors (associated with algae)

### Performance Targets
- Load time: <1s (8-10% conversion impact)
- Bundle size: <200KB (mobile optimization)
- Lighthouse scores: Performance >90, Accessibility >95

### Mobile Optimization
- Touch targets: 48x48dp minimum
- Viewport: 375px default
- Progressive enhancement for larger screens

### Conversion Optimization
- Primary CTA: "📞 Cotización Gratuita WhatsApp"
- Trust signals: "100+ piscinas limpias La Molina"
- Local focus: La Molina, Lima, Peru market
