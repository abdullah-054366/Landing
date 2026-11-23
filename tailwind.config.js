/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Tajawal", "sans-serif"],
        brand: ['"Reem Kufi"', "Tajawal", "sans-serif"],
      },
      colors: {
        brand: { DEFAULT: "#0F5E4B", deep: "#0A4537", soft: "#E6F0EC" },
        gold: { DEFAULT: "#C9A227", light: "#F3DFA2" },
        ivory: "#F7F5EF",
        ink: "#1B2421",
        muted: "#56625E",
        line: "#E3DFD3",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(27,36,33,.06)",
        phone: "0 30px 60px rgba(10,69,55,.25)",
      },
    },
  },
  plugins: [],
};
