import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {
         fontFamily: {
            sans: ["var(--font-sans)"],
            mono: ["var(--font-mono)"],
         },
      },
   },
   darkMode: "class",
   plugins: [
      nextui({
         themes: {
            dark: {
               extend: "dark",
               colors: {
                  focus: "transparent",
                  background: {
                     50: "#f0f2f4",
                     100: "#d7d8d9",
                     200: "#bcbec0",
                     300: "#a0a5aa",
                     400: "#848b93",
                     500: "#6a727a",
                     600: "#53585e",
                     700: "#3c3f43",
                     800: "#242628",
                     900: "#0b0d0f",
                     DEFAULT: "#060608",
                  },
                  foreground: {
                     50: "#f2f2f2",
                     100: "#d9d9d9",
                     200: "#bfbfbf",
                     300: "#a6a6a6",
                     400: "#8c8c8c",
                     500: "#737373",
                     600: "#595959",
                     700: "#404040",
                     800: "#262626",
                     900: "#0d0d0d",
                  },
                  primary: {
                     50: "#e9e8ff",
                     100: "#bebdfa",
                     200: "#9491f0",
                     300: "#6b65e8",
                     400: "#4039e0",
                     500: "#271fc6",
                     600: "#1d189b",
                     700: "#141070",
                     800: "#0a0945",
                     900: "#03021d",
                     foreground: "#fff",
                     DEFAULT: "#4942e1",
                  },
                  default: {
                     DEFAULT: "#0f0f0f",
                  },
               },
            },
            light: {
               extend: "light",
               colors: {
                  background: {
                     DEFAULT: "#f5f8ff",
                     foreground: "rgb(156 163 175)",
                  },
                  default: {
                     DEFAULT: "#fff",
                  },
                  foreground: {
                     DEFAULT: "#000",
                  },
               },
            },
         },
      }),
   ],
};
