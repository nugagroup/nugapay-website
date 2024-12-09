import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#474F9A",
        secondary: "#DB2481",
        tertiary: "#8F99F1",
        foreground: "#212B83",
        whitePrimary: "#FCFCFC",
      },
      backgroundImage: {
        'dark-gradient': "url('/background-gradient.png')"
      }
    },
  },
  plugins: [],
} satisfies Config;
