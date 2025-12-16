import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        void: '#0E0E0E',
        surface: '#121212',
        'zinc-400': '#A1A1AA',
        prism: {
          yellow: '#F3E68F'
        },
        neon: {
          pink: '#EFA9B6',
          cyan: '#4AF2EA'
        }
      },
      fontFamily: {
        sans: ['Inter', 'var(--font-inter)']
      },
      boxShadow: {
        glow: '0 0 60px rgba(243, 230, 143, 0.4)',
        neon: '0 0 40px rgba(74, 242, 234, 0.5)'
      },
      borderRadius: {
        '2xl': '1.5rem'
      },
      backdropBlur: {
        14: '14px'
      },
      letterSpacing: {
        tightest: '-0.08em'
      }
    }
  },
  plugins: []
};

export default config;
