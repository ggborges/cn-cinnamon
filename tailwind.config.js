/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{ts,tsx,js,jsx,mdx}",
    "./.storybook/**/*.{ts,tsx,js,jsx,mdx}", // usado no PR003
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
};
