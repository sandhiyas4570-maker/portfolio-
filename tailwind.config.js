/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0F1620',
        panel: '#16202C',
        panel2: '#1C2836',
        line: '#2A394A',
        text: {
          primary: '#E8EDF2',
          muted: '#8B9AAC',
          faint: '#5C6B7C',
        },
        amber: '#E8A33D',
        teal: '#4FB6A8',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
}
