/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        cream: "#fff8f1",
        ink: "#241a00",
        muted: "#5f5138",
        primary: "#7a5900",
        accent: "#febd11",
        accentDeep: "#8a6700",
        brand: "#e96d4b",
        secondary: "#35618f"
      },
      fontFamily: {
        serif: ["Newsreader", "serif"],
        sans: ["Plus Jakarta Sans", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 60px rgba(84, 56, 10, 0.12)"
      },
      spacing: {
        18: "4.5rem"
      }
    }
  },
  plugins: []
};
