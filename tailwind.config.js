/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      padding: 
      {
        "30" : '1.875rem',
        "5-5" : "5px",
        "10" : "10px",
        "72" : "72px",
        "23" : "23px",
      },
      backgroundColor:
      {
        "dark" : "#090D1F",
        "design" : "#F9F5FF",
        "Research" : "#EEF4FF",
        "Presentation" : "#FDF2FA"
      },
       borderRadius:
      {
        "4xl" : "29px"
      },
      margin:
      {
        "54" : "54px"
      },
      fontSize:
      {
        "hero" : "243px",
        "hero-lg" : '200px',
        "hero-md" : "160.8px"
      },
      lineHeight:
      {
        "hero" : "295px",
        "hero-lg" : "260px",
        "hero-md" : "194.6px",
        "hero-sm" : "87.14px",
        "60" : "60px"
      },
      fontFamily:
      {
        "Inter" :  [ "Inter" , "serif"]
      },
      textColor:
      {
        "date" : "#6941C6",
        "Normal" : "#667085",
        "dark-gray" : "#C0C5D0",
        "Research" : "#3538CD",
        "Presentation" : "#C11574",
      },
      width:
      {
        "778" : "778px",
        "342" : "342px",
        "63" : "63.99%",
        "28" : "28.125%",
        "53" : "53.50%",
        "44" : "44.42%"
       },
       screens: {
        'tablet': '992px',
        
        'laptop': '1400px',

      },
    },
  },
  plugins: [],
  darkMode: 'class',
}

