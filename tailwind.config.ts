import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        'full-gap': 'calc(100% + 0.5rem)',
      },
      colors: {
        main: 'var(--main)',
        gradient: 'linear-gradient(to bottom, var(--main), var(--main-darker)'
      }
    },
  },
  plugins: [],
};
export default config;
