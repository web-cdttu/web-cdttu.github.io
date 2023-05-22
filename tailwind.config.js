/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1200px",
      },
    },
    backgroundColor: {
      primary: '#4285f4'
    }
  },
  plugins: [],
};
