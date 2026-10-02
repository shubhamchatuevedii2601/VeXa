import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Vexa Liquid Glass color palette
        'vexa-bg': '#0a0e27',
        'vexa-bg-secondary': '#141829',
        'vexa-glass': 'rgba(255, 255, 255, 0.08)',
        'vexa-glass-light': 'rgba(255, 255, 255, 0.12)',
        'vexa-glass-hover': 'rgba(255, 255, 255, 0.15)',
        'vexa-text': '#e0e0e0',
        'vexa-text-muted': '#9ca3af',
        'vexa-text-secondary': '#6b7280',
        'vexa-accent': '#3b82f6',
        'vexa-accent-light': '#60a5fa',
        'vexa-accent-dark': '#1d4ed8',
        'vexa-purple': '#8b5cf6',
        'vexa-success': '#10b981',
        'vexa-destructive': '#ef4444',
      },
      backdropBlur: {
        'vexa': '12px',
        'vexa-lg': '20px',
      },
      boxShadow: {
        'vexa-sm': '0 4px 6px rgba(0, 0, 0, 0.3)',
        'vexa': '0 8px 16px rgba(0, 0, 0, 0.4)',
        'vexa-lg': '0 20px 40px rgba(0, 0, 0, 0.5)',
        'vexa-inner': 'inset 0 1px 1px rgba(255, 255, 255, 0.1)',
      },
      borderRadius: {
        'vexa': '20px',
        'vexa-lg': '24px',
        'vexa-xl': '32px',
      },
      backgroundImage: {
        'vexa-gradient': 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0f1a3a 100%)',
        'vexa-glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
        'vexa-accent-gradient': 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
      },
      animation: {
        'pulse-soft': 'pulse-soft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
