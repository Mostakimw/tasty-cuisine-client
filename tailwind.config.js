/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  extend: {
    backgroundImage: {
      banner:
        "url('https://img.freepik.com/free-photo/tasty-pizza-near-ingredients_23-2147772080.jpg?size=626&ext=jpg&ga=GA1.2.1807460197.1674068644&semt=ais')",
    },
  },
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
