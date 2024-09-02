import {
  Fira_Code,
  Fira_Code as FontMono,
  Inter as FontSans,
  Khula,
  Lato,
  Sora,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontFira = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira",
});
export const fontSora = Sora({
  subsets: ["latin"],
  variable: "--font-fira",
});
export const fontLato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["300", "400", "700"],
});
export const fontKhula = Khula({
  subsets: ["latin"],
  variable: "--font-khula",
  weight: ["300", "400", "700"],
});
