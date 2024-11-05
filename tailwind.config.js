/** @type {import('tailwindcss').Config} */

const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        'karla': ['Karla'],
        'markazi': ['"Markazi Text"'],
      },
      screens: {
        'tablet': '768px',
        'desktop': '1200px',
      },
      width: {
        'lg': '1150px',
        'sm': '350px',
        'md': '768px',
      },
    },
    colors: {
      "black": "#000000",
      "white": "#FFFFFF",
      "green": "#495E57",
      "yellow": "#F4CE14",
      "terracotta": "#EE9972",
      "flesh": "#FBDABB",
      "light-grey": "#EDEFEE",
      "dark-grey": "#333333",
    }
  },
  plugins: [],
}
