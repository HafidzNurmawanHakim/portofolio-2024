"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { SmoothScrollProvider } from "@/components/SmoothScroll";
import toast, { Toaster } from "react-hot-toast";

export interface ProvidersProps {
   children: React.ReactNode;
   themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
   const router = useRouter();
   return (
      <NextUIProvider navigate={router.push}>
         <NextThemesProvider {...themeProps}>
            <SmoothScrollProvider>{children}</SmoothScrollProvider>

            <Toaster />
         </NextThemesProvider>
      </NextUIProvider>
   );
}
