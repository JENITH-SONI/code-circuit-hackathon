export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        accent: "var(--accent-color)",
        background: "var(--background-color)",
        text: "var(--text-color)"
      },
      screens: {
        'gtlarge': '1220px', // between sm and md
        'mid':'768px'
      },
      
    },
  },
  plugins: [],
}