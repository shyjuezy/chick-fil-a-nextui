import { nextui } from '@nextui-org/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: '#ca3400',
              foreground: '#000000',
            },
            secondary: '#af0237',
            focus: '#BEF264',
          },
        },
      },
    }),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
    },
    // light: {
    //   colors: {
    //     primary: '#af272f',
    //   },
    // },
  },
  darkMode: 'class',
  // plugins: [nextui()],
};
