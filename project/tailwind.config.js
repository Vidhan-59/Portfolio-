/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // page + elevated surfaces
        ink: '#FAFAF7',
        card: '#FFFFFF',
        surface: {
          DEFAULT: '#F3F3EE',
          raised: '#ECECE6',
          overlay: '#E4E4DD',
        },
        // dark contrast blocks
        contrast: {
          DEFAULT: '#12151B',
          raised: '#1B1F27',
        },
        // borders
        line: 'rgba(18, 21, 27, 0.08)',
        'line-strong': 'rgba(18, 21, 27, 0.15)',
        'line-invert': 'rgba(250, 250, 247, 0.14)',
        // type
        paper: '#12151B',
        'paper-invert': '#F7F7F4',
        muted: '#545B65',
        'muted-invert': '#9AA2AE',
        dim: '#6E757D',
        // accent
        beacon: {
          DEFAULT: '#0A7A5F',
          bright: '#12A97F',
          dim: 'rgba(10, 122, 95, 0.09)',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      maxWidth: {
        content: '1280px',
        prose: '760px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(18,21,27,0.04), 0 10px 28px -14px rgba(18,21,27,0.14)',
        'card-lift': '0 2px 6px rgba(18,21,27,0.06), 0 20px 44px -20px rgba(18,21,27,0.22)',
        cta: '0 6px 18px -6px rgba(10,122,95,0.5)',
      },
      keyframes: {
        'pulse-beacon': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.85)' },
        },
        dash: {
          to: { strokeDashoffset: '-200' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(14px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        beacon: 'pulse-beacon 2.4s ease-in-out infinite',
        dash: 'dash 8s linear infinite',
        'fade-up': 'fade-up 0.6s ease-out both',
      },
    },
  },
  plugins: [],
};
