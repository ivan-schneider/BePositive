import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        custom1: "#dad7cd",
        custom2: "#a3b18a",
        custom3: "#588157",
        custom4: "#3a5a40",
        custom5: "#344e41"
      },
    },
  },
  plugins: [],
} satisfies Config;
