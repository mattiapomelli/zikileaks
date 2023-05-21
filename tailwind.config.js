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
      gridTemplateColumns: {
        autofill: "repeat(auto-fill, minmax(18rem, 1fr))",
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
        zikiLight: {
          primary: "#f9bc60",
          secondary: "#004643",
          accent: "#abd1c6",
          neutral: "#001e1d",
          "base-100": "#004643",

          info: "#3ABFF8",
          success: "#99DD46",
          warning: "#FFC62B",
          error: "#FF5993",
          "--btn-text-case": "none",
          "--rounded-btn": "0.75rem",
        },
      },
    ],
  },
};
