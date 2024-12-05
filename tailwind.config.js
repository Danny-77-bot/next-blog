import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#ffffff', // Light mode background
          dark: '#1a202c',    // Dark mode background
        },
        foreground: {
          DEFAULT: '#1a202c', // Light mode text
          dark: '#ffffff',    // Dark mode text
        },
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
