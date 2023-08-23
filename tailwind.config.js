/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Uibleack: "#1c1c1c",
      },
      boxShadow: {
        insertshadow: " inset 0 5px 10px 0px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
