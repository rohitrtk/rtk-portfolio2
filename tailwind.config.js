const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Quattrocento', 'serif'],
      },
      colors: {
        "dt-black": "#181818",
        "dt-grey": "1f1f1f",
        "dt-orange": "#a77864",
        "dt-purple": "#c586c0",
        "dt-aqua": "#4ec9b0",
        "dt-blue": "#569cd6",
        "dt-light-blue": "#9cdcfe",
        "dt-yellow": "#ffd602",
        "dt-gold": "#dcdcaa",
      }
    },
  },
  plugins: [],
});
