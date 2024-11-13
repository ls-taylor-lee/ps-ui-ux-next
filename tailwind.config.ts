import type { Config } from "tailwindcss";

export default {
  content: ["./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        mobile: "430px",
        pad: "1024px",
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
        "info-desktop": ["12px", { fontWeight: "800" }],
        "header-mobile": ["17px", { fontWeight: "900", lineHeight: "17px" }],
        "header-desktop": ["31px", { fontWeight: "900", lineHeight: "31px" }],
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      backgroundImage: {
        gradient:
          "linear-gradient(to right, #09101A 0%, #000000 0%, rgba(37, 45, 55, 0) 100%), linear-gradient(to bottom, rgba(0, 0, 0, 0) 75%, #000000 100%)",
      },
    },
  },
} satisfies Config;
