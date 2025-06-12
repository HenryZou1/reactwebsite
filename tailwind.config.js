// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all JS/JSX/TS/TSX files in src
    "./public/index.html", // Include HTML files
  ],
  darkMode: ["class", '[data-theme="dark"]'], // Enable class-based dark mode
  theme: {
    extend: {},
  },
  plugins: [],
};
