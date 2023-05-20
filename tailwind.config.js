const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ["Inter", ...fontFamily.sans],
      },
      colors: {
        "base-content-neutral": "hsl(var(--bc) / 0.6)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("tailwindcss-radix")(),
    require("daisyui"),
    require("@tailwindcss/line-clamp"),
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          "--btn-text-case": "none",
          "--rounded-btn": "0.75rem",
        },
      },
      {
        zikiLight: {
          primary: "#F9BC60",
          secondary: "#ABD1C6",
          accent: "#FFFFFE",
          neutral: "#001E1D",
          "base-100": "#004643",
          info: "#3ABFF8",
          success: "#99DD46",
          warning: "#FFC62B",
          error: "#FF5993",
          "--btn-text-case": "none",
          "--rounded-btn": "0.75rem",
        },
      },
      {
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          "--btn-text-case": "none",
          "--rounded-btn": "0.75rem",
        },
      },
    ],
  },
};
