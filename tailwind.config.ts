import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        White: 'hsl(0, 0%, 100%)',
        Yellow: 'hsl(47, 88%, 63%)',
        Gray: {
          500: 'hsl(0, 0%, 42%)',
          950: 'hsl(0, 0%, 7%)',
        },
      },
    },
  },
  plugins: [],
};
export default config;
