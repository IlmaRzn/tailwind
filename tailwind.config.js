/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  important: "#root",
  theme: {
    extend: {
      fontFamily: {
        body: ["chivo"],
      },
      screens: {
        sm: "600px",
        md: "900px",
        lg: "1200px",
        xl: "1536px",
      },
      colors: {
        primary: "#007A5C",//green
        secondary: "#FCF2EB",//barge
        textclr: "#32404D",//darkblue
        bggreen: "#D1FAE5",//lightgreen
        subtext: "#9CA3AF",//ligtgrey
      },
    },
  },
  plugins: [],
};

