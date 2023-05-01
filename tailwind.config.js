/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#7d67ea",

          secondary: "#f29bdf",

          accent: "#9f4dd6",

          neutral: "#2A212C",

          "base-100": "#fff",

          info: "#9ACEE0",

          success: "#55DDA4",

          warning: "#EDD250",

          error: "#E82C48",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
