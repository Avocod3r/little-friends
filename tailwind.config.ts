import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
      'primary': {
        '50': '#f3f1ff',
        '100': '#ebe5ff',
        '200': '#d9ceff',
        '300': '#bea6ff',
        '400': '#9f75ff',
        '500': '#843dff',
        '600': '#7916ff',
        '700': '#6b04fd',
        '800': '#5a03d5',
        '900': '#4b05ad',
        '950': '#2c0076',
      },
      'secondary': {
        '50': '#fdfbe9',
        '100': '#fbf6c6',
        '200': '#f8eb90',
        '300': '#f3d851',
        '400': '#edc322',
        '500': '#e3b015',
        '600': '#bf850f',
        '700': '#985f10',
        '800': '#7e4d15',
        '900': '#6c3f17',
        '950': '#3f2009',
      },

      }


    },
  },
  plugins: [],
};
export default config;
