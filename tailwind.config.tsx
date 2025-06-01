import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "pink-500/80": "rgba(255, 0, 225, 0.98)",
        "green-500/80": "rgba(34, 197, 94, 0.98)",
        "purple-500/80": "rgba(168, 85, 247, 0.98)",
        "bg-white/60": "rgba(255, 255, 255, 60)",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        white60: "#FFFFFF40",
        purple: "#7902DF",
        btngray: "#E0E0E0",
        purple10: "#7902DF10",
        purple60: "#7902DF60",
        green: "#01CB76",
        red: "#FF4E4E",
        purple2: "#1C55FF",
        lightBlue: "#402fff10",
        brdColor: "#15151510",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      scrollbar: {
        width: "15px",
        colors: {
          thumb: "#7902DF",
          track: "transparent",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      blur: {
        "3xl": "64px",
      },
      boxShadow: {
        custom: "0px 4px 31.5px rgba(121, 2, 223, 0.04)",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar"),
    require("tailwindcss-animate"),
  ],
  variants: {
    scrollbar: ["rounded"],
  },
};

export default config;
