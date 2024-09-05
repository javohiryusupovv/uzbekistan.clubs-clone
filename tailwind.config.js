/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "5px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1240px",
    },
    extend: {
      colors: {
        'border-color': "#fec775",
        'textColor': '#fec775',
      },
      borderWidth: {
        '1': '1px',
      }
    },
  },
  plugins: [],
};
