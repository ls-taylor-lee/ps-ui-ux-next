import type { Config } from "tailwindcss";

export default {
  content: ["./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        mobile: "430px",
        pad: "768px",
        desktop: "1440px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cta: {
          background: "var(--cta-background)",
          foreground: "var(--cta-foreground) !important",
        },
      },
      fontSize: {
        "cta-mobile": ["14px", { fontWeight: "900" }],
        "cta-desktop": ["16px", { fontWeight: "900" }],
        "paragraph-mobile": ["14px", { fontWeight: "500" }],
        "paragraph-desktop": ["16px", { fontWeight: "500" }],
        "title-mobile": ["35px", { fontWeight: "900" }],
        "title-desktop": ["49px", { fontWeight: "900" }],
        "info-mobile": ["12px", { fontWeight: "800" }],
        "info-desktop": ["14px", { fontWeight: "800" }],
        "header-mobile": ["17px", { fontWeight: "900", lineHeight: "17px" }],
        "header-desktop": ["31px", { fontWeight: "900", lineHeight: "31px" }],
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      width: {
        "34": "8.5rem",
        "26": "6.5rem",
      },
      height: {
        "34": "8.5rem",
        "26": "6.5rem",
      },
      aspectRatio: { "5/3": "5/3" },
      backgroundImage: {
        gradient:
          "linear-gradient(to left, rgba(37, 45, 55, 0) 40%, var(--background) 100%), linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, #000000 100%)",
      },
    },
  },
} satisfies Config;
