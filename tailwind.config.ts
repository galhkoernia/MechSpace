import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#F5F6FE",
        ink: "#1B1F3B",
        muted: "#5B6085",
        line: "#E6E8F5",
        brand: { 50: "#EEF0FF", 100: "#E0E4FD", 500: "#4F63E8", 600: "#4055D8", 700: "#3344B8" },
      },
      boxShadow: {
        card: "0 1px 2px rgba(40, 50, 120, 0.04), 0 8px 24px rgba(40, 50, 120, 0.06)",
      },
    },
  },
  plugins: [],
};
export default config;
