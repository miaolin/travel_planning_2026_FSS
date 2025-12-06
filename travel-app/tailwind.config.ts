import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0f172a",
        "bg-soft": "#111827",
        "card-bg": "#020617",
        accent: "#22c55e",
        "accent-soft": "rgba(34, 197, 94, 0.1)",
        text: "#e5e7eb",
        muted: "#9ca3af",
        border: "#1f2933",
      },
    },
  },
  plugins: [],
};
export default config;
