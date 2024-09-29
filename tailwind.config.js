// tailwind.config.js

const rosePineThemes = [
  {
    name: "rosepine",
    colors: {
      base: "#191724",
      surface: "#1f1d2e",
      overlay: "#26233a",
      muted: "#6e6a86",
      subtle: "#908caa",
      text: "#e0def4",
      love: "#eb6f92",
      gold: "#f6c177",
      rose: "#ebbcba",
      pine: "#31748f",
      foam: "#9ccfd8",
      iris: "#c4a7e7",
      highlightLow: "#21202e",
      highlightMed: "#403d52",
      highlightHigh: "#524f67",
    },
  },
  {
    name: "rosepine-moon",
    colors: {
      base: "#232136",
      surface: "#2a273f",
      overlay: "#393552",
      muted: "#6e6a86",
      subtle: "#908caa",
      text: "#e0def4",
      love: "#eb6f92",
      gold: "#f6c177",
      rose: "#ea9a97",
      pine: "#3e8fb0",
      foam: "#9ccfd8",
      iris: "#c4a7e7",
      highlightLow: "#2a283e",
      highlightMed: "#44415a",
      highlightHigh: "#56526e",
    },
  },
  {
    name: "rosepine-dawn",
    colors: {
      base: "#faf4ed",
      surface: "#fffaf3",
      overlay: "#f2e9e1",
      muted: "#9893a5",
      subtle: "#797593",
      text: "#575279",
      love: "#b4637a",
      gold: "#ea9d34",
      rose: "#d7827e",
      pine: "#286983",
      foam: "#56949f",
      iris: "#907aa9",
      highlightLow: "#f4ede8",
      highlightMed: "#dfdad9",
      highlightHigh: "#cecacd",
    },
  },
];

const daisyThemes = rosePineThemes.map((theme) => ({
  [theme.name]: {
    primary: theme.colors.iris,
    secondary: theme.colors.rose,
    accent: theme.colors.gold,
    neutral: theme.colors.base,
    "base-100": theme.colors.surface,
    info: theme.colors.pine,
    success: theme.colors.foam,
    warning: theme.colors.gold,
    error: theme.colors.love,
  },
}));

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: rosePineThemes.reduce((acc, theme) => {
        acc[theme.name] = theme.colors;
        return acc;
      }, {}),
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: daisyThemes,
  },
};
