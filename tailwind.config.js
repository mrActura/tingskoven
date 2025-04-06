/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        primary: "#FF0000",
        secondary: "#00FF00",
        colorGray: "#F3F4F6"
      }
    }
  },

  plugins: [require("@tailwindcss/typography")]
};
