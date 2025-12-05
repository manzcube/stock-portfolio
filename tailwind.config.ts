import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ThinFont: ["var(--font-thin)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
