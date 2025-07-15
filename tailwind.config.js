import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.{vue,js,ts}",
    "./pages/**/*.{vue,js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", ]
  }
};
