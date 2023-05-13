/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-color": "var(--tg-theme-bg-color)",
        "text-color": "var(--tg-theme-text-color)",
        "hint-color": "var(--tg-theme-hint-color)",
        "link-color": "var(--tg-theme-link-color)",
        "button-color": "var(--tg-theme-button-color)",
        "button-text-color": "var(--tg-theme-button-text-color)",
        "secondary-bg-color": "var(--tg-theme-secondary-bg-color)",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
