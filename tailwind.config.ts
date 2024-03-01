import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        sizeWeb: '64rem'
      },
      colors: {
        kayo: "#8257E6"
      }
    },
  },
  plugins: [],
};
export default config;
