// src/tailwind.config.js

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('postcss-import'),
    // ...other plugins
  ],
};
