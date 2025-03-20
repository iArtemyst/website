import type { Config } from "tailwindcss";

export const accentColor: string = "#20F38A";
export const bgColor: string = "#1e1a1e";
export const bgVariant: string = "#111111";
export const textColor: string = "#111111";
export const textVariant: string = "#fcfcfc";
export const priColor: string = "#FFFFFF";
export const secColor: string = "#EAEAEA";
export const tirColor: string = "#333333";
export const hoverTextColor: string = "#EEEEEE";
export const gradientColor1: string = "#00000060";
export const gradientColor2: string = "#00000000";
export const gradientColor3: string = "#7402B8";
export const gradientColor4: string = "#4F009F";

export const textXs = "8px";
export const textSml = "12px";
export const textMed = "18px";
export const textLrg = "24px";
export const textXL = "32px";


export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx,svg}",
    "./app/**/*.{js,ts,jsx,tsx,mdx,svg}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: bgColor,
        bgVariant: bgVariant,
        accentColor: accentColor,

        textColor: textColor,
        textVariant: textVariant,
        hoverTextColor: hoverTextColor,

        priColor: priColor,
        secColor: secColor,
        tirColor: tirColor,

        gradientColor1: gradientColor1,
        gradientColor2: gradientColor2,
        gradientColor3: gradientColor3,
        gradientColor4: gradientColor4,
      },
      fontSize: {
        textXs: textXs,
        textSml: textSml,
        textMed: textMed,
        textLrg: textLrg,
        textXL: textXL,
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'rotate(-5.0deg) translateY(-12px)' },
          '50%': { transform: 'rotate(5.0deg) translateY(12px)' },
          '100%': { transform: 'rotate(-5.0deg) translateY(-12px)' },
        },
      },
      animation: {
        'wiggle-bounce': 'wiggle 4s linear infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss-3d'),
  ],
} satisfies Config;
