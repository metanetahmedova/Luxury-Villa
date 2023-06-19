/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
       
        mobile: { min: "414px" },
        tablet: { min: "540px" },
        tabletlg: { min: "820px" },
        tabletxl: { min: "912px" },
        laptop: { min: "1024px" },
        desktop: { min: "1280px" },
        large: { min: "1320px" },
        
      },
    },
  },
  plugins: [],
};

