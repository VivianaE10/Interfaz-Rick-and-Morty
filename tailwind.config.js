/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "regal-gray": "#cfcfcf",
        "black-f": "rgb(32, 35, 41)",
        "gray-t": "rgb(60, 62, 68)",
        "gray-c": "rgb(39, 43, 51)",
        "gray-f": "rgb(158, 158, 158)",
      },
    },
  },
  plugins: [],
};
