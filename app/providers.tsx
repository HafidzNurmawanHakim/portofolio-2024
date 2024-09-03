"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { Toaster } from "react-hot-toast";

import { SmoothScrollProvider } from "@/components/SmoothScroll";
import { domAnimation, LazyMotion } from "framer-motion";
import { ScrollerMotion } from "scroller-motion";
import { SmoothScrollbar } from "@14islands/r3f-scroll-rig";

export interface ProvidersProps {
   children: React.ReactNode;
   themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
   const router = useRouter();

   return (
      <NextUIProvider navigate={router.push}>
         <NextThemesProvider {...themeProps}>
            <LazyMotion features={domAnimation}>
               <SmoothScrollProvider>{children}</SmoothScrollProvider>
            </LazyMotion>
            <Toaster />
         </NextThemesProvider>
      </NextUIProvider>
   );
}
