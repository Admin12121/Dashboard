const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      'sm': '660px',
      'max-sm': {'max': '639px'},
      'md': '768px',
      'mmd' : '1000px',
      'mid-mmd': {'max': '900px'},
      'max-mmd': {'max': '1000px'},
      'lg': '1024px',
      'max-lg': {'max': '1100px'},
      'max-xxl': {'max': '1200px'},
      'xxl': '1200px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  darkMode: "class",
  plugins: [nextui()],
};
