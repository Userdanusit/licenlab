import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { 50:"#eff6ff", 200:"#bae6fd", 500:"#0ea5e9", 600:"#0284c7" }
      }
    }
  },
  plugins: []
} satisfies Config;
