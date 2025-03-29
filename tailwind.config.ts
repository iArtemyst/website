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

export const textXs = "6px";
export const textSml = "8px sm:10px md:12px lg:14px xl:18px";
export const textMed = "18px";
export const textLrg = "24px";
export const textXL = "32px";

export const hoverShadow = "shadow-[2px_2px_4px_#00000010,-2px_-2px_4px_#ffffff20] hover:shadow-[inset_2px_2px_4px_#00000010,inset_-2px_-2px_4px_#ffffff20] active:shadow-[inset_3px_3px_6px_#00000020,inset_-3px_-3px_6px_#ffffff30]";

export const pageContainer = "absolute left-0 right-0 top-0 bottom-0 bg-bgColor";
export const divContainer = "relative grid w-full h-full justify-center overflow-visible py-20 overflow-y-auto no-scrollbar";
export const absoluteCenter = "absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%]";

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
        error: {
          '0%': { transform: 'rotate(0.0deg)' },
          '33%': { transform: 'rotate(3.0deg)' },
          '66%': { transform: 'rotate(-3.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        textError: {
          '0%': { transform: 'translate(0px, -12px) opacity(0)'},
          '20%': { transform: 'translate(0px, 24px) opacity(1)'},
          '80%': { transform: 'translate(0px, 24px) opacity(1)'},
          '100%': { transform: 'translate(0px, -12px) opacity(0)'},
        },
      },
      animation: {
        'wiggle-bounce': 'wiggle 4s linear infinite',
        'error-wiggle' : 'error 250ms ease-in-out' ,
        'text-error' : 'textError 3s ease-in-out',
      },
    },
  },
  plugins: [
    require('tailwindcss-3d'),
  ],
} satisfies Config;
