/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      default: ["Helvetica", "Arial", "sans-serif"]
    },
    fontSize: {
      default: "16px"
    },
    fontWeight: {
      semibold: 700
    },
    colors: {
      default: "#2220202",
      grey: "#7a7a7a",
      yellow: "#ffde00",
      white: "#fff",
      greyLight: "#f4f4f4",
      themeMain: "#056943",
      price: "#c60c0c"
    }
  },
  variants: {},
  plugins: [
    function ({ addBase }) {
      addBase({
        "*": {
          boxSizing: "border-box",
          margin: 0,
          padding: 0
        },
        li: {
          listStyle: "none"
        },
        h1: {
          fontSize: "2rem",
          fontWeight: "bold"
        },
        h2: {
          fontSize: "1.5rem"
        },
        h3: {
          fontSize: "1.25rem"
        },
        body: {
          fontSize: "16px",
          fontFamily: ["Helvetica", "Arial", "sans-serif"],
          color: "#2220202"
        },
        a: {
          cursor: "pointer",
          textDecoration: "none",
          color: "#2220202"
        },
        button: {
          cursor: "pointer"
        },
        "#root": {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "100vh"
        }
      });
    }
  ]
};
