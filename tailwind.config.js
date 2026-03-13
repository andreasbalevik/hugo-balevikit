/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.{md,html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Digdir body-skala — line-height 1.5
        'body-xs': ['0.75rem',  { lineHeight: '1.5' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'body-md': ['1rem',     { lineHeight: '1.5' }],
        'body-lg': ['1.125rem', { lineHeight: '1.5' }],
        'body-xl': ['1.25rem',  { lineHeight: '1.5' }],
        // Digdir heading-skala — line-height 1.3, letter-spacing per spec
        'heading-2xs': ['0.875rem', { lineHeight: '1.3', letterSpacing: '0.0015em'  }],
        'heading-xs':  ['1rem',     { lineHeight: '1.3', letterSpacing: '0.0015em'  }],
        'heading-sm':  ['1.125rem', { lineHeight: '1.3', letterSpacing: '0em'       }],
        'heading-md':  ['1.25rem',  { lineHeight: '1.3', letterSpacing: '-0.0025em' }],
        'heading-lg':  ['1.5rem',   { lineHeight: '1.3', letterSpacing: '-0.005em'  }],
        'heading-xl':  ['1.875rem', { lineHeight: '1.3', letterSpacing: '-0.01em'   }],
        'heading-2xl': ['2.25rem',  { lineHeight: '1.3', letterSpacing: '-0.01em'   }],
        // Ekstra for marketing-hero (over digdir-skalaen)
        'heading-3xl': ['2.75rem',  { lineHeight: '1.2', letterSpacing: '-0.015em'  }],
      },
      letterSpacing: {
        'heading':    '-0.01em',
        'heading-sm': '-0.005em',
      },
      colors: {
        primary:   '#0066A1',
        secondary: '#004E7A',
        accent:    '#0080C8',
      },
      boxShadow: {
        'ds-xs': '0 0 1px 0 rgba(0,0,0,0.16), 0 1px 2px 0 rgba(0,0,0,0.12)',
        'ds-sm': '0 0 1px 0 rgba(0,0,0,0.15), 0 1px 2px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.1)',
        'ds-md': '0 0 1px 0 rgba(0,0,0,0.14), 0 2px 4px 0 rgba(0,0,0,0.12), 0 4px 8px 0 rgba(0,0,0,0.12)',
        'ds-lg': '0 0 1px 0 rgba(0,0,0,0.13), 0 3px 5px 0 rgba(0,0,0,0.13), 0 6px 12px 0 rgba(0,0,0,0.14)',
        'ds-xl': '0 0 1px 0 rgba(0,0,0,0.12), 0 4px 8px 0 rgba(0,0,0,0.16), 0 12px 24px 0 rgba(0,0,0,0.16)',
      },
    },
  },
  plugins: [],
}
