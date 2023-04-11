/** @type {import('tailwindcss').Config} */
const configs = {
  content: ['index.html', './src/**/*.tsx'],
  theme: {
    extend: {},
  },
  experimental: { optimizeUniversalDefaults: true },
  plugins: [],
};

module.exports = configs;
