module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      black: "#171717",
      white: "#fff",
      blue: "#69C9D0",
    },
    extend: {
      fontFamily: {
        dancing: ["Dancing Script", "cursiva"],
        roboto: ["Roboto", "sans-serif"],
      },
      gridTemplateRows: {
        3: "minmax(7.5vh,7.5%) minmax(77.5vh,77.5%) minmax(15vh,15%)",
      },
      gridTemplateColumns: {
        1: "100vw",
      },
      rotate: {
        450: "-45deg",
      },
    },
  },
  plugins: [],
};
