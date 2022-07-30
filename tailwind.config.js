/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-green': '#001F24',
        'green': '#17E9B7',
        'white': '#F3F4FB',
        'grey': '#C2C3C8',
        'black': '#191F1D',
      },
      borderRadius:{
        twenty : '25px',
        fifteen : '15px'
      },
      screens: {
        lg: { max: "1800px" },
        md: { max: "990px" },
        sm: { max: "600px" },
        xs: { max: "400px" },
        minmd: "1700px",
        minlg: { max : "2100px" },
      },
    },
  },
  plugins: [],
}