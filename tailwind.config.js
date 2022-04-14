module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      black: "#171717",
      white: "#fff",
      blue: "#69C9D0",
    },
    extend: {
      keyframes: {
        click: {
          from: { background: "#69C9D0" },
          to: { background: "#69C9D0" },
        },
      },
      animation: {
        click: "click 1s",
      },
      fontFamily: {
        dancing: ["Dancing Script", "cursiva"],
        roboto: ["Roboto", "sans-serif"],
      },
      gridTemplateRows: {
        3: "100px minmax(77.5vh,77.5%) 150px",
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
